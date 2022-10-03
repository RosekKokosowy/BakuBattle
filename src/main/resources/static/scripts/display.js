function chooseStrategy(player, round){
    const strategy = [
        new Card(
            "Zakazana Karta",
            "strategy",
            "Type of card that has significant impact on your bakugan, but also causes some problems for your friends.",
            0,
            false
        ),
        getDomainAdvantage(player.domain)
    ];
    for(let i = 0; i < strategy.length;i++){
        setCard(player.name, player.domain, player.bakugan.igniteValue, player.bakugan.permanentIgnite, strategy[i], (i+1), round);
    }
}

function playerMoveDisplay(player, round){
    const index = getIndexOfTheCards(player.deck, player.deck.length);
    for(let i = 0; i < index.length;i++){
        setCard(player.name, player.domain, player.bakugan.igniteValue, player.bakugan.permanentIgnite, player.deck[index[i]], (i+1), round);
    }
}

function setCard(name, domain, igniteValue, permanentIgnite, card, n, round){
    let path = "";
    if(round < 4){
        path =  "photos/logo.png";
    } else{
        path = "photos/"+domain.toLowerCase()+".jpg"
    }
    setImg(path,n);
    setCardData(name, igniteValue,permanentIgnite, card, n);
}

function getDomainAdvantage(domain){
    let desc = "";
    switch (domain){
        case "Aquos":
            desc = "Provides additional 300g and increase your xp multiplier significantly.";
            break;
        case "Darkus":
            desc = "Provides additional 100g to every your skill and loads your xp level.";
            break;
        case "Haos":
            desc = "Increase your xp multiplier significantly and loads your xp level.";
            break;
        case "Pyrus":
            desc = "Provides additional 100g to every your skill and gets extra 300g.";
            break;
        case "Subterra":
            desc = "Provides additional 300g and sets block on you at the beginning";
            break;
        case "Ventus":
            desc = "Provides additional 300g and loads your xp level.";
            break;
    }
    return new Card(domain, "strategy",desc, 0, false);
}

function getIndexOfTheCards(deck, size){
    let array = [];
    shuffleArray(deck, size);
    for(let i = 0; i < size;i++){
        if(!deck[i].expired){
            if(deck[i].usable){
                deck[i].usable = false;
                array.push(i);
                if(array.length >= 2){
                    break;
                }
            } else{
                deck[i].usable = true;
            }
        }
    }
    return array;
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array, size) {
    for (let i = size - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}