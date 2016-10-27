---
title: Webhook Action
book: userguide
chapter: actions
slug: action-webhook
weight: 40
---
The Webhook action allows you to integrate form submissions into your custom application, by providing a means to call your external API with the form submission data in real time. In order for the Webhook action to function properly, make sure the API endpoint can be accessed publicly.

Webhooks can not be performed within the "Form Editor". However, you can see the action take place within the Preview section of your Project.

![](/assets/img/action-webhook.png)

#### Handler

The handler determines when the webhook request will be sent. Currently there are two options. Before and After are the two options. If you select both, it will run twice, once before and once after the methods selected.

#### Method

When to run this action. Select which system events will trigger this action.

#### Webhook URL

The url of the external system that will handle the web hook.

#### Authorize User

If you are using Basic Access Authentication for the web hook url, enter the username here.

#### Authorize Password

If you are using Basic Access Authentication for the web hook url, enter the password here.

## Webhook Reciever

In order to receive webhooks, we have created a library that serves to provide a reciever for them. You can download this library at [https://github.com/formio/formio-webhook-reciever](https://github.com/formio/formio-webhook-reciever). Please read the README documents on how to utilize this library.

## Testing Webhooks

In order to test webhooks, it is beneficial to point them to your local computer so that you can see them in action. We recommend installing the [Webhook Receiver](https://github.com/formio/formio-webhook-reciever) on your local machine and then install and run it using the following command.

```
npm install
node index.js
```

This will run the receiver on your Local machine. To connect your local computer to the internet, we recommend using a tool called [NGROK](https://ngrok.com/). You can download and run the proxy by following the instructions @ [https://ngrok.com/download](https://ngrok.com/download). Once you have this running, you will want to expose the port from the local webhook reciever by typing the following.

```
ngrok http 4001
```

You will then see the following...

```
Version                       2.1.14
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://941a7c65.ngrok.io -> localhost:4001
Forwarding                    https://941a7c65.ngrok.io -> localhost:4001
```

This tells me that I can now go to ```http://941a7c65.ngrok.io``` and it will hit my local reciever. I can now configure the webhook settings with the following settings.

 - **Webhook URL**: http://941a7c65.ngrok.io
 - **Authorize User**: test
 - **Authorize Password**: password123

The username and password can be changed in the ```config.json``` of the webhook reciever library.

You can now submit the form and see the data come through your local machine!
