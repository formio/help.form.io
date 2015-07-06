http://help.form.io documentation for form.io.
==============================================
This repository is used to generate the documentation section of the form.io website. It is generated using jekyll. Feel free to update and change it using pull requests.

Testing locally
---------------
You will need jekyll installed and running to generate a local copy for testing.

  - ```ruby --version``` Ensure that you have at least version 2.0.0
  - ```gem install bundler``` Install bundler if you don't already have it.
  - ```bundle install``` Install this project's dependencies.
  
Running Jekyll
--------------
To run jekyll server locally, use the following commands.

  - ```bundle exec jekyll serve``` to run the server.
  - Open your browser and go to http://localhost:4000.
  
Adding a tag
------------
Adding a tag requires two steps.

  - First, add the tag to a page using either the tag or tags Front Matter Variable. (If multiple, space separated.
  - Second, add a page in the tags folder with the layout of "tagpage" and tag to the tagname.