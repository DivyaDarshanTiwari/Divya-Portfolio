# Stage 1: Build Angular app
FROM node:20-alpine AS builder

WORKDIR /app

# Install Angular CLI (optional if using local CLI)
RUN npm install -g @angular/cli@20

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy project files
COPY . .

# Build Angular app for production
RUN ng build --configuration production

# Stage 2: Serve with Node.js
FROM node:20-alpine

WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Copy built Angular files from builder
COPY --from=builder /app/dist/Divya-Portfolio ./dist

# Expose port
EXPOSE 4200

# Serve the app
CMD ["serve", "-s", "dist/browser", "-l", "4200"]
