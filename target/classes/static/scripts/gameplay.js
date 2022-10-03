let action = "";
window.onload = () => { gameplay(); }

async function gameplay(){
    const players = init();
    let roundCounterAbsolute = 0;
    let turnsCounterRelative = 0;
    welcome(players);
    do{

        const playerIndex = () => {
            let turn = turnsCounterRelative%4;
            for (let i = 0; i < players.length;i++){
                if(players[turn].bakugan.hp > 0){
                    break;
                } else {
                    if(turn === (players.length - 1)){
                        turn = 0;
                    } else {
                        turn++;
                    }
                    turnsCounterRelative++;
                }
            }
            return turn;
        };

        const turnControl = () => {
            if(players[i].bakugan.xp >= players[i].bakugan.XP_THRESHOLD && turnsCounterRelative > 3){   //assuming 4 players are choosing their strategies.
                players[i].bakugan.xp -= players[i].bakugan.XP_THRESHOLD;
                dmgPerRound(players, roundCounterAbsolute);
                roundCounterAbsolute++;
            } else{
                turnsCounterRelative++;
            }
            action="";  //clearing action for future events
        };

        let myPromise = new Promise(function(resolve) {
            let interval = setInterval(()=>{
                if(action === ""){
                    return;
                }
                clearInterval(interval);
                resolve(action);
            },100);
        });

        updateView(players);
        const i = playerIndex();
        if(turnsCounterRelative < 4){
            chooseStrategy(players[i], turnsCounterRelative);
        } else{
            playerMoveDisplay(players[i], turnsCounterRelative);
        }
        const id = await myPromise;
        playerMoveAct(id, players, i);
        turnControl();
    } while(teamAndHpControl(players, roundCounterAbsolute));
    updateView(players);
}

function updateView(players) {
    reportAboutPlayers(players);
    players.forEach((player) => {
        if (player.bakugan.hp > 0) {
            if(player.bakugan.hp > player.bakugan.HP_THRESHOLD){
                player.bakugan.hp = player.bakugan.HP_THRESHOLD/2;
            }
            showPlayer(player);
        } else {
            killPlayer(player);
        }
    });
}

function dmgPerRound(players, round){
    const damagePerRound = 20;
    const victims = [];
    const beneficiaries = [];
    players.forEach((player)=>{
        if(player.bakugan.hp > 0){
            if(player.bakugan.healPerRound){
                player.bakugan.hp += round*damagePerRound;
                beneficiaries.push(player.name);
            } else{
                player.bakugan.hp -= round*damagePerRound;
                victims.push(player.name);
            }
        }
    });
    dmgPerRoundDetail(beneficiaries, victims, (damagePerRound * round));
}

function teamAndHpControl(players, round){
    const teams = new Set();
    let playerAlive = 0
    let xpControl = 0;
    players.forEach((player)=>{
        if(player.bakugan.hp > player.bakugan.HP_THRESHOLD){
            player.bakugan.hp = player.bakugan.HP_THRESHOLD/2;
        }
        if(player.bakugan.hp > 0){
            playerAlive++;
            teams.add(player.teams_name);
            if(player.bakugan.xpMultiplier === 0){
                xpControl++;
            }
        }
    });
    if(xpControl === playerAlive){
        dmgPerRound(players, round);
    }
    return teams.size > 1;
}

