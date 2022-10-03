package com.example.bakubattle.repository.api;

import com.example.bakubattle.data.api.IBakugan;
import com.example.bakubattle.data.api.IPlayer;
import com.example.bakubattle.data.implementation.Bakugan;
import com.example.bakubattle.data.implementation.Player;

public interface BakuganRepository {
    Iterable<IBakugan> findAll();
    IBakugan findById(String id);
    IBakugan save(Bakugan bakugan);
}
