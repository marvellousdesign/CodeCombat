// CodeCombat > Desert


// Hints from The Mighty Sand Yak
var x = hero.pos.x;
var y = hero.pos.y;
x = x + 10;
hero.moveXY(x, y);
// This increase the numbers stored in x by 10
x += 10;
// You may see it writen in one line, like:
hero.moveXY(hero.pos.x + 10, hero.pos.y);
// ----------------------------------------------------------

// The Mighty Sand Yak
// https://codecombat.com/play/level/the-mighty-sand-yak
// Let yaks get close, then move 10m right to dodge.
// Dodge 4 yaks to complete the level.
while (true) {
	// Get hero's current x and y position.
	// Find the nearest yak.
	var yak = hero.findNearestEnemy();
	// If the distanceTo the yak is less than 10:
	if (hero.distanceTo(yak) < 10) {
		// To move right, add 10 to hero's x position.
		// Use moveXY(x, y) to move!
		hero.moveXY(hero.pos.x + 10, hero.pos.y);
	}
}



// Oasis
// https://codecombat.com/play/level/oasis
// Move right to reach the oasis,
// Move left to avoid nearby yaks.
while (true) {
	var x = hero.pos.x;
	var y = hero.pos.y;
	var enemy = hero.findNearestEnemy();
	if (enemy && hero.distanceTo(enemy) < 10) {
		// Subtract 10 from x to move left.
		// Use moveXY to move to the new x, y position.
		hero.moveXY(x - 10, y);
	} else {
		// Add 10 to x to move right.
		// Use moveXY to move to the new x, y position.
		hero.moveXY(x + 10, y);
	}
}



// Basin Stampede
// https://codecombat.com/play/level/basin-stampede
// Keep moving right, but adjust up and down as you go.
while (true) {
	var enemy = hero.findNearestEnemy();
	var xPos = hero.pos.x + 5;
	var yPos = 17;
	if (enemy) {
		// Adjust y up or down to get away from yaks.
		if (enemy.pos.y > hero.pos.y) {
			// If the Yak is above you, subtract 3 from yPos.
			yPos = yPos - 3;
			hero.moveXY(xPos, yPos);
		} else if (enemy.pos.y < hero.pos.y) {
			// If the Yak is below you, add 3 to yPos.
			yPos = yPos + 3;
			hero.moveXY(xPos, yPos);
		}
	}
	hero.moveXY(xPos, yPos);
}



// Sarven Road
// https://codecombat.com/play/level/sarven-road
// Get to the oasis. Watch out for new enemies: ogre scouts!
// Go up and right by adding to the current X and Y position.
while (true) {
	// If there's an enemy, attack.
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
	} else {
	// Else, keep moving up and to the right.
	hero.moveXY(hero.pos.x + 10, hero.pos.y + 10);
	}
}



// Crossroads
// https://codecombat.com/play/level/crossroads
// Use "fire-trap"s to defeat the ogres.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// If the enemy is to the left of the hero:
		if (enemy.pos.x < hero.pos.x) {
			// buildXY a "fire-trap" on the left X.
			hero.buildXY("fire-trap", 25, 34);
		// If the enemy is to the right of the hero:
		} else if (enemy.pos.x > hero.pos.x) {
			// buildXY a "fire-trap" on the right X.
			hero.buildXY("fire-trap", 55, 34);
		// If the enemy is below the hero:
		} else if (enemy.pos.y < hero.pos.y) {
			// buildXY a "fire-trap" on the bottom X.
			hero.buildXY("fire-trap", 40, 19);
		// If the enemy is above the hero:
		} else if (enemy.pos.y > hero.pos.y) {
			// buildXY a "fire-trap" on the top X.
			hero.buildXY("fire-trap", 40, 49);
		}
	}
	// Move back to the center.
	hero.moveXY(40, 34);
}



// Thunderhooves
// https://codecombat.com/play/level/thunderhooves
// Move right, to the oasis.
// Build a "fence" above or below when you see a yak.
while (true) {
	var yak = hero.findNearestEnemy();
	if (yak) {
		// If yak.pos.y is greater than hero.pos.y
		if (yak.pos.y > hero.pos.y) {
			// buildXY a "fence" 10m below the yak.
			hero.buildXY("fence", yak.pos.x, yak.pos.y - 10);
		// else: buildXY a "fence" 10m above the yak.
		} else {
			hero.buildXY("fence", yak.pos.x, yak.pos.y + 10);
		}
	} else {
		// moveXY right 10m towards the oasis.
		hero.moveXY(hero.pos.x + 10, hero.pos.y);
	}
}



