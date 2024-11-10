// audioManager.js
import { loadingProgressManager } from "./LoadingProgressManager.js";
export class AudioManager {
  constructor() {
    this.sounds = new Map();
    this.audioContext = null;
    this.categories = {};
  }

  init() {
    if (window.gameAudioContext) {
      this.audioContext = window.gameAudioContext;
    }
  }

  async load(id, name, url) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();

      if (!this.audioContext && window.gameAudioContext) {
        this.audioContext = window.gameAudioContext;
      }

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
    camera.add(this.listener);
  }

  play(soundIdOrCategory, options = {}) {
    let soundId = soundIdOrCategory;
    const category = this.categories[soundIdOrCategory];
    if (category) {
      soundId = category[Math.floor(Math.random() * category.length)];
    }

    const buffer = this.sounds.get(soundId);
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
