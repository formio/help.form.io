---
title: Let's get started!
book: intro
weight: 10
chapter: welcome
slug: formio-welcome
---
**&lt;<span class="text-primary">form</span>.<span class="text-secondary">io</span>&gt;** offers the first development platform that builds Forms & APIs in one simple step.

The easiest way to get started is to **bootstrap** an existing application which will automatically connect with Form.io, which we will then disect later in this guide.

Follow these steps to bootstrap your first application.

  - ### Step 1: Create an account at [https://form.io](https://portal.form.io){:target="_blank"}.
  - ### Step 2: [Download Node.js](https://nodejs.org){:target="_blank"}
  - ### Step 3: Install the Form.io Command Line Interface.
    - Open up your terminal and type the following.

      ```
      npm install -g formio-cli
      ```
  - ### Step 4: Bootstrap an application.
    - Now we can easily bootstrap the [ToDo Application](https://github.com/formio/formio-app-todo){:target="_blank"} by typing the following.

      ```
      formio bootstrap formio/formio-app-todo
      ```

    - You should see the following...

      ![](/assets/img/intro/formio-bootstrap.png)


    - This process creates the Form.io project for you, as well as configures the application to utilize the bootstrapped project. Go to your Form.io account and you should now see the following.

      ![](/assets/img/intro/formio-projects.png)


    - This project is a complete sandboxed database where you have access to both Resources and Forms within your application.

      ![](/assets/img/intro/formio-structure.png)


    - This serves as the platform for the running application @ http://localhost:8081.

      ![](/assets/img/intro/formio-embed.png)

    This means that you can change any of the forms within your Form.io project and those forms will automatically update the application ***without needing to redeploy the software!***