// Fast and Furry-ous
// https://codecombat.com/play/level/fast-and-furry-ous
// Use an event handler so pet and hero will both run!
function petMove() {
	pet.moveXY(50, 21);
}
// Use pet.on("spawn", petMove) instead of petMove().
// This way your hero and pet will run at the same time.
pet.on("spawn", petMove); // ∆ Replace this with pet.on("spawn", petMove)
hero.moveXY(50, 12);



// Interception
// https://codecombat.com/play/level/interception
// Stand between the peasant and the tower.
while (true) {
	var enemy = hero.findNearestEnemy();
	var friend = hero.findNearestFriend();
	// Calculate x by adding friend.pos.x to enemy.pos.x
	// Then divide by 2.
	// Check the guide if you need more help!
	var x = (friend.pos.x + enemy.pos.x) / 2;
	// Now do the same for y
	var y = (friend.pos.y + enemy.pos.y) / 2;
	// Move to the x and y coordinates you calculated.
	hero.moveXY(x, y);
}



// Operation Killdeer
// https://codecombat.com/play/level/operation-killdeer
// Lure the ogres into a trap. These ogres are careful.
// They will only follow if the hero is injured.

// This function checks the hero's health
// and returns a Boolean value.
function shouldRun() {
	if (hero.health < hero.maxHealth / 2) {
		return true;
	} else {
		return false;
	}
}
while (true) {
	// Move to the X only if shouldRun() returns true
	if (shouldRun() === true) {
	hero.moveXY(75, 37);
	// Else, attack!
	} else {
		var enemy = hero.findNearestEnemy();
		hero.attack(enemy);
	}
}



// Crux of the Desert
// https://codecombat.com/play/level/crux-of-the-desert
// Figure out which direction the ogres are coming from.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Left: enemy.pos.x is less than hero.pos.x
		var isLeft = hero.pos.x  > enemy.pos.x;
		// Above: enemy.pos.y is greater than hero.pos.y
		var isAbove = hero.pos.y < enemy.pos.y;
		// Right: enemy.pos.x is greater than hero.pos.x
		var isRight = hero.pos.x  < enemy.pos.x;
		// Below: enemy.pos.y is less than hero.pos.y
		var isBelow = hero.pos.y > enemy.pos.y;
		// If enemy isAbove and isLeft:
		// buildXY() a "fire-trap" at the X mark.
		if (isLeft && isAbove) {
			hero.buildXY("fire-trap", 40 - 20, 34 + 17);
		}
		// If enemy isAbove and isRight:
		// buildXY() a "fire-trap" at the X mark.
		else if (isAbove && isRight) {
			hero.buildXY("fire-trap", 40 + 20, 34 + 17);
		}
		// If enemy isBelow and isLeft:
		// buildXY() a "fire-trap" at the X mark.
		else if (isBelow && isLeft) {
			hero.buildXY("fire-trap", 40 - 20, 34 - 17);
		}
		// If enemy isBelow and isRight:
		// buildXY() a "fire-trap" at the X mark.
		else if (isBelow && isRight) {
			hero.buildXY("fire-trap", 40 + 20, 34 - 17);
		}
		hero.moveXY(40, 34);
	} else {
		hero.moveXY(40, 34);
	}
}



// Medical Attention
// https://codecombat.co m/play/level/medical-attention
// Ask the healer for help when you're under one-half health.
while (true) {
	var currentHealth = hero.health;
	var healingThreshold = hero.maxHealth / 2;
	// If your current health is less than the threshold,
	// move to the healing point and say, "heal me".
	// Otherwise, attack. You'll need to fight hard!
	if (currentHealth < healingThreshold) {
		hero.moveXY(65, 46);
		hero.say("Heal, please!");
	} else {
		var enemy = hero.findNearestEnemy();
		if (enemy !== null) {
			hero.attack(enemy);
		}
	}
}



// Cursed Valley
// https://codecombat.com/play/level/cursed-valley
// The hot sun is draining the hero's health!
while (true) {
	var enemy = hero.findNearestEnemy();
	// Attack if enemy exists AND enemy.team is "ogres"
	// AND enemy.type is "skeleton"
	if (enemy && enemy.team === "ogres" && enemy.type === "skeleton") {
		hero.attack(enemy);
	}
	var item = hero.findNearestItem();
	// Collect if item exists AND item.type is "potion"
	// AND hero.health is less than hero.maxHealth / 4
	if (item && item.type === "potion" && hero.health < hero.maxHealth / 4) {
		hero.moveXY(item.pos.x, item.pos.y);
	}
}



