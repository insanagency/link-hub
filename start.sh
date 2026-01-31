#!/bin/bash
# Local Node.js setup for Link Hub
export PATH="$PWD/node-v20.11.0-darwin-arm64/bin:$PATH"
export npm_config_cache="$PWD/.npm-cache"

echo "🚀 Link Hub ishga tushmoqda..."
echo "Sayt manzili: http://localhost:5173"
echo "To'xtatish uchun: Ctrl + C ni bosing"

npm run dev
