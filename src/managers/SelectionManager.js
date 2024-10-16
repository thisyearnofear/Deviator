import { aircraftManager } from "./AircraftManager";
import {
  checkERC1155Balance,
  connectWallet,
  getUserAddress,
} from "../components/WalletConnect";

export class SelectionManager {
  constructor() {
    this.pilotOptions = [
      { id: "human", emoji: "👨🏼‍🦰", name: "Human" },
      { id: "frog", emoji: "🎩", name: "Frog" },
      { id: "nouns", emoji: "😎", name: "Nouns", tokenRequired: true },
    ];

    this.selectedPilot = null;
    this.selectedAircraft = null;

    this.startButton = null;
    this.startButtonTooltip = null;

    this.userAddress = null;
    this.hasToken = false;

    document.addEventListener("DOMContentLoaded", () => {
      this.initSelectionScreen();
      this.startButton = document.getElementById("start-game");
      this.startButtonTooltip = document.getElementById("start-game-tooltip");
      this.startButton.addEventListener("click", () => this.handleStartClick());
      this.startButton.addEventListener("mouseenter", () => this.showTooltip());
      this.startButton.addEventListener("mouseleave", () => this.hideTooltip());
    });
  }

  async initSelectionScreen() {
    const pilotOptionsContainer = document.getElementById("pilot-options");
    const aircraftOptionsContainer =
      document.getElementById("aircraft-options");

    if (!pilotOptionsContainer || !aircraftOptionsContainer) {
      console.error("Selection containers not found in the DOM");
      return;
    }

    try {
      const result = await connectWallet();
      this.userAddress = result.userAddress;
      this.hasToken = result.hasToken;
    } catch (error) {
      console.error("Error connecting wallet:", error);
      this.userAddress = null;
      this.hasToken = false;
    }

    this.pilotOptions.forEach((pilot) => {
      const option = this.createSelectionOption(pilot, "pilot");
      if (pilot.tokenRequired) {
        option.classList.toggle("hidden", !this.hasToken);
      }
      pilotOptionsContainer.appendChild(option);
    });

    aircraftManager.getAircraftOptions().forEach((aircraft) => {
      const option = this.createSelectionOption(aircraft, "aircraft");
      if (aircraft.tokenRequired) {
        option.classList.toggle("hidden", !this.hasToken);
      }
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
    if (!this.startButton) return;

    const isSelectionComplete = this.selectedPilot && this.selectedAircraft;

    if (isSelectionComplete) {
      this.startButton.classList.add("visible");
      this.startButton.disabled = false;
    } else {
      this.startButton.classList.remove("visible");
      this.startButton.disabled = true;
    }
  }

  handleStartClick() {
    if (this.startButton.disabled) {
      this.showTooltip();
      setTimeout(() => this.hideTooltip(), 2000); // Hide after 2 seconds
    } else {
      this.startMap();
    }
  }

  showTooltip() {
    if (this.startButton.disabled && this.startButtonTooltip) {
      this.startButtonTooltip.style.display = "block";
      this.startButtonTooltip.classList.add("visible");
      // Position the tooltip below the button
      const buttonRect = this.startButton.getBoundingClientRect();
      this.startButtonTooltip.style.top = `${buttonRect.bottom + 10}px`;
      this.startButtonTooltip.style.left = `${
        buttonRect.left + buttonRect.width / 2
      }px`;
      // Trigger reflow to ensure the transition works
      this.startButtonTooltip.offsetHeight;
      this.startButtonTooltip.style.opacity = "1";
    }
  }

  hideTooltip() {
    if (this.startButtonTooltip) {
      this.startButtonTooltip.style.opacity = "0";
      setTimeout(() => {
        this.startButtonTooltip.classList.remove("visible");
        this.startButtonTooltip.style.display = "none";
      }, 300); // Match this with the transition duration in CSS
    }
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

    // Add 'hidden' class to intro-screen
    document.getElementById("intro-screen").classList.add("hidden");

    // Add 'game-started' class to header
    document.querySelector(".header").classList.add("game-started");

    // Show score wrapper
    const scoreWrapper = document.getElementById("score-wrapper");
    scoreWrapper.classList.remove("hidden");

    // Use a small delay to ensure the transition is visible
    setTimeout(() => {
      scoreWrapper.classList.add("visible");
    }, 50);

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
