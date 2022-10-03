// [
//     new Card(
//         [[${players[0].deck[0].name}]],
//         [[${players[0].deck[0].type}]],
//         [[${players[0].deck[0].description}]],
//         [[${players[0].deck[0].value}]],
//         [[${players[0].deck[0].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[1].name}]],
//         [[${players[0].deck[1].type}]],
//         [[${players[0].deck[1].description}]],
//         [[${players[0].deck[1].value}]],
//         [[${players[0].deck[1].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[2].name}]],
//         [[${players[0].deck[2].type}]],
//         [[${players[0].deck[2].description}]],
//         [[${players[0].deck[2].value}]],
//         [[${players[0].deck[2].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[3].name}]],
//         [[${players[0].deck[3].type}]],
//         [[${players[0].deck[3].description}]],
//         [[${players[0].deck[3].value}]],
//         [[${players[0].deck[3].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[4].name}]],
//         [[${players[0].deck[4].type}]],
//         [[${players[0].deck[4].description}]],
//         [[${players[0].deck[4].value}]],
//         [[${players[0].deck[4].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[5].name}]],
//         [[${players[0].deck[5].type}]],
//         [[${players[0].deck[5].description}]],
//         [[${players[0].deck[5].value}]],
//         [[${players[0].deck[5].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[6].name}]],
//         [[${players[0].deck[6].type}]],
//         [[${players[0].deck[6].description}]],
//         [[${players[0].deck[6].value}]],
//         [[${players[0].deck[6].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[7].name}]],
//         [[${players[0].deck[7].type}]],
//         [[${players[0].deck[7].description}]],
//         [[${players[0].deck[7].value}]],
//         [[${players[0].deck[7].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[8].name}]],
//         [[${players[0].deck[8].type}]],
//         [[${players[0].deck[8].description}]],
//         [[${players[0].deck[8].value}]],
//         [[${players[0].deck[8].sets_block}]]
//     ),
//     new Card(
//         [[${players[0].deck[9].name}]],
//         [[${players[0].deck[9].type}]],
//         [[${players[0].deck[9].description}]],
//         [[${players[0].deck[9].value}]],
//         [[${players[0].deck[9].sets_block}]]
//     )
// ]
// new Bakugan(
//     [[${players[0].bakugan.id}]],
//     [[${players[0].bakugan.name}]],
//     [[${players[0].bakugan.type}]],
//     [[${players[0].bakugan.hp}]],
//     [[${players[0].bakugan.xp}]],
//     [[${players[0].bakugan.xpMultiplier}]],
//     [[${players[0].bakugan.block}]],
//     [[${players[0].bakugan.XP_THRESHOLD}]],
//     [[${players[0].bakugan.HP_THRESHOLD}]],
// ),
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
        this.xp = xp;
        this.xpMultiplier = xpMultiplier;
        this.block = block;
        this.XP_THRESHOLD = XP_THRESHOLD;
        this.HP_THRESHOLD = HP_THRESHOLD;
        this.igniteValue = 0;
    }
}

class Card{
    constructor(name, type, desc, value, sets_block) {
        this.name = name;
        this.type = type;
        this.desc = desc;
        this.value = value;
        this.sets_block = sets_block;
    }
}

let players = [new Player(
    1,
    "Rosek",
    "A",
    new Bakugan(
        1,
        "Apophix",
        "TANK",
        1700,
        0,
        0.25,
        false,
        1,
        5000

    ),
    "Aquos",
    [new Card(
            "Suchy Swiat",
            "transfer-single",
            "Takes 500g from your opponent and transfers it to you.",
            500,
            false
        ),
        new Card(
            "Odglos Aquosa",
            "transfer-area",
            "Takes 500g from your opponents and transfers it to you.",
            500,
            false
        )]
),new Player(
    2,
    "Bitter",
    "B",
    new Bakugan(
        2,
        "Babadrill",
        "SUPPORT_OFFENCE",
        1200,
        0,
        0.25,
        false,
        1,
        5000

    ),
    "Aquos",
    [new Card(
            "Podwojny Powrot",
            "attack-single",
            "Takes 400g from your opponent.",
            400,
            false
        ),
        new Card(
            "Strzal Morskiego Pylu",
            "attack-area",
            "Takes 300g from your opponents.",
            300,
            false
        )]
),new Player(
    3,
    "Phantom",
    "A",
    new Bakugan(
        13,
        "Hydranoid",
        "BRUISER_TANK",
        1500,
        0,
        0.28,
        false,
        1,
        5000

    ),
    "Haos",
    [new Card(
            "Szalenstwo Mirazu",
            "hp-boost",
            "Gives you 600g.",
            600,
            false
        ),
        new Card(
            "Dysza Mirazu",
            "heal-single",
            "Gives your teammate 100g and sets block on you.",
            100,
            true
        )]
), new Player(
    4,
    "Willy",
    "B",
    new Bakugan(
        17,
        "Phaedrus",
        "BRUISER_OFFENCE",
        1400,
        0,
        0.3,
        false,
        1,
        5000

    ),
    "Haos",
    [new Card(
        "Predkosc Smoka",
        "hp-boost",
        "Gives you 300g.",
        300,
        false
    ),
        new Card(
            "Wyrok Haosu",
            "heal-area",
            "Gives you and your teammate 400g.",
            400,
            false
        )]
)];

