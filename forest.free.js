// CodeCombat > Forest

// Defense of Plainswood
// https://codecombat.com/play/level/defense-of-plainswood
// Build two fences on the marks to keep the villagers safe!
// Hover your mouse over the world to get X,Y coordinates.
hero.buildXY("fence", 40, 52);
hero.buildXY("fence", 40, 20);



// One Wrong Step
// https://codecombat.com/play/level/one-wrong-step
// The hero is all confused!
// Correct their path so they don't walk on the mines.
hero.moveXY(11, 35);
hero.moveXY(35, 25);
hero.moveXY(40, 56);
hero.moveXY(77, 58);



// Winding Trail
// https://codecombat.com/play/level/winding-trail
// Go to the end of the path and build a fence on the X
// Use your moveXY(x, y) function.

// It's the first point of the path.
hero.moveXY(36, 59);
// Move at the next points of the path.
hero.moveXY(36, 13);
// Build a fence to stop the ogre.
hero.buildXY("fence", 72, 25);
hero.moveXY(79, 17);



// Forest Evasion
// https://codecombat.com/play/level/forest-evasion
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



// Woodland Cubbies
// https://codecombat.com/play/level/woodland-cubbies
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



// Patrol Buster
// https://codecombat.com/play/level/patrol-buster
// Remember that enemies may not yet exist.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// If there is an enemy, attack it!
		hero.attack(enemy);
		hero.attack(enemy);
	}
}



// Picnic Buster
// https://codecombat.com/play/level/picnic-buster
// Remember that enemies may not yet exist.
while (true) {
	var enemy = hero.findNearestEnemy();
	// If there is an enemy, attack it!
	if (enemy) {
		hero.attack(enemy);
		hero.attack(enemy);
	}
}



// Eagle Eye
// https://codecombat.com/play/level/eagle-eye
// shouldAttack(target) is a yes/no question: Should I attack target?
while (true) {
	var target = hero.findNearestEnemy();
	// This if statement uses a custom condition
	if (hero.shouldAttack(target)) {
		// Attack the target.
		hero.attack(target);
	}
}



// Gems or Death
// https://codecombat.com/play/level/gems-or-death
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



// Thumb Biter
// https://codecombat.com/play/level/thumb-biter
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



// If-Stravaganza
// https://codecombat.com/play/level/if-stravaganza
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



// Village Guard
// https://codecombat.com/play/level/village-guard
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



// Back to Back
// https://codecombat.com/play/level/back-to-back
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



// Ogre Encampment
// https://codecombat.com/play/level/ogre-encampment
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



// Woodland Cleaver
// https://codecombat.com/play/level/woodland-cleaver
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

// Dueling Grounds
// https://codecombat.com/play/level/dueling-grounds
// Defeat the enemy hero in a duel!
loop {
	// Find and attack the enemy inside a loop.
	// When you're done, submit to the multiplayer ladder!
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
}




// Elseweyr
// https://codecombat.com/play/level/elseweyr
// Your cleave is on a 10 second cooldown.
// Use an else-statement to defend yourself while recharging.
while (true) {
	var enemy = hero.findNearestEnemy();
	if (hero.isReady("cleave")) {
		hero.cleave();
		// Write else: to do something when cleave isn't ready:
	} else {
		hero.shield();
	}
	// Be sure to attack the enemy:
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
}



// Backwoods Standoff
// https://codecombat.com/play/level/backwoods-standoff
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
		hero.shield();
	}
}


// Range Finder
// https://codecombat.com/play/level/range-finder
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
// https://codecombat.com/play/level/peasant-protection
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



// Munchkin Swarm
// https://codecombat.com/play/level/munchkin-swarm
while (true) {
	// Check the distance to the nearest enemy.
	var enemy = hero.findNearestEnemy();
	var distance = hero.distanceTo(enemy);
	// If it comes closer than 10 meters, cleave it!
	if (distance < 10) {
		hero.attack(enemy);
		hero.cleave(enemy);
	} else {
	// Else, attack the "Chest" by name.
		hero.attack("Chest");
	}
}



