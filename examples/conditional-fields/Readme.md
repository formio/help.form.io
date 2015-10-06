Installation
----------------
After you download this repository, you need to run the following command.

```
bower install;
```

Once you do this, you should then be able to change the form that is rendered
by changing the URL within the index.html page.

Dependencies
----------------
The dependencies are managed via Bower and auto implemented into ```index.html``` using wiredep.
You can auto include the dependencies by typing the following in the terminal.

```
npm install -g gulp;
npm install;
gulp wiredep;
```