package com.example.bakubattle.repository.implementation;

import com.example.bakubattle.data.api.IBakugan;
import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.implementation.Bakugan;
import com.example.bakubattle.repository.api.BakuganRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@Repository
public class JdbcBakuganRepository implements BakuganRepository {


    private SimpleJdbcInsert bakuganInserter;
    private ObjectMapper objectMapper;
    private JdbcTemplate jdbc;
    private final String selectAllBakugans = "select id, name, type, hp, xpMultiplier, transferSingle, transferArea, attackSingle, attackArea, hpboostv1, hpboostv2, healSingle, healArea, igniteSingle, igniteArea from Bakugans";
    private final String selectBakugan = "select id, name, type, hp, xpMultiplier, transferSingle, transferArea, attackSingle, attackArea, hpboostv1, hpboostv2, healSingle, healArea, igniteSingle, igniteArea from Bakugans where id=?";

    @Autowired
    public JdbcBakuganRepository(JdbcTemplate jdbc) {
        this.jdbc=jdbc;
        this.bakuganInserter = new SimpleJdbcInsert(jdbc)
                .withTableName("Bakugans")
                .usingGeneratedKeyColumns("id");
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Iterable<IBakugan> findAll() {
        return jdbc.query(selectAllBakugans, this::mapRowToBakugan);
    }

    @Override
    public IBakugan findById(String id) {
        return jdbc.queryForObject(selectBakugan, this::mapRowToBakugan, id);
    }

    @Override
    public IBakugan save(Bakugan bakugan) {
        long bakuganId = saveBakuganDetails(bakugan);
        bakugan.setId(bakuganId);
        return bakugan;
    }

    private IBakugan mapRowToBakugan(ResultSet rs, int rowNum) throws SQLException {
        return new Bakugan(
                rs.getLong("id"),
                rs.getString("name"),
                rs.getString("type"),
                rs.getInt("hp"),
                rs.getDouble("xpMultiplier"),
                rs.getString("transferSingle"),
                rs.getString("transferArea"),
                rs.getString("attackSingle"),
                rs.getString("attackArea"),
                rs.getString("hpboostv1"),
                rs.getString("hpboostv2"),
                rs.getString("healSingle"),
                rs.getString("healArea"),
                rs.getString("igniteSingle"),
                rs.getString("igniteArea"));
    }

    private long saveBakuganDetails(IBakugan bakugan) {
        Map<String, Object> values = objectMapper.convertValue(bakugan, Map.class);   //utworzenie mapy, którą wstawimy do bazy w postaci <nazwa kolumny, wartość tej kolumny>.
        return bakuganInserter.executeAndReturnKey(values).longValue();   //zapis danych do tabeli za pomocą metody zwracającej klucz jako long.
    }
}
