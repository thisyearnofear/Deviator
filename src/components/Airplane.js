import { createAirplaneMesh } from "../createAirplaneMesh.js";
import { utils } from "../utils/Utils";
import { game, world, camera, ambientLight } from "../../game.js";
import { audioManager } from "../managers/AudioManager";

export class Airplane {
  constructor() {
    const [mesh, propeller, pilot] = createAirplaneMesh();
    this.mesh = mesh;
    this.propeller = propeller;
    this.pilot = pilot;
    this.weapon = null;
    this.lastShot = 0;
    this.targetY = 0; // Add this line
  }

  equipWeapon(weapon) {
    if (this.weapon) this.mesh.remove(this.weapon.mesh);
    this.weapon = weapon;
    if (this.weapon) this.mesh.add(this.weapon.mesh);
  }

  shoot() {
    if (!this.weapon || !this.canShoot()) return;
    this.lastShot = Date.now() / 1000;
    const direction = new THREE.Vector3(10, 0, 0).applyEuler(
      this.mesh.rotation
    );
    this.weapon.shoot(direction);
    this.applyRecoil();
  }

  canShoot() {
    return Date.now() / 1000 - this.lastShot > this.weapon.downtime();
  }

  applyRecoil() {
    TweenMax.to(this.mesh.position, {
      duration: 0.05,
      x: this.mesh.position.x - this.weapon.damage(),
    });
  }

  tick(deltaTime) {
    this.propeller.rotation.x += 0.2 + game.planeSpeed * deltaTime * 0.005;
    if (game.status === "playing") this.updateFlight(deltaTime);
    this.updateCollisionDisplacement(deltaTime);
    this.pilot.updateHairs(deltaTime);
  }

  updateFlight(deltaTime) {
    const { mousePos } = game.ui;
    game.planeSpeed = utils.normalize(
      mousePos.x,
      -0.5,
      0.5,
      world.planeMinSpeed,
      world.planeMaxSpeed
    );
    const targetX =
      utils.normalize(
        mousePos.x,
        -1,
        1,
        -world.planeAmpWidth * 0.7,
        -world.planeAmpWidth
      ) + game.planeCollisionDisplacementX;
    this.targetY = // Change this line
      utils.normalize(
        mousePos.y,
        -0.75,
        0.75,
        world.planeDefaultHeight - world.planeAmpHeight,
        world.planeDefaultHeight + world.planeAmpHeight
      ) + game.planeCollisionDisplacementY;

    this.mesh.position.x +=
      (targetX - this.mesh.position.x) * deltaTime * world.planeMoveSensivity;
    this.mesh.position.y +=
      (this.targetY - this.mesh.position.y) *
      deltaTime *
      world.planeMoveSensivity;

    this.updateRotation(deltaTime);
    this.updateCamera(deltaTime);
  }

  updateRotation(deltaTime) {
    this.mesh.rotation.x =
      (this.mesh.position.y - this.targetY) *
      deltaTime *
      world.planeRotZSensivity;
    this.mesh.rotation.z =
      (this.targetY - this.mesh.position.y) *
      deltaTime *
      world.planeRotXSensivity;
  }

  updateCamera(deltaTime) {
    if (game.fpv) {
      camera.position.y = this.mesh.position.y + 20;
    } else {
      camera.fov = utils.normalize(game.ui.mousePos.x, -30, 1, 40, 80);
      camera.updateProjectionMatrix();
      camera.position.y +=
        (this.mesh.position.y - camera.position.y) *
        deltaTime *
        world.cameraSensivity;
    }
  }

  updateCollisionDisplacement(deltaTime) {
    const factor = deltaTime * 0.03;
    game.planeCollisionSpeedX *= 1 - factor;
    game.planeCollisionSpeedY *= 1 - factor;
    game.planeCollisionDisplacementX += game.planeCollisionSpeedX * deltaTime;
    game.planeCollisionDisplacementY += game.planeCollisionSpeedY * deltaTime;
  }

  gethit(position) {
    const diffPos = this.mesh.position.clone().sub(position);
    const d = diffPos.length();
    game.planeCollisionSpeedX = (100 * diffPos.x) / d;
    game.planeCollisionSpeedY = (100 * diffPos.y) / d;
    ambientLight.intensity = 2;
    audioManager.play("airplane-crash");
  }
}
