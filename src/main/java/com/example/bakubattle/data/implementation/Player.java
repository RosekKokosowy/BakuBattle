package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.IDomain;
import com.example.bakubattle.data.api.IPlayer;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Slf4j
@Data
@RequiredArgsConstructor
public class Player implements IPlayer {

    private long id;
    @NotBlank(message = "Name of the player is required.")
    private String name;
    @NotBlank(message = "Name of the player is required.")
    private String teams_name;
    private String domain;
    private Bakugan bakugan;
    private ArrayList<Card> deck;

    public Player(long id, String name, String teams_name) {
        this.id = id;
        this.name = name;
        this.teams_name = teams_name;
        deck = new ArrayList<>(10);
    }

    @Override
    public void initializeDeck() {
        try{
            domain = IDomain.whatDomain(bakugan);
            completeDeckInCertainOrder((ArrayList<Integer>) bakugan.initializeSkills((bakugan.getType())), bakugan.getSkillsNames(), bakugan.getSkillsTypes());
        }catch (Exception e){
            e.printStackTrace();
            log.info("Error: not able to initialize the deck or assign the domain.");
        }
    }

    private void completeDeckInCertainOrder(ArrayList<Integer> values, ArrayList<String> names, ArrayList<String> types){
        boolean block;
        for (int i = 0; i < 10;i++){
            block = i == 6 || i == 8;
            deck.add(new Card(
                    names.get(i),
                    types.get(i),
                    values.get(i),
                    block
            ));
        }
    }
}
