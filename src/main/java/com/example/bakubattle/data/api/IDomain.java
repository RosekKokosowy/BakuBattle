package com.example.bakubattle.data.api;

import com.example.bakubattle.data.implementation.Bakugan;
import com.example.bakubattle.data.implementation.Domain;

public interface IDomain {

    static String whatDomain(Bakugan bakugan) {
        long id = bakugan.getId();
        String name = "";
        if (id <= 6) {
            name = Domain.NAMES[0];
        } else if (id <= 12) {
            name = Domain.NAMES[1];
        } else if (id <= 18) {
            name = Domain.NAMES[2];
        } else if (id <= 24) {
            name = Domain.NAMES[3];
        } else if (id <= 30) {
            name = Domain.NAMES[4];
        } else {
            name = Domain.NAMES[5];
        }
        return name;
    }
}
