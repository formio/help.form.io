---
title: NGINX Setup
book: tutorials
section: deployment
chapter: azure
slug: nginx
weight: 6
---
In order to bring all of these locally hosted servers into a single HTTP interface, we can use NGINX to sit in front of these servers.

To setup this configuration, please go through the following steps.

 - Install NGINX using the following command.
 
   ```bash
   sudo apt-get update
   sudo apt-get install nginx
   ```
   
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
     listen 80;
     server_name  ~^(www\.)?(.+)$;
     client_max_body_size 20M;
     
     ############# Use the following for SSL ################
     # listen               443 ssl;
     # ssl_certificate      /usr/local/etc/nginx/nginx.crt;
     # ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
     ########################################################
     
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
     listen 80;
     server_name  ~^minio.(.+)$;
     client_max_body_size 20M;
     
     ############# Use the following for SSL ################
     # listen               443 ssl;
     # ssl_certificate      /usr/local/etc/nginx/nginx.crt;
     # ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
     ########################################################
     
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
   
 - We can now test that we have both an API server and a PDF Server running by going to the following urls in our Browser.
 
   - http://formio-server-6ht0yqu8.cloudapp.net/status (should show the API Server status)
   - http://formio-server-6ht0yqu8.cloudapp.net/files/ (should show the PDF Server status)
   
 - You can now follow the tutorials provided @ [Connecting to Portal](/userguide/environments/#environments-connecting) to connect your projects to this running instance.