// Maniac Munchkins
// https://codecombat.com/play/level/maniac-munchkins
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
// https://codecombat.com/play/level/forest-fire-dancing
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



// Stillness in Motion
// https://codecombat.com/play/level/stillness-in-motion
// You can put one if-statement within another if-statement.
// Be careful how the if statements interact with each other.
// It's helpful to start with one outer if/else,
// using comments as placeholders for the inner if/else:
while (true) {
	var enemy = hero.findNearestEnemy();
	// If there is an enemy, then...
	if (enemy) {
		// Create a distance variable with distanceTo.
		var distance = hero.distanceTo(enemy);
		// If the distance is less than 5 meters, then attack
		if (distance < 5) {
			hero.attack(enemy);
		} else {
			// Else (the enemy is far away), then shield.
			hero.shield();
		}    // Else (there is no enemy)...
	} else {
		// ... then move back to the X.
		hero.moveXY(40, 34);
	}
}



// The Agrippa Defense
// https://codecombat.com/play/level/the-agrippa-defense
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Find the distance to the enemy with distanceTo.
		var distance = hero.distanceTo(enemy);
		// If the distance is less than 5 meters...
		if (distance < 5) {
			// ... if "cleave" is ready, cleave!
			var ready = hero.isReady("cleave");
			hero.cleave(enemy);
		} else {
			// ... else, just attack.
			hero.attack(enemy);
		}
	}
}



// The Agrippa Defense A
// https://codecombat.com/play/level/the-agrippa-defense-a
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Find the distance to the enemy with distanceTo.
		var distance = hero.distanceTo(enemy);
		// If the distance is less than 5 meters...
		if (distance < 5) {
			// ... if "cleave" is ready, cleave!
			var ready = hero.isReady("cleave");
			hero.cleave(enemy);
		} else {
			// ... else, just attack.
			hero.attack(enemy);
		}
	}
}



// Village Rover
// https://codecombat.com/play/level/village-rover
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



// A Fine Mint
// https://codecombat.com/play/level/a-fine-mint
// Peons are trying to steal your coins!
// Write a function to squash them before they can take your coins.
function pickUpCoin() {
	var coin = hero.findNearestItem();
	if (coin) {
		hero.moveXY(coin.pos.x, coin.pos.y);
	}
}
// Write the attackEnemy function below.
// Find the nearest enemy and attack them if they exist!
function attackEnemy() {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		hero.attack(enemy);
	}
}
while (true) {
	attackEnemy(); // ∆ Uncomment this line after you write an attackEnemy function.
	pickUpCoin();
}



// Backwoods Fork
// https://codecombat.com/play/level/backwoods-fork
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



// Tomb Raider
// https://codecombat.com/play/level/tomb-raider
// A forgotten tomb in the forest!
// But the ogres are hot on your heels.
// Break open the tomb, while defending yourself from the munchkins.
// This function should attack an enemy if it exists, otherwise attack the door!
function checkToDefend(target) {
	// Check if the target exists
	if (target) {
		hero.attack(target);
	} else {
		hero.attack("Door");
	}
}
while (true) {
	var enemy = hero.findNearestEnemy();
	checkToDefend(enemy);
}



// Leave it to Cleaver
// https://codecombat.com/play/level/leave-it-to-cleaver
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



// Agrippa Refactored
// https://codecombat.com/play/level/agrippa-refactored
// If "cleave" is ready: cleave, otherwise, attack.
function cleaveOrAttack(enemy) {
	if (hero.isReady("cleave")) {
		hero.cleave(enemy);
	} else {
		hero.attack(enemy);
	}
}
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		var distance = hero.distanceTo(enemy);
		if (distance < 5) {
			cleaveOrAttack(enemy);
		}
	}
}



