package com.example.bakubattle.repository.implementation;

import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.api.ITeam;
import com.example.bakubattle.data.implementation.Player;
import com.example.bakubattle.data.implementation.Team;
import com.example.bakubattle.repository.api.TeamRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class JdbcTeamRepository implements TeamRepository {

    private SimpleJdbcInsert teamInserter;
    private SimpleJdbcInsert teamPlayerInserter;
    private ObjectMapper objectMapper;
    private JdbcTemplate jdbc;
    private final String selectAllTeams = "select id, name from Teams";
    private final String selectTeam = "select id, name from Teams where id=?";

    @Autowired
    public JdbcTeamRepository(JdbcTemplate jdbc) {
        this.jdbc=jdbc;
        this.teamInserter = new SimpleJdbcInsert(jdbc)
                .withTableName("Teams")
                .usingGeneratedKeyColumns("id");
        this.teamPlayerInserter = new SimpleJdbcInsert(jdbc)
                .withTableName("Players_Teams");
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Iterable<ITeam> findAll() {
        return jdbc.query(selectAllTeams,this::mapRowToTeam);
    }

    @Override
    public ITeam findById(String id) {
        return jdbc.queryForObject(selectTeam, this::mapRowToTeam, id);
    }

    @Override
    public ITeam save(Team team) {
        long teamId = saveTeamDetails(team);
        team.setId(teamId);
        List<Player> players = team.getPlayers();
        for(Player player : players){
            savePlayerstoTeam(player, teamId);
        }
        return team;
    }

    private ITeam mapRowToTeam(ResultSet rs, int rowNum) throws SQLException {
        return new Team(
                rs.getLong("id"),
                rs.getString("name"));
    }

    private long saveTeamDetails(ITeam team) {
        Map<String, Object> values = objectMapper.convertValue(team, Map.class);   //utworzenie mapy, którą wstawimy do bazy w postaci <nazwa kolumny, wartość tej kolumny>.
        return teamInserter.executeAndReturnKey(values).longValue();   //zapis danych do tabeli za pomocą metody zwracającej klucz jako long.
    }

    private void savePlayerstoTeam(Player player, long teamId) {
        Map<String, Object> values = new HashMap<>();
        values.put("team", teamId);
        values.put("player", player.getId());
        teamPlayerInserter.execute(values);
    }
}
