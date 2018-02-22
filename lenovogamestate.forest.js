// https://lenovogamestate.com/codeplay/

// Defense of Plainswood
// Build two fences on the marks to keep the villagers safe!
// Hover your mouse over the world to get X,Y coordinates.
hero.buildXY("fence", 40, 52);
hero.buildXY("fence", 40, 20);


// Winding Trail
// Go to the end of the path and build a fence on the X
// Use your moveXY(x, y) function.
// It's the first point of the path.
hero.moveXY(36, 59);
// Move at the next points of the path.
hero.moveXY(36, 13);
// Build a fence to stop the ogre.
hero.buildXY("fence", 72, 25);
hero.moveXY(79, 17);


// Woodland Cubbies
// Navigate through the woods, but be on the lookout!
// These forest cubbies may contain ogres!
hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// The if-statement will check if a variable has an ogre.
if (enemy) {
	hero.attack(enemy);
	hero.attack(enemy);
}
hero.moveXY(49, 51);
var enemy = hero.findNearestEnemy();
if (enemy) {
	// Attack the enemy here:
	hero.attack(enemy);
	hero.attack(enemy);
}
hero.moveXY(58, 14);
var enemy = hero.findNearestEnemy();
// Use an if-statement to check if enemy exists:
if (enemy) {
	// If enemy exists, attack it:
	hero.attack(enemy);
	hero.attack(enemy);
}


// If-Stravaganza
// Defeat the ogres from within their own camp!
while (true) {
	var enemy = hero.findNearestEnemy();
	// Use an if-statement to check if an enemy exists:
	if (enemy) {
		// Attack the enemy if it exists:
		hero.attack(enemy);
		hero.attack(enemy);
	}
}


// Back to Back
// Stay in the middle and defend!
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Either attack the enemy...
		hero.attack(enemy);
		hero.attack(enemy);
	} else {
		// ... or move back to your defensive position.
		hero.moveXY(40, 34);
	}
}


// Woodland Cleaver
// Use your new "cleave" skill as often as you can.
hero.moveXY(23, 23);
while (true) {
	var enemy = hero.findNearestEnemy();
	if (hero.isReady("cleave")) {
		// Cleave the enemy!
		hero.cleave(enemy);
	} else {
		// Else (if cleave isn't ready), do your normal attack.
		hero.attack(enemy);
	}
}


// Dueling Grounds (simple w/ weak weapons/armor)
// Defeat the enemy hero in a duel!
loop {
	// Find and attack the enemy inside a loop.
	// When you're done, submit to the multiplayer ladder!
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
}

// Dueling Grounds (better helm)
// Defeat the enemy hero in a duel!
loop {
	// Find and attack the enemy inside a loop.
	// When you're done, submit to the multiplayer ladder!
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		var distance = hero.distanceTo(enemy);
		var ready = hero.isReady("cleave");
		if (distance < 10 && ready) {
			hero.cleave(enemy);
		} else if (enemy) {
			hero.attack(enemy);
			hero.attack(enemy);
		}
	}
}


// Backwoods Standoff
// These Munchkins are scared of the hero!
// Say something and they'll back off.
// However, once there are enough Munchkins, they will gang up and ambush! Be careful!
// Whenever you can, cleave to clear the mass of enemies.
while (true) {
	// Use an if-statement with isReady to check "cleave":
	var ready = hero.isReady("cleave");
	var enemy = hero.findNearestEnemy();
	if (ready) {
		// Cleave!
		hero.cleave(enemy);
		// Else, if cleave is not ready:
	} else {
		// Say something to scare the munchkins:
		hero.say("Scare!");
		hero.attack(enemy);
		hero.shield();
	}
}


// Range Finder
// Ogres are scouting the forest!
// Use the distanceTo method to find where the enemies are.
// Say the distance for each enemy to tell the artillery where to fire!
var enemy1 = "Gort";
var distance1 = hero.distanceTo(enemy1);
hero.say(distance1);
var enemy2 = "Smasher";
var distance2 = hero.distanceTo(enemy2);
// Say the distance2 variable!
hero.say(distance2);
// Find and say the distance to the rest of the enemies:
// Don't shoot at your friends!
var enemy3 = "Gorgnub";
var distance3 = hero.distanceTo(enemy3);
hero.say(distance3);