// Agrippa Returned
// https://codecombat.com/play/level/agrippa-returned
function enemyInRange(enemy) {
	// Return true if the enemy is less than 5 units away.
	if (distance < 5) {
		return true;
	}
}
// If "cleave" is ready: cleave, otherwise, attack.
function cleaveOrAttack(enemy) {
	if (hero.isReady("cleave")) {
		hero.cleave(enemy);
	}
	else {
		hero.attack(enemy);
	}
}
while (true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		// Check the distance of the enemy by calling enemyInRange.
		var distance = hero.distanceTo(enemy);
		if (enemyInRange(enemy)) {
			cleaveOrAttack(enemy);
		}
	}
}



// Friend and Foe
// https://codecombat.com/play/level/friend-and-foe
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


// Backwoods Buddy
// https://codecombat.com/play/level/backwoods-buddy
// You now have a pet!
function speak(event) {
	// Your pet should respond with pet.say()
	pet.say("meow");
}
// This tells your pet to run the speak() function when she hears something
pet.on("hear", speak);
// Talk to your pet!
hero.say("Hello Kitty");



// Go Fetch
// https://codecombat.com/play/level/go-fetch
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



// Buddy's Name
// https://codecombat.com/play/level/buddys-name
// We need to know the name of our new pet.
// Use this function as a handler for "hear" events on pet.
function sayName(event) {
	pet.say("Meow Purr Meow");
	pet.say("Purr Purr");
	pet.say("Meow");
	pet.say("Meow");
	pet.say("Meow Purr Meow Meow");
}
// Use the pet.on(eventType, eventHandler) method
// Assign the sayName function to handle "hear" events.
pet.on("hear", sayName);
// It must be after "pet.on".
hero.say("What's you name, buddy?");
hero.say("Could you repeat it?");



// PHD Kitty
// https://codecombat.com/play/level/phd-kitty
// Teach your pet to answer questions!
// Luckily, all the answers are "Two"
function sayTwo(event) {
	// Use pet.say() to answer "Two"
	pet.say("Two");
}
// Use pet.on() to handle "hear" events with sayTwo
pet.on("hear", sayTwo);
// Now relax and watch the show.
hero.say("One plus one is...?");
hero.say("x^3 - 6x^2 + 12x - 8 = 0. What is x...?");
hero.say("How many moons does Mars have...?");



// Pet Quiz
// https://codecombat.com/play/level/pet-quiz
// Write an event handler function called petSay
function petSay(event) {
// Define the petSay function
pet.say("Yes");
pet.say("Maybe");
pet.say("That's Private info");
pet.say("Maybe");
pet.say("Yes");
}
	// The pet should say something in petSay.
	pet.say(petSay);
pet.on("hear", petSay);

hero.say("Do you understand me?");
hero.say("Are you a cougar?");
hero.say("How old are you?");
// Ask two more questions.
hero.say("Are you my friend?");
hero.say("Do you like it here?");
// **Pet only answer with first two answer, seems something is missing



// Guard Dog
// https://codecombat.com/play/level/guard-dog
// You can't help the peasants across the river.
// But, your pet can!
// Teach your wolf to be a guard dog.
function onSpawn(event) {
	while (true) {
		// Pets can find enemies, too.
		var enemy = pet.findNearestEnemy();
		// If there is an enemy:
		if (enemy) {
			// Then have the pet say something:
			pet.say("Enemy is near!");
		}
	}
}
pet.on("spawn", onSpawn);



// Long Road
// https://codecombat.com/play/level/long-road
// Move to the right.
// Complete this function:
function onSpawn(event){
	// Inside a while-true loop:
	while (true) {
		// Use hero.findNearestItem()
		var item = hero.findNearestItem();
		// If there's an item:
		if (item) {
			// Use pet.fetch(item) to fetch the item.
			pet.fetch(item);
		}
	}
}
// Use pet.on() to assign onSpawn to the "spawn" event
pet.on("spawn", onSpawn);
hero.moveXY(78, 35);



