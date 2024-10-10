class MusicPlayer {
  constructor() {
    this.isMinimized = false;
    this.playerElement = document.createElement("div");
    this.buttonElement = document.createElement("button");
    this.tracks = ["https://futuretape.xyz/embed/search/will%20juergens"];
    this.trackDurations = [180, 240]; // Example durations in seconds
    this.currentTrackIndex = 0;
    this.trackDuration = this.trackDurations[this.currentTrackIndex];
    this.checkInterval = null;
    this.init();
  }

  init() {
    this.playerElement.id = "music-player";
    this.playerElement.className = "expanded";
    this.loadTrack(this.tracks[this.currentTrackIndex]);

    this.buttonElement.id = "toggle-music-player";
    this.buttonElement.textContent = "▼";
    this.buttonElement.addEventListener("click", () => this.togglePlayer());

    document.body.appendChild(this.playerElement);
    document.body.appendChild(this.buttonElement);
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
    this.trackDuration = this.trackDurations[this.currentTrackIndex];
    this.startTrackCheck();
    this.preloadNextTrack(); // Preload the next track
  }

  startTrackCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
    this.checkInterval = setInterval(() => {
      this.trackDuration--;
      if (this.trackDuration <= 0) {
        this.nextTrack();
      }
    }, 1000);
  }

  togglePlayer() {
    this.isMinimized = !this.isMinimized;
    this.playerElement.style.height = this.isMinimized ? "40px" : "100px";
    this.buttonElement.textContent = this.isMinimized ? "▲" : "▼";
  }

  attemptAutoplay() {
    const iframe = this.playerElement.querySelector("iframe");
    if (iframe) {
      iframe.src += "";
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    this.loadTrack(this.tracks[this.currentTrackIndex]);
  }

  preloadNextTrack() {
    const nextTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    const nextTrackUrl = this.tracks[nextTrackIndex];
    const iframe = document.createElement("iframe");
    iframe.src = nextTrackUrl;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
}

export default MusicPlayer;
