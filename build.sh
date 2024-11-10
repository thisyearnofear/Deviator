#!/bin/bash
# Install dependencies
npm ci --only=production

# Build with webpack
npx webpack --mode production --config webpack.config.js