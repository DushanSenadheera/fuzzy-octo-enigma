# Use the Node Alpine image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app/client

# Copy the client folder into the container
COPY ./ /app/client/

# Install the dependencies
RUN npm install

# Expose the port 3000
EXPOSE 8000

# Start the application
CMD [ "npm", "run", "dev"]




