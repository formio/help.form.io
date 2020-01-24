---
title: Configuration Options
book: userguide
chapter: environments
slug: environments-variables
weight: 40
---
The formio server is configured with environment variables.

When using Docker, you can set these by using the -e flag. Many Docker hosting platforms have easier ways of setting environment variables for your docker containers.

When using Node.js these variables can either be set in the OS or passed as a prefix to the command. For example: ```MYVAR=value node index```. In addition they can be set in a ```.env``` file in the root of the repository.

#### Required Configuration Variables
You must obtain and add a LICENSE variable or the server will not start.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| LICENSE | A valid license obtained from form.io. | abc123 |


#### Recommended Configuration Variables
While we provide many variables to use during a deployment, the recommended configuration should provide the following settings.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| MONGO | The MongoDB connection string to connect to your remote database. | mongodb://<username>:<password>@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true |
| PORTAL_SECRET | The secret used to connect the portal to your environment | [PORTAL SECRET] |
| DB_SECRET | The database encryption secret | [DB SECRET] |
| JWT_SECRET | The secret password for JWT token encryption. | [TOKEN SECRET] |

#### All Configuration Variables

Below are all the variables that you can set within your On-Premise Environment.

{: .table .table-bordered .table-striped}
| Setting | Description | Example |
|---------|-------------|---------|
| MONGO | The MongoDB connection string to connect to your remote database. | mongodb://<username>:<password>@aws-us-east-1-portal.234.dblayer.com:23423/formio?ssl=true |
| MONGO_HIGH_AVAILABILITY | If your database is high availability (like from Mongo Cloud or Compose), then this needs to be set. | 1 |
| ADMIN_KEY | An optional key that gives full access to the server including listing all projects. Send in a header with x-admin-key | [ADMIN KEY] |
| PRIMARY | Set whether this environment is a primary environment or not. | false |
| ADMIN_EMAIL | The default email of the super admin account. Only on initial startup of Primary. | [email] |
| ADMIN_PASS | The default password of the super admin account. Only on initial startup of Primary. | [password] |
| PORTAL_SECRET | The secret used to connect the portal to your environment | [PORTAL SECRET] |
| FORMIO_FILES_SERVER | This is the URL of the PDF server, which is set within the API server so that it can download Submission PDF's pointed to the PDF Server | https://pdf.yourserver.com |
| DB_SECRET | The database encryption secret | [DB SECRET] |
| DB_SECRET_OLD | If you need to change the DB_SECRET, set the old value here and it will decrypt with the old and encrypt with the new the next time the server is started. Once changed, you can remove the DB_SECRET_OLD. | [OLD DB SECRET] |
| JWT_SECRET | The secret password for JWT token encryption. | [TOKEN SECRET] |
| JWT_EXPIRE_TIME | The expiration for the JWT Tokens | 240 |
| EMAIL_OVERRIDE | Provides a way to point all Email traffic to a server. | {"transport":"smtp","settings":{"port":2525,"host":"smtp.mailtrap.io","auth":{"user":"23esdffd53ac","pass":"324csdfsdf989a"}}} |
| DOCKER_SECRETS | Enable the use of Docker Secrets | 1 |
| DOCKER_SECRETS_PATH | The path to the Docker Secrets folder | /run/secrets |

#### Using environment variables with Docker

You can set any of these environment variables when you run your Docker deployment by providing the ```-e``` parameter. For example, you can run the deployment with some environments set like so.

```bash
docker run -d \
  -e "LICENSE=YOURLICENSE" \
  -e "MONGO=mongodb://admin:blahblah@aws-us-east-1-portal.25.dblayer.com:234234,aws-us-east-1-portal.26.dblayer.com:234234/formio?ssl=true"\
  -e "MONGO_HIGH_AVAILABILITY=1"
  -e "PORTAL_SECRET=CHANGEME"
  -e "DB_SECRET=CHANGEME"
  -e "JWT_SECRET=CHANGEME"\
  --restart unless-stopped \
  --network formio \
  --name formio-server \
  -p 3000:80 \
  formio/formio-enterprise
```

#### Using environment variables with Node.js

You can set these when running the commmand like

```bash
MONGO="mongodb://admin:blahblah@aws-us-east-1-portal.25.dblayer.com:234234,aws-us-east-1-portal.26.dblayer.com:234234/formio?ssl=true node index"
```

You can also set them in a ```.env``` file in the root of your repository.

```bash
MONGO=mongodb://admin:blahblah@aws-us-east-1-portal.25.dblayer.com:234234,aws-us-east-1-portal.26.dblayer.com:234234/formio?ssl=true
MONGO_HIGH_AVAILABILITY=1
PORTAL_SECRET=CHANGEME
DB_SECRET=CHANGEME
JWT_SECRET=CHANGEME
```
