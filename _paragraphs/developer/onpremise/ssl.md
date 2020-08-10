---
title: SSL Setup (https)
book: developer
chapter: onpremise
slug: environents-ssl
weight: 50
---
In order to enable SSL (https) for your environment, there are several options for how to do so. Most Load Balancers in the cloud contain HTTPS listeners that can be configured with proper SSL Certificates. These can then point to the listening ports on the form.io server. 

If you are not using a load balancer that has SSL support, you can use [NGINX](https://www.nginx.com) to proxy the requests to your server and install your SSL Certificates.
First, you will need certificates. You can either [generate your own](https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04), use [LetsEncrypt](https://letsencrypt.org/), or purchase an SSL certificate. Once you have a certificate you can configure NGINX.

A sample configuration that proxies the server, listens on port 443 and uses your SSL Certificates

```bash
server {
  listen 443 ssl;
  server_name  ~^(www\.)?(.+)$;
  client_max_body_size 20M;
  ssl_certificate      /usr/local/etc/nginx/nginx.crt;
  ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
 
  location / {
    proxy_set_header    Host $host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header    X-Forwarded-Proto $scheme;
    proxy_pass          http://localhost:3000;
    proxy_read_timeout  90;
    proxy_redirect      http://localhost:3000 https://$host;
  }
}

```
<br><br>
If you also have a Minio + PDF Server running on this server, then you will also want to provide them within subdirectories like the following.

```bash
server {
  listen 443 ssl;
  server_name  ~^(www\.)?(.+)$;
  client_max_body_size 20M;
  ssl_certificate      /usr/local/etc/nginx/nginx.crt;
  ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
 
  location / {
    proxy_set_header    Host $host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header    X-Forwarded-Proto $scheme;
    proxy_pass          http://localhost:3000;
    proxy_read_timeout  90;
    proxy_redirect      http://localhost:3000 https://$host;
  }

  location /files/ {
    rewrite ^/files/(.*)$ /$1 break;
    proxy_set_header    Host $host;
    proxy_set_header    X-Real-IP $remote_addr;
    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header    X-Forwarded-Proto $scheme;
    proxy_pass          http://localhost:4005;
    proxy_read_timeout  90;
    proxy_redirect      http://localhost:4005 https://$host;
  }
}

server {
   listen 443 ssl;
   server_name  ~^minio.(.+)$;
   client_max_body_size 20M;
   ssl_certificate      /usr/local/etc/nginx/nginx.crt;
   ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
 
   location / {
     proxy_buffering off;
     proxy_set_header Host $http_host;
     proxy_pass http://localhost:9000;
   }
}
```

Note, for this configuration to work with Minio, you will need to create a subdomain @ http://minio.yourserver.com that points to this server. Minio does not support being hosted outsiide of the root domain.
