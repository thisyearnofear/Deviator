class SocialShare {
  constructor(containerId, gameData) {
    this.container = document.getElementById(containerId);
    this.gameData = gameData || {};
  }

  render() {
    const twitterButton = this.createTwitterButton();
    this.container.innerHTML = ""; // Clear existing content
    this.container.appendChild(twitterButton);
  }

  createTwitterButton() {
    const button = document.createElement("a");
    button.href = "#";
    button.className = "twitter-share-button";
    button.innerHTML = "Tweet";
    button.addEventListener("click", this.shareOnTwitter.bind(this));
    return button;
  }

  async shareOnTwitter(event) {
    event.preventDefault();
    const text = this.generateShareText();
    const imageUrl =
      "https://pbs.twimg.com/media/GcB2QbzaoAA9MiG?format=jpg&name=large";
    const url = "https://thebaseglobe.vercel.app";

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}\n\n${encodeURIComponent(imageUrl)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "width=550,height=420");
  }

  generateShareText() {
    const {
      coinsCollected = 0,
      enemiesKilled = 0,
      shotsFired = 0,
      lifesLost = 0,
    } = this.gameData;
    return `Base Around The Globe 🌎 
    #standwithcrypto $byegary
  https://thebaseglobe.vercel.app
  
  Coins: ${coinsCollected}
  Gary's ByeBye'd 👋: ${enemiesKilled}
  Shots Fired: ${shotsFired}
  Damage Taken: ${lifesLost}
  
  https://pbs.twimg.com/media/GcB2QbzaoAA9MiG?format=jpg&name=large`;
  }
}

export default SocialShare;