// Forest Jogging
// https://codecombat.com/play/level/forest-jogging
// Your pet can use pet.moveXY()
function onSpawn(event) {
	while (true) {
		// First, move to the left X mark:
		pet.moveXY(9, 24);
		// Next, move to the top X mark:
		pet.moveXY(30, 43);
		// Move your pet to the right X mark:
		pet.moveXY(51, 24);
		// Move your pet to the bottom X mark:
		pet.moveXY(30, 5);
	}
}
// Use pet.on() to handle the "spawn" event with onSpawn
pet.on("spawn", onSpawn);
// Cheer on your pet!
// Don't remove the commands below.
while (true) {
	hero.say("Good dog!");
	hero.say("You can do it!");
	hero.say("Run Run Run!");
	hero.say("Almost!");
	hero.say("One more lap!");
}



// Forest Cannon Dancing
// https://codecombat.com/play/level/forest-cannon-dancing
// Your pet should run back and forth on the X marks.
// The hero should cheer the whole time!
// Write the event function onSpawn for the pet.
// This function should make the wolf run back and forth:
// First, run to the right mark, then the left one:
function onSpawn(event) {
	while (true) {
		pet.moveXY(48, 8);
		pet.moveXY(12, 8);
	}
}
pet.on("spawn", onSpawn);
// Cheer up your pet. Don't remove this:
while (true) {
	hero.say("Run!!!");
	hero.say("Faster!");
}



// Deja Brew
// https://codecombat.com/play/level/deja-brew
// You can add strings together, and add numbers into strings.
// Sing along, using string concatenation:
// X potions of health on the wall!
// X potions of health!
// Take Y down, pass it around!
// X-Y potions of health on the wall.
var potionsOnTheWall = 10;
var numToTakeDown = 1;
while (true) {
	hero.say(potionsOnTheWall + " potions of health on the wall!");
	// Sing the next line:
	hero.say(potionsOnTheWall + " potions of health!");
	// Sing the next line:
	hero.say("Take " + numToTakeDown + " down, pass it around!");
	potionsOnTheWall -= numToTakeDown;
	// Sing the last line:
	hero.say(potionsOnTheWall + " potions of health on the wall.");
}



// The Wizard's Door
// https://codecombat.com/play/level/the-wizards-door
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



// The Wizard's Haunt
// https://codecombat.com/play/level/the-wizards-haunt
// Move to Zsofia and get the secret number from her.
hero.moveXY(18, 20);
var zso = hero.findNearestFriend().getSecret();
// Divide Zsofia's number by 4 to get Mihaly's number.
// Move to Mihaly and say his magic number.
var mih = zso / 4;
hero.moveXY(30, 15);
hero.say(mih);
// Divide Mihaly's number by 5 to get Beata's number
// Move to Beata and say her magic number.
var bea = mih / 5;
hero.moveXY(42, 20);
hero.say(bea);
// Subtract Beata's number from Mihaly's to get Sandor's number.
// Move to Sandor and say his magic number.
var san = mih - bea;
hero.moveXY(38, 37);
hero.say(san);



// The Wizard's Plane
// https://codecombat.com/play/level/the-wizards-plane
// Move to Eszter and get the secret number from her.
hero.moveXY(16, 32);
var esz = hero.findNearestFriend().getSecret();
// Multiply by 3 and subtract 2 to get Tamas's number.
// Remember to use parentheses to do calculations in the right order.
// Move to Tamas and say his magic number.
var tam = (esz * 3) - 2;
hero.moveXY(24, 28);
hero.say(tam);
// Subtract 1 and multiply by 4 to get Zsofi's number.
// Move to Zsofi and say her magic number.
var zso = (tam - 1) * 4;
hero.moveXY(32, 24);
hero.say(zso);
// Add Tamas's and Zsofi's numbers, then divide by 2 to get Istvan's number.
// Move to Istvan and say his magic number.
var ist = (tam + zso) / 2;
hero.moveXY(40, 20);
hero.say(ist);
// Add Tamas's and Zsofi's numbers. Subtract Istvan's number from Zsofi's. Multiply the two results to get Csilla's number.
// Move to Csilla and say her magic number.
var csi = (tam + zso) * (zso - ist);
hero.moveXY(48, 16);
hero.say(csi);



