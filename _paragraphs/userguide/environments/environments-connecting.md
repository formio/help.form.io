---
title: Connecting To Portal
book: userguide
chapter: environments
slug: environments-connecting
weight: 80
---
#### Prepare your project

After you have your remote deployment API set up for your backend, you must connect that backend to the Form.io portal. Ensure that you are logged in to Form.io and have a project created that is on Team Pro or Enterprise plan. You cannot connect a project that is not on Team Pro or Enterprise. If you don't already have one, create a project and upgrade its plan.

#### Connect to Environment

For each stage of your project that you want to move to a remote environment, go to the Stage Settings on the left and select On-Premise Environments

![](/assets/img/userguide/environments/connect.png){: .img-fluid .img-thumbnail }

Enter the Environment URL you set up in the DNS step above. Enter the Portal Secret you added as an Environment Variable to your Environment. Select the Project Path Type you configured in the DNS step above. If in doubt, use Subdirectories.

Finally, press **Continue** to query the server to make sure it is accessible, compatible and ready. If you get an error message, address the issue in the error message. If successful, you will be presented with a list of Stages on that environment.

#### Move a stage to an environment

If you have an existing project on your Environment, select it from the list. This will connect your form.io project stage with the existing project. If the project configuration currently exists on form.io or you don't want to use an existing select **New Stage**. This will copy all of your settings and forms down to your environment.

![](/assets/img/userguide/environments/attach.png){: .img-fluid .img-thumbnail }

Your project stage is now connected to your environment. Any changes are done directly on your On-Premise Environment. It can also be used for staging and deployment and shared with other teams on form.io.

Connect each of your project's stages to whatever On-Premise environements you want.
