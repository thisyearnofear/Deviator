// src/managers/AircraftManager.js
export class AircraftManager {
  constructor() {
    this.aircraftOptions = [
      { id: "airplane", name: "Airplane", emoji: "✈️" },
      { id: "blimp", name: "Blimp", emoji: "🎈" },
      { id: "fighterJet", name: "Fighter Jet", emoji: "🛩️" },
    ];

    this.selectedAircraft = "airplane"; // Default to airplane
  }

  getAircraftOptions() {
    return this.aircraftOptions;
  }

  setSelectedAircraft(id) {
    if (this.aircraftOptions.some((aircraft) => aircraft.id === id)) {
      this.selectedAircraft = id;
    } else {
      console.error(`Invalid aircraft selection: ${id}`);
    }
  }

  getSelectedAircraft() {
    return this.selectedAircraft;
  }
}

export const aircraftManager = new AircraftManager();