// Sarven Sentry
// https://codecombat.com/play/level/sarven-sentry
// Use different colored flags to perform different tasks.
while (true) {
	var flagGreen = hero.findFlag("green");
	var flagBlack = hero.findFlag("black");
	// If there's a flagGreen...
	if (flagGreen) {
		// Build a "fence" at flagGreen's position.
		hero.buildXY("fence", flagGreen.pos.x, flagGreen.pos.y);
		// Pick up the flag!
		hero.pickUpFlag(flagGreen);
	}
	// If there's a flagBlack...
	if (flagBlack) {
		// Build a "fire-trap" at flagBlack's position.
		hero.buildXY("fire-trap", flagBlack.pos.x, flagBlack.pos.y);
		// Pick up the flag!
		hero.pickUpFlag(flagBlack);
	}
	// Move back to the center.
	hero.moveXY(43, 31);
}



// Kepping Time
// https://codecombat.com/play/level/keeping-time
// Use your new skill to choose what to do: hero.now()
while (true) {
	// If it's the first 10 seconds, attack.
	if (hero.now() < 10) {
		if (enemy !== null) {
			var enemy = hero.findNearestEnemy();
			hero.attack(enemy);
		}
	}
	// Else, if it's the first 35 seconds, collect coins.
	else if (hero.now() < 35) {
		var item = hero.findNearestItem();
		hero.moveXY(item.pos.x, item.pos.y);
	}
	// After 35 seconds, attack again!
	else {
		hero.attack(enemy);
	}
}
// Doesn't join/attack after 35 sec...



// Hoarding Gold
// https://codecombat.com/play/level/hoarding-gold
// Collect 25 gold, and then tell Naria the total.
// Use break to stop collecting when totalGold >= 25.
var totalGold = 0;
while(true) {
	var coin = hero.findNearestItem();
	if(coin) {
		// Pick up the coin.
		hero.moveXY(coin.pos.x, coin.pos.y);
		// Add the coin's value to totalGold.
		// Get its value with:  coin.value
		totalGold += coin.value;
	}
	if (totalGold >= 25) {
		// This breaks out of the loop to run code at the bottom.
		// The loop ends, code after the loop will run.
		break;
	}
}
// Done collecting gold!
hero.moveXY(58, 33);
// Go to Naria and say how much gold you collected.
hero.say("Hi Naria, I collected " + totalGold + " gold!");



// Decoy Drill
// https://codecombat.com/play/level/decoy-drill
// We are field testing a new battle unit: the decoy.
// Build 4 decoys, then report the total to Naria.
var decoysBuilt = 0;
while(true) {
	var coin = hero.findNearestItem();
	if(coin) {
		// Collect the coin!
		hero.moveXY(coin.pos.x, coin.pos.y);
	}
	// Each decoy costs 25 gold.
	// If hero.gold is greater than or equal to 25:
	if (hero.gold >= 25) {
		// buildXY a "decoy"
		hero.buildXY("decoy", hero.pos.x, hero.pos.y);
		// Add 1 to the decoysBuilt count.
		decoysBuilt = decoysBuilt += 1;
	}
	if(decoysBuilt == 4) {
		// Break out of the loop when you have built 4.
		break;
	}
}
hero.say("Done building decoys!");
hero.moveXY(14, 36);
// Say how many decoys you built.
hero.say("Hi Naria, I've built " + decoysBuilt + " decoys.");



// Book Keeper
// https://codecombat.com/play/level/book-keeper
// Fight enemies for 15 seconds.
// Keep count whenever an enemy is defeated.
var defeated = 0;
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
		if (enemy.health <= 0) {
			defeated += 1;
		}
	}
	if (hero.now() > 15) {
		break;
	}
}
// Tell Naria how many enemies you defeated.
hero.moveXY(59, 33);
hero.say(defeated);
// Collect coins until the clock reaches 30 seconds.
while (true) {
	var gold = hero.findNearestItem();
// Tell Naria how much gold you collected.
	if (gold) {
		hero.moveXY(gold.pos.x, gold.pos.y);
	}
	if (hero.now() > 30) {
		break;
	}
}
hero.moveXY(59, 33);
hero.say(hero.gold);
// Fight enemies until the clock reaches 45 seconds.
// Remember to reset the count of defeated enemies!
var defeated = 0;
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
		if (enemy.health <= 0) {
			defeated += 1;
		}
	}
	if (hero.now() > 45) {
		break;
	}
}
// Tell Naria how many enemies you defeated.
hero.moveXY(59, 33);
hero.say(defeated);



