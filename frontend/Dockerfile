FROM nginx:alpine

# Copy HTML
COPY index.html /usr/share/nginx/html/index.html

# Ensure default site exists
RUN printf 'server {\n\
  listen 80;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
}\n' > /etc/nginx/conf.d/default.conf
