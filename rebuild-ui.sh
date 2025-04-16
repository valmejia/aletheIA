#!/bin/bash

echo "🧹 Limpiando y reinstalando dependencias..."

for dir in user-ui legal-ui; do
  echo "➡️ Procesando frontend/$dir"
  rm -rf frontend/$dir/node_modules frontend/$dir/package-lock.json
  (cd frontend/$dir && npm install)
done

echo "🔁 Reconstruyendo contenedores..."
docker compose down
docker compose build
docker compose up -d
