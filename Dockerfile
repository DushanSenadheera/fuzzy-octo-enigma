# Base image for client
FROM node:alpine

WORKDIR /app/client

# Install client dependencies
COPY ./client/package.json .
COPY ./client/package-lock.json .
RUN npm install

# Copy client source code
COPY ./client .

# Build client
RUN npm run build

# Base image for server
FROM node:alpine

WORKDIR /app/server

# Install server dependencies
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm install

# Copy server source code
COPY ./server .

# Expose ports
EXPOSE 3000
EXPOSE 5000

# Set entry point
CMD ["npm", "start"]




