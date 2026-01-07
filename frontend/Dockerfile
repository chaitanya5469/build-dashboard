FROM nginx:alpine

# Remove default nginx site
RUN rm /etc/nginx/conf.d/default.conf

# Copy our HTML file
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
