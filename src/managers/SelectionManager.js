import { aircraftManager } from "./AircraftManager";

export class SelectionManager {
  constructor() {
    this.pilotOptions = [
      { id: "human", name: "dude", emoji: "👨‍✈️" },
      { id: "frog", name: "pepe", emoji: "🐸" },
      { id: "nouns", name: "noun", emoji: "😎" },
    ];

    this.selectedPilot = null;
    this.selectedAircraft = null;

    document.addEventListener("DOMContentLoaded", () => {
      this.initSelectionScreen();
      document
        .getElementById("start-game")
        .addEventListener("click", () => this.startMap());
    });
  }

  initSelectionScreen() {
    const pilotOptionsContainer = document.getElementById("pilot-options");
    const aircraftOptionsContainer =
      document.getElementById("aircraft-options");

    if (!pilotOptionsContainer || !aircraftOptionsContainer) {
      console.error("Selection containers not found in the DOM");
      return;
    }

    this.pilotOptions.forEach((pilot) => {
      const option = this.createSelectionOption(pilot, "pilot");
      pilotOptionsContainer.appendChild(option);
    });

    aircraftManager.getAircraftOptions().forEach((aircraft) => {
      const option = this.createSelectionOption(aircraft, "aircraft");
      aircraftOptionsContainer.appendChild(option);
    });

    this.updateStartButton();
  }

  createSelectionOption(item, type) {
    const option = document.createElement("div");
    option.classList.add("selection-option");
    option.dataset.id = item.id;
    option.dataset.type = type;

    const emoji = document.createElement("span");
    emoji.textContent = item.emoji;
    emoji.classList.add("selection-emoji");
    option.appendChild(emoji);

    const name = document.createElement("span");
    name.textContent = item.name;
    name.classList.add("selection-name");
    option.appendChild(name);

    option.addEventListener("click", () => this.selectOption(item.id, type));

    return option;
  }

  selectOption(id, type) {
    const options = document.querySelectorAll(
      `.selection-option[data-type="${type}"]`
    );
    options.forEach((option) => option.classList.remove("selected"));

    const selectedOption = document.querySelector(
      `.selection-option[data-id="${id}"][data-type="${type}"]`
    );
    if (selectedOption) {
      selectedOption.classList.add("selected");
      if (type === "pilot") {
        this.selectedPilot = id;
      } else if (type === "aircraft") {
        this.selectedAircraft = id;
        aircraftManager.setSelectedAircraft(id);
      }
    }

    this.updateStartButton();
  }

  updateStartButton() {
    const startButton = document.getElementById("start-game");
    startButton.disabled = !(this.selectedPilot && this.selectedAircraft);
  }

  startMap() {
    if (!this.selectedPilot || !this.selectedAircraft) {
      console.log(
        "Please select both a pilot and an aircraft before starting the game"
      );
      return;
    }

    console.log(
      "Starting map with selected pilot:",
      this.selectedPilot,
      "and aircraft:",
      this.selectedAircraft
    );
    document.getElementById("intro-screen").classList.remove("visible");
    const event = new CustomEvent("selectionComplete", {
      detail: {
        pilot: this.selectedPilot,
        aircraft: this.selectedAircraft,
      },
    });
    document.dispatchEvent(event);
    console.log("selectionComplete event dispatched");
  }

  getSelection() {
    return {
      pilot: this.selectedPilot,
      aircraft: this.selectedAircraft,
    };
  }
}

export const selectionManager = new SelectionManager();
