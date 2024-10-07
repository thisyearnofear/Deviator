# The Aviator 2

Updated version of Kaim Maaloul's The Aviator, see his [Article on Codrops](http://tympanus.net/codrops/?p=26501), demo [Demo](http://tympanus.net/Tutorials/TheAviator/) and [GitHub](https://github.com/yakudoo/TheAviator).

![The Aviator 2](https://tympanus.net/codrops/wp-content/uploads/2022/04/Aviator2_featured.jpg)

[Article on Codrops](https://tympanus.net/codrops/?p=63296)

[Demo](https://tympanus.net/Tutorials/TheAviator2)

This repository is the archive of the source code for the Codrops article and will not get updated.

## Start

Clone repository, in the code directory run `php -S localhost:8123` and in your browser visit [http://localhost:8123/](http://localhost:8123/).

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".

## Credits

### Libraries

- [Three.js](http://threejs.org/)
- [TweenMax](http://greensock.com)

### Sounds

Sound effects obtained from https://www.zapsplat.com and https://freesound.org/.

From freesound:

- Sound "Crash" by user "Previsionary" (https://freesound.org/people/Previsionary/sounds/593677) licensed under Creative Commons 0
- Sound "Bubble Pop" by user "elmasmalo1" (https://freesound.org/people/elmasmalo1/sounds/376968) licensed under Attribution 3.0
- Sound "Bullet_Impact_2" by user "toxicwafflezz" (https://freesound.org/people/toxicwafflezz/sounds/150838) licensed under Attribution 3.0
- Sound "Pacific Ocean" by user "tim.kahn" (https://freesound.org/people/tim.kahn/sounds/174763) licensed under Attribution 3.0
- Sound "Airship propeller engine" by user "ilm0player" (https://freesound.org/people/ilm0player/sounds/578181/) licensed under Creative Commons 0
- Sound "Rock Smash" by user "NeoSpica" (https://freesound.org/people/NeoSpica/sounds/512243) licensed under Creative Commons 0
- Sound "Gun shot/bullet hit" by user "coolguy244e" (https://freesound.org/people/coolguy244e/sounds/266916) licensed under Creative Commons 0
- Sound "Pistol Shot" by user "LeMudCrab" (https://freesound.org/people/LeMudCrab/sounds/163456/) licensed under Creative Commons 0
- Sound "Water Splash" by user "Yin_Yang_Jake007" (https://freesound.org/people/Yin_Yang_Jake007/sounds/406087/) licensed under Attribution 3.0
- Sound "Coins - 01" by user "DWOBoyle" (https://freesound.org/people/DWOBoyle/sounds/140382/) licensed under Attribution 3.0

## Misc

Follow Michel: [Twitter](https://twitter.com/MichelOliverH)

Follow Karim: [Twitter](https://twitter.com/yakudoo), [Codepen](http://codepen.io/Yakudoo/)

## Updates over the original

**07 April 2022**

- when replaying, remove all coins and enemies
- fix bug about the state handling after dying
- implement all audio
- find audio files
  - propeller/airplane sound
  - shooting simple, double, better
  - background music
  - picking up collectible
  - collision with enemy
  - collecting a coin

**06 April 2022**

- airplane recoil
- make end screen after 5 levels
- make collectibles logic
  - life: if life<3 and a small chance
  - simple gun: level 2
  - double gun: level 3
  - better gun: level 4

**05 April 2022**

- fix bug that no more enemies are spawning
- transfer to new three.js version
- design collectibles
  - simple gun
  - better gun
  - double gun
  - life
- complete simple gun, better gun and double gun

**04 April 2022**

- design airplane's machine gun
- redesign coins
- each level has a different sea color
- remove energy bar
- show hearts as remaining hitpoints
- show new level entry prominently
- be able to shoot
- copy initial game

---

Frog Blimp

function createAirplaneMesh() {
const mesh = new THREE.Object3D();

// Frog body (vivid green with casino designs)
const bodyGeometry = new THREE.SphereGeometry(40, 32, 32);
const bodyMaterial = new THREE.MeshPhongMaterial({
color: 0x00ff00, // Bright green frog
flatShading: true,
});
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.scale.set(2, 1, 1);

// Add casino designs (for simplicity, we'll use 3D boxes to represent card suits)
const spadeGeometry = new THREE.BoxGeometry(5, 5, 5);
const spadeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 }); // Black for spades
const spade = new THREE.Mesh(spadeGeometry, spadeMaterial);
spade.position.set(30, 0, 10);
body.add(spade);

const heartGeometry = spadeGeometry.clone();
const heartMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Red for hearts
const heart = new THREE.Mesh(heartGeometry, heartMaterial);
heart.position.set(30, 0, -10);
body.add(heart);

mesh.add(body);

// Frog eyes (bulging)
const eyeGeometry = new THREE.SphereGeometry(10, 32, 32);
const eyeMaterial = new THREE.MeshPhongMaterial({
color: 0xffffff, // White eyes
flatShading: true,
});
const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye.position.set(-30, 30, 25);
mesh.add(leftEye);

const rightEye = leftEye.clone();
rightEye.position.set(-30, 30, -25);
mesh.add(rightEye);

// Upward green arrow (bullish growth symbol) on top of the airplane
const arrowGeometry = new THREE.ConeGeometry(5, 40, 32);
const arrowMaterial = new THREE.MeshPhongMaterial({
color: 0x00ff00, // Bright green arrow
flatShading: true,
});
const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
arrow.position.set(-10, 20, 0);
arrow.rotation.x = Math.PI / 2;
mesh.add(arrow);

// Wings (French fries)
const fryGeometry = new THREE.BoxGeometry(5, 5, 60);
const fryMaterial = new THREE.MeshPhongMaterial({
color: 0xffd700, // Golden fries
flatShading: true,
});
const leftWing = new THREE.Mesh(fryGeometry, fryMaterial);
leftWing.position.set(-40, 5, 30);
mesh.add(leftWing);

const rightWing = leftWing.clone();
rightWing.position.set(-40, 5, -30);
mesh.add(rightWing);

// Slot machine propeller (casino theme with spinning numbers)
const slotGeometry = new THREE.CylinderGeometry(10, 10, 20, 32);
const slotMaterial = new THREE.MeshPhongMaterial({
color: 0xffd700, // Gold slot machine
flatShading: true,
});
const propeller = new THREE.Mesh(slotGeometry, slotMaterial);
propeller.position.set(-60, 0, 0);

// Adding numbers on slot machine
const numberGeometry = new THREE.BoxGeometry(5, 15, 5);
const numberMaterial = new THREE.MeshPhongMaterial({
color: 0xff0000, // Bright red numbers
flatShading: true,
});
const number = new THREE.Mesh(numberGeometry, numberMaterial);
number.position.set(0, 10, 0);
propeller.add(number);

// Propeller blades (styled like casino chips)
const bladeGeom = new THREE.BoxGeometry(1, 80, 10);
const bladeMat = new THREE.MeshPhongMaterial({
color: 0x000000, // Black for sleek blades
flatShading: true,
});
const blade1 = new THREE.Mesh(bladeGeom, bladeMat);
blade1.position.set(12, 0, 0);

const blade2 = blade1.clone();
blade2.rotation.x = Math.PI / 2;
propeller.add(blade1);
propeller.add(blade2);

// Adding propeller to the mesh
mesh.add(propeller);

// Pilot - Tiny frog pilot wearing a casino-themed top hat
const pilot = new Pilot();
pilot.mesh.scale.set(0.5, 0.5, 0.5);

const topHatGeometry = new THREE.CylinderGeometry(3, 3, 10, 32);
const topHatMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
const topHat = new THREE.Mesh(topHatGeometry, topHatMaterial);
topHat.position.set(0, 5, 0);
pilot.mesh.add(topHat);

pilot.mesh.position.set(-5, 27, 0);
mesh.add(pilot.mesh);

mesh.castShadow = true;
mesh.receiveShadow = true;

return [mesh, propeller, pilot];
}

NOUNS DUDE

function createAirplaneMesh() {
const mesh = new THREE.Object3D();

// Main body
const bodyGeometry = new THREE.BoxGeometry(150, 60, 15);
const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x9cb4b8 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.position.set(0, 0, 0);
mesh.add(body);

// Nose
const noseGeometry = new THREE.BoxGeometry(40, 40, 20);
const noseMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.set(-100, 15, 0);
mesh.add(nose);

// Tail
const tailGeometry = new THREE.BoxGeometry(20, 60, 20);
const tailMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const tail = new THREE.Mesh(tailGeometry, tailMaterial);
tail.position.set(100, 30, 0);
mesh.add(tail);

// Wings
const wingGeometry = new THREE.BoxGeometry(100, 10, 120);
const wingMaterial = new THREE.MeshPhongMaterial({ color: 0x9cb4b8 });
const wings = new THREE.Mesh(wingGeometry, wingMaterial);
wings.position.set(-20, -10, 0);
mesh.add(wings);

// Red stripe
const stripeGeometry = new THREE.BoxGeometry(90, 10, 22);
const stripeMaterial = new THREE.MeshPhongMaterial({ color: 0xf3322c });
const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
stripe.position.set(0, -5, 0);
mesh.add(stripe);

// Windows
const windowGeometry = new THREE.BoxGeometry(60, 20, 22);
const windowMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
const windows = new THREE.Mesh(windowGeometry, windowMaterial);
windows.position.set(0, 15, 0);
mesh.add(windows);

// Wings
const fryGeometry = new THREE.BoxGeometry(5, 5, 60);
const fryMaterial = new THREE.MeshPhongMaterial({
color: 0xffd700,
flatShading: true,
});
const leftWing = new THREE.Mesh(fryGeometry, fryMaterial);
leftWing.position.set(-40, 5, 30);
mesh.add(leftWing);

const rightWing = leftWing.clone();
rightWing.position.set(-40, 5, -30);
mesh.add(rightWing);

// Propeller
const slotGeometry = new THREE.CylinderGeometry(10, 10, 20, 32);
const slotMaterial = new THREE.MeshPhongMaterial({
color: 0xffd700,
flatShading: true,
});
const propeller = new THREE.Mesh(slotGeometry, slotMaterial);
propeller.position.set(-60, 0, 0);

// Propeller design
const numberGeometry = new THREE.BoxGeometry(5, 15, 5);
const numberMaterial = new THREE.MeshPhongMaterial({
color: 0xff0000,
flatShading: true,
});
const number = new THREE.Mesh(numberGeometry, numberMaterial);
number.position.set(0, 10, 0);
propeller.add(number);

// Propeller blades
const bladeGeom = new THREE.BoxGeometry(1, 80, 10);
const bladeMat = new THREE.MeshPhongMaterial({
color: 0x000000,
flatShading: true,
});
const blade1 = new THREE.Mesh(bladeGeom, bladeMat);
blade1.position.set(12, 0, 0);

const blade2 = blade1.clone();
blade2.rotation.x = Math.PI / 2;
propeller.add(blade1);
propeller.add(blade2);

// Attach propeller to mesh
mesh.add(propeller);

// Wheels
const wheelGeom = new THREE.CylinderGeometry(10, 10, 4, 32);
const wheelMat = new THREE.MeshPhongMaterial({
color: 0xffffff,
flatShading: true,
});
const wheel1 = new THREE.Mesh(wheelGeom, wheelMat);
wheel1.position.set(20, -20, 25);
wheel1.rotation.z = Math.PI / 2;
mesh.add(wheel1);

const wheel2 = wheel1.clone();
wheel2.position.set(20, -20, -25);
mesh.add(wheel2);

const backWheel = wheel1.clone();
backWheel.scale.set(0.5, 0.5, 0.5);
backWheel.position.set(-40, -10, 0);
mesh.add(backWheel);

// Pilot
const pilot = new Pilot();
pilot.mesh.scale.set(1, 1, 1);

// Add hyper-large glasses to the pilot
addHyperLargeGlasses(pilot.mesh);

// Pilot in the cockpit
pilot.mesh.position.set(-5, 50, 0);
mesh.add(pilot.mesh);

mesh.castShadow = true;
mesh.receiveShadow = true;

return [mesh, propeller, pilot];
}

function addHyperLargeGlasses(pilotMesh) {
const glassesGroup = new THREE.Group();

// Frame - large and bright yellow
const frameGeometry = new THREE.BoxGeometry(60, 20, 2); // Doubled the size
const frameMaterial = new THREE.MeshPhongMaterial({ color: 0xffef16 }); // Bright yellow
const frame = new THREE.Mesh(frameGeometry, frameMaterial);
frame.position.set(0, 5, 12); // Positioned further out to make it more visible
glassesGroup.add(frame);

// Left lens - larger and positioned closer to frame
const lensGeometry = new THREE.BoxGeometry(24, 16, 1); // Doubled the lens size
const lensMaterial = new THREE.MeshPhongMaterial({
color: 0x00ffff,
transparent: true,
opacity: 0.7,
}); // Light blue and transparent
const leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
leftLens.position.set(-15, 5, 13); // Adjusted for larger size
glassesGroup.add(leftLens);

// Right lens - cloned and adjusted
const rightLens = leftLens.clone();
rightLens.position.set(15, 5, 13);
glassesGroup.add(rightLens);

// Left temple
const templeGeometry = new THREE.BoxGeometry(20, 2, 1); // Larger temple size
const templeMaterial = new THREE.MeshPhongMaterial({ color: 0xffef16 }); // Same color as frame
const leftTemple = new THREE.Mesh(templeGeometry, templeMaterial);
leftTemple.position.set(-30, 5, 9); // Adjusted for bigger frame
leftTemple.rotation.y = Math.PI / 6; // Angled temple slightly
glassesGroup.add(leftTemple);

// Right temple - cloned and adjusted
const rightTemple = leftTemple.clone();
rightTemple.position.set(30, 5, 9);
rightTemple.rotation.y = -Math.PI / 6;
glassesGroup.add(rightTemple);

// Scale and position the glasses on the pilot's face
glassesGroup.scale.set(1.5, 1.5, 1.5); // Make the glasses much larger
glassesGroup.position.set(0, 4, 5); // Positioned closer to the pilot's face

pilotMesh.add(glassesGroup);
}