// Coincrumbs
// https://codecombat.com/play/level/coincrumbs
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



// White Rabbit
// https://codecombat.com/play/level/white-rabbit
while (true) {
	var item = hero.findNearestItem();
	if (item) {
		// Store the item's position in a new variable using item.pos:
		var pos = item.pos;
		// Store the X and Y coordinates using pos.x and pos.y:
		var x = pos.x;
		var y = pos.y;
		// Move to the coordinates using moveXY() and the X and Y variables:
		hero.moveXY(x,y);
	}
}



// Chameleons
// https://codecombat.com/play/level/chameleons
//https://discourse.codecombat.com/t/backwoods-forest-lvl-multi-player-treasure-groves-bad-code-bug-or-feature/5107/11
// Ogres are disguised as coins or gems!
while (true) {
	var enemy = hero.findNearestEnemy();
	// If you see an enemy - attack it:
	if (enemy) {
		hero.attack(enemy);
	}
	var item = hero.findNearestItem();
	// If you see a coin or a gem - move to it's X and Y position:
	if (item) {
		var pos = item.pos;
		var x = pos.x;
		var y = pos.y;
		hero.moveXY(x, y);
	}
}



// Blind Distance
// https://codecombat.com/play/level/blind-distance
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
// https://codecombat.com/play/level/hit-and-freeze
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



// Burlbole Grove
// https://codecombat.com/play/level/burlbole-grove
// Don't attack the burls!
// Functions can return a value.
// When a function is called, it will be equal to the value the function returns.
function shouldAttack(target) {
	// return false if no target
	if (!target) {
		return false;
	}
	// return false if target.type == "burl"
	if (target.type == "burl") {
		return false;
	}
	// Otherwise, return true
	return true;
}
while(true) {
	var enemy = hero.findNearestEnemy();
	// Here we use shouldAttack() to decide if we should attack!
	// heroShouldAttack will be assigned the same value that shouldAttack() returns!
	var heroShouldAttack = shouldAttack(enemy);
	if(heroShouldAttack) {
	hero.attack(enemy);
	}
}



// Salted Earth
// https://codecombat.com/play/level/salted-earth
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
// https://codecombat.com/play/level/spring-thunder
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
// https://codecombat.com/play/level/usual-day
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
// https://codecombat.com/play/level/passing-through
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
// https://codecombat.com/play/level/useful-competitors
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
// https://codecombat.com/play/level/logical-path
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



//  Logic Circle
// https://codecombat.com/play/level/logical-circle
// Move to the wizard and get their secret values.
hero.moveXY(20, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
var secretC = hero.findNearestFriend().getSecretC();
// If ALL three values are true, take the high path. Otherwise, take the low path.
var secretD = secretA && secretB && secretC;
if (secretD) {
	hero.moveXY(30, 33);
} else {
	hero.moveXY(30, 15);
}
// If ANY of the three values are true, take the left path. Otherwise, go right.
var secretE = secretA || secretB || secretC;
if (secretE) {
	hero.moveXY(20, 24);
} else {
	hero.moveXY(40, 24);
}
// If ALL five values are true, take the high path. Otherwise, take the low path.
var secretF = secretA && secretB && secretC && secretD && secretE;
if (secretF) {
	hero.moveXY(30, 33);
} else {
	hero.moveXY(30, 15);
}



// Logical Conclusion
// https://codecombat.com/play/level/logical-conclusion
// Move to Eszter and get three secret values from her.
hero.moveXY(24, 16);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
var secretC = hero.findNearestFriend().getSecretC();
// Say "TRUE" to Tamas if A AND B are true, OR if C is true. Otherwise, say "FALSE."
// Remember to use parentheses to do your logic in the proper order.
var tam = (secretA && secretB) || secretC;
hero.moveXY(19, 26);
hero.say(tam);
// Say "TRUE" to Zsofi if A OR B is true, AND if C is true. Otherwise, say "FALSE."
var zso = (secretA || secretB) && secretC;
hero.moveXY(26, 36);
hero.say(zso);
// Say "TRUE" to Istvan if A OR C is true, AND if B OR C is true. Otherwise, say "FALSE."
var ist = (secretA || secretC) && (secretB || secretC);
hero.moveXY(37, 34);
hero.say(ist);
// Say "TRUE" to Csilla if A AND B are true, OR if B is true AND C is NOT true. Otherwise, say "FALSE."
var csi = (secretA && secretB) || (secretB && !secretC);
hero.moveXY(40, 22);
hero.say(csi);



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




// Return to Thornbush Farm A
// https://codecombat.com/play/level/return-to-thornbush-farm-a
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
	// This calls maybeBuildTrap, with the coordinates of the left entrance.
	maybeBuildTrap(20, 34);
	// Now use maybeBuildTrap at the bottom entrance!
	maybeBuildTrap(38, 20);
	// Now use maybeBuildTrap at the right entrance!
	maybeBuildTrap(56, 34);
}