// Peasant Protection
while (true) {
	var enemy = hero.findNearestEnemy();
	var distance = hero.distanceTo(enemy);
	if (distance < 10) {
		// Attack if they get too close to the peasant.
		hero.attack(enemy);
	}
	// Else, stay close to the peasant! Use else.
	hero.moveXY(40, 37);
}


// Maniac Munchkins
// Another chest in the field for the hero to break open!
// Attack the chest to break it open.
// Some munchkins won't stand idly by while you attack it!
// Defend yourself when a munchkin gets too close.
while (true) {
	var enemy = hero.findNearestEnemy();
	var distance = hero.distanceTo(enemy);
	if (hero.isReady("cleave")) {
		// First priority is to cleave if it's ready:
		hero.cleave(enemy);
	} else if (distance < 5) {
		// Attack the nearest munchkin that gets too close:
		hero.attack(enemy);
	} else {
		// Otherwise, try to break open the chest:
		hero.attack("Chest");
	}
}


// Forest Fire Dancing
// In this level the evilstone is bad! Avoid them walking the other direction.
while (true) {
	var evilstone = hero.findNearestItem();
	if (evilstone) {
		var pos = evilstone.pos;
		if (pos.x == 34) {
			// If the evilstone is on the left, go to the right side.
			hero.moveXY(46, 22);
		} else {
			// If the evilstone is on the right, go to the left side.
			hero.moveXY(34, 22);
		}
	} else {
		// If there's no evilstone, go to the middle.
		hero.moveXY(40, 22);
	}
}


// Village Rover
// This defines a function called findAndAttackEnemy
function findAndAttackEnemy() {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
	}
}
// This code is not part of the function.
while (true) {
	// Now you can patrol the village using findAndAttackEnemy
	hero.moveXY(35, 34);
	findAndAttackEnemy();
	// Now move to the right entrance.
	hero.moveXY(60, 31);
	// Use findAndAttackEnemy
	findAndAttackEnemy();
}


// Backwoods Fork
// Incoming ogres!
// Use the checkAndAttack function to make your code easy to read.
// This function has a parameter.
// An parameter is a way of passing information into a function.
function checkAndAttack(target) {
	// The 'target' parameter is just a variable!
	// It contains the argument when the function was called.
	if (target) {
		hero.attack(target);
	}
	hero.moveXY(43, 34);
}
while (true) {
	hero.moveXY(58, 52);
	var topEnemy = hero.findNearestEnemy();
	checkAndAttack(topEnemy);
	// Move to the bottom X mark.
	hero.moveXY(58, 16);
	// Create a variable named bottomEnemy and find the nearest enemy.
	var bottomEnemy = hero.findNearestEnemy();
	// Use the checkAndAttack function, and include the bottomEnemy variable.
	checkAndAttack(bottomEnemy);
}


// Leave it to Cleaver
// This shows how to define a function called cleaveWhenClose
// The function defines a parameter called target
function cleaveWhenClose(target) {
	if (hero.distanceTo(target) < 5) {
		// Put your attack code here
		// If cleave is ready, then cleave target
		if (hero.isReady("cleave")) {
			hero.cleave(target);
		} else {
			// else, just attack target!
			hero.attack(target);
		}
	}
}
// This code is not part of the function.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Note that inside cleaveWhenClose, we refer to the enemy as target.
		cleaveWhenClose(enemy);
	}
}


// Backwoods Buddy
// You now have a pet!
function speak(event) {
	// Your pet should respond with pet.say()
	pet.say("meow");
}
// This tells your pet to run the speak() function when she hears something
pet.on("hear", speak);
// Talk to your pet!
hero.say("Hello Kitty");


// Friend and Foe
// Peasants and peons are gathering in the forest.
// Command the peasants to battle and the peons to go away!
while (true) {
	var friend = hero.findNearestFriend();
	if (friend) {
		hero.say("To battle, " + friend.id + "!");
	}
	// Now find the nearest enemy and tell them to go away.
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.say("Go away, " + enemy.id + "!");
	}
}


