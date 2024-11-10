/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils/Utils */ "./src/utils/Utils.js");
/* harmony import */ var _src_createAirplaneMesh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/createAirplaneMesh.js */ "./src/createAirplaneMesh.js");
/* harmony import */ var _src_components_Cloud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/Cloud.js */ "./src/components/Cloud.js");
/* harmony import */ var _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/managers/AudioManager.js */ "./src/managers/AudioManager.js");
/* harmony import */ var _src_managers_loadingProgressManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/managers/loadingProgressManager.js */ "./src/managers/loadingProgressManager.js");
/* harmony import */ var _src_managers_ModelManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/managers/ModelManager.js */ "./src/managers/ModelManager.js");
/* harmony import */ var _src_managers_SelectionManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/managers/SelectionManager.js */ "./src/managers/SelectionManager.js");
/* harmony import */ var _src_managers_GameplaySnapshotManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/managers/GameplaySnapshotManager.js */ "./src/managers/GameplaySnapshotManager.js");
/* harmony import */ var _src_components_SocialShare_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/components/SocialShare.js */ "./src/components/SocialShare.js");
/* harmony import */ var _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/utils/Colors */ "./src/utils/Colors.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










var projectileTexture = null;
_src_managers_loadingProgressManager_js__WEBPACK_IMPORTED_MODULE_4__.loadingProgressManager.loadTexture("./public/gens.png").then(function (texture) {
  console.log("Texture loaded:", texture);
  projectileTexture = texture;
  // Set some texture properties
  texture.premultiplyAlpha = true;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
})["catch"](function (error) {
  return console.error("Failed to load texture:", error);
});
var sky;
var gameplaySnapshotManager;
var SceneManager = /*#__PURE__*/function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);
    this.list = new Set();
  }
  return _createClass(SceneManager, [{
    key: "add",
    value: function add(obj) {
      scene.add(obj.mesh);
      this.list.add(obj);
    }
  }, {
    key: "remove",
    value: function remove(obj) {
      scene.remove(obj.mesh);
      this.list["delete"](obj);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _iterator = _createForOfIteratorHelper(this.list),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          this.remove(entry);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "tick",
    value: function tick(deltaTime) {
      var _iterator2 = _createForOfIteratorHelper(this.list),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var entry = _step2.value;
          if (entry.tick) {
            entry.tick(deltaTime);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}();
var sceneManager = new SceneManager();

///////////////
// GAME VARIABLES
var canDie = true;
var world, game;
var newTime = new Date().getTime();
var oldTime = new Date().getTime();
var scene, camera, renderer;

//SCREEN & MOUSE VARIABLES
var MAX_WORLD_X = 1000;

//INIT THREE JS, SCREEN AND MOUSE EVENTS
function createScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, ui.width / ui.height, 0.1, 10000);
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.setCamera(camera);
  scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
  renderer = new THREE.WebGLRenderer({
    canvas: ui.canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true
  });
  renderer.setSize(ui.width, ui.height);
  // sourcery skip: simplify-ternary
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.shadowMap.enabled = true;
  function setupCamera() {
    renderer.setSize(ui.width, ui.height);
    camera.aspect = ui.width / ui.height;
    camera.updateProjectionMatrix();

    // setTimeout(() => {
    // 	const rayCaster = new THREE.Raycaster()
    // 	rayCaster.setFromCamera(new THREE.Vector2(1, 1), camera)
    // 	const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    // 	const intersectPoint = new THREE.Vector3()
    // 	rayCaster.ray.intersectPlane(plane, intersectPoint)
    // 	console.log('max world x:', intersectPoint.x)
    // 	// MAX_WORLD_X = intersectPoint.x  doesn't work with first person view
    // }, 500)
  }
  setupCamera();
  ui.onResize(setupCamera);

  // const controls = new THREE.OrbitControls(camera, renderer.domElement)
  // controls.minPolarAngle = -Math.PI / 2
  // controls.maxPolarAngle = Math.PI
  // controls.addEventListener('change', () => {
  // 	console.log('camera changed', 'camera=', camera.position, ', airplane=', airplane.position, 'camera.rotation=', camera.rotation)
  // })
  // setTimeout(() => {
  // 	camera.lookAt(airplane.mesh.position)
  // 	controls.target.copy(airplane.mesh.position)
  // }, 100)

  // controls.noZoom = true
  //controls.noPan = true

  // handleWindowResize()

  gameplaySnapshotManager = new _src_managers_GameplaySnapshotManager_js__WEBPACK_IMPORTED_MODULE_7__["default"](renderer, scene, camera);
}

// LIGHTS
var ambientLight;
function createLights() {
  var hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);
  ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);
  var shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);
  shadowLight.position.set(150, 350, 350);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;
  shadowLight.shadow.mapSize.width = 4096;
  shadowLight.shadow.mapSize.height = 4096;
  scene.add(hemisphereLight);
  scene.add(shadowLight);
  scene.add(ambientLight);
}

