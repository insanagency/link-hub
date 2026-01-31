#!/bin/bash
echo "Vaqtinchalik muhit tayyorlanmoqda..."

# Project files copy
mkdir -p /tmp/link-hub-run
cp package.json package-lock.json tsconfig.json tsconfig.node.json vite.config.ts tailwind.config.js postcss.config.js index.html /tmp/link-hub-run/ 2>/dev/null
cp -r src /tmp/link-hub-run/ 2>/dev/null

# Node.js setup
if [ ! -d "/tmp/node-runtime" ]; then
  echo "Node.js yuklab olinmoqda (bu bir marta bo'ladi)..."
  curl -s -o /tmp/node-v20.tar.gz https://nodejs.org/dist/v20.11.0/node-v20.11.0-darwin-arm64.tar.gz
  mkdir -p /tmp/node-runtime
  tar -xzf /tmp/node-v20.tar.gz -C /tmp/node-runtime --strip-components=1
  # Try to remove quarantine attribute just in case
  xattr -cr /tmp/node-runtime 2>/dev/null
fi

export PATH="/tmp/node-runtime/bin:$PATH"
export npm_config_cache="/tmp/.npm-cache"

echo "Kutubxonalar o'rnatilmoqda..."
cd /tmp/link-hub-run
npm install

echo "Server ishga tushmoqda..."
echo "Sayt manzili: http://localhost:5173"
npm run dev