// Continuous Alchemy
// https://codecombat.com/play/level/continuous-alchemy
// Race munchkins to the water distilled by Omarn Brewstone!
// Use the continue statement to avoid poison.
while(true) {
	var enemy = hero.findNearestEnemy();
	var item = hero.findNearestItem();
	// If there is no enemy, continue out of the loop.
	if(!enemy) {
		continue;
	}
	// If there is no item, ask for a potion then continue:
	if(!item) {
		hero.say("Give me a drink!");
		continue;
	}
	// If the item.type "poison", continue out of the loop.
	if(item.type == "poison") {
		continue;
	}
	// At this point, the potion must be a bottle of water
	// so moveXY to the potion, then back to the start!
	hero.moveXY(item.pos.x, item.pos.y);
	hero.moveXY(34, 47);
}



// Double Cheek
// https://codecombat.com/play/level/double-cheek
// First, defeat 6 ogres.
// Then collect coins until you have 30 gold.

// This variable is used for counting ogres.
var defeatedOgres = 0;
// This loop is executed while defeatedOgres is less than 6.
while (defeatedOgres < 6) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
		defeatedOgres += 1;
	} else {
		hero.say("Ogres!");
	}
}
// Move to the right side of the map.
hero.moveXY(49, 36);

// This loop is executed while you have less than 30 gold.
while (hero.gold < 30) {
	// Find and collect coins.
	var gold = hero.findNearestItem();
	if (gold) {
		hero.moveXY(gold.pos.x, gold.pos.y);
	// Remove this say() message.
	}
}
// Move to the exit.
hero.moveXY(76, 32);



// Desert Combat
// https://codecombat.com/play/level/desert-combat
// while-loops repeat until the condition is false.
var ordersGiven = 0;
while (ordersGiven < 5) {
	// Move down 10 meters.
	hero.moveXY(hero.pos.x, hero.pos.y - 10);
	// Order your ally to "Attack!" with hero.say
	// They can only hear you if you are on the X.
	hero.say("Attack!");

	// Be sure to increment ordersGiven!
	ordersGiven += 1;
}
while(true) {
	var enemy = hero.findNearestEnemy();
	// When you're done giving orders, join the attack.
	if (enemy) {
		hero.attack(enemy);
	}
}



// Dust
// https://codecombat.com/play/level/dust
// Use a while to loop until you have counted 10 attacks.
var attacks = 0;
while (attacks < 10) {
	// Attack the nearest enemy!
	var enemy = hero.findNearestEnemy();
	if (enemy) {
	hero.attack(enemy);
	}
	// Incrementing means to increase by 1.
	// Increment the attacks variable.
	attacks += 1;
}
// When you're done, retreat to the ambush point.
hero.say("I should retreat!"); //∆ Don't just stand there blabbering!
hero.moveXY(79, 33);



// Don't Rush, Be Quiet
// https://codecombat.com/play/level/dont-rush-be-quiet
// Dodge the cannons and collect 8 gems.
// Watch out, cannons are ready to fire!
// Move slow along a special pattern to confuse them.

// This function returns a value from 0 to 30:
function mod30(n) {
	if (n >= 30) {
		return n - 30;
	} else {
		return n;
	}
}
// This function should return a value from 0 to 40:
function mod40(n) {
	// Use an if-statement to return the correct value.
		if (n >= 40) {
		return n - 40;
	} else {
	return n;
	}
}

// You don't need to change the following code:
while (true) {
	var time = hero.now();
	var x = mod30(time) + 25;
	var y = mod40(time) + 10;
	hero.moveXY(x, y);
}



// Zig Zag and Zoom
// https://codecombat.com/play/level/zig-zag-and-zoom
// Escape from Death Valley!
// Move by with a zigzag pattern using real modulo functions.