// GUNS
var SimpleGun = /*#__PURE__*/function () {
  function SimpleGun() {
    _classCallCheck(this, SimpleGun);
    this.mesh = SimpleGun.createMesh();
    this.mesh.position.z = 28;
    this.mesh.position.x = 25;
    this.mesh.position.y = -8;
  }
  return _createClass(SimpleGun, [{
    key: "downtime",
    value: function downtime() {
      return 0.1;
    }
  }, {
    key: "damage",
    value: function damage() {
      return 1;
    }
  }, {
    key: "shoot",
    value: function shoot(direction) {
      var _this = this;
      var BULLET_SPEED = 0.5;
      var RECOIL_DISTANCE = 4;
      var RECOIL_DURATION = this.downtime() / 1.5;
      var position = new THREE.Vector3();
      this.mesh.getWorldPosition(position);
      position.add(new THREE.Vector3(5, 0, 0));
      spawnProjectile(this.damage(), position, direction, BULLET_SPEED, 0.3, 3);

      // Little explosion at exhaust
      spawnParticles(position.clone().add(new THREE.Vector3(2, 0, 0)), 1, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.Colors.orange, 0.2);

      // audio
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("shot-soft");

      // Recoil of gun
      var initialX = this.mesh.position.x;
      TweenMax.to(this.mesh.position, {
        duration: RECOIL_DURATION / 2,
        x: initialX - RECOIL_DISTANCE,
        onComplete: function onComplete() {
          TweenMax.to(_this.mesh.position, {
            duration: RECOIL_DURATION / 2,
            x: initialX
          });
        }
      });
    }
  }], [{
    key: "createMesh",
    value: function createMesh() {
      var metalMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        flatShading: true,
        roughness: 0.5,
        metalness: 1.0
      });
      var BODY_RADIUS = 3;
      var BODY_LENGTH = 20;
      var full = new THREE.Group();
      var body = new THREE.Mesh(new THREE.CylinderGeometry(BODY_RADIUS, BODY_RADIUS, BODY_LENGTH), metalMaterial);
      body.rotation.z = Math.PI / 2;
      full.add(body);
      var barrel = new THREE.Mesh(new THREE.CylinderGeometry(BODY_RADIUS / 2, BODY_RADIUS / 2, BODY_LENGTH), metalMaterial);
      barrel.rotation.z = Math.PI / 2;
      barrel.position.x = BODY_LENGTH;
      full.add(barrel);
      return full;
    }
  }]);
}();
var DoubleGun = /*#__PURE__*/function () {
  function DoubleGun() {
    _classCallCheck(this, DoubleGun);
    this.gun1 = new SimpleGun();
    this.gun2 = new SimpleGun();
    this.gun2.mesh.position.add(new THREE.Vector3(0, 14, 0));
    this.mesh = new THREE.Group();
    this.mesh.add(this.gun1.mesh);
    this.mesh.add(this.gun2.mesh);
  }
  return _createClass(DoubleGun, [{
    key: "downtime",
    value: function downtime() {
      return 0.15;
    }
  }, {
    key: "damage",
    value: function damage() {
      return this.gun1.damage() + this.gun2.damage();
    }
  }, {
    key: "shoot",
    value: function shoot(direction) {
      this.gun1.shoot(direction);
      this.gun2.shoot(direction);
    }
  }]);
}();
var BetterGun = /*#__PURE__*/function () {
  function BetterGun() {
    _classCallCheck(this, BetterGun);
    this.mesh = BetterGun.createMesh();
    this.mesh.position.z = 28;
    this.mesh.position.x = -3;
    this.mesh.position.y = -5;
  }
  return _createClass(BetterGun, [{
    key: "downtime",
    value: function downtime() {
      return 0.1;
    }
  }, {
    key: "damage",
    value: function damage() {
      return 5;
    }
  }, {
    key: "shoot",
    value: function shoot(direction) {
      var _this2 = this;
      var BULLET_SPEED = 0.5;
      var RECOIL_DISTANCE = 4;
      var RECOIL_DURATION = this.downtime() / 3;

      // position = position.clone().add(new THREE.Vector3(11.5, -1.3, 7.5))
      var position = new THREE.Vector3();
      this.mesh.getWorldPosition(position);
      position.add(new THREE.Vector3(12, 0, 0));
      spawnProjectile(this.damage(), position, direction, BULLET_SPEED, 0.8, 6);

      // Little explosion at exhaust
      spawnParticles(position.clone().add(new THREE.Vector3(2, 0, 0)), 3, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.Colors.orange, 0.5);

      // audio
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("shot-hard");

      // Recoil of gun
      var initialX = this.mesh.position.x;
      TweenMax.to(this.mesh.position, {
        duration: RECOIL_DURATION,
        x: initialX - RECOIL_DISTANCE,
        onComplete: function onComplete() {
          TweenMax.to(_this2.mesh.position, {
            duration: RECOIL_DURATION,
            x: initialX
          });
        }
      });
    }
  }], [{
    key: "createMesh",
    value: function createMesh() {
      var metalMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        flatShading: true,
        roughness: 0.5,
        metalness: 1.0
      });
      var BODY_RADIUS = 5;
      var BODY_LENGTH = 30;
      var full = new THREE.Group();
      var body = new THREE.Mesh(new THREE.CylinderGeometry(BODY_RADIUS, BODY_RADIUS, BODY_LENGTH), metalMaterial);
      body.rotation.z = Math.PI / 2;
      body.position.x = BODY_LENGTH / 2;
      full.add(body);
      var BARREL_RADIUS = BODY_RADIUS / 2;
      var BARREL_LENGTH = BODY_LENGTH * 0.66;
      var barrel = new THREE.Mesh(new THREE.CylinderGeometry(BARREL_RADIUS, BARREL_RADIUS, BARREL_LENGTH), metalMaterial);
      barrel.rotation.z = Math.PI / 2;
      barrel.position.x = BODY_LENGTH + BARREL_LENGTH / 2;
      full.add(barrel);
      var TIP_RADIUS = BARREL_RADIUS * 1.3;
      var TIP_LENGTH = BODY_LENGTH / 4;
      var tip = new THREE.Mesh(new THREE.CylinderGeometry(TIP_RADIUS, TIP_RADIUS, TIP_LENGTH), metalMaterial);
      tip.rotation.z = Math.PI / 2;
      tip.position.x = BODY_LENGTH + BARREL_LENGTH + TIP_LENGTH / 2;
      full.add(tip);
      return full;
    }
  }]);
}();
var Airplane = /*#__PURE__*/function () {
  function Airplane(mesh, propeller, pilot) {
    _classCallCheck(this, Airplane);
    this.mesh = mesh;
    this.propeller = propeller;
    this.pilot = pilot;
    this.weapon = null;
    this.lastShot = 0;
  }
  return _createClass(Airplane, [{
    key: "equipWeapon",
    value: function equipWeapon(weapon) {
      if (this.weapon) {
        this.mesh.remove(this.weapon.mesh);
      }
      this.weapon = weapon;
      if (this.weapon) {
        this.mesh.add(this.weapon.mesh);
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      if (!this.weapon) {
        return;
      }

      // rate-limit the shooting
      var nowTime = new Date().getTime() / 1000;
      var ready = nowTime - this.lastShot > this.weapon.downtime();
      if (!ready) {
        return;
      }
      this.lastShot = nowTime;

      // fire the shot
      var direction = new THREE.Vector3(10, 0, 0);
      direction.applyEuler(airplane.mesh.rotation);
      this.weapon.shoot(direction);

      // recoil airplane
      var recoilForce = this.weapon.damage();
      TweenMax.to(this.mesh.position, {
        duration: 0.05,
        x: this.mesh.position.x - recoilForce
      });
    }
  }, {
    key: "tick",
    value: function tick(deltaTime) {
      this.propeller.rotation.x += 0.2 + game.planeSpeed * deltaTime * 0.005;
      if (game.status === "playing") {
        game.planeSpeed = _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.normalize(ui.mousePos.x, -0.5, 0.5, world.planeMinSpeed, world.planeMaxSpeed);
        var targetX = _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.normalize(ui.mousePos.x, -1, 1, -world.planeAmpWidth * 0.7, -world.planeAmpWidth);
        var targetY = _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.normalize(ui.mousePos.y, -0.75, 0.75, world.planeDefaultHeight - world.planeAmpHeight, world.planeDefaultHeight + world.planeAmpHeight);
        game.planeCollisionDisplacementX += game.planeCollisionSpeedX;
        targetX += game.planeCollisionDisplacementX;
        game.planeCollisionDisplacementY += game.planeCollisionSpeedY;
        targetY += game.planeCollisionDisplacementY;
        this.mesh.position.x += (targetX - this.mesh.position.x) * deltaTime * world.planeMoveSensivity;
        this.mesh.position.y += (targetY - this.mesh.position.y) * deltaTime * world.planeMoveSensivity;
        this.mesh.rotation.x = (this.mesh.position.y - targetY) * deltaTime * world.planeRotZSensivity;
        this.mesh.rotation.z = (targetY - this.mesh.position.y) * deltaTime * world.planeRotXSensivity;
        if (game.fpv) {
          camera.position.y = this.mesh.position.y + 20;
          // camera.setRotationFromEuler(new THREE.Euler(-1.490248, -1.4124514, -1.48923231))
          // camera.updateProjectionMatrix ()
        } else {
          camera.fov = _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.normalize(ui.mousePos.x, -30, 1, 40, 80);
          camera.updateProjectionMatrix();
          camera.position.y += (this.mesh.position.y - camera.position.y) * deltaTime * world.cameraSensivity;
        }
      }
      game.planeCollisionSpeedX += (0 - game.planeCollisionSpeedX) * deltaTime * 0.03;
      game.planeCollisionDisplacementX += (0 - game.planeCollisionDisplacementX) * deltaTime * 0.01;
      game.planeCollisionSpeedY += (0 - game.planeCollisionSpeedY) * deltaTime * 0.03;
      game.planeCollisionDisplacementY += (0 - game.planeCollisionDisplacementY) * deltaTime * 0.01;
      this.pilot.updateHairs(deltaTime);
    }
  }, {
    key: "gethit",
    value: function gethit(position) {
      var diffPos = this.mesh.position.clone().sub(position);
      var d = diffPos.length();
      game.planeCollisionSpeedX = 100 * diffPos.x / d;
      game.planeCollisionSpeedY = 100 * diffPos.y / d;
      ambientLight.intensity = 2;
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("airplane-crash");
      gameplaySnapshotManager.checkGameEnd(game.status);
    }
  }]);
}();
function rotateAroundSea(object, deltaTime, speed) {
  object.angle += deltaTime * game.speed * world.collectiblesSpeed;
  if (object.angle > Math.PI * 2) {
    object.angle -= Math.PI * 2;
  }
  object.mesh.position.x = Math.cos(object.angle) * object.distance;
  object.mesh.position.y = -world.seaRadius + Math.sin(object.angle) * object.distance;
}
var Collectible = /*#__PURE__*/function () {
  function Collectible(mesh, onApply) {
    _classCallCheck(this, Collectible);
    this.angle = 0;
    this.distance = 0;
    this.onApply = onApply;
    this.mesh = new THREE.Object3D();
    var bubble = new THREE.Mesh(new THREE.SphereGeometry(10, 100, 100), new THREE.MeshPhongMaterial({
      color: _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.COLOR_COLLECTIBLE_BUBBLE,
      transparent: true,
      opacity: 0.4,
      flatShading: true
    }));
    this.mesh.add(bubble);
    this.mesh.add(mesh);
    this.mesh.castShadow = true;

    // for the angle:
    //   Math.PI*2 * 0.0  => on the right side of the sea cylinder
    //   Math.PI*2 * 0.1  => on the top right
    //   Math.PI*2 * 0.2  => directly in front of the plane
    //   Math.PI*2 * 0.3  => directly behind the plane
    //   Math.PI*2 * 0.4  => on the top left
    //   Math.PI*2 * 0.5  => on the left side
    this.angle = Math.PI * 2 * 0.1;
    this.distance = world.seaRadius + world.planeDefaultHeight + (-1 + 2 * Math.random()) * (world.planeAmpHeight - 20);
    this.mesh.position.y = -world.seaRadius + Math.sin(this.angle) * this.distance;
    this.mesh.position.x = Math.cos(this.angle) * this.distance;
    sceneManager.add(this);
  }
  return _createClass(Collectible, [{
    key: "tick",
    value: function tick(deltaTime) {
      rotateAroundSea(this, deltaTime, world.collectiblesSpeed);

      // rotate collectible for visual effect
      this.mesh.rotation.y += deltaTime * 0.002 * Math.random();
      this.mesh.rotation.z += deltaTime * 0.002 * Math.random();

      // collision?
      if (_src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.collide(airplane.mesh, this.mesh, world.collectibleDistanceTolerance)) {
        this.onApply();
        this.explode();
      }
      // passed-by?
      else if (this.angle > Math.PI) {
        sceneManager.remove(this);
      }
    }
  }, {
    key: "explode",
    value: function explode() {
      var _this3 = this;
      spawnParticles(this.mesh.position.clone(), 15, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.COLOR_COLLECTIBLE_BUBBLE, 3);
      sceneManager.remove(this);
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("bubble");
      var DURATION = 1;
      setTimeout(function () {
        var itemMesh = new THREE.Group();
        for (var i = 1; i < _this3.mesh.children.length; i += 1) {
          itemMesh.add(_this3.mesh.children[i]);
        }
        scene.add(itemMesh);
        itemMesh.position.y = 120;
        itemMesh.position.z = 50;
        var initialScale = itemMesh.scale.clone();
        TweenMax.to(itemMesh.scale, {
          duration: DURATION / 2,
          x: initialScale.x * 4,
          y: initialScale.y * 4,
          z: initialScale.z * 4,
          ease: "Power2.easeInOut",
          onComplete: function onComplete() {
            TweenMax.to(itemMesh.scale, {
              duration: DURATION / 2,
              x: 0,
              y: 0,
              z: 0,
              ease: "Power2.easeInOut",
              onComplete: function onComplete() {
                scene.remove(itemMesh);
              }
            });
          }
        });
      }, 200);
    }
  }]);
}();
function spawnSimpleGunCollectible() {
  var gun = SimpleGun.createMesh();
  gun.scale.set(0.25, 0.25, 0.25);
  gun.position.x = -2;
  new Collectible(gun, function () {
    airplane.equipWeapon(new SimpleGun());
  });
}
function spawnBetterGunCollectible() {
  var gun = BetterGun.createMesh();
  gun.scale.set(0.25, 0.25, 0.25);
  gun.position.x = -7;
  new Collectible(gun, function () {
    airplane.equipWeapon(new BetterGun());
  });
}
function spawnDoubleGunCollectible() {
  var guns = new THREE.Group();
  var gun1 = SimpleGun.createMesh();
  gun1.scale.set(0.25, 0.25, 0.25);
  gun1.position.x = -2;
  gun1.position.y = -2;
  guns.add(gun1);
  var gun2 = SimpleGun.createMesh();
  gun2.scale.set(0.25, 0.25, 0.25);
  gun2.position.x = -2;
  gun2.position.y = 2;
  guns.add(gun2);
  new Collectible(guns, function () {
    airplane.equipWeapon(new DoubleGun());
  });
}
function spawnLifeCollectible() {
  var heart = _src_managers_ModelManager_js__WEBPACK_IMPORTED_MODULE_5__.modelManager.get("heart");
  heart.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      child.material.color.setHex(0xff0000);
    }
  });
  heart.position.set(0, -1, -3);
  heart.scale.set(5, 5, 5);
  new Collectible(heart, function () {
    addLife();
  });
}
var Sky = /*#__PURE__*/function () {
  function Sky() {
    _classCallCheck(this, Sky);
    this.mesh = new THREE.Object3D();
    this.nClouds = 20;
    this.clouds = [];
    var stepAngle = Math.PI * 2 / this.nClouds;
    for (var i = 0; i < this.nClouds; i++) {
      var c = new _src_components_Cloud_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.clouds.push(c);
      var a = stepAngle * i;
      var h = world.seaRadius + 150 + Math.random() * 200;
      c.mesh.position.y = Math.sin(a) * h;
      c.mesh.position.x = Math.cos(a) * h;
      c.mesh.position.z = -300 - Math.random() * 500;
      c.mesh.rotation.z = a + Math.PI / 2;
      var scale = 1 + Math.random() * 2;
      c.mesh.scale.set(scale, scale, scale);
      this.mesh.add(c.mesh);
    }
  }
  return _createClass(Sky, [{
    key: "tick",
    value: function tick(deltaTime) {
      for (var i = 0; i < this.nClouds; i++) {
        var c = this.clouds[i];
        c.tick(deltaTime);
      }
      this.mesh.rotation.z += game.speed * deltaTime;
    }
  }]);
}();
function createSky() {
  sky = new Sky();
  sky.mesh.position.y = -world.seaRadius;
  scene.add(sky.mesh);
}
var COLOR_SEA_LEVEL = [0x68c3c0,
// hsl(178deg 43% 59%)
0x47b3af,
// hsl(178deg 43% 49%)
0x398e8b,
// hsl(178deg 43% 39%)
0x2a6a68,
// hsl(178deg 43% 29%)
0x1c4544,
// hsl(178deg 43% 19%)
0x0d2120 // hsl(178deg 43% 09%)
];
var Sea = /*#__PURE__*/function () {
  function Sea() {
    _classCallCheck(this, Sea);
    var geom = new THREE.CylinderGeometry(world.seaRadius, world.seaRadius, world.seaLength, 40, 10);
    geom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    this.waves = [];
    var arr = geom.attributes.position.array;
    for (var i = 0; i < arr.length / 3; i++) {
      this.waves.push({
        x: arr[i * 3 + 0],
        y: arr[i * 3 + 1],
        z: arr[i * 3 + 2],
        ang: Math.random() * Math.PI * 2,
        amp: world.wavesMinAmp + Math.random() * (world.wavesMaxAmp - world.wavesMinAmp),
        speed: world.wavesMinSpeed + Math.random() * (world.wavesMaxSpeed - world.wavesMinSpeed)
      });
    }
    var mat = new THREE.MeshPhongMaterial({
      color: COLOR_SEA_LEVEL[0],
      transparent: true,
      opacity: 0.8,
      flatShading: true
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
  }
  return _createClass(Sea, [{
    key: "tick",
    value: function tick(deltaTime) {
      var arr = this.mesh.geometry.attributes.position.array;
      for (var i = 0; i < arr.length / 3; i++) {
        var wave = this.waves[i];
        arr[i * 3 + 0] = wave.x + Math.cos(wave.ang) * wave.amp;
        arr[i * 3 + 1] = wave.y + Math.sin(wave.ang) * wave.amp;
        wave.ang += wave.speed * deltaTime;
      }
      this.mesh.geometry.attributes.position.needsUpdate = true;
    }
  }, {
    key: "updateColor",
    value: function updateColor() {
      this.mesh.material = new THREE.MeshPhongMaterial({
        color: COLOR_SEA_LEVEL[(game.level - 1) % COLOR_SEA_LEVEL.length],
        transparent: true,
        opacity: 0.8,
        flatShading: true
      });
    }
  }]);
}();
function spawnParticles(pos, count, color, scale) {
  var _loop = function _loop() {
    var geom = new THREE.PlaneGeometry(6, 6);
    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      // Use white to not tint the texture
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
      map: projectileTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);
    mesh.visible = true;
    mesh.position.copy(pos);
    mesh.material.needsUpdate = true;
    mesh.scale.set(scale, scale, scale);

    // Make particle always face the camera
    mesh.lookAt(camera.position);
    var targetX = pos.x + (-1 + Math.random() * 2) * 50;
    var targetY = pos.y + (-1 + Math.random() * 2) * 50;
    var targetZ = pos.z + (-1 + Math.random() * 2) * 50;
    var speed = 0.6 + Math.random() * 0.2;
    TweenMax.to(mesh.rotation, speed, {
      x: Math.random() * 12,
      y: Math.random() * 12
    });
    TweenMax.to(mesh.scale, speed, {
      x: 0.1,
      y: 0.1,
      z: 0.1
    });
    TweenMax.to(mesh.position, speed, {
      x: targetX,
      y: targetY,
      z: targetZ,
      delay: Math.random() * 0.1,
      ease: Power2.easeOut,
      onComplete: function onComplete() {
        scene.remove(mesh);
      }
    });
  };
  for (var i = 0; i < count; i++) {
    _loop();
  }
}

// ENEMIES
var Enemy = /*#__PURE__*/function () {
  function Enemy() {
    _classCallCheck(this, Enemy);
    var geom = new THREE.PlaneGeometry(24, 24);
    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 0,
      specular: 0xffffff,
      flatShading: true,
      map: projectileTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      alphaTest: 0.5
    });
    if (!projectileTexture) {
      console.warn("Texture not loaded yet!");
    }
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.castShadow = true;
    this.angle = 0;
    this.distance = 0;
    this.hitpoints = 3;
    sceneManager.add(this);
  }
  return _createClass(Enemy, [{
    key: "tick",
    value: function tick(deltaTime) {
      rotateAroundSea(this, deltaTime, world.enemiesSpeed);

      // Make enemy always face the camera
      this.mesh.lookAt(camera.position);

      // collision?
      if (_src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.collide(airplane.mesh, this.mesh, world.enemyDistanceTolerance) && game.status !== "finished") {
        this.explode();
        airplane.gethit(this.mesh.position);
        removeLife();
      }
      // passed-by?
      else if (this.angle > Math.PI) {
        sceneManager.remove(this);
      }
      var thisAabb = new THREE.Box3().setFromObject(this.mesh);
      var _iterator3 = _createForOfIteratorHelper(allProjectiles),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var projectile = _step3.value;
          var projectileAabb = new THREE.Box3().setFromObject(projectile.mesh);
          if (thisAabb.intersectsBox(projectileAabb)) {
            spawnParticles(projectile.mesh.position.clone(), 5, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.Colors.brownDark, 1);
            projectile.remove();
            this.hitpoints -= projectile.damage;
            _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("bullet-impact", {
              volume: 0.3
            });
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (this.hitpoints <= 0) {
        this.explode();
      }
    }
  }, {
    key: "explode",
    value: function explode() {
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("rock-shatter", {
        volume: 3
      });
      spawnParticles(this.mesh.position.clone(), 15, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.Colors.red, 3);
      sceneManager.remove(this);
      game.statistics.enemiesKilled += 1;
    }
  }]);
}();
function spawnEnemies(count) {
  for (var i = 0; i < count; i++) {
    var enemy = new Enemy();
    enemy.angle = -(i * 0.1);
    enemy.distance = world.seaRadius + world.planeDefaultHeight + (-1 + Math.random() * 2) * (world.planeAmpHeight - 20);
    enemy.mesh.position.x = Math.cos(enemy.angle) * enemy.distance;
    enemy.mesh.position.y = -world.seaRadius + Math.sin(enemy.angle) * enemy.distance;
  }
  game.statistics.enemiesSpawned += count;
}

