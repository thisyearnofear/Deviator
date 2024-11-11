// audioManager.js
import { loadingProgressManager } from "./LoadingProgressManager.js";
export class AudioManager {
  constructor() {
    this.sounds = new Map();
    this.audioContext = null;
    this.listener = null;
    this.categories = {};
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    try {
      // Wait for audio context to be available
      if (!window.gameAudioContext) {
        await window.initAudioContext();
      }

      this.audioContext = window.gameAudioContext;

      // Create listener only after context is confirmed
      if (this.audioContext && !this.listener) {
        this.listener = new THREE.AudioListener();
        this.listener.context = this.audioContext;
      }

      this.initialized = true;
    } catch (error) {
      console.error("Error initializing AudioManager:", error);
    }
  }

  async load(id, name, url) {
    if (!this.initialized) {
      await this.init();
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();

      if (!this.audioContext) {
        console.warn("AudioContext not initialized");
        return;
      }

      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.sounds.set(id, audioBuffer);
    } catch (error) {
      console.error(`Error loading sound ${id}:`, error);
    }
  }

  setCamera(camera) {
    if (this.listener) {
      camera.add(this.listener);
    }
  }

  play(soundIdOrCategory, options = {}) {
    if (!this.initialized || !this.listener) {
      console.warn("AudioManager not initialized");
      return;
    }

    let soundId = soundIdOrCategory;
    const category = this.categories[soundIdOrCategory];
    if (category) {
      soundId = category[Math.floor(Math.random() * category.length)];
    }

    const buffer = this.sounds.get(soundId);
    if (!buffer) {
      console.warn(`Sound ${soundId} not found`);
      return;
    }

    const sound = new THREE.Audio(this.listener);
    sound.setBuffer(buffer);
    if (options.loop) {
      sound.setLoop(true);
    }
    if (options.volume) {
      sound.setVolume(options.volume);
    }
    sound.play();
  }
}

export const audioManager = new AudioManager();
