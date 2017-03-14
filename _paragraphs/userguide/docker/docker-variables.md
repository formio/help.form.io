---
title: Configuring
book: userguide
chapter: docker
slug: docker-variables
weight: 30
---
The formio server is configured with environment variables. When using Docker, you can set these by using the -e flag. Many Docker hosting platforms have easier ways of setting environment variables for your docker containers.

#### Recommended Configuration Variables
While we provide many variables to use during a deployment, the recommended configuration should provide the following settings.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| MONGO | The MongoDB connection string to connect to your remote database. | mongodb://<username>:<password>@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true |
| ADMIN_EMAIL | The default administrator email | admin@example.com |
| ADMIN_PASS | The default administrator password | [YOUR PASSWORD] |
| DB_SECRET | The database encryption secret | [DB SECRET] |
| JWT_SECRET | The secret password for JWT token encryption. | [TOKEN SECRET] |

#### All Configuration Variables

Below are all the variables that you can set within your Docker deployment.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| MONGO | The MongoDB connection string to connect to your remote database. | mongodb://<username>:<password>@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true |
| MONGO_HIGH_AVAILABILITY | If your database is high availability (like from Mongo Cloud or Compose), then this needs to be set. | 1 |
| ADMIN_EMAIL | The default administrator email | admin@example.com |
| ADMIN_PASS | The default administrator password | [YOUR PASSWORD] |
| DB_SECRET | The database encryption secret | [DB SECRET] |
| DB_SECRET_OLD | If you need to change the DB_SECRET, set the old value here and it will decrypt with the old and encrypt with the new the next time the server is started. Once changed, you can remove the DB_SECRET_OLD. | [OLD DB SECRET] |
| JWT_SECRET | The secret password for JWT token encryption. | [TOKEN SECRET] |
| JWT_EXPIRE_TIME | The expiration for the JWT Tokens | 240 |
| REDIS_ADDR | The address of the redis server. This is used for analytics for the Docker instance. | localhost |
| REDIS_PORT | The port of the redis server | 6379 |
| REDIS_PASS | (Optional) If you redis server has a password, set it with this. |  |
| EMAIL_OVERRIDE | Provides a way to point all Email traffic to a server. | {"transport":"smtp","settings":{"port":2525,"host":"smtp.mailtrap.io","auth":{"user":"23esdffd53ac","pass":"324csdfsdf989a"}}} |

#### Using environment variables with Docker

You can set any of these environment variables when you run your Docker deployment by providing the ```-e``` parameter. For example, you can run the deployment with some environments set like so.

    docker run -d \
        -e "MONGO=mongodb://admin:blahblah@aws-us-east-1-portal.25.dblayer.com:234234,aws-us-east-1-portal.26.dblayer.com:234234/formio?ssl=true"\
        -e "MONGO_HIGH_AVAILABILITY=1"
        -e "ADMIN_EMAIL=admin@example.com"
        -e "ADMIN_PASS=CHANGEME"
        -e "DB_SECRET=CHANGEME"
        -e "JWT_SECRET=CHANGEME"\
        formio/formio-server

