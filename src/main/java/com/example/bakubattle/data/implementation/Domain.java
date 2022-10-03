package com.example.bakubattle.data.implementation;

import com.example.bakubattle.data.api.IBakugan;
import com.example.bakubattle.data.api.IDomain;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

import java.util.Map;

@Data
@RequiredArgsConstructor
public class Domain implements IDomain {

    private String name;
    public static final String[] NAMES = {
            "Aquos",
            "Darkus",
            "Haos",
            "Pyrus",
            "Subterra",
            "Ventus"};

    public Domain(String name) {
        this.name = "";
        for(String n:NAMES){
            if(name.equals(n)){
                this.name = name;
                break;
            }
        }
        if(this.name.equals("")){
            name = "ERROR";
        }
    }


}
