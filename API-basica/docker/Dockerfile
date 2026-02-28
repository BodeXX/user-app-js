# Usa uma imagem oficial ultra-leve do Node
FROM node:22-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (Aproveita o Cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código (ignorando o que está no .dockerignore)
COPY . .

# Expõe a porta que a API usa
EXPOSE 8080

# Comando direto, sem scripts intermediários
CMD ["npm", "start"]