// Coinucopia
// https://codecombat.com/play/level/coinucopia
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
// https://codecombat.com/play/level/copper-meadows
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
// https://codecombat.com/play/level/mind-the-trap
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



// Hold the Forest Pass
// https://codecombat.com/play/level/hold-the-forest-pass
// Use flags to join the battle or retreat.
// If you fail, press Submit again for new random enemies and try again!
// You'll want at least 300 health, if not more.
while(true) {
	var enemy = hero.findNearestEnemy();
	var flag = hero.findFlag();
	if(flag) {
		// Pick up the flag.
		hero.pickUpFlag(flag);
	} else if (enemy) {
		// Fight!
		if (hero.isReady("cleave")) {
			hero.cleave(enemy);
		} else {
			hero.attack(enemy);
		}
	}
}



// Signal Corpse
// https://codecombat.com/play/level/signal-corpse
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
// https://codecombat.com/play/level/rich-forager
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
// https://codecombat.com/play/level/multiplayer-treasure-grove
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
}
// **it doesn't seem to attack Simple CPU



// Hold for Reinforcements
// https://codecombat.com/play/level/hold-for-reinforcements
// Ogres are climbing the cliffs!
// Protect the peasants long enough for the militia to assemble.
while(true) {
	var flag = hero.findFlag();
	var enemy = hero.findNearestEnemy();
	if (flag) {
		// Pick up the flag.
		hero.pickUpFlag(flag);
	} else if (enemy) {
		// Else, attack!
		// Use flags to move into position, and cleave if ready.
		var ready = hero.isReady("cleave");
		if (ready) {
			hero.cleave(enemy);
		}
		hero.attack(enemy);
	}
}



// Siege of Stonehold
// https://codecombat.com/play/level/siege-of-stonehold
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


// Backwoods Brawl
// https://codecombat.com/play/level/backwoods-brawl
// Stay alive for one minute.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.
while(true) {
	var flag = hero.findFlag();
	var enemy = hero.findNearestEnemy();
	if (flag) {
		hero.pickUpFlag(flag);
	} else if (enemy) {
		if (hero.isReady("cleave") && hero.distanceTo(enemy) < 10) {
			hero.cleave(enemy);
		}
		else {
			hero.attack(enemy);
		}
	}
}



// Backwoods Treasure
// https://codecombat.com/play/level/backwoods-treasure
// Collect 100 gold from two or three groves.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.
while(true) {
	var flag = hero.findFlag("green");
	var item = hero.findNearestItem();
	var enemy = hero.findNearestEnemy();
	if (flag) {
		hero.pickUpFlag(flag);
	} else if (enemy) {
		if (hero.isReady("cleave")) {
			hero.cleave(enemy);
		} else {
			hero.attack(enemy);
		}
	} else if (item) {
		hero.moveXY(item.pos.x, item.pos.y);
	}
}



//
// https://codecombat.com/play/level/
