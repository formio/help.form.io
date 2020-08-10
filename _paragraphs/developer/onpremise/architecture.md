---
title: Architecture
book: developer
chapter: onpremise
slug: architecture
weight: 30
---
The form.io platform can be set up in any environment that supports Docker Engine. The configuration can be as simple as running our container and pointing a dns entry to it but most of our customers build out a high performance/high available stack. The following information should provide guidelines on how to set that up.

#### Server requirements
Our architecture is very performant, even on smaller servers. In addition, since our servers are stateless, you can easily run multiple of them in parallel behind a load balancer to increase capacity during times of higher load. Still, we recommend running the following sized servers. These have been stress tested to hundres of concurrent users without impact.

{: .table .table-bordered .table-striped}
|---|---|
| Server manufacturer | AWS <br>Azure <br>Google Cloud |
| Processor make | Intel Xeon<br>Intel Xeon E5 <br>AMD Opteron<br>or compatible |
| Processor instruction set | X86, AVX2 (AVX is also supported) |
| Processor architecture | 64-bit |
| Processor speed | 1.0 GHz or faster |
| No. of physical cores | 1 |
| Processor cache | 2MB or greater |
| Total RAM | 3GB or greater (Example AWS m3.medium) |
| Hardware allocation | The host server must not be over-committed in terms of either RAM or CPU to other processes besides the Form.io API Server. The Form.io API Server must have dedicated access to its own RAM and CPU cores. |
| Application Storage | 4GB or greater (Example AWS m3.medium) |
| Blob Storage | 128GB |
| GPU | N/A |
| Network | > 1 Gigabit |
| Operating System | Ubuntu > v18.0 <br>Debian > v8.0 <br>Alpine Linux > v3.5.0 |

#### Deployment Diagram
![](/assets/img/developer/deploymentDiagram.png){: .img-fluid .img-thumbnail }
