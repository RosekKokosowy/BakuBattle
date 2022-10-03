package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.api.ITeam;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Data
@RequiredArgsConstructor
public class Team implements ITeam {

    private long id;
    @NotBlank(message = "Name of the team is required.")
    private String name;
    private ArrayList<Player> players;

    public Team(long id, String name) {
        this.id = id;
        this.name = name;
        players = new ArrayList<>();
    }

    public Team(String name) {
        this.name = name;
        players = new ArrayList<>();
    }
}
