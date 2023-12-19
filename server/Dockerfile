# Use the Node Alpine image as the base image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /app/server

# Copy the server folder into the container
COPY ./ /app/server/

# Install the dependencies
RUN npm install

# Expose the port 3000
EXPOSE 3000

# Start the application
CMD [ "node", "index.js"]



