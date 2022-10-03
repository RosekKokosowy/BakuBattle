function playerMoveAct(id, players, index){
    const card = getCard(id, players[index].deck);
    switch (card.type){
        case "transfer-single":
            transfer(players, index, card.value, "single");
            break;
        case "transfer-area":
            transfer(players, index, card.value, "area");
            break;
        case "attack-single":
            attack(players, index, card.value, "single");
            break;
        case "attack-area":
            attack(players, index, card.value, "area");
            break;
        case "hp-boost":
            hpBoost(players, index, card.value);
            break;
        case "heal-single":
            heal(players, index, card.value, "single");
            break;
        case "heal-area":
            heal(players, index, card.value, "area");
            break;
        case "ignite-single":
            ignite(players, index, card.value, "single");
            break;
        case "ignite-area":
            ignite(players, index, card.value, "area");
            break;
        case "strategy":
            if(card.name === "Zakazana Karta"){
                players[index].deck.push(getForbiddenCard(players[index].domain));
            } else{
                setDomainAdvantage(players[index].id, players[index].bakugan, players[index].deck, players[index].domain);
            }
            strategyChoice(players[index]);
            break;
        case "forbidden-card":
            useForbiddenCard(players,index,card.name);
            removeForbiddenCard(players[index].deck);
            break;
    }
}

function findValue(deck, name){
    let value = 0;
    deck.forEach((card)=>{
        if(card.name === name){
            value = card.value;
        }
    });
    return value;
}

function isBlock(type){
    return type === "heal-single" || type === "ignite-single";
}

function setDomainAdvantage(id, bakugan, deck, domain){
    switch (domain){
        case "Aquos":
            increaseHp(bakugan, 300);
            increaseXpMultiplier(bakugan, 0.35);
            break;
        case "Darkus":
            increaseSkills(bakugan, deck, 100);
            loadXp(bakugan);
            break;
        case "Haos":
            increaseXpMultiplier(bakugan, 0.35);
            loadXp(bakugan);
            break;
        case "Pyrus":
            increaseSkills(bakugan, deck, 100);
            increaseHp(bakugan, 300);
            break;
        case "Subterra":
            increaseHp(bakugan, 300);
            setBlock(id, bakugan, deck);
            break;
        case "Ventus":
            increaseHp(bakugan, 300);
            loadXp(bakugan);
            break;
    }
}

function useForbiddenCard(players, index, name){
    forbiddenCardDetail(players[index].name, name);
    switch (name){
        case "Wezwanie Tonacych":
            forbiddenAquos(players,index);
            break;
        case "Zew Zniszczenia":
            forbiddenDarkus(players,index);
            break;
        case "Smocza Sciezka":
            forbiddenPyrus(players,index);
            break;
        case "Powiew Destrukcji":
            forbiddenVentus(players,index);
            break;
        case "Promienie Aurory":
            forbiddenHaos(players);
            break;
        case "Skazona Ziemia":
            forbiddenSubterra(players,index);
            break;
    }
}

function transfer(players, index, value, scope){
    const victims = [];
    if(players[index].bakugan.hp > 0){
        addXp(players[index].bakugan, 0.1);
        value += useIgnite(players[index]);
        for(let player of players){
            if(player.bakugan.hp > 0){
                if(player.teams_name !== players[index].teams_name){
                    if(player.bakugan.block){
                        player.bakugan.block = false;
                        hideBlock(player.id);
                    } else{
                        victims.push(player.name);
                        players[index].bakugan.hp += value;
                        player.bakugan.hp -= value;
                    }
                    if(scope === "single"){
                        break;
                    }
                }
            }
        }
        transferDetail(players[index].name, victims, value);
    }
}

function attack(players, index, value, scope){
    const victims = [];
    if(players[index].bakugan.hp > 0){
        addXp(players[index].bakugan, 0.08);
        value += useIgnite(players[index]);
        for(let i = players.length - 1; i >= 0 ; i--){
            if(players[i].bakugan.hp > 0){
                if(players[i].teams_name !== players[index].teams_name){
                    if(players[i].bakugan.block){
                        players[i].bakugan.block = false;
                        hideBlock(players[i].id);
                    } else{
                        victims.push(players[i].name);
                        players[i].bakugan.hp -= value;
                    }
                    if(scope === "single"){
                        break;
                    }
                }
            }
        }
        attackDetail(players[index].name, victims, value);
    }
}

function hpBoost(players, index, value){
    if(players[index].bakugan.hp > 0){
        addXp(players[index].bakugan, 0.06);
        value += useIgnite(players[index]);
        players[index].bakugan.hp +=value;
        hpBoostDetail(players[index].name, value);
    }
}

function heal(players, index, value, scope){
    const beneficiaries = [];
    if(players[index].bakugan.hp > 0){
        addXp(players[index].bakugan, 0.05);
        if(scope === "single"){
            setBlock(players[index].id, players[index].bakugan, players[index].deck);
            players.forEach((player)=>{
                if(player.bakugan.hp > 0){
                    if(player.teams_name === players[index].teams_name && player.name !== players[index].name){
                        player.bakugan.hp += value;
                        beneficiaries.push(player.name);
                    }
                }
            });
        } else{
            players.forEach((player)=>{
                if(player.bakugan.hp > 0){
                    if(player.teams_name === players[index].teams_name){
                        player.bakugan.hp += value;
                        beneficiaries.push(player.name);
                    }
                }
            });
        }
        supportDetail(players[index].name, beneficiaries, value, "heal", scope);
    }
}

