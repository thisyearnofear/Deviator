// src/managers/SelectionManager.js

export class SelectionManager {
  constructor() {
    this.pilotOptions = [
      { id: "human", name: "dude", emoji: "👨‍✈️" },
      { id: "frog", name: "pepe", emoji: "🐸" },
      { id: "nouns", name: "noun", emoji: "😎" },
    ];

    this.selectedPilot = null;

    document.addEventListener("DOMContentLoaded", () =>
      this.initSelectionScreen()
    );
    console.log("SelectionManager initialized");
  }

  initSelectionScreen() {
    const pilotOptionsContainer = document.getElementById("pilot-options");

    if (!pilotOptionsContainer) {
      console.error("Pilot selection container not found in the DOM");
      return;
    }

    this.pilotOptions.forEach((pilot) => {
      const option = this.createSelectionOption(pilot);
      pilotOptionsContainer.appendChild(option);
    });

    this.selectOption(this.selectedPilot);

    document.getElementById("pilot-selection").classList.add("active");

    document.getElementById("start-game").textContent = "Start Game";
    document
      .getElementById("start-game")
      .addEventListener("click", () => this.startGame());
    console.log("Pilot selection screen initialized");
  }

  createSelectionOption(pilot) {
    const option = document.createElement("div");
    option.classList.add("selection-option");
    option.dataset.id = pilot.id;

    const emoji = document.createElement("span");
    emoji.textContent = pilot.emoji;
    emoji.classList.add("selection-emoji");
    option.appendChild(emoji);

    const name = document.createElement("span");
    name.textContent = pilot.name;
    name.classList.add("selection-name");
    option.appendChild(name);

    option.addEventListener("click", () => this.selectOption(pilot.id));

    return option;
  }

  selectOption(id) {
    const options = document.querySelectorAll(".selection-option");
    options.forEach((option) => option.classList.remove("selected"));

    const selectedOption = document.querySelector(
      `.selection-option[data-id="${id}"]`
    );
    if (selectedOption) {
      selectedOption.classList.add("selected");
      this.selectedPilot = id;
    }
  }

  startGame() {
    if (!this.selectedPilot) {
      console.log("Please select a pilot before starting the game");
      return;
    }

    console.log("Starting game with selected pilot:", this.selectedPilot);
    document.getElementById("intro-screen").classList.remove("visible");
    const event = new CustomEvent("pilotSelectionComplete", {
      detail: {
        pilot: this.selectedPilot,
      },
    });
    document.dispatchEvent(event);
    console.log("pilotSelectionComplete event dispatched");
  }

  getSelection() {
    return this.selectedPilot;
  }
}

export const selectionManager = new SelectionManager();
