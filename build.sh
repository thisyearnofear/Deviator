#!/bin/bash
set -e

# Create required directories
mkdir -p dist/models dist/audio dist/images public

# Create required directories for source files
mkdir -p models audio images

# Create placeholder files to prevent webpack errors
touch models/.gitkeep audio/.gitkeep images/.gitkeep public/.gitkeep

# Install dependencies
npm install

# Install additional webpack plugins
npm install --save-dev \
    copy-webpack-plugin \
    file-loader \
    @babel/plugin-transform-runtime \
    html-webpack-plugin \
    clean-webpack-plugin

# Build with webpack
npx webpack --mode production

# Ensure all directories exist in dist
mkdir -p dist/audio dist/models dist/images

# Copy any remaining assets
cp -r audio/* dist/audio/ 2>/dev/null || true
cp -r models/* dist/models/ 2>/dev/null || true
cp -r images/* dist/images/ 2>/dev/null || true
cp -r public/* dist/ 2>/dev/null || true