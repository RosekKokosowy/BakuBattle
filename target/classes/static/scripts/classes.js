class Player{
    constructor(id, name, teams_name, bakugan, domain, deck) {
        this.id = id;
        this.name = name;
        this.teams_name = teams_name;
        this.bakugan = bakugan;
        this.domain = domain;
        this.deck = deck;
    }
}

class Bakugan{
    constructor(id, name, type, hp, xp, xpMultiplier, block,  XP_THRESHOLD, HP_THRESHOLD) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.hpBasic = hp;
        this.xp = xp;
        this.xpMultiplier = xpMultiplier;
        this.block = block;
        this.XP_THRESHOLD = XP_THRESHOLD;
        this.HP_THRESHOLD = HP_THRESHOLD;
        this.igniteValue = 0;
        this.permanentIgnite = 0;
        this.healPerRound = false;
        this.transformBlock = false;
    }
}

class Card{
    constructor(name, type, desc, value, sets_block) {
        this.name = name;
        this.type = type;
        this.desc = desc;
        this.value = value;
        this.sets_block = sets_block;
        this.usable = true;
        this.expired = false;
    }
}