function ignite(players, index, value, scope){
    const beneficiaries = [];
    if(players[index].bakugan.hp > 0){
        addXp(players[index].bakugan, 0.05);
        if(scope === "single"){
            setBlock(players[index].id, players[index].bakugan, players[index].deck);
            players.forEach((player)=>{
                if(player.bakugan.hp > 0){
                    if(players[index].teams_name === player.teams_name && players[index].name !== player.name){
                        player.bakugan.igniteValue = value;
                        beneficiaries.push(player.name);
                    }
                }
            });
        } else{
            players.forEach((player)=>{
                if(player.bakugan.hp > 0){
                    if(players[index].teams_name === player.teams_name){
                        player.bakugan.igniteValue = value;
                        beneficiaries.push(player.name);
                    }
                }
            });
        }
        supportDetail(players[index].name, beneficiaries, value, "ignite", scope);
    }
}

function increaseHp(bakugan, value){
    bakugan.hp += value;
}

function increaseXpMultiplier(bakugan, value){
    bakugan.xpMultiplier = value;
}

function increaseSkills(bakugan, deck, value){
    bakugan.permanentIgnite = value;
    deck.forEach((card) => {
        card.value += value;
    });
}

function loadXp(bakugan){
    bakugan.xp = bakugan.XP_THRESHOLD;
}

function setBlock(id, bakugan, deck){
    if(bakugan.transformBlock){
        bakugan.hp += 250;
        bakugan.igniteValue = 100;
        // deck.forEach((card) => {
        //     card.value += 10;
        // });
    }
    bakugan.block = true;
    printBlock(id);
}

function useIgnite(player){
    let value = player.bakugan.igniteValue;
    player.bakugan.igniteValue = 0;
    return value;
}

function addXp(bakugan, multiplier){
    if(bakugan.xpMultiplier > 0){
        bakugan.xp += (bakugan.xpMultiplier - multiplier);
    }
}

function removeForbiddenCard(deck){
    deck.forEach((card) =>{
        if(card.type === "forbidden-card"){
            card.expired = true;
        }
    });
}

function getForbiddenCard(domain){
    let name = "";
    let desc = "";
    switch (domain){
        case "Aquos":
            name = "Wezwanie Tonacych";
            desc = "Switches your hp points with the hp of your random opponent, but also takes away half of your friend's hp.";
            break;
        case "Darkus":
            name = "Zew Zniszczenia";
            desc = "Doubles up your hp and decreases everyone else's hp by half.";
            break;
        case "Haos":
            name = "Promienie Aurory";
            desc = "Restores the basic hp of every bakugan even those who were defeated, but you loses ability to collect xp.";
            break;
        case "Pyrus":
            name = "Smocza Sciezka";
            desc = "Your bakugan becomes really agitated and his next attack gets an extra 700g, but also loses 350g of hp.";
            break;
        case "Subterra":
            name = "Skazona Ziemia";
            desc = "The ground is dangerous, but not for your bakugan that starts healing per round instead of losing and also gains block.";
            break;
        case "Ventus":
            name = "Powiew Destrukcji";
            desc = "Sets a block on you and from now on every block grants you extra 250g to your hp and 100g to your next attack.";
            break;
    }
    return new Card(name,"forbidden-card",desc,0,false);
}

function forbiddenAquos(players,index){
    const opponent = findTheOpponent(players, players[index].teams_name);
    const teammate = findTheTeammate(players, players[index].id, players[index].teams_name);
    if(opponent === null){
        return null;
    }
    if(teammate === null){
        unableToSummonXp(players[index]);
    } else{
        if(teammate.bakugan.hp % 2 === 0){
            teammate.bakugan.hp -= (teammate.bakugan.hp/2);
        } else{
            teammate.bakugan.hp -= ((teammate.bakugan.hp+1)/2);
        }
    }
    let tmp = players[index].bakugan.hp;
    players[index].bakugan.hp = opponent.bakugan.hp;
    opponent.bakugan.hp = tmp;
}

function forbiddenDarkus(players,index){
    const opponent = findTheOpponent(players, players[index].teams_name);
    const teammate = findTheTeammate(players, players[index].id, players[index].teams_name);
    if(opponent === null){
        return null;
    }
    if(teammate === null){
        unableToSummonXp(players[index]);
    }
    players.forEach((player)=>{
        if(player.id === players[index].id){
            player.bakugan.hp *= 2;
        } else{
            if(player.bakugan.hp > 0){
                if(player.bakugan.hp % 2 === 0){
                    player.bakugan.hp /= 2;
                } else{
                    player.bakugan.hp++;
                    player.bakugan.hp /= 2;
                }
            }
        }
    });
}

function forbiddenHaos(players){
    players.forEach((player) =>{
        if(player.bakugan.hp <= 0){
            revivePlayer(player);
        }
        player.bakugan.hp = player.bakugan.hpBasic;
        unableToSummonXp(player);
    });
}

function forbiddenPyrus(players,index){
    players[index].bakugan.hp -= 350;
    players[index].bakugan.igniteValue = 700;
}

function forbiddenSubterra(players,index){
    players[index].bakugan.healPerRound = true;
    setBlock(players[index].id ,players[index].bakugan, players[index].deck);
}

function forbiddenVentus(players,index){
    players[index].bakugan.transformBlock = true;
    setBlock(players[index].id ,players[index].bakugan, players[index].deck);
}

function findTheOpponent(players, team){
    for(let player of players){
        if(player.teams_name !== team && player.bakugan.hp > 0){
            return player;
        }
    }
    return null;
}

function findTheTeammate(players, id,  team){
    for(let player of players){
        if(player.teams_name === team && player.id !== id && player.bakugan.hp > 0){
            return player;
        }
    }
    return null;
}

function unableToSummonXp(player){
    player.bakugan.xpMultiplier = 0;
}