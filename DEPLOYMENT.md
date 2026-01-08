# 🚀 Deployment Guide

## Overview

This guide covers deploying the updated architecture with:
- **chaitanyadev.in** → Portfolio Website
- **androidci.chaitanyadev.in** → Build Dashboard
- **api.chaitanyadev.in** → Backend API

---

## Prerequisites

### DNS Configuration

Add the following DNS A record in your domain registrar:

```
Type: A
Name: androidci
Value: <Your EC2 Instance IP>
TTL: 3600 (or default)
```

This creates `androidci.chaitanyadev.in` pointing to your server.

---

## Local Testing

### 1. Build and Run Containers

```bash
# Navigate to project directory
cd /media/Data/My\ Codes/build-dashboard

# Build all containers
docker-compose build

# Start all services
docker-compose up -d

# Verify all containers are running
docker-compose ps
```

### 2. Test with /etc/hosts (Optional)

Add these entries to `/etc/hosts` for local testing:

```
127.0.0.1 chaitanyadev.in
127.0.0.1 androidci.chaitanyadev.in
127.0.0.1 api.chaitanyadev.in
```

Then visit:
- http://chaitanyadev.in → Portfolio
- http://androidci.chaitanyadev.in → Build Dashboard
- http://api.chaitanyadev.in → API

---

## Production Deployment on AWS EC2

### 1. SSH into EC2 Instance

```bash
ssh -i your-key.pem ec2-user@<your-ec2-ip>
# or
ssh -i your-key.pem ubuntu@<your-ec2-ip>
```

### 2. Navigate to Project Directory

```bash
cd build-dashboard
```

### 3. Pull Latest Code

```bash
git pull origin main
```

### 4. Stop Existing Containers

```bash
docker-compose down
```

### 5. Build and Start New Containers

```bash
# Build all containers (including new portfolio)
docker-compose build

# Start all services in detached mode
docker-compose up -d
```

### 6. Verify Deployment

```bash
# Check all containers are running
docker-compose ps

# View logs
docker-compose logs -f

# Check nginx configuration
docker exec reverse-proxy nginx -t

# Check individual container logs
docker logs portfolio
docker logs frontend
docker logs backend
```

---

## Verification Checklist

After deployment, verify:

- [ ] All 4 containers are running (backend, frontend, portfolio, reverse-proxy)
- [ ] DNS for `androidci.chaitanyadev.in` has propagated (use `nslookup androidci.chaitanyadev.in`)
- [ ] Portfolio loads at `https://chaitanyadev.in`
- [ ] Build dashboard loads at `https://androidci.chaitanyadev.in`
- [ ] API responds at `https://api.chaitanyadev.in`
- [ ] All links and navigation work correctly
- [ ] Portfolio is responsive on mobile/tablet/desktop

---

## Troubleshooting

### Container Issues

```bash
# Restart specific container
docker-compose restart portfolio

# Rebuild specific container
docker-compose up -d --no-deps --build portfolio

# View container logs
docker logs portfolio --tail 100 -f
```

### Nginx Issues

```bash
# Test nginx configuration
docker exec reverse-proxy nginx -t

# Reload nginx
docker exec reverse-proxy nginx -s reload

# View nginx logs
docker logs reverse-proxy
```

### DNS Issues

```bash
# Check DNS propagation
nslookup androidci.chaitanyadev.in

# Check from different DNS servers
nslookup androidci.chaitanyadev.in 8.8.8.8
```

### Port Issues

```bash
# Check if port 80 is in use
sudo netstat -tulpn | grep :80

# Check firewall rules (if applicable)
sudo ufw status
```

---

## SSL/HTTPS Setup (Optional but Recommended)

If you want to enable HTTPS, use Let's Encrypt with Certbot:

```bash
# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Stop nginx container temporarily
docker-compose stop reverse-proxy

# Get certificates
sudo certbot certonly --standalone -d chaitanyadev.in -d androidci.chaitanyadev.in -d api.chaitanyadev.in

# Update nginx.conf to use SSL certificates
# Then restart
docker-compose up -d reverse-proxy
```

---

## Monitoring

### View All Logs

```bash
docker-compose logs -f
```

### Monitor Resource Usage

```bash
docker stats
```

### Check Container Health

```bash
docker-compose ps
docker inspect portfolio
```

---

## Rollback

If something goes wrong:

```bash
# Stop new containers
docker-compose down

# Checkout previous version
git checkout HEAD~1

# Rebuild and restart
docker-compose up -d --build
```

---

## Notes

- The portfolio is a static React app built with Vite
- Build time for portfolio container: ~2-3 minutes (first build)
- All containers use `restart: always` for automatic recovery
- Nginx acts as reverse proxy for all services
