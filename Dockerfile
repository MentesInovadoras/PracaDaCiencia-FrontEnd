# Use a imagem base do Node.js
FROM node:20.11.0-alpine

# Define o diretório de trabalho no container
WORKDIR /

# Copia o package.json e instala as dependências
COPY package.json ./
RUN npm install

# Copia todos os arquivos para o diretório de trabalho
COPY . .

# Expõe a porta que o frontend irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
