package com.example.bakubattle.web;


import com.example.bakubattle.data.implementation.Holder;
import com.example.bakubattle.data.implementation.Player;
import com.example.bakubattle.repository.implementation.JdbcPlayerRepository;
import com.example.bakubattle.repository.implementation.JdbcTeamRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/")
@SessionAttributes("player")
public class TeamSelectController {

    private JdbcTeamRepository jdbcTeamRepository;
    private JdbcPlayerRepository jdbcPlayerRepository;

    @Autowired
    public TeamSelectController(JdbcTeamRepository jdbcTeamRepository, JdbcPlayerRepository jdbcPlayerRepository) {
        this.jdbcTeamRepository = jdbcTeamRepository;
        this.jdbcPlayerRepository = jdbcPlayerRepository;
    }

    @GetMapping
    public String loadTeamSelector(Model model){
        try{
            List<Player> players = new ArrayList<>();
            jdbcPlayerRepository.findAll().forEach(i->players.add((Player) i));
            displayResultGet(players);
            if(players.size() == 4){
                return "redirect:/fight";
            }
            else {
                model.addAttribute("players", players);
                return "team_select";
            }
        } catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to pull all the players from a database.");
            return "error";
        }
    }

    @ModelAttribute(name = "player")
    public Player player(){
        return new Player();
    }

    @PostMapping
    public String savePlayer(@ModelAttribute Player player){
        try {
            displayResultPost(player);
            Holder.getInstance().getPlayers().add(player);
            return "redirect:/domain";
        } catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to save the player into the temporary holder.");
            return "error";
        }
    }

    private void displayResultGet(List<Player> players){
        log.info("----------------------------- Team Select GET Window Opened  ---------------------------------");
        log.info("Number of players: "+ players.size());
        if(players.size() != 0){
            for (Player player: players){
                log.info("Player's name: "+player.getName());
                log.info("Player's team's name: "+player.getTeams_name());
                log.info("Player's further data: "+ player);
            }
        }
        log.info("----------------------------- Team Select GET Window Closed  ---------------------------------");
    }

    private void displayResultPost(Player player){
        log.info("----------------------------- Team Select POST Window Opened  ---------------------------------");
        log.info("Player's name: "+player.getName());
        log.info("Player's team's name: "+player.getTeams_name());
        log.info("----------------------------- Team Select POST Window Closed  ---------------------------------");
    }
}
