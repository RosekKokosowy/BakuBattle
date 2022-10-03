package com.example.bakubattle.web;

import com.example.bakubattle.data.api.IBakugan;
import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.implementation.Bakugan;
import com.example.bakubattle.data.implementation.Player;
import com.example.bakubattle.repository.implementation.JdbcBakuganRepository;
import com.example.bakubattle.repository.implementation.JdbcPlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/pyrus")
@SessionAttributes("player")
public class PyrusSelectController {

    private JdbcBakuganRepository jdbcBakuganRepository;
    private JdbcPlayerRepository jdbcPlayerRepository;
    private final int OFFSET = 18;

    @Autowired
    public PyrusSelectController(JdbcBakuganRepository jdbcBakuganRepository, JdbcPlayerRepository jdbcPlayerRepository) {
        this.jdbcBakuganRepository = jdbcBakuganRepository;
        this.jdbcPlayerRepository = jdbcPlayerRepository;
    }

    @GetMapping
    public String loadBakuganSelect(Model model){
        List<Bakugan> bakugans = new ArrayList<>(6);
        try{
            for(int i = 1; i<=6;i++){
                bakugans.add((Bakugan) jdbcBakuganRepository.findById(String.valueOf(i+ OFFSET)));
                model.addAttribute(bakugans.get(i-1).getName(),bakugans.get(i-1));
            }
            displayResultGet(bakugans);
            model.addAttribute("bakugan", new Bakugan());
            return "pyrus_select";
        } catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to pull the pyrus bakugans from a database.");
            return "error";
        }
    }

    @PostMapping
    public String processData(Bakugan bakugan, Player player){
        try {
            bakugan = (Bakugan) jdbcBakuganRepository.findById(String.valueOf(bakugan.getId()));
            player.setBakugan(bakugan);
            displayResultPost(bakugan, player);
            IPlayer playerControl = jdbcPlayerRepository.save(player);
            return "redirect:/";
        } catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to save the player into the database.");
            return "error";
        }
    }

    private void displayResultGet(List<Bakugan> bakugans){
        log.info("----------------------------- Pyrus Select GET Window Opened  ---------------------------------");
        log.info("Number of bakugans: "+ bakugans.size());
        if(bakugans.size() != 0){
            for (Bakugan bakugan: bakugans){
                log.info("Bakugan's name: "+bakugan.getName());
                log.info("Bakugan's further data: "+ bakugan);
            }
        }
        log.info("----------------------------- Pyrus Select GET Window Closed  ---------------------------------");
    }

    private void displayResultPost(Bakugan bakugan, Player player){
        log.info("----------------------------- Pyrus Select POST Window Opened  ---------------------------------");
        log.info("Player's name: "+player.getName());
        log.info("Bakugan's name: "+bakugan.getName());
        log.info("Bakugan's further data: "+ bakugan);
        log.info("----------------------------- Pyrus Select POST Window Closed  ---------------------------------");
    }
}
