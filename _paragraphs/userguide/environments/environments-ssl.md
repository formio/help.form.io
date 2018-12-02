---
title: SSL Setup (https)
book: userguide
chapter: environments
slug: environents-ssl
weight: 50
---
If you wish to enable SSL (https) configuration for your Environment, then we recommend using [NGINX](https://www.nginx.com) as a reverse proxy to point to the Form.io environment. Follow these steps to get this working.

 - You will need to get an SSL Certificate, or generate a Self Signed Certificate. [This tutorial has good instructions on how to do that](https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04)

To setup this configuration, please go through the following steps.

 - Install NGINX using the following command.
 
   ```bash
   sudo apt-get update
   sudo apt-get install nginx
   ```
   
   Or walk through the following tutorial: [Installing NGINX](https://www.nginx.com/resources/admin-guide/installing-nginx-open-source/)
   
 - We can check to ensure that we have NGINX running with the following command.
 
   ```bash
   systemctl status nginx
   ```
   
 - We now need to edit the nginx.conf file to redirect HTTP traffic to the internal servers.
 
   ```bash
   sudo vi /etc/nginx/sites-available/formio
   ```
   
 - Put the following contents in that file.

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
    
    In this case, your Environment would be listening to port 3000, and NGINX would serve as the reverse proxy to point to that container.
    
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

- Now save that file, and then switch this out for the ```default``` server
 
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   sudo ln -s /etc/nginx/sites-available/formio /etc/nginx/sites-enabled/default
   sudo systemctl restart nginx
   ```

Once you start up your NGINX instance, you will now have an SSL connection into your Form.io Environment!