// COINS
var Coin = /*#__PURE__*/function () {
  function Coin() {
    _classCallCheck(this, Coin);
    var geom = new THREE.CylinderGeometry(4, 4, 1, 10);
    var mat = new THREE.MeshPhongMaterial({
      color: _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.COLOR_COINS,
      shininess: 1,
      specular: 0xffffff,
      flatShading: true
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.castShadow = true;
    this.angle = 0;
    this.dist = 0;
    sceneManager.add(this);
  }
  return _createClass(Coin, [{
    key: "tick",
    value: function tick(deltaTime) {
      rotateAroundSea(this, deltaTime, world.coinsSpeed);
      this.mesh.rotation.z += Math.random() * 0.1;
      this.mesh.rotation.y += Math.random() * 0.1;

      // collision?
      if (_src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.collide(airplane.mesh, this.mesh, world.coinDistanceTolerance)) {
        spawnParticles(this.mesh.position.clone(), 5, _src_utils_Colors__WEBPACK_IMPORTED_MODULE_9__.COLOR_COINS, 0.8);
        addCoin();
        _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("coin", {
          volume: 0.5
        });
        sceneManager.remove(this);
      }
      // passed-by?
      else if (this.angle > Math.PI) {
        sceneManager.remove(this);
      }
    }
  }]);
}();
function spawnCoins() {
  var nCoins = 1 + Math.floor(Math.random() * 10);
  var d = world.seaRadius + world.planeDefaultHeight + _src_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.randomFromRange(-1, 1) * (world.planeAmpHeight - 20);
  var amplitude = 10 + Math.round(Math.random() * 10);
  for (var i = 0; i < nCoins; i++) {
    var coin = new Coin();
    coin.angle = -(i * 0.02);
    coin.distance = d + Math.cos(i * 0.5) * amplitude;
    coin.mesh.position.y = -world.seaRadius + Math.sin(coin.angle) * coin.distance;
    coin.mesh.position.x = Math.cos(coin.angle) * coin.distance;
  }
  game.statistics.coinsSpawned += nCoins;
}

// SHOOTING
var allProjectiles = [];
var Projectile = /*#__PURE__*/function () {
  function Projectile(damage, initialPosition, direction, speed, radius, length) {
    _classCallCheck(this, Projectile);
    this.damage = damage;

    // Create material with bright purple color
    var material = new THREE.MeshPhongMaterial({
      color: 0x800080,
      // Bright purple
      shininess: 0,
      specular: 0xffffff,
      flatShading: true
    });
    this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length), material);
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.position.copy(initialPosition);
    this.direction = direction.clone();
    this.direction.setLength(1);
    this.speed = speed;
    sceneManager.add(this);
    game.statistics.shotsFired += 1;
  }
  return _createClass(Projectile, [{
    key: "tick",
    value: function tick(deltaTime) {
      this.mesh.position.add(this.direction.clone().multiplyScalar(this.speed * deltaTime));
      this.mesh.position.z *= 0.9;
      if (this.mesh.position.x > MAX_WORLD_X) {
        this.remove();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      sceneManager.remove(this);
      allProjectiles.splice(allProjectiles.indexOf(this), 1);
    }
  }]);
}();
function spawnProjectile(damage, initialPosition, direction, speed, radius, length) {
  var geometry = new THREE.PlaneGeometry(radius * 2, length);
  var material = new THREE.MeshBasicMaterial({
    color: 0x800080 // Bright purple
  });
  allProjectiles.push(new Projectile(damage, initialPosition, direction, speed, radius, length));
}

// 3D Models
var sea, sea2;
var airplane;

// Add this after the texture loading
var createProjectile = function createProjectile(damage, initialPosition, direction, speed, radius, length) {
  console.log("Creating projectile");
  var material = new THREE.MeshPhongMaterial({
    color: 0x800080,
    // Bright purple
    shininess: 0,
    specular: 0xffffff,
    flatShading: true,
    map: projectileTexture // The texture might be overriding our color
  });
  console.log("Projectile material color:", material.color);

  // sourcery skip: inline-immediately-returned-variable
  var mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length), material);
  return mesh;
};
function createPlane() {
  var _selectionManager$get = _src_managers_SelectionManager_js__WEBPACK_IMPORTED_MODULE_6__.selectionManager.getSelection(),
    pilot = _selectionManager$get.pilot,
    aircraft = _selectionManager$get.aircraft;
  var _createAirplaneMesh = (0,_src_createAirplaneMesh_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pilot, aircraft),
    _createAirplaneMesh2 = _slicedToArray(_createAirplaneMesh, 3),
    mesh = _createAirplaneMesh2[0],
    propeller = _createAirplaneMesh2[1],
    pilotMesh = _createAirplaneMesh2[2];
  airplane = new Airplane(mesh, propeller, pilotMesh);
  airplane.mesh.scale.set(0.25, 0.25, 0.25);
  airplane.mesh.position.y = world.planeDefaultHeight;
  scene.add(airplane.mesh);
}
function createSea() {
  // We create a second sea that is not animated because the animation of our our normal sea leaves holes at certain points and I don't know how to get rid of them. These holes did not occur in the original script that used three js version 75 and mergeVertices. However, I tried to reproduce that behaviour in the animation function but without succes - thus this workaround here.
  sea = new Sea();
  sea.mesh.position.y = -world.seaRadius;
  scene.add(sea.mesh);
  sea2 = new Sea();
  sea2.mesh.position.y = -world.seaRadius;
  scene.add(sea2.mesh);
}
function loop() {
  newTime = new Date().getTime();
  var deltaTime = newTime - oldTime;
  oldTime = newTime;
  if (game.status == "playing") {
    if (!game.paused) {
      // Add coins
      if (Math.floor(game.distance) % world.distanceForCoinsSpawn == 0 && Math.floor(game.distance) > game.coinLastSpawn) {
        game.coinLastSpawn = Math.floor(game.distance);
        spawnCoins();
      }
      if (Math.floor(game.distance) % world.distanceForSpeedUpdate == 0 && Math.floor(game.distance) > game.speedLastUpdate) {
        game.speedLastUpdate = Math.floor(game.distance);
        game.targetBaseSpeed += world.incrementSpeedByTime * deltaTime;
      }
      if (Math.floor(game.distance) % world.distanceForEnemiesSpawn == 0 && Math.floor(game.distance) > game.enemyLastSpawn) {
        game.enemyLastSpawn = Math.floor(game.distance);
        spawnEnemies(game.level);
      }
      if (Math.floor(game.distance) % world.distanceForLevelUpdate == 0 && Math.floor(game.distance) > game.levelLastUpdate) {
        game.levelLastUpdate = Math.floor(game.distance);
        game.level += 1;
        if (game.level === world.levelCount) {
          game.status = "finished";
          setFollowView();
          ui.showScoreScreen();
        } else {
          ui.informNextLevel(game.level);
          sea.updateColor();
          sea2.updateColor();
          ui.updateLevelCount();
          game.targetBaseSpeed = world.initSpeed + world.incrementSpeedByLevel * game.level;
        }
      }

      // span collectibles
      if (game.lifes < world.maxLifes && game.distance - game.lastLifeSpawn > world.pauseLifeSpawn && Math.random() < 0.01) {
        game.lastLifeSpawn = game.distance;
        spawnLifeCollectible();
      }
      if (!game.spawnedSimpleGun && game.distance > world.simpleGunLevelDrop * world.distanceForLevelUpdate) {
        spawnSimpleGunCollectible();
        game.spawnedSimpleGun = true;
      }
      if (!game.spawnedDoubleGun && game.distance > world.doubleGunLevelDrop * world.distanceForLevelUpdate) {
        spawnDoubleGunCollectible();
        game.spawnedDoubleGun = true;
      }
      if (!game.spawnedBetterGun && game.distance > world.betterGunLevelDrop * world.distanceForLevelUpdate) {
        spawnBetterGunCollectible();
        game.spawnedBetterGun = true;
      }
      if (ui.mouseButtons[0] || ui.keysDown["Space"]) {
        airplane.shoot();
      }
      airplane.tick(deltaTime);
      game.distance += game.speed * deltaTime * world.ratioSpeedDistance;
      game.baseSpeed += (game.targetBaseSpeed - game.baseSpeed) * deltaTime * 0.02;
      game.speed = game.baseSpeed * game.planeSpeed;
      ui.updateDistanceDisplay();
      if (game.lifes <= 0 && canDie) {
        game.status = "gameover";
      }
    }
    if (gameplaySnapshotManager) {
      gameplaySnapshotManager.checkAndCapture();
    }
  } else if (game.status == "gameover") {
    game.speed *= 0.99;
    airplane.mesh.rotation.z += (-Math.PI / 2 - airplane.mesh.rotation.z) * 0.0002 * deltaTime;
    airplane.mesh.rotation.x += 0.0003 * deltaTime;
    game.planeFallSpeed *= 1.05;
    airplane.mesh.position.y -= game.planeFallSpeed * deltaTime;
    if (airplane.mesh.position.y < -200) {
      ui.showReplay();
      game.status = "waitingReplay";
      _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("water-splash");
    }
  } else if (game.status == "waitingReplay") {
    // nothing to do
  }
  gameplaySnapshotManager.checkGameEnd(game.status);
  if (!game.paused) {
    airplane.tick(deltaTime);
    sea.mesh.rotation.z += game.speed * deltaTime;
    if (sea.mesh.rotation.z > 2 * Math.PI) {
      sea.mesh.rotation.z -= 2 * Math.PI;
    }
    ambientLight.intensity += (0.5 - ambientLight.intensity) * deltaTime * 0.005;
    sceneManager.tick(deltaTime);
    sky.tick(deltaTime);
    sea.tick(deltaTime);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

// COINS
function addCoin() {
  game.coins += 1;
  ui.updateCoinsCount(game.coins);
  game.statistics.coinsCollected += 1;
}
function addLife() {
  game.lifes = Math.min(world.maxLifes, game.lifes + 1);
  ui.updateLifesDisplay();
}
function removeLife() {
  game.lifes = Math.max(0, game.lifes - 1);
  ui.updateLifesDisplay();
  game.statistics.lifesLost += 1;
}
function setSideView() {
  game.fpv = false;
  camera.position.set(0, world.planeDefaultHeight, 200);
  camera.setRotationFromEuler(new THREE.Euler(0, 0, 0));
}
function setFollowView() {
  game.fpv = true;
  camera.position.set(-89, airplane.mesh.position.y + 20, 0);
  camera.setRotationFromEuler(new THREE.Euler(-1.490248, -1.4124514, -1.48923231));
  camera.updateProjectionMatrix();
}
var UI = /*#__PURE__*/function () {
  function UI(onStart, gameplaySnapshotManager) {
    _classCallCheck(this, UI);
    this.gameplaySnapshotManager = gameplaySnapshotManager;
    this._elemDistanceCounter = document.getElementById("distValue");
    this._elemReplayMessage = document.getElementById("replayMessage");
    this._elemLevelCounter = document.getElementById("levelValue");
    this._elemLevelCircle = document.getElementById("levelCircleStroke");
    this._elemsLifes = document.querySelectorAll("#lifes img");
    this._elemCoinsCount = document.getElementById("coinsValue");
    document.querySelector("#intro-screen button").onclick = function () {
      document.getElementById("intro-screen").classList.remove("visible");
      onStart();
    };
    document.addEventListener("keydown", this.handleKeyDown.bind(this), false);
    document.addEventListener("keyup", this.handleKeyUp.bind(this), false);
    document.addEventListener("mousedown", this.handleMouseDown.bind(this), false);
    document.addEventListener("mouseup", this.handleMouseUp.bind(this), false);
    document.addEventListener("mousemove", this.handleMouseMove.bind(this), false);
    document.addEventListener("blur", this.handleBlur.bind(this), false);
    document.oncontextmenu = document.body.oncontextmenu = function () {
      return false;
    };
    window.addEventListener("resize", this.handleWindowResize.bind(this), false);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mousePos = {
      x: 0,
      y: 0
    };
    this.canvas = document.getElementById("threejs-canvas");
    this.mouseButtons = [false, false, false];
    this.keysDown = {};
    this._resizeListeners = [];
  }
  return _createClass(UI, [{
    key: "onResize",
    value: function onResize(callback) {
      this._resizeListeners.push(callback);
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize(event) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      var _iterator4 = _createForOfIteratorHelper(this._resizeListeners),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var listener = _step4.value;
          listener();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var tx = -1 + event.clientX / this.width * 2;
      var ty = 1 - event.clientY / this.height * 2;
      this.mousePos = {
        x: tx,
        y: ty
      };
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      event.preventDefault();
      var tx = -1 + event.touches[0].pageX / this.width * 2;
      var ty = 1 - event.touches[0].pageY / this.height * 2;
      this.mousePos = {
        x: tx,
        y: ty
      };
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      this.mouseButtons[event.button] = true;
      if (event.button === 1 && game.status === "playing") {
        airplane.shoot();
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      this.keysDown[event.code] = true;
      if (event.code === "KeyP") {
        game.paused = !game.paused;
      }
      if (event.code === "Space") {
        airplane.shoot();
      }
      if (event.code === "Enter") {
        if (game.fpv) {
          setSideView();
        } else {
          setFollowView();
        }
      }
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      this.keysDown[event.code] = false;
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      this.mouseButtons[event.button] = false;
      event.preventDefault();
      if (game && game.status == "waitingReplay") {
        resetMap();
        this.informNextLevel(1);
        game.paused = false;
        sea.updateColor();
        sea2.updateColor();
        this.updateDistanceDisplay();
        this.updateLevelCount();
        this.updateLifesDisplay();
        this.updateCoinsCount();
        this.hideReplay();
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      this.mouseButtons = [false, false, false];
    }
  }, {
    key: "showReplay",
    value: function showReplay() {
      this._elemReplayMessage.style.display = "block";
    }
  }, {
    key: "hideReplay",
    value: function hideReplay() {
      this._elemReplayMessage.style.display = "none";
    }
  }, {
    key: "updateLevelCount",
    value: function updateLevelCount() {
      this._elemLevelCounter.innerText = game.level;
    }
  }, {
    key: "updateCoinsCount",
    value: function updateCoinsCount() {
      this._elemCoinsCount.innerText = game.coins;
    }
  }, {
    key: "updateDistanceDisplay",
    value: function updateDistanceDisplay() {
      this._elemDistanceCounter.innerText = Math.floor(game.distance);
      var d = 502 * (1 - game.distance % world.distanceForLevelUpdate / world.distanceForLevelUpdate);
      this._elemLevelCircle.setAttribute("stroke-dashoffset", d);
    }
  }, {
    key: "updateLifesDisplay",
    value: function updateLifesDisplay() {
      for (var i = 0, len = this._elemsLifes.length; i < len; i += 1) {
        var hasThisLife = i < game.lifes;
        var elem = this._elemsLifes[i];
        if (hasThisLife && !elem.classList.contains("visible")) {
          elem.classList.remove("invisible");
          elem.classList.add("visible");
        } else if (!hasThisLife && !elem.classList.contains("invisible")) {
          elem.classList.remove("visible");
          elem.classList.add("invisible");
        }
      }
    }
  }, {
    key: "informNextLevel",
    value: function informNextLevel(level) {
      var ANIMATION_DURATION = 1.0;
      var elem = document.getElementById("new-level");
      elem.style.visibility = "visible";
      elem.style.animationDuration = Math.round(ANIMATION_DURATION * 1000) + "ms";
      elem.children[1].innerText = level;
      elem.classList.add("animating");
      setTimeout(function () {
        document.getElementById("new-level").style.visibility = "hidden";
        elem.classList.remove("animating");
      }, 1000);
    }
  }, {
    key: "showScoreScreen",
    value: function showScoreScreen() {
      var elemScreen = document.getElementById("score-screen");
      elemScreen.classList.add("visible");

      // Display the snapshot
      var snapshot = gameplaySnapshotManager.getSnapshot();
      var snapshotContainer = document.getElementById("gameplay-snapshot-container");
      var snapshotImage = document.getElementById("gameplay-snapshot");
      if (snapshot) {
        snapshotImage.src = snapshot;
        snapshotContainer.style.display = "block";
      } else {
        snapshotContainer.style.display = "none";
      }

      // Fill in statistics
      document.getElementById("score-coins-collected").innerText = game.statistics.coinsCollected;
      document.getElementById("score-coins-total").innerText = game.statistics.coinsSpawned;
      document.getElementById("score-enemies-killed").innerText = game.statistics.enemiesKilled;
      document.getElementById("score-enemies-total").innerText = game.statistics.enemiesSpawned;
      document.getElementById("score-shots-fired").innerText = game.statistics.shotsFired;
      document.getElementById("score-lifes-lost").innerText = game.statistics.lifesLost;

      // Initialize and render the SocialShare component
      var gameData = {
        coinsCollected: game.statistics.coinsCollected,
        enemiesKilled: game.statistics.enemiesKilled,
        shotsFired: game.statistics.shotsFired,
        lifesLost: game.statistics.lifesLost
      };
      var socialShare = new _src_components_SocialShare_js__WEBPACK_IMPORTED_MODULE_8__["default"]("social-share-container", gameData);
      socialShare.render();
    }
  }, {
    key: "showError",
    value: function showError(message) {
      document.getElementById("error").style.visibility = "visible";
      document.getElementById("error-message").innerText = message;
    }
  }]);
}();
var ui;
function createWorld(pilot, aircraft) {
  world = {
    initSpeed: 0.00035,
    incrementSpeedByTime: 0.0000025,
    incrementSpeedByLevel: 0.000005,
    distanceForSpeedUpdate: 100,
    ratioSpeedDistance: 50,
    simpleGunLevelDrop: 1.1,
    doubleGunLevelDrop: 2.3,
    betterGunLevelDrop: 3.5,
    maxLifes: 3,
    pauseLifeSpawn: 400,
    levelCount: 6,
    distanceForLevelUpdate: 500,
    planeDefaultHeight: 100,
    planeAmpHeight: 80,
    planeAmpWidth: 75,
    planeMoveSensivity: 0.005,
    planeRotXSensivity: 0.0008,
    planeRotZSensivity: 0.0004,
    planeMinSpeed: 1.2,
    planeMaxSpeed: 1.6,
    seaRadius: 600,
    seaLength: 800,
    wavesMinAmp: 5,
    wavesMaxAmp: 20,
    wavesMinSpeed: 0.001,
    wavesMaxSpeed: 0.003,
    cameraSensivity: 0.002,
    coinDistanceTolerance: 15,
    coinsSpeed: 0.5,
    distanceForCoinsSpawn: 50,
    collectibleDistanceTolerance: 15,
    collectiblesSpeed: 0.6,
    enemyDistanceTolerance: 10,
    enemiesSpeed: 0.6,
    distanceForEnemiesSpawn: 50
  };

  // create the world
  createScene();
  createSea();
  createSky();
  createLights();
  createPlane(pilot, aircraft);
  resetMap();
}
function resetMap() {
  game = {
    status: "playing",
    speed: 0,
    paused: false,
    baseSpeed: 0.00035,
    targetBaseSpeed: 0.00035,
    speedLastUpdate: 0,
    distance: 0,
    coins: 0,
    fpv: false,
    // gun spawning
    spawnedSimpleGun: false,
    spawnedDoubleGun: false,
    spawnedBetterGun: false,
    lastLifeSpawn: 0,
    lifes: world.maxLifes,
    level: 1,
    levelLastUpdate: 0,
    planeFallSpeed: 0.001,
    planeSpeed: 0,
    planeCollisionDisplacementX: 0,
    planeCollisionSpeedX: 0,
    planeCollisionDisplacementY: 0,
    planeCollisionSpeedY: 0,
    coinLastSpawn: 0,
    enemyLastSpawn: 0,
    statistics: {
      coinsCollected: 0,
      coinsSpawned: 0,
      enemiesKilled: 0,
      enemiesSpawned: 0,
      shotsFired: 0,
      lifesLost: 0
    }
  };

  // update ui
  ui.updateDistanceDisplay();
  ui.updateLevelCount();
  ui.updateLifesDisplay();
  ui.updateCoinsCount();
  sceneManager.clear();
  sea.updateColor();
  sea2.updateColor();
  setSideView();
  airplane.equipWeapon(null);

  // airplane.equipWeapon(new SimpleGun())
  // airplane.equipWeapon(new DoubleGun())
  // airplane.equipWeapon(new BetterGun())
}
var soundPlaying = false;
function startMap(pilot, aircraft) {
  if (!soundPlaying) {
    _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("propeller", {
      loop: true,
      volume: 1
    });
    _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.play("ocean", {
      loop: true,
      volume: 1
    });
    soundPlaying = true;
  }
  createScene();
  createWorld(pilot, aircraft);
  if (gameplaySnapshotManager) {
    gameplaySnapshotManager.startCapture();
  }
  loop();
  ui.informNextLevel(1);
  game.paused = false;
}
function onWebsiteLoaded(event) {
  // load audio
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("ocean", null, "/audio/ocean.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("propeller", null, "/audio/propeller.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("coin-1", "coin", "/audio/coin-1.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("coin-2", "coin", "/audio/coin-2.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("coin-3", "coin", "/audio/coin-3.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-1", "coin", "/audio/jar-1.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-2", "coin", "/audio/jar-2.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-3", "coin", "/audio/jar-3.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-4", "coin", "/audio/jar-4.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-5", "coin", "/audio/jar-5.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-6", "coin", "/audio/jar-6.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("jar-7", "coin", "/audio/jar-7.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("airplane-crash-1", "airplane-crash", "/audio/airplane-crash-1.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("airplane-crash-2", "airplane-crash", "/audio/airplane-crash-2.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("airplane-crash-3", "airplane-crash", "/audio/airplane-crash-3.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("bubble", "bubble", "/audio/bubble.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("shot-soft", "shot-soft", "/audio/shot-soft.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("shot-hard", "shot-hard", "/audio/shot-hard.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("bullet-impact", "bullet-impact", "/audio/bullet-impact-rock.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("water-splash", "water-splash", "/audio/water-splash.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("rock-shatter-1", "rock-shatter", "/audio/rock-shatter-1.mp3");
  _src_managers_AudioManager_js__WEBPACK_IMPORTED_MODULE_3__.audioManager.load("rock-shatter-2", "rock-shatter", "/audio/rock-shatter-2.mp3");

  // load models
  _src_managers_ModelManager_js__WEBPACK_IMPORTED_MODULE_5__.modelManager.load("heart");
  ui = new UI(function () {
    _src_managers_SelectionManager_js__WEBPACK_IMPORTED_MODULE_6__.selectionManager.initSelectionScreen();
  }, gameplaySnapshotManager);
  document.addEventListener("selectionComplete", function (event) {
    var _event$detail = event.detail,
      pilot = _event$detail.pilot,
      aircraft = _event$detail.aircraft;
    startMap(pilot, aircraft);
  });
  _src_managers_loadingProgressManager_js__WEBPACK_IMPORTED_MODULE_4__.loadingProgressManager["catch"](function (err) {
    ui.showError(err.message);
  });
}
window.addEventListener("load", onWebsiteLoaded, false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game = {
  speed: 0.01,
  canDie: true
});

/***/ }),

/***/ "./src/components/Airplane.js":
/*!************************************!*\
  !*** ./src/components/Airplane.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOriginalAirplaneMesh: () => (/* binding */ createOriginalAirplaneMesh),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.js");
/* harmony import */ var _utils_Colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Colors */ "./src/utils/Colors.js");
/* harmony import */ var _Pilot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pilot */ "./src/components/Pilot.js");



function createOriginalAirplaneMesh(pilotType) {
  console.log("Creating original airplane mesh with pilot type:", pilotType);
  var mesh = new THREE.Object3D();

  // Cabin
  var matCabin = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.red,
    flatShading: true,
    side: THREE.DoubleSide
  });
  var frontUR = [40, 25, -25];
  var frontUL = [40, 25, 25];
  var frontLR = [40, -25, -25];
  var frontLL = [40, -25, 25];
  var backUR = [-40, 15, -5];
  var backUL = [-40, 15, 5];
  var backLR = [-40, 5, -5];
  var backLL = [-40, 5, 5];
  var vertices = new Float32Array(_utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(frontUL, frontUR, frontLL, frontLR).concat(
  // front
  _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(backUL, backUR, backLL, backLR)).concat(
  // back
  _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(backUR, backLR, frontUR, frontLR)).concat(
  // side
  _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(backUL, backLL, frontUL, frontLL)).concat(
  // side
  _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(frontUL, backUL, frontUR, backUR)).concat(
  // top
  _utils_Utils__WEBPACK_IMPORTED_MODULE_0__.utils.makeTetrahedron(frontLL, backLL, frontLR, backLR)) // bottom
  );
  var geomCabin = new THREE.BufferGeometry();
  geomCabin.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  var cabin = new THREE.Mesh(geomCabin, matCabin);
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  mesh.add(cabin);

  // Engine

  var geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
  var matEngine = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.white,
    flatShading: true
  });
  var engine = new THREE.Mesh(geomEngine, matEngine);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  engine.position.x = 50;
  engine.castShadow = true;
  engine.receiveShadow = true;
  mesh.add(engine);

  // Tail Plane
  var geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
  var matTailPlane = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.red,
    flatShading: true
  });
  var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  tailPlane.position.set(-40, 20, 0);
  tailPlane.castShadow = true;
  tailPlane.receiveShadow = true;
  mesh.add(tailPlane);

  // Wings

  var geomSideWing = new THREE.BoxGeometry(30, 5, 120, 1, 1, 1);
  var matSideWing = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.red,
    flatShading: true
  });
  var sideWing = new THREE.Mesh(geomSideWing, matSideWing);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  sideWing.position.set(0, 15, 0);
  sideWing.castShadow = true;
  sideWing.receiveShadow = true;
  mesh.add(sideWing);
  var geomWindshield = new THREE.BoxGeometry(3, 15, 20, 1, 1, 1);
  var matWindshield = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.white,
    transparent: true,
    opacity: 0.3,
    flatShading: true
  });
  var windshield = new THREE.Mesh(geomWindshield, matWindshield);
  windshield.position.set(20, 27, 0);
  windshield.castShadow = true;
  windshield.receiveShadow = true;
  mesh.add(windshield);
  var geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
  geomPropeller.attributes.position.array[4 * 3 + 1] -= 5;
  geomPropeller.attributes.position.array[4 * 3 + 2] += 5;
  geomPropeller.attributes.position.array[5 * 3 + 1] -= 5;
  geomPropeller.attributes.position.array[5 * 3 + 2] -= 5;
  geomPropeller.attributes.position.array[6 * 3 + 1] += 5;
  geomPropeller.attributes.position.array[6 * 3 + 2] += 5;
  geomPropeller.attributes.position.array[7 * 3 + 1] += 5;
  geomPropeller.attributes.position.array[7 * 3 + 2] -= 5;
  var matPropeller = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.brown,
    flatShading: true
  });
  var propeller = new THREE.Mesh(geomPropeller, matPropeller);
  propeller.castShadow = true;
  propeller.receiveShadow = true;
  var geomBlade = new THREE.BoxGeometry(1, 80, 10, 1, 1, 1);
  var matBlade = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.brownDark,
    flatShading: true
  });
  var blade1 = new THREE.Mesh(geomBlade, matBlade);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  blade1.position.set(8, 0, 0);
  blade1.castShadow = true;
  blade1.receiveShadow = true;
  var blade2 = blade1.clone();
  blade2.rotation.x = Math.PI / 2;
  blade2.castShadow = true;
  blade2.receiveShadow = true;
  propeller.add(blade1);
  propeller.add(blade2);
  propeller.position.set(60, 0, 0);
  mesh.add(propeller);
  var wheelProtecGeom = new THREE.BoxGeometry(30, 15, 10, 1, 1, 1);
  var wheelProtecMat = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.red,
    flatShading: true
  });
  var wheelProtecR = new THREE.Mesh(wheelProtecGeom, wheelProtecMat);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  wheelProtecR.position.set(25, -20, 25);
  mesh.add(wheelProtecR);
  var wheelTireGeom = new THREE.BoxGeometry(24, 24, 4);
  var wheelTireMat = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.brownDark,
    flatShading: true
  });
  var wheelTireR = new THREE.Mesh(wheelTireGeom, wheelTireMat);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  wheelTireR.position.set(25, -28, 25);
  var wheelAxisGeom = new THREE.BoxGeometry(10, 10, 6);
  var wheelAxisMat = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.brown,
    flatShading: true
  });
  var wheelAxis = new THREE.Mesh(wheelAxisGeom, wheelAxisMat);
  wheelTireR.add(wheelAxis);
  mesh.add(wheelTireR);
  var wheelProtecL = wheelProtecR.clone();
  wheelProtecL.position.z = -wheelProtecR.position.z;
  mesh.add(wheelProtecL);
  var wheelTireL = wheelTireR.clone();
  wheelTireL.position.z = -wheelTireR.position.z;
  mesh.add(wheelTireL);
  var wheelTireB = wheelTireR.clone();
  wheelTireB.scale.set(0.5, 0.5, 0.5);
  //Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ñ
  wheelTireB.position.set(-35, -5, 0);
  mesh.add(wheelTireB);
  var suspensionGeom = new THREE.BoxGeometry(4, 20, 4);
  suspensionGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 10, 0));
  var suspensionMat = new THREE.MeshPhongMaterial({
    color: _utils_Colors__WEBPACK_IMPORTED_MODULE_1__.Colors.red,
    flatShading: true
  });
  var suspension = new THREE.Mesh(suspensionGeom, suspensionMat);
  suspension.position.set(-35, -5, 0);
  suspension.rotation.z = -0.3;
  mesh.add(suspension);

  // Modify the pilot creation part
  var pilot = new _Pilot__WEBPACK_IMPORTED_MODULE_2__["default"](pilotType);
  pilot.mesh.position.set(5, 27, 0);
  mesh.add(pilot.mesh);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return [mesh, propeller, pilot];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOriginalAirplaneMesh);

