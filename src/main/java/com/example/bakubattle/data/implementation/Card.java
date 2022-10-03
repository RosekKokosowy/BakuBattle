package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.ICard;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class Card implements ICard {
    private String name;
    private String type;
    private String description;
    private int value;
    private boolean sets_block;

    public Card(String n, String t, int val, boolean block){
        name = n;
        value = val;
        sets_block = block;
        switch (t) {
            case "transferSingle" ->{
                type = "transfer-single";
                description = "This ability transfers " + value + "g from your opponent to you.";
            }
            case "transferArea" ->{
                type = "transfer-area";
                description = "This ability transfers " + value + "g from your opponents to you.";
            }
            case "attackSingle" ->{
                type = "attack-single";
                description = "This ability attacks your opponent and deals him " + value + "g.";
            }
            case "attackArea" ->{
                type = "attack-area";
                description = "This ability attacks your opponents and deals them " + value + "g.";
            }
            case "hpboostv1", "hpboostv2" ->{
                type = "hp-boost";
                description = "This ability gives you " + value + "g.";
            }
            case "healSingle" ->{
                type = "heal-single";
                description = "This ability gives your team's partner " + value + "g to his hp and sets block on you.";
            }
            case "healArea" ->{
                type = "heal-area";
                description = "This ability gives you and your team's partner " + value + "g to your hp.";
            }
            case "igniteSingle" ->{
                type = "ignite-single";
                value /= 2;
                description = "This ability gives your team's partner " + value + "g to his next skill and sets block on you.";
            }
            case "igniteArea" ->{
                type = "ignite-area";
                value /= 2;
                description = "This ability gives you and your team's partner " + value + "g to your next skill.";
            }
        }
    }

}