// alert("thats");

let round = 0;
let turn = 0;

window.onload = function(){
    init();
    playerMoveDisplay(turn);
}

function gameplay(){
    init();
    turn = round%4;
    for(let i = 0; i < 4;i++){
        console.log("Now we are checking if "+players[turn].name+" is alive.");
        if(players[turn].bakugan.hp > 0){
            console.log(players[turn].name+" is alive.");
            break;
        }
        else{
            console.log(players[turn].name+" is dead.");
            if(turn === 3){
                turn = 0;
            }
            else{
                turn++;
            }
            round++;
            console.log("Next is: "+players[turn].name);
        }
    }
    playerMoveDisplay(turn);
}

function init(){
    console.log(players);
    for(let i = 1; i <=players.length;i++){
        console.log(players[i-1].name +" has "+players[i-1].bakugan.hp);
        if(players[i-1].bakugan.hp > 0){
            document.getElementById("player"+i+"-hp-bar-changes").innerHTML = "";
            document.getElementById("player"+i+"-photo").src= players[i-1].bakugan.name+"_"+players[i-1].domain+".png";
            countEffect(document.getElementById("player"+i+"-hp-bar").value, players[i-1].bakugan.hp, "player"+i+"-hp-bar", "player"+i+"-hp-bar-changes");
            countEffect(document.getElementById("player"+i+"-hp-value").innerHTML, players[i-1].bakugan.hp, "player"+i+"-hp-value", "player"+i+"-hp-bar-changes");
            document.getElementById("player"+i+"-xp-bar").value = (players[i-1].bakugan.xp.toFixed(2)*100).toString();
            document.getElementById("player"+i+"-xp-value").innerHTML = players[i-1].bakugan.xp.toFixed(2);
            document.getElementById("player"+i+"-nick").innerHTML = players[i-1].name;
            document.getElementById("player"+i+"-hp-bar-changes").style.display="none";
            document.getElementById("player"+i+"-xp-bar-changes").style.display="none";
        }
        else{
            console.log("clearing");
            document.getElementById("player"+i+"-photo").style.display = "none";
            document.getElementById("player"+i+"-hp-bar").style.display = "none";
            document.getElementById("player"+i+"-hp-value").style.display = "none";
            document.getElementById("player"+i+"-xp-bar").style.display = "none";
            document.getElementById("player"+i+"-xp-value").style.display = "none";
            document.getElementById("player"+i+"-nick").style.display = "none";
            document.getElementById("player"+i+"-hp-bar-changes").style.display="none";
            document.getElementById("player"+i+"-xp-bar-changes").style.display="none";
        }
    }
}

function countEffect(previous, actual, id, labelId){
    if(previous !== actual){
        let i = previous;
        const interval = setInterval(test,8);
        function test() {
            if (previous > actual) {
                if (i <= actual) {
                    clearInterval(id);
                } else {
                    i--;
                    if (id.endsWith("bar")) {
                        document.getElementById(id).value = i;
                    } else {
                        document.getElementById(id).innerHTML = i;
                    }
                    document.getElementById(labelId).style.display = "block";
                    let tmp = previous - actual;
                    tmp = tmp.toFixed(2);
                    document.getElementById(labelId).innerHTML = "-" + tmp.toString();
                }
            } else {
                if (i >= actual) {
                    clearInterval(id);
                } else {
                    i++;
                    if (id.endsWith("bar")) {
                        document.getElementById(id).value = i;
                    } else {
                        document.getElementById(id).innerHTML = i;
                    }
                    document.getElementById(labelId).style.display = "block";
                    let tmp = actual - previous;
                    tmp = tmp.toFixed(2);
                    document.getElementById(labelId).innerHTML = "+" + tmp.toString();
                }
            }
        }
    }
}

function playerMoveDisplay(index){
    setCard(players[index], players[index].deck[0], 1);
    setCard(players[index], players[index].deck[1], 2);
}

function playerMoveAct(id){
    let name = document.getElementById(id+"-name").innerHTML;
    switch (document.getElementById(id+"-type").innerHTML){
        case "transfer-single":
            transfer(players[turn], findValue(players[turn].deck, name), "single");
            break;
        case "transfer-area":
            transfer(players[turn], findValue(players[turn].deck, name), "area");
            break;
        case "attack-single":
            attack(players[turn], findValue(players[turn].deck, name), "single");
            break;
        case "attack-area":
            attack(players[turn], findValue(players[turn].deck, name), "area");
            break;
        case "hp-boost":
            hpBoost(players[turn], findValue(players[turn].deck, name));
            break;
        case "heal-single":
            heal(players[turn], findValue(players[turn].deck, name), "single");
            break;
        case "heal-area":
            heal(players[turn], findValue(players[turn].deck, name), "area");
            break;
        case "ignite-single":
            ignite(players[turn], findValue(players[turn].deck, name), "single");
            break;
        case "ignite-area":
            ignite(players[turn], findValue(players[turn].deck, name), "area");
            break;
    }
    if(players[turn].bakugan.xp >= 1){
        players[turn].bakugan.xp -= 1;
        gameplay();
    }
    else{
        round++;
        gameplay();
    }
}