// Go Fetch
// You've been caught in a burl trap!
// Send your pet to fetch the health potions!
function goFetch() {
	// You can use loops in a handler function.
	while (true) {
		var potion = hero.findNearestItem();
		if (potion) {
			// Use pet.fetch() to have your pet fetch a potion:
			pet.fetch(potion);
		}
	}
}
// When your pet is summoned, it triggers a "spawn" event.
// This tells your pet to run goFetch() at the start of the level
pet.on("spawn", goFetch);


// The Wizard's Door
// Move to Laszlo and get his secret number.
hero.moveXY(30, 13);
var las = hero.findNearestFriend().getSecret();
// Add 7 to Laszlo's number to get Erzsebet's number.
// Move to Erzsebet and say her magic number.
var erz = las + 7;
hero.moveXY(17, 26);
hero.say(erz);
// Divide Erzsebet's number by 4 to get Simonyi's number.
// Go to Simonyi and tell him his number.
var sim = erz / 4;
hero.moveXY(30, 39);
hero.say(sim);
// Multiply Simonyi's number by Laszlo's to get Agata's number.
// Go to Agata and tell her her number.
var aga = sim * las;
hero.moveXY(43, 26);
hero.say(aga);


// Coincrumbs
// Follow the trail of coins to the red X at the exit.
while (true) {
	// This finds the nearest item.
	var item = hero.findNearestItem();
	if (item) {
		// This stores the item's pos, or position in a variable.
		var itemPosition = item.pos;
		// Put the X and Y coordinates of the item into variables.
		var itemX = itemPosition.x;
		var itemY = itemPosition.y;
		// Now, use moveXY to move to itemX and itemY:
		hero.moveXY(itemX, itemY);
	}
}


// Blind Distance
// It's an ambush and your only weapon is the old, blind wizard.
// Your task is to tell him the distance to the coming ogres.
// This function finds the nearest enemy and returns the distance to it.
// If there is no enemy, the function returns 0.
function nearestEnemyDistance() {
	var enemy = hero.findNearestEnemy();
	var result = 0;
	if (enemy) {
		result = hero.distanceTo(enemy);
	}
	return result;
}
while (true) {
	// Call nearestEnemyDistance() and
	// save the result in the variable "distance"
	var distance = nearestEnemyDistance();
	// If the variable "distance" is greater than 0:
	if (distance > 0) {
		// Say the value of "distance" variable.
		hero.say(distance);
	}
}


// Hit and Freeze
// You are trapped. Don't move, it'll be painful.
// Attack ogres only when they're within reach.
// This function checks if the enemy is in your attack range.
// The function returns a boolean value:  true or false
function inAttackRange(enemy) {
	var distance = hero.distanceTo(enemy);
	// Almost all swords have attack range of 3.
	if (distance <= 3) {
		return true;
	} else {
		return false;
	}
}
while (true) {
	// Find the nearest enemy and store it in a variable.
	var enemy = hero.findNearestEnemy();
	// Call inAttackRange(enemy), with the enemy as the argument
	// and save the result in the variable canAttack.
	var canAttack = inAttackRange(enemy);
	// If the result stored in canAttack is true, then attack!
	if (canAttack) {
		hero.attack(enemy);
	}
}


// Salted Earth
// Ogres are attacking a nearby settlement!
// Be careful, though, for the ogres have sown the ground with poison.
// Gather coins and defeat the ogres, but avoid the burls and poison!
while(true) {
	var enemy = hero.findNearestEnemy();
	if(enemy.type == "munchkin" || enemy.type == "thrower") {
		hero.attack(enemy);
	}
	var item = hero.findNearestItem();
	// Check the item type to make sure the hero doesn't pick up poison!
	// Look for types: 'gem' and 'coin'
	if (item.type == "gem" || item.type == "coin" || item.type != "poison") {
		hero.moveXY(item.pos.x, item.pos.y);
	}
}