/***/ }),

/***/ "./src/components/Blimp.js":
/*!*********************************!*\
  !*** ./src/components/Blimp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBlimpMesh: () => (/* binding */ createBlimpMesh),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Colors */ "./src/utils/Colors.js");
/* harmony import */ var _Pilot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pilot */ "./src/components/Pilot.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


function createBlimpMesh(pilotType) {
  console.log("Creating blimp mesh with pilot type:", pilotType);
  var mesh = new THREE.Object3D();

  // Blimp body (vivid green with casino designs)
  var bodyGeometry = new THREE.SphereGeometry(40, 32, 32);
  var bodyMaterial = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    // Bright green
    flatShading: true
  });
  var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.scale.set(2, 1, 1);
  mesh.add(body);

  // Adding casino designs (3D boxes representing card suits)
  var suitGeometry = new THREE.BoxGeometry(5, 5, 5);
  var suits = [{
    color: 0x000000,
    position: [30, 0, 10]
  },
  // Spade
  {
    color: 0xff0000,
    position: [30, 0, -10]
  },
  // Heart
  {
    color: 0x0000ff,
    position: [-30, 0, 10]
  },
  // Diamond
  {
    color: 0x008000,
    position: [-30, 0, -10]
  } // Club
  ];
  suits.forEach(function (_ref) {
    var _suitMesh$position;
    var color = _ref.color,
      position = _ref.position;
    var suitMaterial = new THREE.MeshPhongMaterial({
      color: color
    });
    var suitMesh = new THREE.Mesh(suitGeometry, suitMaterial);
    (_suitMesh$position = suitMesh.position).set.apply(_suitMesh$position, _toConsumableArray(position));
    body.add(suitMesh);
  });

  // Gondola
  var gondolaGeometry = new THREE.BoxGeometry(20, 10, 15);
  var gondolaMaterial = new THREE.MeshPhongMaterial({
    color: 0x8b4513,
    flatShading: true
  });
  var gondola = new THREE.Mesh(gondolaGeometry, gondolaMaterial);
  gondola.position.set(0, -25, 0);
  mesh.add(gondola);

  // Propeller (casino-themed slot machine)
  var slotGeometry = new THREE.CylinderGeometry(10, 10, 20, 32);
  var slotMaterial = new THREE.MeshPhongMaterial({
    color: 0xffd700,
    flatShading: true
  });
  var propeller = new THREE.Mesh(slotGeometry, slotMaterial);
  propeller.position.set(-60, -25, 0);
  var bladeGeom = new THREE.BoxGeometry(1, 80, 10);
  var bladeMat = new THREE.MeshPhongMaterial({
    color: 0x000000,
    flatShading: true
  });
  var blade1 = new THREE.Mesh(bladeGeom, bladeMat);
  var blade2 = blade1.clone();
  blade2.rotation.x = Math.PI / 2;
  propeller.add(blade1);
  propeller.add(blade2);
  mesh.add(propeller);

  // Pilot (added at the bottom of the gondola for the blimp)
  var pilot = new _Pilot__WEBPACK_IMPORTED_MODULE_1__["default"](pilotType);
  pilot.mesh.position.set(0, -35, 0);
  mesh.add(pilot.mesh);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return [mesh, propeller, pilot];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlimpMesh);

