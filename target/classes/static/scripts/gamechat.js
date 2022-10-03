function welcome(players){
    const teams = new Set();
    console.log("-----------------------------  BakuBattle  -----------------------------");
    console.log("----   Brief   ----");
    console.log("Players that entered the arena: ");
    for(let player of players){
        console.log("Player's name: "+player.name);
        console.log("Player's team: "+player.teams_name);
        teams.add(player.teams_name);
    }
    console.log("We have "+players.length+" players and "+teams.size+" teams.");
    console.log(teams);
    console.log(players);
    console.log("----   End Brief   ----");
    console.log("----   Rules   ----");
    console.log("The very purpose of this game is to eliminate all of your opponents and their bakugans. " +
        "In order to achieve that you must use the ability cards which are in the middle of the screen. " +
        "When you look at your bakugan's photo in one of four corners of the map, you may see hp and xp bars that represent actual level of your bakugan's features." +
        "If there is any change of your bakugan's hp level, labels will appear and display the change more clearly." +
        "As was mentioned earlier, there are ability cards which have numerous labels." +
        "By default the cards are flipped backwards in order to display whose turn it is now." +
        "When you point your cursor on that card, the card will flip and show you its features." +
        "You should see a name, a type and a brief description of that specific card." +
        "All you have to do is click on it and the ability is activated." +
        "Every bakugan has its own set of abilities that when activated provides you some xp points." +
        "If you gather enough xp points to fill out the bar, you will gain the opportunity to use two cards during your turn." +
        "However, everytime these action takes place, the arena deals an extra damage to all the players." +
        "The more times you replenish your xp, the more arena damage you will take from overloading." +
        "Last but not least, there is an issue of strategy cards that require some explanation." +
        "At the beginning of the game, you are obliged to choose between two general strategies." +
        "The first one provides you a mysterious card tossed into your deck of cards that can be used only once." +
        "The second one gives your bakugan the advantage that is unique to those of that domain's bakugans."
    );
    console.log("Further information: ");
    console.log("+ Forbidden card when used has its unbalanced effect that will harm you or your friend in some way.");
    console.log("+ Forbidden card can make you unable to collect the xp if there is no teammate alive.");
    console.log("+ Blocks are granted only after the use of ignite-single or heal-single.");
    console.log("+ Forbidden card is immune to bakugan's block.");
    console.log("+ There are 5 basic types of cards, 6 classes of bakugans, and 6 different domains.");
    console.log("+ Basically everyone has 10 cards in the decks.");
    console.log("----   End Rules   ----");
}

function reportAboutPlayers(players){
    console.log("----   Report   ----");
    for(let player of players){
        console.log("- " + player.name + " -");
        console.log("Bakugan: " + player.bakugan.name);
        console.log("Health Points: " + player.bakugan.hp);
        console.log("Experience Points: " + player.bakugan.xp);
        console.log("Experience Multiplier: " + player.bakugan.xpMultiplier);
        console.log("Block: " + player.bakugan.block);
    }
    console.log("Details: ");
    console.log(players);
    console.log("----   End Report   ----");
}

function strategyChoice(player){
    console.log("----   Strategy   ----");
    console.log("- " + player.name + " -");
    if(player.deck.length === 11){
        console.log("Chosen strategy: Forbidden Card");
        console.log("Details about the card:");
        console.log(player.deck[(player.deck.length - 1)]);
    } else{
        console.log("Chosen strategy: Domain Advantage");
        console.log("Updated status of your bakugan and deck:");
        console.log(player.bakugan);
        console.log(player.deck);
    }
    console.log("----   End Strategy   ----");
}

function displayCard(name,igniteValue,permanentIgnite,card,n){
    console.log("----   Card " + n + "  ----");
    console.log("Player: " + name);
    console.log("Card's name: "+ card.name);
    console.log("Card's type: "+ card.type);
    console.log("Card's desc: "+ card.desc);
    console.log("Card's value: "+ card.value);
    console.log("Card's block: "+ card.sets_block);
    console.log("Card's boost by standard ignite: "+ igniteValue);
    console.log("Card's boost by permanent ignite: "+ permanentIgnite);
    console.log("----   End Card    ----");
}

function transferDetail(name, victims, value){
    let i = 0;
    console.log("----   Ability Transfer  ----");
    console.log("Transfer conducted by: "+name);
    for(let x of victims){
        console.log("Transfer harmed: "+x);
        console.log("Transfer dealt him: "+value);
        i++;
    }
    console.log(name+" gained "+(value*i));
    console.log("----   End Ability    ----");
}

function attackDetail(name, victims, value){
    console.log("----   Ability Attack  ----");
    console.log("Attack conducted by: "+name);
    for(let x of victims){
        console.log("Attack harmed: "+x);
        console.log("Attack dealt him: "+value);
    }
    console.log("----   End Ability    ----");
}

function hpBoostDetail(name, value){
    console.log("----   Ability HpBoost  ----");
    console.log(name+" gained extra "+value);
    console.log("----   End Ability    ----");
}

function supportDetail(name, beneficiaries, value, type,scope){
    console.log("----   Ability " + type + "  ----");
    console.log(name + " used "+ type + "on:");
    for(let x of beneficiaries){
        console.log(x);
    }
    console.log("Value: "+value);
    if(scope === "single"){
        console.log("Block: true");
    } else{
        console.log("Block: false");
    }
    console.log("----   End Ability    ----");
}

function forbiddenCardDetail(name, skill){
    console.log("----   Ability Forbidden Card  ----");
    console.log(name+" dare to use the forbidden card called "+skill);
    console.log("----   End Ability    ----");
}

function dmgPerRoundDetail(beneficiaries, victims, value) {
    console.log("----   Round Damage  ----");
    console.log("Value: "+value);
    console.log("List of beneficiaries:");
    for(let x of beneficiaries){
        console.log(x);
    }
    console.log("List of victims:");
    for(let x of victims){
        console.log(x);
    }
    console.log("----   End Round Damage    ----");
}