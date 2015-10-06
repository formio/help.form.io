Installation
----------------
After you download this repository, you need to run the following command.

```
bower install;
```

You will then need to create the project in Form.io.  You can use the project.json as the
template for a new project.  Then change the Form URL within the index.html to the one within
your project.

Dependencies
----------------
The dependencies are managed via Bower and auto implemented into ```index.html``` using wiredep.
You can auto include the dependencies by typing the following in the terminal.

```
npm install -g gulp;
npm install;
gulp wiredep;
```