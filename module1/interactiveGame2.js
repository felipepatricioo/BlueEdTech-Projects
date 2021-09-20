const prompt = require("prompt-sync")();

function roleChecker(role) {
  if (role == 1) {
    return (finalRole = "Warrior");
  } else if (role == 2) {
    return (finalRole = "Mage");
  } else {
    console.log("Choose a role between [1-2]");
  }
}

// function teste(potionsUse, mageHP) {
//   for (let i = 0; i < Bag.length; i++){
//   if (Bag.includes("HP potion")) {
//     mageHP = mageHP + 100 * potionsUse;
//     Bag.splice(Bag.indexOf('HP potion'), 2)
//   } else {
//     console.log("You don't have enough hp potions in your inventory!!");
//   }
// }
// }

// function teste2(potionsUse) {
// for (let i = 0; i < Bag.length; i++) {
//     if (potionsUse == 1) {
//       mageHP += 100;
//       Bag.splice(1, 1);
//     }
//     if (potionsUse == 2) {
//       mageHP += 100 * 2;
//       Bag.splice(1, 2);
//     }
//     if (potionsUse == 3) {
//       mageHP += 100 * 3;
//       Bag.splice(1, 3);
//     }
//   }
// }

function Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG, potionsUse) {
  while (true) {
    let battleOpition1 = prompt(
      "What will you do? Press: 1 to Attack, 2 to Use Your Potion, 3 Use a Ice Spell."
    );
    if (battleOpition1 == 1) {
      dragonHP = dragonHP - mageDMG;
      console.log(`You dealt ${mageDMG} damage to the dragon`);
      console.log(`The dragon has now ${dragonHP} HP`);
      console.log("Here it comes the dragon attack!!");
      mageHP = mageHP - dragonDMG;
      console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
      if (dragonHP <= 0) {
        console.log("YOU KILLED THE DRAGON!!!!");
        console.log("CONGRATULATIONS!");
        console.log(
          "You came back to your guild a got a lot of praise from your colleagues!"
        );
        console.log("They prepared a banquet for you!");
        console.log("You are now the hero of the town!");
        console.log("The end!");
        break;
      }
      if (mageHP <= 0) {
        console.log("Your health points reached ZERO");
        console.log("GAME OVER!!!");
        break;
      } else {
        continue;
      }
    }
    if (battleOpition1 == 2) {
      potionsUse = prompt("How many (1-3)? ");
      if (potionsUse > 3) {
        console.log("You don't have that many potions in your inventory");
        continue;
      }
      mageHP += potionsUse * 100;
      console.log(`You have now ${mageHP} HP`);
      console.log("Here it comes the dragon attack!!");
      mageHP = mageHP - dragonDMG;
      console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
      if (dragonHP <= 0) {
        console.log("YOU KILLED THE DRAGON!!!!");
        console.log("CONGRATULATIONS!");
        console.log(
          "You came back to your guild a got a lot of praise from your colleagues!"
        );
        console.log("They prepared a banquet for you!");
        console.log("You are now the hero of the town!");
        console.log("The end!");
        break;
      }
      if (mageHP <= 0) {
        console.log("GAME OVER!!!");
        break;
      } else {
        continue;
      }
    }
    if (battleOpition1 == 3) {
      console.log(`You casted a spell dealing ${mageSpell} damage`);
      dragonHP = dragonHP - mageSpell;
      console.log("Here it comes the dragon attack!!");
      mageHP = mageHP - dragonDMG;
      console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
      if (dragonHP <= 0) {
        console.log("YOU KILLED THE DRAGON!!!!");
        console.log("CONGRATULATIONS!");
        console.log(
          "You came back to your guild a got a lot of praise from your colleagues!"
        );
        console.log("They prepared a banquet for you!");
        console.log("You are now the hero of the town!");
        console.log("The end!");
        break;
      }
      if (mageHP <= 0) {
        console.log("GAME OVER!!!");
        break;
      } else {
        continue;
      }
    }
  }
}

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

class PlayerBase {
  constructor(name, role, hp) {
    this.name = name;
    this.role = role;
    this.hp = hp;
  }
}

class PlayerMage extends PlayerBase {
  constructor(role, damage, hp, spell) {
    super(role, hp);
    this.damage = damage;
    this.spell = spell;
  }
}

class PlayerWarrior extends PlayerBase {
  constructor(role, damage, hp, block) {
    super(role, hp);
    this.damage = damage;
    this.block = block;
  }
}

