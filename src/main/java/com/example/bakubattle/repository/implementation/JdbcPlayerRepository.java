package com.example.bakubattle.repository.implementation;

import com.example.bakubattle.data.api.IBakugan;
import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.implementation.Bakugan;
import com.example.bakubattle.data.implementation.Player;
import com.example.bakubattle.repository.api.PlayerRepository;
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
public class JdbcPlayerRepository implements PlayerRepository {

    private JdbcBakuganRepository jdbcBakuganRepository;
    private SimpleJdbcInsert playerInserter;
    private SimpleJdbcInsert playerBakuganInserter;
    private ObjectMapper objectMapper;
    private JdbcTemplate jdbc;
    private final String selectAllPlayers = "select id, name, teams_name from Players";
    private final String selectPlayer = "select id, name, teams_name from Players where id=?";
    private final String selectBakugan = "select player, bakugan from Players_Bakugans where player=?";

    @Autowired
    public JdbcPlayerRepository(JdbcTemplate jdbc, JdbcBakuganRepository jdbcBakuganRepository) {
        this.jdbc=jdbc;
        this.playerInserter = new SimpleJdbcInsert(jdbc)
                .withTableName("Players")
                .usingGeneratedKeyColumns("id");
        this.playerBakuganInserter = new SimpleJdbcInsert(jdbc)
                .withTableName("Players_Bakugans");
        this.objectMapper = new ObjectMapper();
        this.jdbcBakuganRepository=jdbcBakuganRepository;
    }

    @Override
    public Iterable<IPlayer> findAll() {
        return jdbc.query(selectAllPlayers, this::mapRowToPlayer);
    }

    @Override
    public IPlayer findById(String id) {
        return jdbc.queryForObject(selectPlayer, this::mapRowToPlayer, id);
    }

    @Override
    public IPlayer save(Player player) {
        long playerId = savePlayerDetails(player);
        player.setId(playerId);
        HashMap<String, Object> bakugans = new HashMap<>();
        bakugans.put("player", playerId);
        bakugans.put("bakugan", player.getBakugan().getId());
        playerBakuganInserter.execute(bakugans);
        return player;
    }

    private IPlayer mapRowToPlayer(ResultSet rs, int rowNum) throws SQLException {
        Player player = new Player(
                rs.getLong("id"),
                rs.getString("name"),
                rs.getString("teams_name"));
        long bakuId = jdbc.queryForObject(selectBakugan,this::mapRowToLong,player.getId());
        player.setBakugan((Bakugan) jdbcBakuganRepository.findById(String.valueOf(bakuId)));
        return player;
    }

    private long savePlayerDetails(IPlayer player) {
        Map<String, Object> values = objectMapper.convertValue(player, Map.class);   //utworzenie mapy, którą wstawimy do bazy w postaci <nazwa kolumny, wartość tej kolumny>.
        return playerInserter.executeAndReturnKey(values).longValue();   //zapis danych do tabeli za pomocą metody zwracającej klucz jako long.
    }

    private Long mapRowToLong(ResultSet rs, int rowNum) throws SQLException{
        return rs.getLong("bakugan");
    }
}