function setCard(player, card, n){
    document.getElementById("who-goes"+n).innerHTML= player.name;
    document.getElementById("card"+n+"-img-back").src = player.domain.toLowerCase()+".jpg";
    document.getElementById("card"+n+"-img").src = player.domain.toLowerCase()+".jpg";
    document.getElementById("card"+n+"-name").innerHTML = card.name;
    document.getElementById("card"+n+"-type").innerHTML = card.type;
    document.getElementById("card"+n+"-desc").innerHTML = card.desc;
}

function transfer(player, value, scope){
    if(player.bakugan.hp > 0){
        player.bakugan.xp += player.bakugan.xpMultiplier - 0.1;
        value += player.bakugan.igniteValue;
        player.bakugan.igniteValue = 0;
        for(let i = 0; i < players.length;i++){
            if(players[i].bakugan.hp > 0){
                if(players[i].teams_name !== player.teams_name){
                    if(players[i].bakugan.block){
                        players[i].bakugan.block = false;
                        console.log("Transfer: BLOCKED");
                    }
                    else{
                        player.bakugan.hp += value;
                        players[i].bakugan.hp -= value;
                        console.log("Transfer: "+player.name+" transfers "+value+"g from "+players[i].name);
                    }
                    if(scope === "single"){
                        break;
                    }
                }
            }
        }
    }
}

function attack(player, value, scope){
    if(player.bakugan.hp > 0){
        player.bakugan.xp += player.bakugan.xpMultiplier - 0.08;
        value += player.bakugan.igniteValue;
        player.bakugan.igniteValue = 0;
        for(let i = players.length - 1; i >= 0;i--){
            if(players[i].bakugan.hp > 0){
                if(players[i].teams_name !== player.teams_name){
                    if(players[i].bakugan.block){
                        players[i].bakugan.block = false;
                        console.log("Attack: BLOCKED");
                    }
                    else{
                        players[i].bakugan.hp -= value;
                        console.log("Attack: "+player.name+" deals "+players[i].name+" "+value+"g");
                    }
                    if(scope === "single"){
                        break;
                    }
                }
            }
        }
    }
}

function hpBoost(player, value){
    if(player.bakugan.hp > 0){
        player.bakugan.xp += player.bakugan.xpMultiplier - 0.06;
        value += player.bakugan.igniteValue;
        player.bakugan.igniteValue = 0;
        player.bakugan.hp +=value;
        console.log("HpBoost: "+player.name+" gets "+value+"g");
    }
}

function heal(player, value, scope){
    if(player.bakugan.hp > 0){
        player.bakugan.xp += player.bakugan.xpMultiplier - 0.04;
        if(scope === "single"){
            player.bakugan.block = true;
            console.log("Heal: "+player.name+" gets block");
            for(let i = 0; i < players.length;i++){
                if(players[i].bakugan.hp > 0){
                    if(players[i].teams_name === player.teams_name && players[i].name !== player.name){
                        players[i].bakugan.hp += value;
                        console.log("Heal: "+players[i].name+" gets "+value+"g");
                    }
                }
            }
        }
        else{
            for(let i = 0; i < players.length;i++){
                if(players[i].bakugan.hp > 0){
                    if(players[i].teams_name === player.teams_name){
                        players[i].bakugan.hp += value;
                        console.log("Heal: "+players[i].name+" gets "+value+"g");
                    }
                }
            }
        }
    }
}

function ignite(player, value, scope){
    if(player.bakugan.hp > 0){
        player.bakugan.xp += player.bakugan.xpMultiplier - 0.04;
        if(scope === "single"){
            player.bakugan.block = true;
            console.log("Ignite: "+player.name+" gets block");
            for(let i = 0; i < players.length;i++){
                if(players[i].bakugan.hp > 0){
                    if(players[i].teams_name === player.teams_name && players[i].name !== player.name){
                        players[i].bakugan.igniteValue = value;
                        console.log("Ignite: "+players[i].name+" gets "+value+"g to each skill in the next round.");
                    }
                }
            }
        }
        else{
            for(let i = 0; i < players.length;i++){
                if(players[i].bakugan.hp > 0){
                    if(players[i].teams_name === player.teams_name){
                        players[i].bakugan.igniteValue = value;
                        console.log("Ignite: "+players[i].name+" gets "+value+"g");
                    }
                }
            }
        }
    }
}

function findValue(deck, name){
    let value = 0;
    for(let i = 0; i < deck.length;i++){
        if(deck[i].name === name){
            value = deck[i].value;
            break;
        }
    }
    return value;
}