console.log("Interactive Game!!!");
finalRole = "";
while (true) {
  let name = prompt("Choose your character's name: ");
  console.log("ROLES: Warrior [1], Mage [2]");
  let role = +prompt("Choose your role: ");
  roleChecker(role);
  console.log(`You chose to play as a ${finalRole} named ${name}`);
  loop1 = prompt("Are you sure this is your character? [Y/N]");

  if (loop1.toUpperCase() == "Y") {
    break;
  } else {
    continue;
  }
}

let mageHP = 500;
let mageDMG = 100;
let mageSpell = 200;
let fireDemonHP = 100;
let goblinHP = 200;
let goblinDMG = 100;
let dragonHP = 750;
let dragonDMG = 175;

let warriorHP = 700;
let warriorDMG = 80;
let commanderHP = 200;
let commanderDMG = 100;

let Bag = [];

if (finalRole == "Mage") {
  let playerFinal = new PlayerMage("Mage", 100, 500, 200);
  console.log(playerFinal);
  console.log(
    "You start your game at the library, after spending a whole day reading books about conjuring, it is finally time to practice"
  );
  sleep(4000)
  console.log(
    "You decide to go to your guild's backyard to summon your creature..."
  );
    sleep(4000)
  console.log(
    'After saying  "Exort Quas Exort!" and channel all your mana into the conjuring circle you finally spawn a Fire Demon'
  );
    sleep(4000)
  console.log(
    "But the infernal beast can't be controled, and starts to attack you..."
  );
    sleep(4000)
  let choiceMage1 = prompt("Will you attack it? [Y-N]");
  if (choiceMage1.toUpperCase() == "Y") {
    fireDemonHP -= mageDMG;
    console.log(`The demon HP is now ${fireDemonHP}`);
    sleep(4000)
    console.log("You killed the demon!!!");
    sleep(4000)
    console.log("Level UP!!! You are now level 2");
    sleep(4000)
    console.log("Your attack damage increased to 130");
    sleep(4000)
    mageDMG = mageDMG + 30;
    let itemChoice1 = prompt("You found a old map, pick it up? [Y-N]");
    if (itemChoice1.toUpperCase() == "Y") {
      Bag.push("Old Map");
      console.log('You added "Old Map" to your bag...');
      console.log(`This is your bag right now: ${Bag}`);
      console.log("You start following the map, it led you to a dungeon");
      sleep(4000)
      let choiceMage2 = prompt("Will you enter the dungeon? [Y-N]");
      if (choiceMage2.toUpperCase() == "Y") {
        console.log("You entered the dungeon");
        sleep(4000)
        console.log("The first thing you encounter is a goblin.");
        sleep(4000)
        console.log("He is VERY angry and attacks you!");
        sleep(4000)
        console.log("You managed to dodge his attack");
        sleep(4000)
        goblinHP -= mageDMG;
      }
      console.log(`You did ${mageDMG} damage to him`);
      sleep(2000)
      goblinHP = goblinHP - mageDMG;
      console.log(`He has now ${goblinHP} HP`);
      sleep(2000)
      console.log("IT WAS NOT ENOUGH!");
      sleep(2000)
      console.log(`The goblin attacks you again and dealt ${goblinDMG} damage`);
      sleep(4000)
      mageHP = mageHP - goblinDMG;
      console.log(`You have now ${mageHP} HP`);
      sleep(4000)
      console.log(`You did ${mageDMG} damage to him`);
      sleep(4000)
      goblinHP = goblinHP - mageDMG;
      console.log(`The goblin has now ${goblinHP} HP`);
      sleep(4000)
      console.log("You killed him!!");
      itemChoice2 = prompt(
        `You found 3 HP potions, use now? [Y-N] (you have ${mageHP} HP)`
      );
      console.log("Level UP!!! You are now level 4");
      mageDMG = mageDMG + 100;
      console.log(`Your damage is now ${mageDMG}`);
      if (itemChoice2.toUpperCase() == "Y") {
        mageHP = mageHP + 100;
        console.log(`You healed 100 points of HP, you have now ${mageHP} HP`);
        Bag.push("HP potion");
        Bag.push("HP potion");
        console.log("You have now 2 HP Potions in your inventory:");
        console.log(Bag);
        console.log(
          "As you go deeper in the dungeon you hear a sound as loud as a thunder..."
        );
        sleep(4000)
        console.log(
          "You investigate the strange sound and discovers that it is nothing less than an ANCIENT DRAGON"
        );
        sleep(4000)
        console.log(
          "As the dragon awakes from his eternal sleep he looks at you with anger and once again you hear the thunder sound but way louder than before"
        );
        sleep(4000)
        let choiceMage3 = prompt("Will you attack him? [Y-N]");
        if (choiceMage3.toUpperCase() == "Y") {
          dragonHP = dragonHP - dragonDMG;
          console.log(`You attacked the dragon dealing ${mageDMG}`);
          console.log(`The dragon HP is now ${dragonHP}`);
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        } else {
          console.log("You tried to run away but the dragon blocked the exit!");
          sleep(4000)
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          sleep(4000)
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        }
      } else {
        console.log("You have now 3 HP Potions in your inventory");
        console.log(`Your current HP is ${mageHP}`);
        Bag.push("HP potion");
        Bag.push("HP potion");
        Bag.push("HP potion");
        console.log(Bag);
        console.log(
          "As you go deeper in the dungeon you hear a sound as loud as a thunder..."
        );
        sleep(4000)
        console.log(
          "You investigate the strange sound and discovers that it is nothing less than an ANCIENT DRAGON"
        );
        sleep(4000)
        console.log(
          "As the dragon awakes from his eternal sleep he looks at you with anger and once again you hear the thunder sound but way louder than before"
        );
        sleep(4000)
        let choiceMage3 = prompt("Will you attack him? [Y-N]");
        if (choiceMage3.toUpperCase() == "Y") {
          dragonHP = dragonHP - dragonDMG;
          console.log(`You attacked the dragon dealing ${mageDMG}`);
          console.log(`The dragon HP is now ${dragonHP}`);
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        } else {
          console.log("You tried to run away but the dragon blocked the exit!");
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        }
      }
    } else {
      console.log(
        "You decided to go back to the guild's headquarters to talk to your teacher about what happened"
      );
      sleep(4000)
      console.log(
        "You told him about the map and and that you left it where it was found"
      );
      sleep(4000)
      console.log(
        "He tells you that you should retrieve the map and check the location of the map out as it would be a great experience for you"
      );
      sleep(4000)
      console.log(
        "He gave you a scroll that can be used once to assist you in your journey"
      );
      sleep(4000)
      Bag.push("Magic Scroll");
      console.log(`This is your inventory now: ${Bag}.`);
      sleep(4000)
      console.log(
        "After this long talk you followed the map and reached the entrance of the dungeon."
      );
      sleep(4000)
      console.log("You entered the dungeon");
      sleep(4000)
      console.log("The first thing you encounter is a goblin.");
      sleep(4000)
      console.log("He is VERY angry and attacks you!");
      sleep(4000)
      console.log("You managed to dodge his attack");
      sleep(4000)
      console.log(`You did ${mageDMG} damage to him`);
      sleep(4000)
      goblinHP = goblinHP - mageDMG;
      console.log(`He has now ${goblinHP} HP`);
      console.log("IT WAS NOT ENOUGH!");
      sleep(4000)
      console.log(`The goblin attacks you again and dealt ${goblinDMG} damage`);
      sleep(4000)
      mageHP = mageHP - goblinDMG;
      console.log(`You have now ${mageHP} HP`);
      console.log(`You did ${mageDMG} damage to him`);
      goblinHP = goblinHP - mageDMG;
      console.log(`The goblin has now ${goblinHP} HP`);
      console.log("You killed him!!");
      itemChoice2 = prompt(
        `You found 3 HP potions, use now? [Y-N] (you have ${mageHP} HP)`
      );
      sleep(4000)
      console.log("Level UP!!! You are now level 4");
      sleep(4000)
      mageDMG = mageDMG + 170;
      console.log(`Your damage is now ${mageDMG}`);
      if (itemChoice2.toUpperCase() == "Y") {
        mageHP = mageHP + 100;
        console.log(`You healed 100 points of HP, you have now ${mageHP} HP`);
        Bag.push("HP potion");
        Bag.push("HP potion");
        console.log("You have now 2 HP Potions in your inventory:");
        console.log(Bag);
        console.log(
          "As you go deeper in the dungeon you hear a sound as loud as a thunder..."
        );
        sleep(4000)
        console.log(
          "You investigate the strange sound and discovers that it is nothing less than an ANCIENT DRAGON"
        );
        sleep(4000)
        console.log(
          "As the dragon awakes from his eternal sleep he looks at you with anger and once again you hear the thunder sound but way louder than before"
        );
        sleep(4000)
        let choiceMage3 = prompt("Will you attack him? [Y-N]");
        if (choiceMage3.toUpperCase() == "Y") {
          dragonHP = dragonHP - dragonDMG;
          console.log(`You attacked the dragon dealing ${mageDMG}`);
          console.log(`The dragon HP is now ${dragonHP}`);
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        } else {
          console.log("You tried to run away but the dragon blocked the exit!");
          sleep(4000)
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          sleep(4000)
          //player scroll use on mk 2
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        }
      } else {
        console.log("You have now 3 HP Potions in your inventory");
        console.log(`Your current HP is ${mageHP}`);
        Bag.push("HP potion");
        Bag.push("HP potion");
        Bag.push("HP potion");
        console.log(Bag);
        console.log(
          "As you go deeper in the dungeon you hear a sound as loud as a thunder..."
        );
        sleep(4000)
        console.log(
          "You investigate the strange sound and discovers that it is nothing less than an ANCIENT DRAGON"
        );
        sleep(4000)
        console.log(
          "As the dragon awakes from his eternal sleep he looks at you with anger and once again you hear the thunder sound but way louder than before"
        );
        sleep(4000)
        let choiceMage3 = prompt("Will you attack him? [Y-N]");
        if (choiceMage3.toUpperCase() == "Y") {
          dragonHP = dragonHP - dragonDMG;
          console.log(`You attacked the dragon dealing ${mageDMG}`);
          sleep(4000)
          console.log(`The dragon HP is now ${dragonHP}`);
          sleep(4000)
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          sleep(4000)
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        } else {
          console.log("You tried to run away but the dragon blocked the exit!");
          sleep(4000)
          console.log(`The dragon attacks you dealing ${dragonDMG} damage`);
          sleep(4000)
          mageHP = mageHP - dragonDMG;
          console.log(`You have now ${mageHP} HP`);
          Fight(mageSpell, dragonDMG, dragonHP, mageHP, mageDMG);
        }
      }
    }
  } else {
    console.log("You decide not to attack the demon, and ran away!");
    sleep(4000)
    console.log(
      "An experienced mage was passing by and decided to help you..."
    );
    sleep(4000)
    console.log("He slayed the beast and talked to you");
    sleep(4000)
    console.log(
      "He told you you should be more careful about what you do with your spells."
    );
    sleep(4000)
    console.log("You apologize and asks for some guidance");
    sleep(4000)
    console.log(
      "He decides to take you as his new assistant to help you to level up!"
    );
    sleep(4000)
    console.log("Both of you part on a journey together!");
    sleep(4000)
    console.log("The end!");
  }
}