/***/ }),

/***/ "./src/components/Cloud.js":
/*!*********************************!*\
  !*** ./src/components/Cloud.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RainbowCloud)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RainbowCloud = /*#__PURE__*/function () {
  function RainbowCloud() {
    _classCallCheck(this, RainbowCloud);
    this.mesh = new THREE.Object3D();
    var geom = new THREE.BoxGeometry(20, 20, 20);

    // More vibrant rainbow colors
    this.rainbowColors = [0xff0000,
    // Bright Red
    0xff7f00,
    // Bright Orange
    0xffff00,
    // Bright Yellow
    0x00ff00,
    // Bright Green
    0x0000ff,
    // Bright Blue
    0x8b00ff // Bright Violet
    ];
    var nBlocs = 5 + Math.floor(Math.random() * 3); // Increased number of blocks
    for (var i = 0; i < nBlocs; i++) {
      var mat = new THREE.MeshPhongMaterial({
        color: this.rainbowColors[i % this.rainbowColors.length],
        emissive: this.rainbowColors[i % this.rainbowColors.length],
        emissiveIntensity: 0.5,
        shininess: 100
      });
      var m = new THREE.Mesh(geom.clone(), mat);
      m.position.x = i * 12; // Slightly closer together
      m.position.y = Math.random() * 10;
      m.position.z = Math.random() * 10;
      m.rotation.y = Math.random() * Math.PI * 2;
      m.rotation.z = Math.random() * Math.PI * 2;
      var s = 0.8 + Math.random() * 0.5; // Larger scale
      m.scale.set(s, s, s);
      this.mesh.add(m);
      m.castShadow = true;
      m.receiveShadow = true;

      // Add a glow effect
      var glowMat = new THREE.MeshBasicMaterial({
        color: this.rainbowColors[i % this.rainbowColors.length],
        transparent: true,
        opacity: 0.5
      });
      var glowMesh = new THREE.Mesh(geom.clone(), glowMat);
      glowMesh.scale.multiplyScalar(1.2);
      m.add(glowMesh);
    }

    // Add overall glow to the cloud
    var cloudGlow = new THREE.PointLight(0xffffff, 1, 100);
    cloudGlow.position.set(nBlocs * 6, 5, 5);
    this.mesh.add(cloudGlow);
  }
  return _createClass(RainbowCloud, [{
    key: "tick",
    value: function tick(deltaTime) {
      var l = this.mesh.children.length;
      for (var i = 0; i < l; i++) {
        var m = this.mesh.children[i];
        if (m instanceof THREE.Mesh) {
          m.rotation.y += Math.random() * 0.02 * (i + 1);
          m.rotation.z += Math.random() * 0.03 * (i + 1);

          // Animate colors
          var hue = (Date.now() * 0.001 + i * 0.1) % 1;
          var color = new THREE.Color().setHSL(hue, 1, 0.5);
          m.material.color.set(color);
          m.material.emissive.set(color);
          if (m.children[0]) {
            m.children[0].material.color.set(color);
          }

          // Pulsating effect
          var s = 0.8 + Math.random() * 0.5;
          var pulseFactor = Math.sin(Date.now() * 0.005 + i) * 0.1 + 1;
          m.scale.set(s * pulseFactor, s * pulseFactor, s * pulseFactor);
        }
      }

      // Animate the overall glow
      var cloudGlow = this.mesh.children[this.mesh.children.length - 1];
      if (cloudGlow instanceof THREE.PointLight) {
        cloudGlow.intensity = 1 + Math.sin(Date.now() * 0.005) * 0.5;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/FighterJet.js":
/*!**************************************!*\
  !*** ./src/components/FighterJet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFighterJetMesh: () => (/* binding */ createFighterJetMesh),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Colors */ "./src/utils/Colors.js");
/* harmony import */ var _Pilot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pilot */ "./src/components/Pilot.js");


function createFighterJetMesh(pilotType) {
  console.log("Creating fighter jet mesh with pilot type:", pilotType);
  var mesh = new THREE.Object3D();

  // Main body
  var bodyGeometry = new THREE.ConeGeometry(15, 150, 32);
  var bodyMaterial = new THREE.MeshPhongMaterial({
    color: 0x2f4f4f
  });
  var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.rotation.z = Math.PI / 2;
  mesh.add(body);

  // Cockpit
  var cockpitGeometry = new THREE.SphereGeometry(12, 32, 32);
  var cockpitMaterial = new THREE.MeshPhongMaterial({
    color: 0x1e90ff,
    opacity: 0.7,
    transparent: true
  });
  var cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
  cockpit.position.set(-60, 15, 0);
  mesh.add(cockpit);

  // Wings
  var wingGeometry = new THREE.BoxGeometry(50, 5, 100);
  var wingMaterial = new THREE.MeshPhongMaterial({
    color: 0x2f4f4f
  });
  var wings = new THREE.Mesh(wingGeometry, wingMaterial);
  mesh.add(wings);

  // Tail fins and engines
  var tailFinGeometry = new THREE.BoxGeometry(20, 30, 5);
  var engineGeometry = new THREE.CylinderGeometry(8, 10, 20, 32);
  var engineMaterial = new THREE.MeshPhongMaterial({
    color: 0x696969
  });
  var leftFin = new THREE.Mesh(tailFinGeometry, wingMaterial);
  leftFin.position.set(60, 15, -5);
  mesh.add(leftFin);
  var rightFin = leftFin.clone();
  rightFin.position.set(60, 15, 5);
  mesh.add(rightFin);
  var leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
  leftEngine.position.set(30, -10, -15);
  mesh.add(leftEngine);
  var rightEngine = leftEngine.clone();
  rightEngine.position.set(30, -10, 15);
  mesh.add(rightEngine);

  // Propeller (represented by nose cone for consistency)
  var propellerGeometry = new THREE.ConeGeometry(5, 20, 32);
  var propellerMaterial = new THREE.MeshPhongMaterial({
    color: 0xd3d3d3
  });
  var propeller = new THREE.Mesh(propellerGeometry, propellerMaterial);
  propeller.position.set(-85, 0, 0);
  mesh.add(propeller);

  // Pilot (positioned inside the cockpit)
  var pilot = new _Pilot__WEBPACK_IMPORTED_MODULE_1__["default"](pilotType);
  pilot.mesh.position.set(-60, 25, 0); // Positioned near cockpit
  mesh.add(pilot.mesh);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return [mesh, propeller, pilot];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFighterJetMesh);

/***/ }),

/***/ "./src/components/Pilot.js":
/*!*********************************!*\
  !*** ./src/components/Pilot.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pilot)
/* harmony export */ });
/* harmony import */ var _utils_Colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Colors */ "./src/utils/Colors.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game */ "./game.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Pilot = /*#__PURE__*/function () {
  function Pilot() {
    var pilotType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "human";
    _classCallCheck(this, Pilot);
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
  return _createClass(Pilot, [{
    key: "createHumanPilot",
    value: function createHumanPilot() {
      this.mesh = new THREE.Object3D();
      this.angleHairs = 0;
      var bodyGeom = new THREE.BoxGeometry(15, 15, 15);
      var bodyMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].brown,
        flatShading: true
      });
      var body = new THREE.Mesh(bodyGeom, bodyMat);
      body.position.set(2, -12, 0);
      this.mesh.add(body);
      var faceGeom = new THREE.BoxGeometry(10, 10, 10);
      var faceMat = new THREE.MeshLambertMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].pink
      });
      var face = new THREE.Mesh(faceGeom, faceMat);
      this.mesh.add(face);
      var hairGeom = new THREE.BoxGeometry(4, 4, 4);
      var hairMat = new THREE.MeshLambertMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].brown
      });
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
      var glassMat = new THREE.MeshLambertMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].brown
      });
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
  }, {
    key: "createFrogPilot",
    value: function createFrogPilot() {
      var _this = this;
      // Helper function to randomize vertices for a bumpy effect
      function addBumpEffect(geometry, bumpStrength) {
        var vertices = geometry.attributes.position.array;
        for (var i = 0; i < vertices.length; i += 3) {
          var offset = (Math.random() - 0.5) * bumpStrength;
          vertices[i] += offset; // x-coordinate
          vertices[i + 1] += offset; // y-coordinate
          vertices[i + 2] += offset; // z-coordinate
        }
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
      }

      // Body geometry with a bumpy surface
      var bodyGeom = new THREE.SphereGeometry(7.5, 32, 32);
      addBumpEffect(bodyGeom, 0.2); // Add bumpiness to the body geometry

      // Material for the body
      var bodyMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].green,
        flatShading: false,
        shininess: 30
      });

      // Body mesh
      var body = new THREE.Mesh(bodyGeom, bodyMat);
      this.mesh.add(body);

      // Eyes geometry and material
      var eyeGeom = new THREE.SphereGeometry(2, 32, 32);
      var eyeMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        flatShading: false,
        shininess: 100
      });

      // Left eye
      var eyeL = new THREE.Mesh(eyeGeom, eyeMat);
      eyeL.position.set(3, 4, 4);
      this.mesh.add(eyeL);

      // Right eye (clone of the left eye)
      var eyeR = eyeL.clone();
      eyeR.position.set(3, 4, -4);
      this.mesh.add(eyeR);

      // Pupils geometry and material
      var pupilGeom = new THREE.SphereGeometry(1, 32, 32);
      var pupilMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        flatShading: false,
        shininess: 100
      });

      // Left pupil
      var pupilL = new THREE.Mesh(pupilGeom, pupilMat);
      pupilL.position.set(4, 4, 4);
      this.mesh.add(pupilL);

      // Right pupil (clone of the left pupil)
      var pupilR = pupilL.clone();
      pupilR.position.set(4, 4, -4);
      this.mesh.add(pupilR);

      // Mouth
      var mouthShape = new THREE.Shape();
      mouthShape.moveTo(-3, 0);
      mouthShape.quadraticCurveTo(0, -2, 3, 0);
      var mouthGeom = new THREE.ShapeGeometry(mouthShape);
      var mouthMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].darkGreen,
        side: THREE.DoubleSide
      });
      var mouth = new THREE.Mesh(mouthGeom, mouthMat);
      mouth.position.set(3, -2, 0);
      mouth.rotation.x = Math.PI * 0.5;
      this.mesh.add(mouth);

      // Tongue
      var tongueGeom = new THREE.BoxGeometry(1, 0.5, 4);
      var tongueMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].red,
        flatShading: false
      });
      var tongue = new THREE.Mesh(tongueGeom, tongueMat);
      tongue.position.set(3, -2, 2);
      tongue.rotation.x = Math.PI * 0.25;
      this.mesh.add(tongue);

      // Webbed feet
      var footShape = new THREE.Shape();
      footShape.moveTo(-1.5, 0);
      footShape.lineTo(-0.5, 2);
      footShape.lineTo(0.5, 2);
      footShape.lineTo(1.5, 0);
      footShape.lineTo(-1.5, 0);
      var footGeom = new THREE.ShapeGeometry(footShape);
      var footMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].darkGreen,
        side: THREE.DoubleSide,
        flatShading: false
      });
      var positions = [{
        x: -3,
        y: -7,
        z: 3
      }, {
        x: 3,
        y: -7,
        z: 3
      }, {
        x: -3,
        y: -7,
        z: -3
      }, {
        x: 3,
        y: -7,
        z: -3
      }];
      positions.forEach(function (pos) {
        var foot = new THREE.Mesh(footGeom, footMat);
        foot.position.set(pos.x, pos.y, pos.z);
        foot.rotation.x = Math.PI * 0.5;
        _this.mesh.add(foot);
      });

      // Vocal sac
      var vocalSacGeom = new THREE.SphereGeometry(3, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
      var vocalSacMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].lightGreen,
        flatShading: false,
        transparent: true,
        opacity: 0.7
      });
      var vocalSac = new THREE.Mesh(vocalSacGeom, vocalSacMat);
      vocalSac.position.set(0, -5, 6);
      vocalSac.rotation.x = Math.PI;
      this.mesh.add(vocalSac);

      // Casino-themed oversized top hat
      var hatGroup = new THREE.Group();
      var topHatGeometry = new THREE.CylinderGeometry(6, 7, 12, 32);
      var topHatMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        flatShading: true
      });
      var topHat = new THREE.Mesh(topHatGeometry, topHatMaterial);
      topHat.position.set(0, 6, 0);
      hatGroup.add(topHat);

      // Hat band
      var hatBandGeometry = new THREE.TorusGeometry(6.5, 1, 16, 100);
      var hatBandMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].gold,
        flatShading: true
      });
      var hatBand = new THREE.Mesh(hatBandGeometry, hatBandMaterial);
      hatBand.position.set(0, 1, 0);
      hatBand.rotation.x = Math.PI * 0.5;
      hatGroup.add(hatBand);

      // Playing card
      var cardGeometry = new THREE.BoxGeometry(4, 6, 0.1);
      var cardMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        flatShading: true
      });
      var card = new THREE.Mesh(cardGeometry, cardMaterial);
      card.position.set(4, 4, 0);
      card.rotation.z = Math.PI / 12;
      hatGroup.add(card);

      // Card symbol (heart)
      var heartShape = new THREE.Shape();
      heartShape.moveTo(0, 0);
      heartShape.bezierCurveTo(0, -1, -1, -1, -1, 0);
      heartShape.bezierCurveTo(-1, 1, 0, 1, 0, 2);
      heartShape.bezierCurveTo(0, 1, 1, 1, 1, 0);
      heartShape.bezierCurveTo(1, -1, 0, -1, 0, 0);
      var heartGeometry = new THREE.ShapeGeometry(heartShape);
      var heartMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].red,
        flatShading: true
      });
      var heartSymbol = new THREE.Mesh(heartGeometry, heartMaterial);
      heartSymbol.scale.set(1, 1, 1);
      heartSymbol.position.set(4, 4, 0.1);
      hatGroup.add(heartSymbol);
      hatGroup.position.set(0, 10, 0);
      hatGroup.scale.set(1.5, 1.5, 1.5);
      this.mesh.add(hatGroup);

      // Bow tie
      var bowTieGroup = new THREE.Group();
      var bowGeometry = new THREE.BoxGeometry(3, 1, 0.5);
      var bowMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].red,
        flatShading: true
      });
      var bowLeft = new THREE.Mesh(bowGeometry, bowMaterial);
      bowLeft.position.set(-1, 0, 0);
      bowLeft.rotation.z = Math.PI / 6;
      var bowRight = bowLeft.clone();
      bowRight.position.set(1, 0, 0);
      bowRight.rotation.z = -Math.PI / 6;
      var bowCenter = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), bowMaterial);
      bowTieGroup.add(bowLeft, bowRight, bowCenter);
      bowTieGroup.position.set(3, -3, 6);
      this.mesh.add(bowTieGroup);

      // Spots
      var spotGeometry = new THREE.CircleGeometry(0.3, 32);
      var spotMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].darkGreen,
        flatShading: true
      });
      for (var i = 0; i < 20; i++) {
        var spot = new THREE.Mesh(spotGeometry, spotMaterial);
        var theta = Math.random() * Math.PI * 2;
        var phi = Math.random() * Math.PI;
        var x = 7.5 * Math.sin(phi) * Math.cos(theta);
        var y = 7.5 * Math.sin(phi) * Math.sin(theta);
        var z = 7.5 * Math.cos(phi);
        spot.position.set(x, y, z);
        spot.lookAt(0, 0, 0);
        this.mesh.add(spot);
      }

      // Legs
      var legGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
      var legMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].green,
        flatShading: true
      });

      // Feet
      var footGeometry = new THREE.SphereGeometry(0.8, 32, 32);
      var footMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].darkGreen,
        flatShading: true
      });
      positions.forEach(function (pos) {
        var foot = new THREE.Mesh(footGeometry, footMaterial);
        foot.position.set(pos.x, pos.y - 1.5, pos.z);
        foot.scale.set(1, 0.5, 1.5);
        _this.mesh.add(foot);
      });
    }
  }, {
    key: "createNounsPilot",
    value: function createNounsPilot() {
      var bodyGeom = new THREE.BoxGeometry(15, 15, 15);
      var bodyMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
        flatShading: true
      });
      var body = new THREE.Mesh(bodyGeom, bodyMat);
      this.mesh.add(body);

      // Add sunglasses
      var glassGeom = new THREE.BoxGeometry(16, 6, 1);
      var glassMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        flatShading: true
      });
      var glasses = new THREE.Mesh(glassGeom, glassMat);
      glasses.position.set(0, 2, 7.5);
      this.mesh.add(glasses);

      // Add smile
      var smileGeom = new THREE.TorusGeometry(3, 1, 16, 100, Math.PI);
      var smileMat = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        flatShading: true
      });
      var smile = new THREE.Mesh(smileGeom, smileMat);
      smile.position.set(0, -2, 7.5);
      smile.rotation.x = Math.PI;
      this.mesh.add(smile);
      this.addHyperLargeGlasses();
    }
  }, {
    key: "addHyperLargeGlasses",
    value: function addHyperLargeGlasses() {
      var glassesGroup = new THREE.Group();

      // Frame - large and bright yellow
      var frameGeometry = new THREE.BoxGeometry(60, 20, 2);
      var frameMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow
      });
      var frame = new THREE.Mesh(frameGeometry, frameMaterial);
      frame.position.set(0, 5, 12);
      glassesGroup.add(frame);

      // Left lens - larger and positioned closer to frame
      var lensGeometry = new THREE.BoxGeometry(24, 16, 1);
      var lensMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.7
      });
      var leftLens = new THREE.Mesh(lensGeometry, lensMaterial);
      leftLens.position.set(-15, 5, 13);
      glassesGroup.add(leftLens);

      // Right lens - cloned and adjusted
      var rightLens = leftLens.clone();
      rightLens.position.set(15, 5, 13);
      glassesGroup.add(rightLens);

      // Left temple
      var templeGeometry = new THREE.BoxGeometry(20, 2, 1);
      var templeMaterial = new THREE.MeshPhongMaterial({
        color: _utils_Colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow
      });
      var leftTemple = new THREE.Mesh(templeGeometry, templeMaterial);
      leftTemple.position.set(-30, 5, 9);
      leftTemple.rotation.y = Math.PI / 6;
      glassesGroup.add(leftTemple);

      // Right temple - cloned and adjusted
      var rightTemple = leftTemple.clone();
      rightTemple.position.set(30, 5, 9);
      rightTemple.rotation.y = -Math.PI / 6;
      glassesGroup.add(rightTemple);

      // Scale and position the glasses on the pilot's face
      glassesGroup.scale.set(1.5, 1.5, 1.5);
      glassesGroup.position.set(0, 4, 5);
      this.mesh.add(glassesGroup);
    }
  }, {
    key: "updateHairs",
    value: function updateHairs(deltaTime) {
      if (this.pilotType === "human") {
        // Only update hairs for human pilot
        var hairs = this.hairsTop.children;
        var l = hairs.length;
        for (var i = 0; i < l; i++) {
          var h = hairs[i];
          h.scale.y = 0.75 + Math.cos(this.angleHairs + i / 3) * 0.25;
        }
        this.angleHairs += _game__WEBPACK_IMPORTED_MODULE_1__["default"].speed * deltaTime * 40;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/SocialShare.js":
/*!***************************************!*\
  !*** ./src/components/SocialShare.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SocialShare = /*#__PURE__*/function () {
  function SocialShare(containerId, gameData) {
    _classCallCheck(this, SocialShare);
    this.container = document.getElementById(containerId);
    this.gameData = gameData || {};
  }
  return _createClass(SocialShare, [{
    key: "render",
    value: function render() {
      var twitterButton = this.createTwitterButton();
      this.container.innerHTML = ""; // Clear existing content
      this.container.appendChild(twitterButton);
    }
  }, {
    key: "createTwitterButton",
    value: function createTwitterButton() {
      var button = document.createElement("a");
      button.href = "#";
      button.className = "twitter-share-button";
      button.innerHTML = "Tweet";
      button.addEventListener("click", this.shareOnTwitter.bind(this));
      return button;
    }
  }, {
    key: "shareOnTwitter",
    value: function () {
      var _shareOnTwitter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var text, imageUrl, url, twitterUrl;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              text = this.generateShareText();
              imageUrl = "pic.twitter.com/N0w7N0umV6";
              url = "https://thebaseglobe.vercel.app";
              twitterUrl = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(text), "\n\n").concat(encodeURIComponent(imageUrl), "&url=").concat(encodeURIComponent(url));
              window.open(twitterUrl, "_blank", "width=550,height=420");
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function shareOnTwitter(_x) {
        return _shareOnTwitter.apply(this, arguments);
      }
      return shareOnTwitter;
    }()
  }, {
    key: "generateShareText",
    value: function generateShareText() {
      var _this$gameData = this.gameData,
        _this$gameData$coinsC = _this$gameData.coinsCollected,
        coinsCollected = _this$gameData$coinsC === void 0 ? 0 : _this$gameData$coinsC,
        _this$gameData$enemie = _this$gameData.enemiesKilled,
        enemiesKilled = _this$gameData$enemie === void 0 ? 0 : _this$gameData$enemie,
        _this$gameData$shotsF = _this$gameData.shotsFired,
        shotsFired = _this$gameData$shotsF === void 0 ? 0 : _this$gameData$shotsF,
        _this$gameData$lifesL = _this$gameData.lifesLost,
        lifesLost = _this$gameData$lifesL === void 0 ? 0 : _this$gameData$lifesL;
      return "Base Around The Globe \uD83C\uDF0E\n  https://thebaseglobe.vercel.app\n  \n  Coins: ".concat(coinsCollected, "\n  Enemies Killed: ").concat(enemiesKilled, "\n  Shots Fired: ").concat(shotsFired, "\n  Damage Taken: ").concat(lifesLost, "\n  \n  pic.twitter.com/N0w7N0umV6");
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialShare);

/***/ }),

/***/ "./src/components/WalletConnect.js":
/*!*****************************************!*\
  !*** ./src/components/WalletConnect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkERC1155Balance: () => (/* binding */ checkERC1155Balance),
/* harmony export */   connectWallet: () => (/* binding */ connectWallet),
/* harmony export */   getEnsNameOrShortAddress: () => (/* binding */ getEnsNameOrShortAddress),
/* harmony export */   getUserAddress: () => (/* binding */ getUserAddress),
/* harmony export */   initializeWalletConnect: () => (/* binding */ initializeWalletConnect)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// WalletConnect.js

var CONFIG = {
  mainnetRpcUrl: "https://sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
  baseRpcUrl: "https://base-sepolia.infura.io/v3/b52163bdfadb414386c2b1b84578a39b",
  zoraRpcUrl: "https://rpc.zora.energy"
};
var web3;
function setupWeb3() {
  return _setupWeb.apply(this, arguments);
}
function _setupWeb() {
  _setupWeb = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("Setting up Web3...");
          _context.prev = 1;
          if (typeof window.ethereum !== "undefined") {
            web3 = new Web3(window.ethereum);
          } else {
            web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.mainnetRpcUrl));
          }
          console.log("Web3 setup complete");
          _context.next = 10;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("Error setting up Web3:", _context.t0);
          throw _context.t0;
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 6]]);
  }));
  return _setupWeb.apply(this, arguments);
}
function getNetworkInfo() {
  return _getNetworkInfo.apply(this, arguments);
}
function _getNetworkInfo() {
  _getNetworkInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var networkId;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (web3) {
            _context2.next = 3;
            break;
          }
          console.error("Web3 not initialized");
          return _context2.abrupt("return");
        case 3:
          _context2.next = 5;
          return web3.eth.net.getId();
        case 5:
          networkId = _context2.sent;
          console.log("Connected to network ID:", networkId);
          return _context2.abrupt("return", networkId);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getNetworkInfo.apply(this, arguments);
}
function getUserAddress() {
  return _getUserAddress.apply(this, arguments);
}
function _getUserAddress() {
  _getUserAddress = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var accounts;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (web3) {
            _context3.next = 3;
            break;
          }
          console.error("Web3 not initialized");
          return _context3.abrupt("return");
        case 3:
          _context3.next = 5;
          return web3.eth.getAccounts();
        case 5:
          accounts = _context3.sent;
          if (!(accounts.length === 0)) {
            _context3.next = 9;
            break;
          }
          console.error("No accounts found");
          return _context3.abrupt("return", null);
        case 9:
          return _context3.abrupt("return", accounts[0]);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getUserAddress.apply(this, arguments);
}
function resolveENSName(_x) {
  return _resolveENSName.apply(this, arguments);
}
function _resolveENSName() {
  _resolveENSName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(address) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch("https://api.ensdata.net/".concat(address));
        case 3:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 6;
            break;
          }
          throw new Error("Network response was not ok: ".concat(response.statusText));
        case 6:
          _context4.next = 8;
          return response.json();
        case 8:
          data = _context4.sent;
          return _context4.abrupt("return", data.ens_primary || null);
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error("Error resolving ENS name for address ".concat(address, ":"), _context4.t0);
          return _context4.abrupt("return", null);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _resolveENSName.apply(this, arguments);
}
function getEnsNameOrShortAddress(_x2) {
  return _getEnsNameOrShortAddress.apply(this, arguments);
}
function _getEnsNameOrShortAddress() {
  _getEnsNameOrShortAddress = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(address) {
    var ensName;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return resolveENSName(address);
        case 2:
          ensName = _context5.sent;
          return _context5.abrupt("return", ensName || "".concat(address.slice(0, 6), "...").concat(address.slice(-4)));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getEnsNameOrShortAddress.apply(this, arguments);
}
function updateConnectionState(_x3) {
  return _updateConnectionState.apply(this, arguments);
}
function _updateConnectionState() {
  _updateConnectionState = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(isConnected) {
    var userAddress,
      connectButton,
      walletInfo,
      walletAddress,
      displayName,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          userAddress = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
          connectButton = document.getElementById("connect-wallet");
          walletInfo = document.getElementById("wallet-info");
          walletAddress = document.getElementById("wallet-address");
          if (!(isConnected && userAddress)) {
            _context6.next = 13;
            break;
          }
          connectButton.classList.add("hidden");
          walletInfo.classList.remove("hidden");
          _context6.next = 9;
          return getEnsNameOrShortAddress(userAddress);
        case 9:
          displayName = _context6.sent;
          walletAddress.textContent = displayName;
          _context6.next = 16;
          break;
        case 13:
          connectButton.classList.remove("hidden");
          walletInfo.classList.add("hidden");
          walletAddress.textContent = "";
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _updateConnectionState.apply(this, arguments);
}
var ERC1155_ABI = [[{
  inputs: [{
    internalType: "address",
    name: "_logic",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "address",
    name: "previousAdmin",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "newAdmin",
    type: "address"
  }],
  name: "AdminChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "beacon",
    type: "address"
  }],
  name: "BeaconUpgraded",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "implementation",
    type: "address"
  }],
  name: "Upgraded",
  type: "event"
}, {
  stateMutability: "payable",
  type: "fallback"
}, {
  stateMutability: "payable",
  type: "receive"
}]];
var ERC1155_CONTRACT_ADDRESS = "0x4a57b15E45d03bd85c8eE38dcFF9E2BF0e87dBCf";
var TOKEN_ID = 1; // Adjust this if you're looking for a specific token ID

