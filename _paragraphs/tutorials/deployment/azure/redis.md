---
title: Redis Setup
book: tutorials
section: deployment
chapter: azure
slug: redis
weight: 3
---
Form.io uses a **Redis** server to manage download tokens required to download Submission PDF's as well as for analytics. While it is not required in some cases, it is needed if you use our PDF server deployments or would like to see usage analytics of your project.

Follow these steps to setup a new **Redis** instance.

 - Click on the link that says **All Services** in the left hand side of the screen.
 - Type **Redis** in the search, which will then show you the following.
 
   ![](/assets/img/integrations/azure/redis-search.png)
   
 - After clickin on **Redis Caches**, you will then click on **+ Add** and then provide information about your Redis Cache.
 - Provide a **DNS name** and then make sure you select the **Existing Resource Group** and select the group we created earlier.
 - You will now select a **Pricing tier**, but for Form.io's purpose of redis, the **Standard C1** is sufficient.
 - Now click **Create** button.
 
   ![](/assets/img/integrations/azure/redis-create.png)
   
 - You will now wait for the Redis server to startup. Once it is created, you will then click on the new cache in the list.
 - Now click on **Access Keys** and then make sure you copy the following.

   - **Primary**: This will be used as the REDIS_PASS parameter
   - **Connection Host** (such as formio.redis.cache.windows.net): This will be used as the REDIS_ADDR
   - **Connection Port** (such as 6380): This will be used as the REDIS_PORT parameter.
 
 - You are now ready to setup your file hosting in Azure.