# Use exact Node major version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source
COPY server.js ./

# Expose app port (match server.js)
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
