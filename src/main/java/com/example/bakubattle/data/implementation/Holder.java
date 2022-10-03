package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.IHolder;
import lombok.Data;

import java.util.ArrayList;

@Data
public class Holder implements IHolder {
    private ArrayList<Player> players = new ArrayList<>(4);
    private final static Holder holder = new Holder();

    private Holder(){}

    public static Holder getInstance() {
        return holder;
    }
}
