# Specify the base image
FROM node:21-alpine

# Copy your application code to the container
COPY ./ /app/

# Set the working directory
WORKDIR /app

# Build your application
RUN npm install

# Expose port 
EXPOSE 8000

# Run your application
CMD [ "npm", "run", "dev" ]