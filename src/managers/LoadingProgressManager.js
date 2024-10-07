// src/managers/LoadingProgressManager.js

export class LoadingProgressManager {
  constructor() {
    this.promises = [];
  }

  add(promise) {
    this.promises.push(promise);
  }

  then(callback) {
    return Promise.all(this.promises).then(callback);
  }

  catch(callback) {
    return Promise.all(this.promises).catch(callback);
  }
}

export const loadingProgressManager = new LoadingProgressManager();