function checkERC1155Balance(_x4) {
  return _checkERC1155Balance.apply(this, arguments);
}
function _checkERC1155Balance() {
  _checkERC1155Balance = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userAddress) {
    var networks, _i, _networks, network, _web, functionSignature, params, data, result, balance;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (userAddress) {
            _context7.next = 3;
            break;
          }
          console.error("No user address provided to checkERC1155Balance");
          return _context7.abrupt("return", false);
        case 3:
          networks = [{
            name: "Base",
            rpcUrl: CONFIG.baseRpcUrl
          }, {
            name: "Zora",
            rpcUrl: CONFIG.zoraRpcUrl
          }];
          _i = 0, _networks = networks;
        case 5:
          if (!(_i < _networks.length)) {
            _context7.next = 31;
            break;
          }
          network = _networks[_i];
          _context7.prev = 7;
          _web = new Web3(network.rpcUrl); // Function signature for balanceOf(address,uint256)
          functionSignature = "0x00fdd58e"; // Encode function parameters
          params = _web.eth.abi.encodeParameters(["address", "uint256"], [userAddress, TOKEN_ID]); // Combine function signature and encoded parameters
          data = functionSignature + params.slice(2);
          _context7.next = 14;
          return _web.eth.call({
            to: ERC1155_CONTRACT_ADDRESS,
            data: data
          });
        case 14:
          result = _context7.sent;
          balance = _web.utils.hexToNumber(result);
          console.log("ERC1155 Token Balance on ".concat(network.name, " for address ").concat(userAddress, ":"), balance);
          if (!(balance > 0)) {
            _context7.next = 22;
            break;
          }
          console.log("User owns the specified ERC1155 token on ".concat(network.name));
          return _context7.abrupt("return", true);
        case 22:
          console.log("User does not own the specified ERC1155 token on ".concat(network.name));
        case 23:
          _context7.next = 28;
          break;
        case 25:
          _context7.prev = 25;
          _context7.t0 = _context7["catch"](7);
          console.error("Error checking ERC1155 balance on ".concat(network.name, ":"), _context7.t0);
        case 28:
          _i++;
          _context7.next = 5;
          break;
        case 31:
          return _context7.abrupt("return", false);
        case 32:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[7, 25]]);
  }));
  return _checkERC1155Balance.apply(this, arguments);
}
function connectWallet() {
  return _connectWallet.apply(this, arguments);
}
function _connectWallet() {
  _connectWallet = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var userAddress, hasToken;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          if (!(typeof window.ethereum !== "undefined")) {
            _context8.next = 23;
            break;
          }
          _context8.next = 4;
          return window.ethereum.request({
            method: "eth_requestAccounts"
          });
        case 4:
          _context8.next = 6;
          return getUserAddress();
        case 6:
          userAddress = _context8.sent;
          if (!userAddress) {
            _context8.next = 19;
            break;
          }
          _context8.next = 10;
          return getNetworkInfo();
        case 10:
          _context8.next = 12;
          return updateConnectionState(true, userAddress);
        case 12:
          _context8.next = 14;
          return checkERC1155Balance(userAddress);
        case 14:
          hasToken = _context8.sent;
          console.log("User has the token:", hasToken);
          return _context8.abrupt("return", {
            userAddress: userAddress,
            hasToken: hasToken
          });
        case 19:
          console.error("Failed to retrieve user address");
          updateConnectionState(false);
        case 21:
          _context8.next = 24;
          break;
        case 23:
          showModal();
        case 24:
          _context8.next = 30;
          break;
        case 26:
          _context8.prev = 26;
          _context8.t0 = _context8["catch"](0);
          console.error("Failed to connect:", _context8.t0);
          updateConnectionState(false);
        case 30:
          return _context8.abrupt("return", {
            userAddress: null,
            hasToken: false
          });
        case 31:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 26]]);
  }));
  return _connectWallet.apply(this, arguments);
}
function showModal() {
  var modal = document.getElementById("wallet-modal");
  modal.classList.remove("hidden");
}
function hideModal() {
  var modal = document.getElementById("wallet-modal");
  modal.classList.add("hidden");
}
function setupEventListeners() {
  return _setupEventListeners.apply(this, arguments);
}
function _setupEventListeners() {
  _setupEventListeners = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var connectButton, closeModalButton;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          console.log("Setting up event listeners...");
          connectButton = document.getElementById("connect-wallet");
          closeModalButton = document.getElementById("close-modal");
          if (connectButton) {
            connectButton.addEventListener("click", connectWallet);
            console.log("Event listener added to connect button");
          } else {
            console.error("Connect wallet button not found");
          }
          if (closeModalButton) {
            closeModalButton.addEventListener("click", hideModal);
          }

          // Listen for account changes
          if (window.ethereum) {
            window.ethereum.on("accountsChanged", /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(accounts) {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(accounts.length > 0)) {
                        _context9.next = 5;
                        break;
                      }
                      _context9.next = 3;
                      return updateConnectionState(true, accounts[0]);
                    case 3:
                      _context9.next = 6;
                      break;
                    case 5:
                      updateConnectionState(false);
                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x5) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _setupEventListeners.apply(this, arguments);
}
function initializeWalletConnect() {
  return _initializeWalletConnect.apply(this, arguments);
}
function _initializeWalletConnect() {
  _initializeWalletConnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var errorElement;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          console.log("Initializing WalletConnect...");
          _context11.next = 4;
          return setupWeb3();
        case 4:
          _context11.next = 6;
          return setupEventListeners();
        case 6:
          console.log("WalletConnect initialized successfully");
          _context11.next = 14;
          break;
        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          console.error("Failed to initialize WalletConnect:", _context11.t0);
          errorElement = document.getElementById("error-message");
          if (errorElement) {
            errorElement.textContent = "Failed to initialize wallet connection. Please try again later.";
          }
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 9]]);
  }));
  return _initializeWalletConnect.apply(this, arguments);
}

