
# Base on official Node.js Alpine image
FROM node:alpine

# Set container's working directory
WORKDIR /website

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
COPY /website/package*.json ./

# Install dependencies
RUN npm ci --silent --production

# Copy all files
COPY /website/ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root user
USER node

# Run npm start script eith PM2 when container starts
CMD ["pm2-runtime", "npm", "--", "start"]