// Spring Thunder
// Certain coins and gems attract lightning.
// The hero should only grab silver and blue gems.
while (true) {
	var item = hero.findNearestItem();
	// A silver coin has a value of 2.
	// Collect if item.type is equal to "coin"
	// AND item.value is equal to 2.
	if (item.type == "coin" && item.value == 2) {
		hero.moveXY(item.pos.x, item.pos.y);
	}
	// A blue gem has a value of 10.
	// Collect if item.type is equal to "gem"
	// AND item.value is equal to 10.
	if (item.type == "gem" && item.value == 10) {
		hero.moveXY(item.pos.x, item.pos.y);
	}
}


// Usual Day
// Defeat munchkins, collect coins. Everything as usual.
// Use AND to check existence and type in one statement.
while (true) {
	var enemy = hero.findNearestEnemy();
	// With AND, the type is only checked if enemy exists.
	if (enemy && enemy.type == "munchkin") {
		hero.attack(enemy);
	}
	// Find the nearest item.
	var item = hero.findNearestItem();
	// Collect item if it exists and its type is "coin".
	if (item && item.type == "coin") {
		hero.moveXY(item.pos.x, item.pos.y);
	}
}


// Passing Through
// Don't insult this tribe of peaceful ogres.
while(true) {
	var item = hero.findNearestItem();
	if(item) {
		// If item.type IS NOT EQUAL TO "gem"
		if(item.type != "gem") {
			// Then follow your pet wolf.
			hero.moveXY(pet.pos.x, pet.pos.y);
			// Else:
		} else {
			// Move to the gem's position.
			hero.moveXY(item.pos.x, item.pos.y);
		}
	}
}


// Useful Competitors
// The coin field has been seeded with vials of deadly poison.
// Ogres are attacking, while their peons are trying to steal your coins!
// Attack the enemy only if the type is NOT equal to "peon".
while(true) {
	var enemy = hero.findNearestEnemy();
	if(enemy) {
		if(enemy.type != "peon") {
			hero.attack(enemy);
		}
	}
	var item = hero.findNearestItem();
	if(item) {
		// Gather the item only if the type is NOT equal to "poison".
		if(item.type != "poison") {
			hero.moveXY(item.pos.x, item.pos.y);
		}
	}
}