window.addEventListener("load", initializeWalletConnect);

/***/ }),

/***/ "./src/createAirplaneMesh.js":
/*!***********************************!*\
  !*** ./src/createAirplaneMesh.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAirplaneMesh)
/* harmony export */ });
/* harmony import */ var _components_Airplane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Airplane */ "./src/components/Airplane.js");
/* harmony import */ var _components_Blimp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Blimp */ "./src/components/Blimp.js");
/* harmony import */ var _components_FighterJet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FighterJet */ "./src/components/FighterJet.js");
/* harmony import */ var _managers_AircraftManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/AircraftManager */ "./src/managers/AircraftManager.js");
// src/createAirplaneMesh.js




function createAirplaneMesh(pilotType, aircraftType) {
  console.log("Creating airplane mesh with pilot type:", pilotType, "and aircraft type:", aircraftType);
  switch (aircraftType) {
    case "blimp":
      return (0,_components_Blimp__WEBPACK_IMPORTED_MODULE_1__.createBlimpMesh)(pilotType);
    case "fighterJet":
      return (0,_components_FighterJet__WEBPACK_IMPORTED_MODULE_2__.createFighterJetMesh)(pilotType);
    case "airplane":
    default:
      return (0,_components_Airplane__WEBPACK_IMPORTED_MODULE_0__.createOriginalAirplaneMesh)(pilotType);
  }
}

/***/ }),

/***/ "./src/managers/AircraftManager.js":
/*!*****************************************!*\
  !*** ./src/managers/AircraftManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AircraftManager: () => (/* binding */ AircraftManager),
/* harmony export */   aircraftManager: () => (/* binding */ aircraftManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AircraftManager = /*#__PURE__*/function () {
  function AircraftManager() {
    _classCallCheck(this, AircraftManager);
    this.aircraftOptions = [{
      id: "airplane",
      emoji: "✈️"
    }, {
      id: "blimp",
      emoji: "🎈"
    }, {
      id: "fighterJet",
      emoji: "🛩️",
      tokenRequired: true
    }];
    this.selectedAircraft = "airplane"; // Default to airplane
  }
  return _createClass(AircraftManager, [{
    key: "getAircraftOptions",
    value: function getAircraftOptions() {
      return this.aircraftOptions;
    }
  }, {
    key: "setSelectedAircraft",
    value: function setSelectedAircraft(id) {
      if (this.aircraftOptions.some(function (aircraft) {
        return aircraft.id === id;
      })) {
        this.selectedAircraft = id;
      } else {
        console.error("Invalid aircraft selection: ".concat(id));
      }
    }
  }, {
    key: "getSelectedAircraft",
    value: function getSelectedAircraft() {
      return this.selectedAircraft;
    }
  }]);
}();
var aircraftManager = new AircraftManager();

/***/ }),

/***/ "./src/managers/AudioManager.js":
/*!**************************************!*\
  !*** ./src/managers/AudioManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioManager: () => (/* binding */ AudioManager),
/* harmony export */   audioManager: () => (/* binding */ audioManager)
/* harmony export */ });
/* harmony import */ var _loadingProgressManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingProgressManager.js */ "./src/managers/loadingProgressManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// audioManager.js

var AudioManager = /*#__PURE__*/function () {
  function AudioManager() {
    _classCallCheck(this, AudioManager);
    this.buffers = {};
    this.loader = new THREE.AudioLoader();
    this.listener = new THREE.AudioListener();
    this.categories = {};
  }
  return _createClass(AudioManager, [{
    key: "setCamera",
    value: function setCamera(camera) {
      camera.add(this.listener);
    }
  }, {
    key: "load",
    value: function load(soundId, category, path) {
      var _this = this;
      var promise = new Promise(function (resolve, reject) {
        _this.loader.load(path, function (audioBuffer) {
          _this.buffers[soundId] = audioBuffer;
          if (category !== null) {
            if (!_this.categories[category]) {
              _this.categories[category] = [];
            }
            _this.categories[category].push(soundId);
          }
          resolve();
        }, function () {}, reject);
      });
      _loadingProgressManager_js__WEBPACK_IMPORTED_MODULE_0__.loadingProgressManager.add(promise);
    }
  }, {
    key: "play",
    value: function play(soundIdOrCategory) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var soundId = soundIdOrCategory;
      var category = this.categories[soundIdOrCategory];
      if (category) {
        soundId = category[Math.floor(Math.random() * category.length)];
      }
      var buffer = this.buffers[soundId];
      var sound = new THREE.Audio(this.listener);
      sound.setBuffer(buffer);
      if (options.loop) {
        sound.setLoop(true);
      }
      if (options.volume) {
        sound.setVolume(options.volume);
      }
      sound.play();
    }
  }]);
}();
var audioManager = new AudioManager();

/***/ }),

