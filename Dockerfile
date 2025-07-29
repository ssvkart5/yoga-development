# Use a Node.js LTS base image
FROM node:22

# Set working directory inside the container
WORKDIR /home/site/wwwroot


# Copy your app files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port your app will run on (Azure expects 8080)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
