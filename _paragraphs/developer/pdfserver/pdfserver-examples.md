---
title: Examples
book: developer
chapter: pdfserver
slug: pdfserver-examples
weight: 50
---
```bash
docker run -itd \
  -e "MINIO_ACCESS_KEY=CHANGEME" \
  -e "MINIO_SECRET_KEY=CHANGEME" \
  --network formio \
  --name formio-minio \
  --restart unless-stopped \
  -p 9000:9000 \
  -v ~/minio/data:/data \
  -v ~/minio/config:/root/.minio \
  minio/minio server /data && \
docker run -itd \
  -e "LICENSE_KEY=YOURLICENSE" \
  -e "MONGO=mongodb://user:password@mongoserver.com/dbname" \
  -e "DB_SECRET=CHANGEME" \
  -e "FORMIO_SERVER=http://formio" \
  -e "FORMIO_S3_SERVER=minio" \
  -e "FORMIO_S3_PORT=9000" \
  -e "FORMIO_S3_BUCKET=formio" \
  -e "FORMIO_S3_KEY=CHANGEME" \
  -e "FORMIO_S3_SECRET=CHANGEME" \
  --network formio \
  --link formio-server:formio \
  --link formio-mongo:mongo \
  --link formio-minio:minio \
  --restart unless-stopped \
  --name pdf-server \
  -p 4005:4005 \
  formio/pdf-server;
```
