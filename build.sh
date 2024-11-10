#!/bin/bash
set -e  # Exit on error

# Install dependencies including dev dependencies
npm ci

# Create dist directory if it doesn't exist
mkdir -p dist/src/managers

# Copy required static files with correct case
cp -r src/managers/LoadingProgressManager.js dist/src/managers/
cp -r src/managers/* dist/managers/ || true
cp game.js dist/
cp index.html dist/

# Build with webpack
npx webpack --mode production --config webpack.config.js || {
    echo "Webpack build failed"
    exit 1
}