if (finalRole == "Warrior") {
  let playerFinalWarrior = new PlayerWarrior(
    "Warrior",
    80,
    700,
    "Blocks the enemy attack!"
  );
  console.log(playerFinalWarrior);
  console.log(
    "You are in the middle of a battleground in defense of your country."
  );
  sleep(4000)
  console.log(
    "You hear the sounds of your comrades falling dead on the ground"
  );
  sleep(4000)
  console.log(
    "As you slain your enemies one by one you finally meet with the enemies commander... "
  );
  sleep(4000)
  console.log("You decided to attack him!!");
  sleep(4000)
  commanderHP = commanderHP - warriorDMG;
  console.log(`You did ${warriorDMG} damage to the commander!`);
  sleep(4000)
  console.log(`The commander has now ${commanderHP} HP`);
  sleep(4000)
  console.log("Here it comes the commander's attack!!!");
  warriorHP = commanderDMG - warriorHP;
  while (true) {
    let warriorChoice1 = prompt("What will you do? [1] - Attack, [2] - Block");
    if (warriorChoice1 == 1) {
      console.log("You decided to attack him!!");
      commanderHP = commanderHP - warriorDMG;
      console.log(`You did ${warriorDMG} damage to the commander!`);
      console.log(`The commander has now ${commanderHP} HP`);
      console.log("Here it comes the commander's attack!!!");
      warriorHP = commanderDMG - warriorHP;
      continue;
    } else if (warriorChoice1 == 2) {
      console.log("You blocked the enemie's attack");
      continue;
    }
    if (commanderHP <= 0) {
      console.log("You defeated the commander!!");
      console.log("LEVEL UP!! You are now level 4");
      warriorDMG += 100;
      break;
    }
    if (warriorHP <= 0) {
      console.log("GAMER OVER!!!");
      break;
    }
  }
  console.log('After deafeating the commander you finally won the first battle!!')
  sleep(4000)
  console.log('You are now the hero of your story 3style3!!')
  sleep(4000)
  console.log('https://www.youtube.com/watch?v=NuwWTCrI1V0&ab_channel=draingang')
}
