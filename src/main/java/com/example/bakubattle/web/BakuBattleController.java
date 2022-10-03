package com.example.bakubattle.web;

import com.example.bakubattle.data.implementation.Player;
import com.example.bakubattle.data.implementation.Team;
import com.example.bakubattle.repository.implementation.JdbcPlayerRepository;
import com.example.bakubattle.repository.implementation.JdbcTeamRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Slf4j
@Controller
@RequestMapping("/fight")
public class BakuBattleController {

    private JdbcTeamRepository jdbcTeamRepository;
    private JdbcPlayerRepository jdbcPlayerRepository;

    @Autowired
    public BakuBattleController(JdbcTeamRepository jdbcTeamRepository, JdbcPlayerRepository jdbcPlayerRepository) {
        this.jdbcTeamRepository = jdbcTeamRepository;
        this.jdbcPlayerRepository = jdbcPlayerRepository;
    }

    @GetMapping
    public String processGatheredData(Model model){
        try{
            ArrayList<Player> players = getPlayers();
            for(Player player:players){
                player.initializeDeck();
                displayResult(player);
            }
            model.addAttribute("players",players);
            return "bakubattle";
        }catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to process gathered data from the previous stage.");
            return "error";
        }
    }

    private ArrayList<Player> getPlayers(){
        ArrayList<Player> players = new ArrayList<>(4);
        jdbcPlayerRepository.findAll().forEach(i->players.add((Player) i));
        return players;
    }

    private void displayResult(Player player){
        log.info("-------------------------------------------------------------------------");
        log.info("Player's name: "+ player.getName());
        log.info("Player's team: "+ player.getTeams_name());
        log.info("Player's domain: "+ player.getDomain());
        log.info("Player's bakugan: "+ player.getBakugan());
        log.info("Player's deck: "+ player.getDeck());
        log.info("-------------------------------------------------------------------------");
    }
}