// Logical Path
// Get two secret true/false values from the wizard.
hero.moveXY(14, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
// If BOTH secretA and secretB are true, take the high path; otherwise, take the low path.
// Check the guide for notes on how to write logical expressions.
var secretC = secretA && secretB;
if (secretC) {
	hero.moveXY(20, 33);
} else {
	hero.moveXY(20, 15);
}
hero.moveXY(26, 24);
// If EITHER secretA or secretB is true, take the high path.
var secretD = secretA || secretB;
if (secretD) {
	hero.moveXY(32, 33);
} else {
	hero.moveXY(32, 15);
}
hero.moveXY(38, 24);
// If secretB is NOT true, take the high path.
var secretE = !secretB;
if (secretE) {
	hero.moveXY(44, 33);
} else {
	hero.moveXY(44, 15);
}
hero.moveXY(50, 24);


// Return to Thornbush Farm
// https://codecombat.com/play/level/return-to-thornbush-farm
// The function maybeBuildTrap defines TWO parameters!
function maybeBuildTrap(x, y) {
	// Use x and y as the coordinates to move to.
	hero.moveXY(x, y);
	var enemy = hero.findNearestEnemy();
	if(enemy) {
		// Use buildXY to build a "fire-trap" at the given x and y.
		hero.buildXY("fire-trap", x, y);
	}
}
while(true) {
	// This calls maybeBuildTrap, with the coordinates of the top entrance.
	maybeBuildTrap(43, 50);
	// Now use maybeBuildTrap at the left entrance!
	maybeBuildTrap(25, 34);
	// Now use maybeBuildTrap at the bottom entrance!
	maybeBuildTrap(43, 20);
}


// Coinucopia
// Press Submit when you are ready to place flags.
// Flag buttons appear in the lower left after pressing Submit.
while(true) {
	var flag = hero.findFlag();
	if (flag) {
		hero.pickUpFlag(flag);
	} else {
		hero.say("Place a flag for me to go to.");
	}
}


// Copper Meadows
// Collect all the coins in each meadow.
// Use flags to move between meadows.
// Press Submit when you are ready to place flags.
while(true) {
	var flag = hero.findFlag();
	if (flag) {
		// Pick up the flag.
		hero.pickUpFlag(flag);
	} else {
		// Automatically move to the nearest item you see.
		var item = hero.findNearestItem();
		if (item) {
			hero.moveXY(item.pos.x, item.pos.y);
		}
	}
}


// Drop the Flag
// https://codecombat.com/play/level/drop-the-flag
// Put flags where you want to build traps.
// When you're not building traps, pick up coins!
while(true) {
	var flag = hero.findFlag();
	if (flag) {
		// How do we get flagX and flagY from the flag's pos?
		// (Look below at how to get x and y from items.)
		hero.moveXY(flag.pos.x, flag.pos.y);
		hero.buildXY("fire-trap", flag.pos.x, flag.pos.y);
		hero.pickUpFlag(flag);
	} else {
		var item = hero.findNearestItem();
		if (item) {
			hero.moveXY(item.pos.x, item.pos.y);
		}
	}
}


// Mind the Trap
// If you try to attack a distant enemy, your hero will charge toward it, ignoring all flags.
// You'll need to make sure you only attack enemies who are close to you!
while(true) {
	var flag = hero.findFlag();
	var enemy = hero.findNearestEnemy();
	if(flag) {
		// Pick up the flag.
		hero.moveXY(flag.pos.x, flag.pos.y);
		hero.pickUpFlag(flag);
		hero.say("I should pick up the flag.");
	} else if (enemy) {
		// Only attack if the enemy distance is < 10 meters
		if (hero.distanceTo(enemy) < 10) {
			hero.attack(enemy);
			var ready = hero.isReady("cleave");
			if (ready) {
				hero.cleave(enemy);
			}
		}
	}
}


// Signal Corpse
// You can use flags to choose different tactics.
// In this level, the green flag will mean you want to move to the flag.
// The black flag means you want to cleave at the flag.
// The doctor will heal you at the Red X
while(true) {
	var green = hero.findFlag("green");
	var black = hero.findFlag("black");
	var enemy = hero.findNearestEnemy();
	if (green) {
		hero.pickUpFlag(green);
	} else if (black && hero.isReady("cleave")) {
		hero.pickUpFlag(black);
		// Cleave!
		hero.cleave(enemy);
	} else if (enemy && hero.distanceTo(enemy) < 10) {
		// Attack!
		hero.attack(enemy);
	}
}


// Rich Forager
// Use "if" and "else if" to handle any situation.
// Put it all together to defeat enemies and pick up coins!
// Make sure you bought great armor from the item shop! 400 health recommended.
while(true) {
	var flag = hero.findFlag();
	var enemy = hero.findNearestEnemy();
	var item = hero.findNearestItem();
	if (flag) {
		// What happens when I find a flag?
		hero.pickUpFlag(flag);
	}
	else if (enemy) {
		// What happens when I find an enemy?
		hero.attack(enemy);
	}
	else if (item) {
		// What happens when I find an item?
		hero.moveXY(item.pos.x, item.pos.y);
	}
}


// Multiplayer Treasure Grove
// Be the first to 100 gold!
// If you are defeated, you will respawn at 67% gold.
while(true) {
	//  Find coins and/or attack the enemy.
	// Use flags and your special moves to win!
	var flag = hero.findFlag("green");
	var item = hero.findNearestItem();
	var enemy = hero.findNearestEnemy();
	if (flag) {
		hero.pickUpFlag(flag);
	} else if (item) {
		hero.moveXY(item.pos.x, item.pos.y);
	} else if (enemy) {
		if (hero.isReady("cleave")) {
			hero.cleave(enemy);
		}
		hero.attack(enemy);
	}
} // **it doesn't seem to attack Simple CPU


// Siege of Stonehold
while(true) {
	var green = hero.findFlag("green");
	var black = hero.findFlag("black");
	var enemy = hero.findNearestEnemy();
	if (green) {
		hero.pickUpFlag(green);
	} else if (black && hero.isReady("cleave")) {
		hero.pickUpFlag(black);
		// Cleave!
		hero.cleave(enemy);
	} else if (enemy && hero.distanceTo(enemy) < 10) {
		// Attack!
		hero.attack(enemy);
	}
}


//----- Blue levels -----

// One Wrong Step
// The hero is all confused!
// Correct their path so they don't walk on the mines.
hero.moveXY(11, 35);
hero.moveXY(35, 25);
hero.moveXY(40, 56);
hero.moveXY(77, 58);


// Forest Evasion
// There is a headhunter in the area!
// Move around the forest to avoid his line-of-sight.
while (true) {
	hero.moveXY(56, 44);
	hero.moveXY(40, 56);
	// Use moveXY to keep moving around the forest to survive
	hero.moveXY(24, 44);
	hero.moveXY(24, 23);
	hero.moveXY(40, 12);
	hero.moveXY(56, 24);
}


// Patrol Buster
// Remember that enemies may not yet exist.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// If there is an enemy, attack it!
		hero.attack(enemy);
		hero.attack(enemy);
	}
}


