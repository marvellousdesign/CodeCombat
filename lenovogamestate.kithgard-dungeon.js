// https://lenovogamestate.com/codeplay/

// Dungeons of Kithgard
// Move towards the gem.
// Don’t touch the spikes!
// Type your code below and click Run when you’re done.
hero.moveRight();
hero.moveDown();
hero.moveRight();


// Gems in the Deep
// Grab all the gems using your movement commands.
hero.moveRight();
hero.moveDown();
hero.moveUp();
hero.moveUp();
hero.moveRight();


// Shadow Guard
// Avoid being seen by the ogre. Collect all the gems.
hero.moveRight();
hero.moveUp();
hero.moveRight();
hero.moveDown();
hero.moveRight();


// True Names
// Defend against Brak and Treg!
// You must attack small ogres twice.
hero.moveRight();
hero.attack("Brak");
hero.attack("Brak");
hero.moveRight();
hero.attack("Treg");
hero.attack("Treg");


// The Raised Sword
// Defeat the ogres.
// Remember that they each take two hits.
hero.attack("Rig");
hero.attack("Rig");
hero.attack("Gurt");
hero.attack("Gurt");
hero.attack("Ack");
hero.attack("Ack");


// Fire Dancing
// Code normally executes in the order it's written.
// Loops repeat a block of code multiple times.
while(true) {
	hero.moveRight();
	// Add a moveLeft command to the loop here
	hero.moveLeft();
}


// The Second Kithmaze
// Use a while-true loop to navigate the maze!
while(true) {
	hero.moveRight();
	hero.moveUp();
	hero.moveRight();
	hero.moveDown();
}


// Known Enemy
// You can use a variable like a nametag.
var enemy1 = "Kratt";
var enemy2 = "Gert";
var enemy3 = "Ursa";

hero.attack(enemy1);
hero.attack(enemy1);

hero.attack(enemy2);
hero.attack(enemy2);

hero.attack(enemy3);
hero.attack(enemy3);


// Master of Names
// Your hero doesn't know these enemy's names!
// The glasses give you the findNearestEnemy ability.
var enemy1 = hero.findNearestEnemy();
hero.attack(enemy1);
hero.attack(enemy1);

var enemy2 = hero.findNearestEnemy();
hero.attack(enemy2);
hero.attack(enemy2);

var enemy3 = hero.findNearestEnemy();
hero.attack(enemy3);
hero.attack(enemy3);


// A Mayhem of Munchkins
// Inside a while-true loop, use findNearestEnemy() and attack!
while(true) {
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
	hero.attack(enemy);
}


// The Final Kithmaze
// Use a while-true loop to both move and attack.
while(true) {
	hero.moveRight();
	hero.moveUp();
	var enemy = hero.findNearestEnemy();
	hero.attack(enemy);
	hero.attack(enemy);
	hero.moveRight();
	hero.moveDown();
	hero.moveDown();
	hero.moveUp();
}

// Kithgard Gates
// Build 3 fences to keep the ogres at bay!

hero.moveDown();
hero.buildXY("fence", 36, 34);
hero.buildXY("fence", 36, 31);
hero.buildXY("fence", 36, 27);
hero.moveRight();
hero.moveRight();
hero.moveRight();


// Signs and Portents
// Your goal is to get to the right side of the map alive.
// You don't need to fight the ogres, just move! Your allies will protect you.
hero.moveRight();
hero.moveRight();
hero.moveUp();
// Use the movement commands to reach the red X!
hero.moveRight();
hero.moveRight();
hero.moveRight();
hero.moveDown();
hero.moveRight();
hero.moveDown();
hero.moveRight();

// Kithgard Brawl (1)
// Survive the waves of ogres.
// If you win, the level gets harder, and gives more rewards.
// If you lose, you must wait a day to re-submit.
// Each time you submit gives a new random seed.
while(true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		var distance = hero.distanceTo(enemy);
		var ready = hero.isReady("cleave");
		if (distance < 5 && ready) {
			hero.cleave(enemy);
		} else if (enemy) {
			hero.attack(enemy);
		}
	}
}

// Kithgard Brawl (2)
// Survive the waves of ogres.
// If you win, the level gets harder, and gives more rewards.
// If you lose, you must wait a day to re-submit.
// Each time you submit gives a new random seed.
while(true) {
	var enemy = hero.findNearestEnemy();
	if (enemy) {
		var distance = hero.distanceTo(enemy);
		var ready = hero.isReady("cleave");
		if (distance < 10 && ready) {
			hero.cleave(enemy);
		} else if (enemy) {
			hero.attack(enemy);
		}
	}
}



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


//----- Blue levels -----

// Cell Commentary
hero.say("What's the password?");
// Use the "say()" function to say the password.
// The password is: "Achoo"
hero.say("Achoo");
hero.moveUp();
hero.moveUp();

// Kitgard Librarian
// You need to say a password to open the Library Door!
// The password is in the Hints!
// Click the blue Hints button above the code window.
// If you ever get stuck, click Hints!
hero.moveRight();
hero.say("Hush");
hero.moveRight();


// Loop Da Loop
// Code inside of a while-true loop will repeat forever!
while(true) {
	// Move right
	hero.moveRight();
	// Move up
	hero.moveUp();
	// Move left
	hero.moveLeft();
	// Move down
	hero.moveDown();
}


// Haunted Kithmaze
// Loops are a better way of doing repetitive things.
while(true) {
	// Add commands in here to repeat.
	hero.moveRight();
	hero.moveRight();
	hero.moveUp();
	hero.moveUp();
}


// Dread Door
// Attack the door!
// It will take many hits, so use a "while-true" loop.
while(true) {
	hero.attack("Door");
}


// Closing the Distance
while(true) {
hero.moveRight();
// You should recognize this from the last level.
var enemy = hero.findNearestEnemy();
// Now attack enemy1.
hero.attack(enemy);
hero.attack(enemy);
}


















































