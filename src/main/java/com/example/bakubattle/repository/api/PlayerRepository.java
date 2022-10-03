package com.example.bakubattle.repository.api;

import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.implementation.Player;

public interface PlayerRepository {
    Iterable<IPlayer> findAll();
    IPlayer findById(String id);
    IPlayer save(Player player);
}
