# Imagen base con Node.js
FROM node:18-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias sin módulos opcionales (evita error con rollup en ARM)
RUN npm install --omit=optional


COPY . .

# Exponer el puerto que usa Vite
EXPOSE 3001

# Comando para ejecutar Vite en modo desarrollo (accesible desde fuera del contenedor)
CMD ["npm", "run", "dev", "--", "--host"]
