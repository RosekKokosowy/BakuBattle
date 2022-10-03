package com.example.bakubattle.repository.api;


import com.example.bakubattle.data.api.ITeam;
import com.example.bakubattle.data.implementation.Team;

public interface TeamRepository {
    Iterable<ITeam> findAll();
    ITeam findById(String id);
    ITeam save(Team team);
}
