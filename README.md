Based on the

Updated version of Kaim Maaloul's The Aviator, see his [Article on Codrops](http://tympanus.net/codrops/?p=26501), demo [Demo](http://tympanus.net/Tutorials/TheAviator/) and [GitHub](https://github.com/yakudoo/TheAviator).

![The Aviator 2](https://tympanus.net/codrops/wp-content/uploads/2022/04/Aviator2_featured.jpg)

[Article on Codrops](https://tympanus.net/codrops/?p=63296)

[Demo](https://tympanus.net/Tutorials/TheAviator2)

## Start

Clone repository, in the code directory run `php -S localhost:8123` and in your browser visit [http://localhost:8123/](http://localhost:8123/).

## License

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is".

## Credits

### Libraries

- [Three.js](http://threejs.org/)
- [TweenMax](http://greensock.com)

### Sounds

Sound effects obtained from https://www.zapsplat.com and https://freesound.org/.

From freesound:

- Sound "Crash" by user "Previsionary" (https://freesound.org/people/Previsionary/sounds/593677) licensed under Creative Commons 0
- Sound "Bubble Pop" by user "elmasmalo1" (https://freesound.org/people/elmasmalo1/sounds/376968) licensed under Attribution 3.0
- Sound "Bullet_Impact_2" by user "toxicwafflezz" (https://freesound.org/people/toxicwafflezz/sounds/150838) licensed under Attribution 3.0
- Sound "Pacific Ocean" by user "tim.kahn" (https://freesound.org/people/tim.kahn/sounds/174763) licensed under Attribution 3.0
- Sound "Airship propeller engine" by user "ilm0player" (https://freesound.org/people/ilm0player/sounds/578181/) licensed under Creative Commons 0
- Sound "Rock Smash" by user "NeoSpica" (https://freesound.org/people/NeoSpica/sounds/512243) licensed under Creative Commons 0
- Sound "Gun shot/bullet hit" by user "coolguy244e" (https://freesound.org/people/coolguy244e/sounds/266916) licensed under Creative Commons 0
- Sound "Pistol Shot" by user "LeMudCrab" (https://freesound.org/people/LeMudCrab/sounds/163456/) licensed under Creative Commons 0
- Sound "Water Splash" by user "Yin_Yang_Jake007" (https://freesound.org/people/Yin_Yang_Jake007/sounds/406087/) licensed under Attribution 3.0
- Sound "Coins - 01" by user "DWOBoyle" (https://freesound.org/people/DWOBoyle/sounds/140382/) licensed under Attribution 3.0

## Misc

Follow Michel: [Twitter](https://twitter.com/MichelOliverH)

Follow Karim: [Twitter](https://twitter.com/yakudoo), [Codepen](http://codepen.io/Yakudoo/)

## Updates over the original

**07 April 2022**

- when replaying, remove all coins and enemies
- fix bug about the state handling after dying
- implement all audio
- find audio files
  - propeller/airplane sound
  - shooting simple, double, better
  - background music
  - picking up collectible
  - collision with enemy
  - collecting a coin

**06 April 2022**

- airplane recoil
- make end screen after 5 levels
- make collectibles logic
  - life: if life<3 and a small chance
  - simple gun: level 2
  - double gun: level 3
  - better gun: level 4

**05 April 2022**

- fix bug that no more enemies are spawning
- transfer to new three.js version
- design collectibles
  - simple gun
  - better gun
  - double gun
  - life
- complete simple gun, better gun and double gun

**04 April 2022**

- design airplane's machine gun
- redesign coins
- each level has a different sea color
- remove energy bar
- show hearts as remaining hitpoints
- show new level entry prominently
- be able to shoot
- copy initial game

---

# New Features and Updates

- Integrated Web3 wallet connection functionality
- Added selection screen for pilots and aircraft
- Implemented new game mechanics including shooting and collectibles
- Enhanced visual effects and animations
- Improved audio management with new sound effects
- Responsive design for various screen sizes
- Implemented level progression system
- Added end-game screen with statistics
- Integrated with blockchain for potential NFT functionality

npx webpack to build
npx webpack serve to serve

Local configuration

const path = require("path");

module.exports = {
mode: "development",
entry: "./game.js",
output: {
filename: "bundle.js",
path: path.resolve(**dirname, "dist"),
publicPath: "/dist/",
},
devServer: {
static: {
directory: path.join(**dirname, "./"),
},
hot: false,
liveReload: false, // Disable live reloading
open: true,
port: 8080,
watchFiles: {
// Configure which files to watch
paths: ["src/**/*.js", "game.js"],
options: {
ignored: ["**/node_modules/**", "**/WalletConnect.js"],
},
},
},
externals: {
three: "THREE",
gsap: "gsap",
web3: "Web3",
},
module: {
rules: [
{
test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
options: {
presets: ["@babel/preset-env"],
},
},
},
],
},
resolve: {
extensions: [".js"],
},
devtool: "source-map",
};

--

Production

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
mode: "production", // Set mode to production
entry: "./game.js",
output: {
filename: "bundle.js",
path: path.resolve(**dirname, "dist"),
publicPath: "/dist/", // Ensure this matches your deployment structure
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
options: {
presets: ["@babel/preset-env"], // Ensure compatibility with older browsers
},
},
},
],
},
resolve: {
extensions: [".js"], // Automatically resolve these extensions
alias: {
"@": path.resolve(**dirname, "src/"),
components: path.resolve(**dirname, "src/components/"),
utils: path.resolve(**dirname, "src/utils/"),
managers: path.resolve(\_\_dirname, "src/managers/"),
},
},
plugins: [
new CleanWebpackPlugin(), // Clean the output directory before each build
new HtmlWebpackPlugin({
template: "./index.html", // Use your index.html as a template
filename: "index.html", // Output file name
minify: {
removeComments: true,
collapseWhitespace: true,
removeAttributeQuotes: true,
},
}),
],
optimization: {
minimize: true, // Enable minimization
splitChunks: {
chunks: "all",
cacheGroups: {
web3: {
test: /[\\/]node_modules[\\/]web3[\\/]/,
name: "web3",
chunks: "all",
priority: 10,
},
vendors: {
test: /[\\/]node_modules[\\/]/,
name: "vendors",
chunks: "all",
},
},
},
},
devtool: "source-map", // Add this for production debugging
externals: {
three: "THREE",
gsap: "gsap",
web3: "Web3",
ethers: "ethers",
},
};
