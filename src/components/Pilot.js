import Colors from "../utils/Colors";
import game from "../../game";

export default class Pilot {
  constructor(pilotType = "human") {
    this.mesh = new THREE.Object3D();
    this.angleHairs = 0;
    this.pilotType = pilotType;

    switch (pilotType) {
      case "frog":
        this.createFrogPilot();
        break;
      case "nouns":
        this.createNounsPilot();
        break;
      case "human":
      default:
        this.createHumanPilot();
        break;
    }
  }

  createHumanPilot() {
    this.mesh = new THREE.Object3D();
    this.angleHairs = 0;

    var bodyGeom = new THREE.BoxGeometry(15, 15, 15);
    var bodyMat = new THREE.MeshPhongMaterial({
      color: Colors.brown,
      flatShading: true,
    });
    var body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.set(2, -12, 0);
    this.mesh.add(body);

    var faceGeom = new THREE.BoxGeometry(10, 10, 10);
    var faceMat = new THREE.MeshLambertMaterial({ color: Colors.pink });
    var face = new THREE.Mesh(faceGeom, faceMat);
    this.mesh.add(face);

    var hairGeom = new THREE.BoxGeometry(4, 4, 4);
    var hairMat = new THREE.MeshLambertMaterial({ color: Colors.brown });
    var hair = new THREE.Mesh(hairGeom, hairMat);
    hair.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 2, 0));
    var hairs = new THREE.Object3D();

    this.hairsTop = new THREE.Object3D();

    for (var i = 0; i < 12; i++) {
      var h = hair.clone();
      var col = i % 3;
      var row = Math.floor(i / 3);
      var startPosZ = -4;
      var startPosX = -4;
      h.position.set(startPosX + row * 4, 0, startPosZ + col * 4);
      h.geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 1));
      this.hairsTop.add(h);
    }
    hairs.add(this.hairsTop);

    var hairSideGeom = new THREE.BoxGeometry(12, 4, 2);
    hairSideGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(-6, 0, 0));
    var hairSideR = new THREE.Mesh(hairSideGeom, hairMat);
    var hairSideL = hairSideR.clone();
    hairSideR.position.set(8, -2, 6);
    hairSideL.position.set(8, -2, -6);
    hairs.add(hairSideR);
    hairs.add(hairSideL);

    var hairBackGeom = new THREE.BoxGeometry(2, 8, 10);
    var hairBack = new THREE.Mesh(hairBackGeom, hairMat);
    hairBack.position.set(-1, -4, 0);
    hairs.add(hairBack);
    hairs.position.set(-5, 5, 0);

    this.mesh.add(hairs);

    var glassGeom = new THREE.BoxGeometry(5, 5, 5);
    var glassMat = new THREE.MeshLambertMaterial({ color: Colors.brown });
    var glassR = new THREE.Mesh(glassGeom, glassMat);
    glassR.position.set(6, 0, 3);
    var glassL = glassR.clone();
    glassL.position.z = -glassR.position.z;

    var glassAGeom = new THREE.BoxGeometry(11, 1, 11);
    var glassA = new THREE.Mesh(glassAGeom, glassMat);
    this.mesh.add(glassR);
    this.mesh.add(glassL);
    this.mesh.add(glassA);

    var earGeom = new THREE.BoxGeometry(2, 3, 2);
    var earL = new THREE.Mesh(earGeom, faceMat);
    earL.position.set(0, 0, -6);
    var earR = earL.clone();
    earR.position.set(0, 0, 6);
    this.mesh.add(earL);
    this.mesh.add(earR);
  }

  createFrogPilot() {
    const bodyGeom = new THREE.SphereGeometry(7.5, 32, 32);
    const bodyMat = new THREE.MeshPhongMaterial({
      color: Colors.green, // Make sure 'green' is defined in Colors
      flatShading: true,
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    this.mesh.add(body);

    // Add eyes
    const eyeGeom = new THREE.SphereGeometry(2, 32, 32);
    const eyeMat = new THREE.MeshPhongMaterial({
      color: Colors.white,
      flatShading: true,
    });
    const eyeL = new THREE.Mesh(eyeGeom, eyeMat);
    eyeL.position.set(3, 2, 4);
    const eyeR = eyeL.clone();
    eyeR.position.set(3, 2, -4);
    this.mesh.add(eyeL);
    this.mesh.add(eyeR);

    // Add pupils
    const pupilGeom = new THREE.SphereGeometry(1, 32, 32);
    const pupilMat = new THREE.MeshPhongMaterial({
      color: Colors.black, // Make sure 'black' is defined in Colors
      flatShading: true,
    });
    const pupilL = new THREE.Mesh(pupilGeom, pupilMat);
    pupilL.position.set(4, 2, 4);
    const pupilR = pupilL.clone();
    pupilR.position.set(4, 2, -4);
    this.mesh.add(pupilL);
    this.mesh.add(pupilR);

    // Add casino-themed top hat
    const topHatGeometry = new THREE.CylinderGeometry(3, 3, 10, 32);
    const topHatMaterial = new THREE.MeshPhongMaterial({ color: Colors.black });
    const topHat = new THREE.Mesh(topHatGeometry, topHatMaterial);
    topHat.position.set(0, 5, 0);
    this.mesh.add(topHat);
  }

  createNounsPilot() {
    const bodyGeom = new THREE.BoxGeometry(15, 15, 15);
    const bodyMat = new THREE.MeshPhongMaterial({
      color: Colors.yellow,
      flatShading: true,
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    this.mesh.add(body);

    // Add sunglasses
    const glassGeom = new THREE.BoxGeometry(16, 6, 1);
    const glassMat = new THREE.MeshPhongMaterial({
      color: Colors.black,
      flatShading: true,
    });
    const glasses = new THREE.Mesh(glassGeom, glassMat);
    glasses.position.set(0, 2, 7.5);
    this.mesh.add(glasses);

    // Add smile
    const smileGeom = new THREE.TorusGeometry(3, 1, 16, 100, Math.PI);
    const smileMat = new THREE.MeshPhongMaterial({
      color: Colors.black,
      flatShading: true,
    });
    const smile = new THREE.Mesh(smileGeom, smileMat);
    smile.position.set(0, -2, 7.5);
    smile.rotation.x = Math.PI;
    this.mesh.add(smile);

    this.addHyperLargeGlasses();
  }

  addHyperLargeGlasses() {
    const glassesGroup = new THREE.Group();

    // Frame - large and bright yellow
    const frameGeometry = new THREE.BoxGeometry(60, 20, 2);
    const frameMaterial = new THREE.MeshPhongMaterial({ color: Colors.yellow });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.set(0, 5, 12);
    glassesGroup.add(frame);

    // Left lens - larger and positioned closer to frame
    const lensGeometry = new THREE.BoxGeometry(24, 16, 1);
    const lensMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.7,
    });
    const leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
    leftLens.position.set(-15, 5, 13);
    glassesGroup.add(leftLens);

    // Right lens - cloned and adjusted
    const rightLens = leftLens.clone();
    rightLens.position.set(15, 5, 13);
    glassesGroup.add(rightLens);

    // Left temple
    const templeGeometry = new THREE.BoxGeometry(20, 2, 1);
    const templeMaterial = new THREE.MeshPhongMaterial({
      color: Colors.yellow,
    });
    const leftTemple = new THREE.Mesh(templeGeometry, templeMaterial);
    leftTemple.position.set(-30, 5, 9);
    leftTemple.rotation.y = Math.PI / 6;
    glassesGroup.add(leftTemple);

    // Right temple - cloned and adjusted
    const rightTemple = leftTemple.clone();
    rightTemple.position.set(30, 5, 9);
    rightTemple.rotation.y = -Math.PI / 6;
    glassesGroup.add(rightTemple);

    // Scale and position the glasses on the pilot's face
    glassesGroup.scale.set(1.5, 1.5, 1.5);
    glassesGroup.position.set(0, 4, 5);

    this.mesh.add(glassesGroup);
  }

  updateHairs(deltaTime) {
    if (this.pilotType === "human") {
      // Only update hairs for human pilot
      var hairs = this.hairsTop.children;
      var l = hairs.length;
      for (var i = 0; i < l; i++) {
        var h = hairs[i];
        h.scale.y = 0.75 + Math.cos(this.angleHairs + i / 3) * 0.25;
      }
      this.angleHairs += game.speed * deltaTime * 40;
    }
  }
}