// This function returns a value from 0 to 15:
function mod15(n) {
	while (n >= 15) {
		n -= 15;
	}
	return n;
}
// This function should return a value from 0 to 9:
function mod9(n) {
	// While n is greater or equal to 9, subtract 9 from n:
	while (n >= 9) {
		n -= 9;
	}
	return n;
}
// Don't change the following code:
while (true) {
	var time = hero.now();
	var x, y;
	if (time < 30) {
		y = 10 + 3 * mod15(time);
	} else {
		y = 20 + 3 * mod9(time);
	}
	x = 10 + time;
	this.moveXY(x, y);
}



// Desert Delta
// https://codecombat.com/play/level/desert-delta
// Only attack the enemies in the enemyNames array.
// Be sure to attack in order! 0 -> 1 -> 2 -> 3
var enemyNames = ["Kog", "Godel", "Vorobun", "Rexxar"];

hero.attack(enemyNames[0]);
hero.attack(enemyNames[1]);
// Attack enemyNames[2]:
hero.attack(enemyNames[2]);
// Attack the last element:
hero.attack(enemyNames[3]);



// Sarven Savior
// https://codecombat.com/play/level/sarven-savior
// An ARRAY is a list of items.

// This array is a list of your friends' names.
var friendNames = ['Joan', 'Ronan', 'Nikita', 'Augustus'];

// Array indices start at 0, not 1!
var friendIndex = 0;

// Loop over each name in the array.
// The .length property gets the length of the array.
while (friendIndex < friendNames.length) {
	// Use square brackets to get a name from the array.
	var friendName = friendNames[friendIndex];

	// Tell your friend to go home.
	// Use + to connect two strings.
	hero.say(friendName + ', go home!');

	// Increment friendIndex to get the next name.
	friendIndex += 1;
}

// Retreat to the oasis and build a "fence" on the X.
hero.moveXY(25, 30);
hero.buildXY("fence", 29, 30);



// Cubic Minefield
// https://codecombat.com/play/level/cubic-minefield
//Commented out to stop infinite loop.
// Walk through the minefield

// This function returns the number multiplied by the times
function mult(number, times) {
	var total = 0;
	while (times > 0) {
		total += number;
		times -= 1;
	}
	return total;
}

// This function returns the number to the exponent power.
function power(number, exponent) {
	var total = 1;
	// Complete the function.
	while (exponent > 0) {
		total = number * total;
		exponent = exponent - 1;
	}
	return total;
}

// Don't change the following code
// You can find coefficients for the equation on the tower
var tower = hero.findFriends()[0];
var a = tower.a;
var b = tower.b;
var c = tower.c;
var d = tower.d;
var x = hero.pos.x;

while (true) {
	// To find the path use a cubic equation
	var y = a * power(x, 3) + b * power(x, 2) + c * power(x, 1) + d * power(x, 0);
	hero.moveXY(x, y);
	x = x + 5;
}

// Solution thanks to this, as I had quite an issue with this..
// https://github.com/vadim-job-hg/CodeCombat/blob/master/Desert/CubicMinefield.py



// Safety Blanket
// https://codecombat.com/play/level/safety-blanket
// This is an array of nearby names!
// Enemies are at the 0, 2, 4, and 6 indexes of the array.
var names = [
	"Thabt", "Victor", // 0, 1
	"Leerer", "Alianor", // 2, 3
	"Gorylo", "Millicent", // 4, 5
	"Weeb", "Brom" // 6, 7
];
// Attack the first two ogres at indexes 0 and 4.
hero.attack(names[0]);
hero.attack(names[4]);
// Attack the ogre at index 2:
hero.attack(names[2]);
// Attack the ogre at index 6:
hero.attack(names[6]);



// Lurkers
// https://codecombat.com/play/level/lurkers
// findEnemies returns a list of all your enemies.

// Only attack shamans. Don't attack yaks!
var enemies = hero.findEnemies();
var enemyIndex = 0;

// Wrap this section in a while loop to iterate all enemies.
// While the enemyIndex is less than the length of enemies
while (enemyIndex < enemies.length) {
	enemyIndex += 1;
	var enemy = enemies[enemyIndex];
	if (enemy.type == 'shaman') {
		while (enemy.health > 0) {
			hero.attack(enemy);
		}
	}
}
// Remember to increment enemyIndex
// **Some how I'm getting a type error?



// Team-Work
// https://codecombat.com/play/level/team-work
// Gems will disappear soon. You'll need help!

// findItems() returns an array of items.
var items = hero.findItems();

// Get the first gem from the array.
// Don't forget that the first index is 0.
var gem0 = items[0];

