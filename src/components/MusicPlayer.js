class MusicPlayer {
  constructor() {
    this.isMinimized = false;
    this.playerElement = document.createElement("div");
    this.buttonElement = document.createElement("button");
    this.trackUrl = "https://futuretape.xyz/embed/search/will%20juergens";
    this.init();
  }

  init() {
    // Set up player element
    this.playerElement.id = "music-player";
    this.playerElement.className = "expanded";
    this.loadTrack(this.trackUrl);

    // Set up toggle button
    this.buttonElement.id = "toggle-music-player";
    this.buttonElement.textContent = "▼";
    this.buttonElement.addEventListener("click", () => this.togglePlayer());

    // Append elements to the body
    document.body.appendChild(this.playerElement);
    document.body.appendChild(this.buttonElement);

    // Autoplay on page load
    this.attemptAutoplay();
  }

  loadTrack(trackUrl) {
    this.playerElement.innerHTML = `
      <iframe
        src="${trackUrl}?autoplay=1"
        width="100%"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write;"
        loading="lazy"
      ></iframe>
    `;
  }

  togglePlayer() {
    this.isMinimized = !this.isMinimized;
    this.playerElement.style.height = this.isMinimized ? "40px" : "100px";
    this.buttonElement.textContent = this.isMinimized ? "▲" : "▼";
  }

  attemptAutoplay() {
    const iframe = this.playerElement.querySelector("iframe");
    if (iframe) {
      iframe.src += ""; // Just triggers the autoplay
    }
  }
}

export default MusicPlayer;
