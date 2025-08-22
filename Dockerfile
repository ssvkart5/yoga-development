# Use a Node.js LTS base image
FROM node:22

# Set working directory inside the container
WORKDIR /home/site/wwwroot

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port your app will run on (Azure expects 8080)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