// # Tell Bruno to get gem0
hero.say("Bruno " + gem0);

// You can reference the gem without a variable.
hero.say("Matilda " + items[1]);

// Create a variable for the last gem, items[2]:
var gem2 = items[2];
// Move to that gem's position using moveXY()
hero.moveXY(gem2.pos.x, gem2.pos.y);



// Bank Raid
// https://codecombat.com/play/level/bank-raid
// Wait for ogres, defeat them and collect gold.
while(true) {
	var enemies = hero.findEnemies();
	// enemyIndex is used to iterate the enemies array.
	var enemyIndex = 0;
	// While enemyIndex is less than enemies.length
	while (enemyIndex < enemies.length) {
		// Attack the enemy at enemyIndex
		var enemy = enemies[enemyIndex];
		hero.attack(enemy);
		// Increase enemyIndex by one.
		enemyIndex++;
	}
	var coins = hero.findItems();
	// coinIndex is used to iterate the coins array.
	var coinIndex = 0;
	while (coinIndex < coins.length) {
		// Get a coin from the coins array using coinIndex
		var coin = coins[coinIndex];
		// Collect that coin.
		hero.moveXY(coin.pos.x, coin.pos.y);
		// Increase coinIndex by one.
		coinIndex++;
	}
}



// Wandering Souls
// https://codecombat.com/play/level/wandering-souls
// Defeat skeletons and collect lightstones.
while (true) {
	var enemies = hero.findEnemies();
	var enemyIndex = 0;
	while (enemyIndex < enemies.length) {
		var enemy = enemies[enemyIndex];
		// Attack while enemy has health.
		while (enemy.health > 0) {
			hero.attack(enemy);
		}
		enemyIndex += 1;
	}
	var items = hero.findItems();
	var itemIndex = 0;
	// Iterate over all items.
	while (itemIndex < items.length) {
		var item = items[itemIndex];
		// While the distance greater than 2:
		while(hero.distanceTo(item) > 2) {
			// Try to take the item.
			hero.moveXY(item.pos.x, item.pos.y);
		}
		// Don't forget to increase itemIndex.
		itemIndex += 1;
	}
}



// Coordinated Defense
// https://codecombat.com/play/level/coordinated-defense
// Protect the peasants from the ogres.
while (true) {
	// Get an array of enemies.
	var enemies = hero.findEnemies();
	// If the array is not empty.
	if (enemies.length > 0) {
		// Attack the first enemy from "enemies" array.
		hero.attack(enemies[0]);
		// Return to the start position.
		hero.moveXY(40, 20);
	}
}



// Recruiting Queue
// https://codecombat.com/play/level/recruiting-queue
// Call peasants one after another.
// Neutral units are detected as enemies.
var neutrals = hero.findEnemies();
while (true) {
	if (neutrals.length) {
		// Say the first unit in the neutrals array
		hero.say(neutrals[0]);
	} else {
		hero.say("Nobody here");
	}
	// Reassign the neutrals variable using findEnemies()
	neutrals = hero.findEnemies();
}



// Second Gem
// https://codecombat.com/play/level/second-gem
// One gem is safe, the others are bombs.
// But you know the answer: always take the second.
while (true) {
	var items = hero.findItems();
	// If the length of items is greater or equal to 2:
	if (items.length > 2) {
		// Move to the second item in items
		var item = items[1];
		hero.moveXY(item.pos.x, item.pos.y);
	// Else:
	} else {
		// Move to the center mark.
		hero.moveXY(40, 34);
	}
}



// Sarven Shepherd
// https://codecombat.com/play/level/sarven-shepherd
// Use while loops to pick out the ogre

while(true) {
	var enemies = hero.findEnemies();
	var enemyIndex = 0;

	// Wrap this logic in a while loop to attack all enemies.
	// Find the array's length with:  enemies.length
	while(enemyIndex < enemies.length) {
		var enemy = enemies[enemyIndex];
		// "!=" means "not equal to."
		if (enemy.type != "sand-yak") {
		// While the enemy's health is greater than 0, attack it!
			if (enemy.health > 0) {
				if (hero.isReady("bash")) {
					hero.bash(enemy);
				} else {
					hero.attack(enemy);
				}
			}
		}
	enemyIndex++;
	}
	// Between waves, move back to the center.
	hero.moveXY(40, 32);
}



//
// https://codecombat.com/play/level/
