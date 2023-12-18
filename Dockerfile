# Use the Node Alpine image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the client folder into the container
COPY ./client/ /app/

# Install the dependencies
RUN npm install

# Start the application
CMD [ "npm", "run", "dev"]

