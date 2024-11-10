#!/bin/bash
set -e

# Create required directories
mkdir -p dist/models dist/textures dist/sounds public
# Create placeholder files to prevent webpack errors
touch textures/.gitkeep sounds/.gitkeep models/.gitkeep public/.gitkeep

# Install all dependencies from package.json first
npm install

# Install additional webpack plugins explicitly if needed
npm install --save-dev copy-webpack-plugin file-loader @babel/plugin-transform-runtime

# Build with webpack
npx webpack --mode production