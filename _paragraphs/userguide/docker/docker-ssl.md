---
title: Configuring SSL (https)
book: userguide
chapter: docker
slug: docker-ssl
weight: 55
---
If you wish to enable SSL (https) configuration for your Docker deployment, then we recommend using [NGINX](https://www.nginx.com) as a reverse proxy to point to the Form.io Docker container. Follow these steps to get this working.

 - [Install NGINX](https://www.nginx.com/resources/admin-guide/installing-nginx-open-source/)
 - You will need to get an SSL Certificate, or generate a Self Signed Certificate. [This tutorial has good instructions on how to do that](https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04)

Now, you will need to configure your `nginx.conf` file. You will be setting up NGINX to serve as a reverse proxy to the Docker container. The following configuration is an example of what would work.

    ###
    # A LOT OF OTHER CONFIGURATIONS MAY BE ABOVE THIS POINT.
    ###

    server {
        listen       443 ssl;
        server_name  *.lvh.me;
        ssl_certificate      /usr/local/etc/nginx/nginx.crt;
        ssl_certificate_key  /usr/local/etc/nginx/nginx.key;
        location / {
            proxy_set_header        Host $host;
            proxy_set_header        X-Real-IP $remote_addr;
            proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header        X-Forwarded-Proto $scheme;

            # Fix the “It appears that your reverse proxy set up is broken" error.
            proxy_pass          http://localhost:3000;
            proxy_read_timeout  90;
            proxy_redirect      http://localhost:3000 https://$host;
        }
    }

    ###
    # A LOT OF OTHER CONFIGURATIONS MAY BE BELOW THIS POINT
    ###

In this case, your Docker container would be listening to port 3000, and NGINX would serve as the reverse proxy to point to that container.

Once you start up your NGINX instance, you will now have an SSL connection into your Form.io Docker container!