/***/ "./src/managers/GameplaySnapshotManager.js":
/*!*************************************************!*\
  !*** ./src/managers/GameplaySnapshotManager.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GameplaySnapshotManager = /*#__PURE__*/function () {
  function GameplaySnapshotManager(renderer, scene, camera) {
    _classCallCheck(this, GameplaySnapshotManager);
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.snapshot = null;
    this.captureTime = 5000; // 5 seconds
    this.gameStartTime = null;
  }
  return _createClass(GameplaySnapshotManager, [{
    key: "startCapture",
    value: function startCapture() {
      this.gameStartTime = Date.now();
      this.snapshot = null;
      this.checkAndCapture();
    }
  }, {
    key: "checkAndCapture",
    value: function checkAndCapture() {
      var _this = this;
      if (this.snapshot) return;
      var currentTime = Date.now() - this.gameStartTime;
      if (currentTime >= this.captureTime) {
        this.captureSnapshot();
      } else {
        requestAnimationFrame(function () {
          return _this.checkAndCapture();
        });
      }
    }
  }, {
    key: "captureSnapshot",
    value: function captureSnapshot() {
      this.renderer.render(this.scene, this.camera);
      var dataURL = this.renderer.domElement.toDataURL("image/jpeg", 0.7);
      this.snapshot = dataURL;
    }
  }, {
    key: "checkGameEnd",
    value: function checkGameEnd(gameStatus) {
      if (gameStatus !== "playing" && this.snapshot) {
        this.displaySnapshot();
      }
    }
  }, {
    key: "getSnapshot",
    value: function getSnapshot() {
      return this.snapshot;
    }
  }, {
    key: "displaySnapshot",
    value: function displaySnapshot() {
      var snapshotImage = document.getElementById("gameplay-snapshot");
      var snapshotContainer = document.getElementById("gameplay-snapshot-container");
      if (this.snapshot) {
        snapshotImage.src = this.snapshot;
        snapshotContainer.style.display = "block";
      } else {
        snapshotContainer.style.display = "none";
      }
    }
  }, {
    key: "clearSnapshot",
    value: function clearSnapshot() {
      this.snapshot = null;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameplaySnapshotManager);

/***/ }),

/***/ "./src/managers/ModelManager.js":
/*!**************************************!*\
  !*** ./src/managers/ModelManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelManager: () => (/* binding */ ModelManager),
/* harmony export */   modelManager: () => (/* binding */ modelManager)
/* harmony export */ });
/* harmony import */ var _loadingProgressManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingProgressManager */ "./src/managers/loadingProgressManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ModelManager = /*#__PURE__*/function () {
  function ModelManager(path) {
    _classCallCheck(this, ModelManager);
    this.path = path;
    this.models = {};
  }
  return _createClass(ModelManager, [{
    key: "load",
    value: function load(modelName) {
      var _this = this;
      var promise = new Promise(function (resolve, reject) {
        var loader = new THREE.OBJLoader();
        loader.load(_this.path + "/" + modelName + ".obj", function (obj) {
          _this.models[modelName] = obj;
          resolve();
        }, function () {}, reject);
      });
      _loadingProgressManager__WEBPACK_IMPORTED_MODULE_0__.loadingProgressManager.add(promise);
    }
  }, {
    key: "get",
    value: function get(modelName) {
      if (typeof this.models[modelName] === "undefined") {
        throw new Error("Can't find model " + modelName);
      }
      return this.models[modelName];
    }
  }]);
}();
var modelManager = new ModelManager("/models");

/***/ }),

/***/ "./src/managers/SelectionManager.js":
/*!******************************************!*\
  !*** ./src/managers/SelectionManager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionManager: () => (/* binding */ SelectionManager),
/* harmony export */   selectionManager: () => (/* binding */ selectionManager)
/* harmony export */ });
/* harmony import */ var _AircraftManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AircraftManager */ "./src/managers/AircraftManager.js");
/* harmony import */ var _components_WalletConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/WalletConnect */ "./src/components/WalletConnect.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SelectionManager = /*#__PURE__*/function () {
  function SelectionManager() {
    var _this = this;
    _classCallCheck(this, SelectionManager);
    this.pilotOptions = [{
      id: "human",
      emoji: "👨🏼‍🦰",
      name: "Human"
    }, {
      id: "frog",
      emoji: "🎩",
      name: "Frog"
    }, {
      id: "nouns",
      emoji: "😎",
      name: "Nouns",
      tokenRequired: true
    }];
    this.selectedPilot = null;
    this.selectedAircraft = null;
    this.startButton = null;
    this.startButtonTooltip = null;
    this.userAddress = null;
    this.hasToken = false;
    document.addEventListener("DOMContentLoaded", function () {
      _this.initSelectionScreen();
      _this.startButton = document.getElementById("start-game");
      _this.startButtonTooltip = document.getElementById("start-game-tooltip");
      _this.startButton.addEventListener("click", function () {
        return _this.handleStartClick();
      });
      _this.startButton.addEventListener("mouseenter", function () {
        return _this.showTooltip();
      });
      _this.startButton.addEventListener("mouseleave", function () {
        return _this.hideTooltip();
      });
    });
  }
  return _createClass(SelectionManager, [{
    key: "initSelectionScreen",
    value: function () {
      var _initSelectionScreen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var pilotOptionsContainer, aircraftOptionsContainer, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              pilotOptionsContainer = document.getElementById("pilot-options");
              aircraftOptionsContainer = document.getElementById("aircraft-options");
              if (!(!pilotOptionsContainer || !aircraftOptionsContainer)) {
                _context.next = 5;
                break;
              }
              console.error("Selection containers not found in the DOM");
              return _context.abrupt("return");
            case 5:
              _context.prev = 5;
              _context.next = 8;
              return (0,_components_WalletConnect__WEBPACK_IMPORTED_MODULE_1__.connectWallet)();
            case 8:
              result = _context.sent;
              this.userAddress = result.userAddress;
              this.hasToken = result.hasToken;
              _context.next = 18;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              console.error("Error connecting wallet:", _context.t0);
              this.userAddress = null;
              this.hasToken = false;
            case 18:
              this.pilotOptions.forEach(function (pilot) {
                var option = _this2.createSelectionOption(pilot, "pilot");
                if (pilot.tokenRequired) {
                  option.classList.toggle("hidden", !_this2.hasToken);
                }
                pilotOptionsContainer.appendChild(option);
              });
              _AircraftManager__WEBPACK_IMPORTED_MODULE_0__.aircraftManager.getAircraftOptions().forEach(function (aircraft) {
                var option = _this2.createSelectionOption(aircraft, "aircraft");
                if (aircraft.tokenRequired) {
                  option.classList.toggle("hidden", !_this2.hasToken);
                }
                aircraftOptionsContainer.appendChild(option);
              });
              this.updateStartButton();
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[5, 13]]);
      }));
      function initSelectionScreen() {
        return _initSelectionScreen.apply(this, arguments);
      }
      return initSelectionScreen;
    }()
  }, {
    key: "createSelectionOption",
    value: function createSelectionOption(item, type) {
      var _this3 = this;
      var option = document.createElement("div");
      option.classList.add("selection-option");
      option.dataset.id = item.id;
      option.dataset.type = type;
      var emoji = document.createElement("span");
      emoji.textContent = item.emoji;
      emoji.classList.add("selection-emoji");
      option.appendChild(emoji);
      var name = document.createElement("span");
      name.textContent = item.name;
      name.classList.add("selection-name");
      option.appendChild(name);
      option.addEventListener("click", function () {
        return _this3.selectOption(item.id, type);
      });
      return option;
    }
  }, {
    key: "selectOption",
    value: function selectOption(id, type) {
      var options = document.querySelectorAll(".selection-option[data-type=\"".concat(type, "\"]"));
      options.forEach(function (option) {
        return option.classList.remove("selected");
      });
      var selectedOption = document.querySelector(".selection-option[data-id=\"".concat(id, "\"][data-type=\"").concat(type, "\"]"));
      if (selectedOption) {
        selectedOption.classList.add("selected");
        if (type === "pilot") {
          this.selectedPilot = id;
        } else if (type === "aircraft") {
          this.selectedAircraft = id;
          _AircraftManager__WEBPACK_IMPORTED_MODULE_0__.aircraftManager.setSelectedAircraft(id);
        }
      }
      this.updateStartButton();
    }
  }, {
    key: "updateStartButton",
    value: function updateStartButton() {
      if (!this.startButton) return;
      var isSelectionComplete = this.selectedPilot && this.selectedAircraft;
      if (isSelectionComplete) {
        this.startButton.classList.add("visible");
        this.startButton.disabled = false;
      } else {
        this.startButton.classList.remove("visible");
        this.startButton.disabled = true;
      }
    }
  }, {
    key: "handleStartClick",
    value: function handleStartClick() {
      var _this4 = this;
      if (this.startButton.disabled) {
        this.showTooltip();
        setTimeout(function () {
          return _this4.hideTooltip();
        }, 2000); // Hide after 2 seconds
      } else {
        this.startMap();
      }
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      if (this.startButton.disabled && this.startButtonTooltip) {
        this.startButtonTooltip.style.display = "block";
        this.startButtonTooltip.classList.add("visible");
        // Position the tooltip below the button
        var buttonRect = this.startButton.getBoundingClientRect();
        this.startButtonTooltip.style.top = "".concat(buttonRect.bottom + 10, "px");
        this.startButtonTooltip.style.left = "".concat(buttonRect.left + buttonRect.width / 2, "px");
        // Trigger reflow to ensure the transition works
        this.startButtonTooltip.offsetHeight;
        this.startButtonTooltip.style.opacity = "1";
      }
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      var _this5 = this;
      if (this.startButtonTooltip) {
        this.startButtonTooltip.style.opacity = "0";
        setTimeout(function () {
          _this5.startButtonTooltip.classList.remove("visible");
          _this5.startButtonTooltip.style.display = "none";
        }, 300); // Match this with the transition duration in CSS
      }
    }
  }, {
    key: "startMap",
    value: function startMap() {
      if (!this.selectedPilot || !this.selectedAircraft) {
        console.log("Please select both a pilot and an aircraft before starting the game");
        return;
      }
      console.log("Starting map with selected pilot:", this.selectedPilot, "and aircraft:", this.selectedAircraft);

      // Add 'hidden' class to intro-screen
      document.getElementById("intro-screen").classList.add("hidden");

      // Add 'game-started' class to header
      document.querySelector(".header").classList.add("game-started");

      // Show score wrapper
      var scoreWrapper = document.getElementById("score-wrapper");
      scoreWrapper.classList.remove("hidden");

      // Use a small delay to ensure the transition is visible
      setTimeout(function () {
        scoreWrapper.classList.add("visible");
      }, 50);
      var event = new CustomEvent("selectionComplete", {
        detail: {
          pilot: this.selectedPilot,
          aircraft: this.selectedAircraft
        }
      });
      document.dispatchEvent(event);
      console.log("selectionComplete event dispatched");
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      return {
        pilot: this.selectedPilot,
        aircraft: this.selectedAircraft
      };
    }
  }]);
}();
var selectionManager = new SelectionManager();

/***/ }),

/***/ "./src/managers/loadingProgressManager.js":
/*!************************************************!*\
  !*** ./src/managers/loadingProgressManager.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingProgressManager: () => (/* binding */ LoadingProgressManager),
/* harmony export */   loadingProgressManager: () => (/* binding */ loadingProgressManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/managers/LoadingProgressManager.js

var LoadingProgressManager = /*#__PURE__*/function () {
  function LoadingProgressManager() {
    _classCallCheck(this, LoadingProgressManager);
    this.promises = [];
    this.textureLoader = new THREE.TextureLoader();
  }
  return _createClass(LoadingProgressManager, [{
    key: "loadTexture",
    value: function loadTexture(path) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.textureLoader.load(path, function (texture) {
          console.log("Texture loaded successfully:", path);
          resolve(texture);
        }, undefined, function (error) {
          console.error("Error loading texture:", error);
          reject(error);
        });
      });
    }
  }, {
    key: "add",
    value: function add(promise) {
      this.promises.push(promise);
    }
  }, {
    key: "then",
    value: function then(callback) {
      return Promise.all(this.promises).then(callback);
    }
  }, {
    key: "catch",
    value: function _catch(callback) {
      return Promise.all(this.promises)["catch"](callback);
    }
  }]);
}();
var loadingProgressManager = new LoadingProgressManager();

/***/ }),

/***/ "./src/utils/Colors.js":
/*!*****************************!*\
  !*** ./src/utils/Colors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_COINS: () => (/* binding */ COLOR_COINS),
/* harmony export */   COLOR_COLLECTIBLE_BUBBLE: () => (/* binding */ COLOR_COLLECTIBLE_BUBBLE),
/* harmony export */   COLOR_SEA_LEVEL: () => (/* binding */ COLOR_SEA_LEVEL),
/* harmony export */   Colors: () => (/* binding */ Colors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// src/utils/Colors.js

var Colors = {
  red: 0xf25346,
  orange: 0xffa500,
  white: 0xd8d0d1,
  brown: 0x59332e,
  brownDark: 0x23190f,
  pink: 0xf5986e,
  yellow: 0xf4ce93,
  blue: 0x68c3c0,
  lightPurple: 0xc8a2c8,
  green: 0x00ff00,
  black: 0x000000,
  lightGreen: 0x90ee90,
  darkGreen: 0x006400,
  gold: 0xffd700
};

// Named exports for specific game elements
var COLOR_COINS = 0xffd700;
var COLOR_COLLECTIBLE_BUBBLE = COLOR_COINS;
var COLOR_SEA_LEVEL = [0x68c3c0,
// hsl(178deg 43% 59%)
0x47b3af,
// hsl(178deg 43% 49%)
0x398e8b,
// hsl(178deg 43% 39%)
0x2a6a68,
// hsl(178deg 43% 29%)
0x1c4544,
// hsl(178deg 43% 19%)
0x0d2120 // hsl(178deg 43% 09%)
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);

/***/ }),

/***/ "./src/utils/Utils.js":
/*!****************************!*\
  !*** ./src/utils/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   utils: () => (/* binding */ utils)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// src/utils/Utils.js

var utils = {
  normalize: function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + pc * dt;
    return tv;
  },
  findWhere: function findWhere(list, properties) {
    var _iterator = _createForOfIteratorHelper(list),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        var all = true;
        for (var key in properties) {
          if (elem[key] !== properties[key]) {
            all = false;
            break;
          }
        }
        if (all) {
          return elem;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return null;
  },
  randomOneOf: function randomOneOf(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  },
  randomFromRange: function randomFromRange(min, max) {
    return min + Math.random() * (max - min);
  },
  collide: function collide(mesh1, mesh2, tolerance) {
    var diffPos = mesh1.position.clone().sub(mesh2.position.clone());
    var d = diffPos.length();
    return d < tolerance;
  },
  makeTetrahedron: function makeTetrahedron(a, b, c, d) {
    return [a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2], b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2]];
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./game.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map