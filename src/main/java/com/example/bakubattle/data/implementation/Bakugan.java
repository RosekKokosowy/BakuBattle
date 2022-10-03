package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.IBakugan;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@Data
@RequiredArgsConstructor
public class Bakugan implements IBakugan {
    private long id;
    private String name;
    private String type;
    private int hp;
    private double xp;
    private double xpMultiplier;
    private ArrayList<String> skillsNames;
    private ArrayList<String> skillsTypes;
    private static final double XP_THRESHOLD = 1;
    private static final int HP_THRESHOLD = 5000;
    private boolean block = false;

    public static enum Type{
        SUPPORT_DEFENCE,    // 1.heal 2.attack boost 3.hp boost 4.transfer 5.attack
        SUPPORT_OFFENCE,    // 1.attack boost 2.heal 3.attack 4.transfer 5.hp boost
        ASSASSIN,   // 1.attack 2.transfer 3.ignite 4.hp boost 5.heal
        TANK,   // 1.hp boost 2.transfer 3.heal 4.attack 5.ignite
        BRUISER_TANK,    // 1.transfer 2.hp boost 3.heal 4.attack 5.ignite
        BRUISER_OFFENCE,    // 1.transfer 2.attack 3.ignite 4.hp boost 5.heal
    }

    public Bakugan(long id, String name, String type, int hp, double xpMultiplier, String transferSingle, String transferArea, String attackSingle, String attackArea, String hpboostv1, String hpboostv2, String healSingle, String healArea, String igniteSingle, String igniteArea) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.xp = 0;
        this.xpMultiplier = xpMultiplier;
        skillsNames = (ArrayList<String>) fillSkills(transferSingle, transferArea,attackSingle,attackArea, hpboostv1, hpboostv2, healSingle, healArea, igniteSingle, igniteArea);
        skillsTypes = (ArrayList<String>) fillSkills("transferSingle", "transferArea","attackSingle", "attackArea", "hpboostv1", "hpboostv2", "healSingle", "healArea", "igniteSingle", "igniteArea");
    }

    private List<String> fillSkills(
            String skill1,
            String skill2,
            String skill3,
            String skill4,
            String skill5,
            String skill6,
            String skill7,
            String skill8,
            String skill9,
            String skill10
    ){
        ArrayList<String> array = new ArrayList<>(10);
        array.add(skill1);
        array.add(skill2);
        array.add(skill3);
        array.add(skill4);
        array.add(skill5);
        array.add(skill6);
        array.add(skill7);
        array.add(skill8);
        array.add(skill9);
        array.add(skill10);
        return array;
    }

    @Override
    public List<Integer> initializeSkills(String type) {
        ArrayList<Integer> skillValue = new ArrayList<>();
        Random random = new Random();
        int firstClassSkill = 1000;
        int secondClassSkill = 800;
        int thirdClassSkill = 600;
        int fourthClassSkill = 500;
        int fifthClassSkill = 300;
        int divider = random.nextInt(2,5);
        switch(Type.valueOf(type)){
            case ASSASSIN ->{
                skillValue.add((secondClassSkill/10)*(10-divider)); // 0 -> transferSingle
                skillValue.add((secondClassSkill/10)*divider);  // 1 -> transferArea
                skillValue.add((firstClassSkill/10)*(10-divider));  // 2 -> attackSingle
                skillValue.add((firstClassSkill/10)*divider);   // 3 -> attackArea
                skillValue.add((fourthClassSkill/10)*(10-divider)); // 4 -> hpboostv1
                skillValue.add((fourthClassSkill/10)*divider);  // 5 -> hpboostv2
                skillValue.add((fifthClassSkill/10)*(10-divider));  // 6 -> healSingle
                skillValue.add((fifthClassSkill/10)*divider);   // 7 -> healArea
                skillValue.add((thirdClassSkill/10)*(10-divider));  // 8 -> igniteSingle
                skillValue.add((thirdClassSkill/10)*divider);   // 9 -> igniteArea
            }
            case TANK -> {
                skillValue.add((secondClassSkill/10)*(10-divider));
                skillValue.add((secondClassSkill/10)*divider);
                skillValue.add((fourthClassSkill/10)*(10-divider));
                skillValue.add((fourthClassSkill/10)*divider);
                skillValue.add((firstClassSkill/10)*(10-divider));
                skillValue.add((firstClassSkill/10)*divider);
                skillValue.add((thirdClassSkill/10)*(10-divider));
                skillValue.add((thirdClassSkill/10)*divider);
                skillValue.add((fifthClassSkill/10)*(10-divider));
                skillValue.add((fifthClassSkill/10)*divider);
            }
            case BRUISER_TANK ->{
                skillValue.add((firstClassSkill/10)*(10-divider));
                skillValue.add((firstClassSkill/10)*divider);
                skillValue.add((fourthClassSkill/10)*(10-divider));
                skillValue.add((fourthClassSkill/10)*divider);
                skillValue.add((secondClassSkill/10)*(10-divider));
                skillValue.add((secondClassSkill/10)*divider);
                skillValue.add((thirdClassSkill/10)*(10-divider));
                skillValue.add((thirdClassSkill/10)*divider);
                skillValue.add((fifthClassSkill/10)*(10-divider));
                skillValue.add((fifthClassSkill/10)*divider);
            }
            case BRUISER_OFFENCE -> {
                skillValue.add((firstClassSkill/10)*(10-divider));
                skillValue.add((firstClassSkill/10)*divider);
                skillValue.add((secondClassSkill/10)*(10-divider));
                skillValue.add((secondClassSkill/10)*divider);
                skillValue.add((fourthClassSkill/10)*(10-divider));
                skillValue.add((fourthClassSkill/10)*divider);
                skillValue.add((fifthClassSkill/10)*(10-divider));
                skillValue.add((fifthClassSkill/10)*divider);
                skillValue.add((thirdClassSkill/10)*(10-divider));
                skillValue.add((thirdClassSkill/10)*divider);
            }
            case SUPPORT_DEFENCE ->{
                skillValue.add((fourthClassSkill/10)*(10-divider));
                skillValue.add((fourthClassSkill/10)*divider);
                skillValue.add((fifthClassSkill/10)*(10-divider));
                skillValue.add((fifthClassSkill/10)*divider);
                skillValue.add((thirdClassSkill/10)*(10-divider));
                skillValue.add((thirdClassSkill/10)*divider);
                skillValue.add((firstClassSkill/10)*(10-divider));
                skillValue.add((firstClassSkill/10)*divider);
                skillValue.add((secondClassSkill/10)*(10-divider));
                skillValue.add((secondClassSkill/10)*divider);
            }
            case SUPPORT_OFFENCE -> {
                skillValue.add((fourthClassSkill/10)*(10-divider));
                skillValue.add((fourthClassSkill/10)*divider);
                skillValue.add((thirdClassSkill/10)*(10-divider));
                skillValue.add((thirdClassSkill/10)*divider);
                skillValue.add((fifthClassSkill/10)*(10-divider));
                skillValue.add((fifthClassSkill/10)*divider);
                skillValue.add((secondClassSkill/10)*(10-divider));
                skillValue.add((secondClassSkill/10)*divider);
                skillValue.add((firstClassSkill/10)*(10-divider));
                skillValue.add((firstClassSkill/10)*divider);
            }
            default -> {
                return null;
            }
        }
        return skillValue;
    }
}
