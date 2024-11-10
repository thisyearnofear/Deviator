#!/bin/bash
# Install dependencies including dev dependencies
npm ci

# Build with webpack
npx webpack --mode production --config webpack.config.js