// Thumb Biter
// If-statement code only runs when the if’s condition is true.
// In a condition, == means "is equal to."
if (2 + 2 == 4) {
	hero.say("Hey!");
}
if (2 + 3 == 5) {
	hero.say("Yes, you!");
}
// Change the condition here to make your hero say "Come at me!"
if (3 + 4 == 7) {  // ∆ Make this true.
	hero.say("Come at me!");
}
if (20 == 20) {  // ∆ Make this true.
	// Add one more taunt to lure the ogre. Be creative!
	hero.say("Hey you, your mom has a sweet ass!");
}


// Gems or Death
// If-statement code only runs when the if’s condition is true.
// Fix all the if-statements to beat the level.
// == means "is equal to".
if (1 + 1 + 2 == 3) {  // ∆ Make this false.
	hero.moveXY(5, 15);  // Move to the first mines.
}
if (2 + 3 == 5) {  // ∆ Make this true.
	hero.moveXY(15, 40);  // Move to the first gem.
}
// != means "is not equal to".
if (2 + 2 == 4) {  // ∆ Make this true.
	hero.moveXY(25, 15);  // Move to the second gem.
}
// < means "is less than".
if (2 + 0 < 3) {  // ∆ Make this true.
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
}
if (6 < 4) {  // ∆ Make this false.
	hero.moveXY(40, 55);
}
if (false) {  // ∆ Make this false.
	hero.moveXY(50, 10);
}
if (true) {  // ∆ Make this true.
	hero.moveXY(55, 25);
}


// Village Guard
// Patrol the village entrances.
// If you find an enemy, attack it.
while (true) {
	hero.moveXY(35, 34);
	var leftEnemy = hero.findNearestEnemy();
	if (leftEnemy) {
		hero.attack(leftEnemy);
		hero.attack(leftEnemy);
	}
	// Now move to the right entrance.
	hero.moveXY(60, 31);
	// Find the rightEnemy.
	// Use "if" to attack if there is a rightEnemy.
	var leftEnemy = hero.findNearestEnemy();
	if (leftEnemy) {
		hero.attack(leftEnemy);
		hero.attack(leftEnemy);
	}
}


// Ogre Encampment
// If there is an enemy, attack it.
// Otherwise, attack the chest!
while (true) {
	// Use if/else.
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
		hero.attack(enemy);
	} else {
		hero.attack("Chest");
	}
}


// Thornbudh Farm
// Patrol the village entrances.
// Build a "fire-trap" when you see an ogre.
// Don't blow up any peasants!
while(true) {
	hero.moveXY(43, 50);
	var top = hero.findNearestEnemy();
	if (top) {
		hero.buildXY("fire-trap", 43, 50);
	}
	hero.moveXY(25, 34);
	var left = hero.findNearestEnemy();
	// Check if left exists.
	if (left) {
		// Build a trap at 25, 34 if the enemy exists.
		hero.buildXY("fire-trap", 25, 34);
	}
	hero.moveXY(43, 20);
	// Set a variable for the bottom enemy.
	var bottom = hero.findNearestEnemy();
	// Check if the bottom enemy exists.
	if (bottom) {
		// Build a trap if an enemy exists.
		hero.buildXY("fire-trap", 43, 20);
	}
}
