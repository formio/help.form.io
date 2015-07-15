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
  
Editing Books
------------
Books are the top level organization of content on the site. You can edit the name, summary and weight of a book by editing the file in the _books folder.

Editing Chapters
----------------
Chapters are the second level organization of content on the site. Chapters can have html at the top of them and a title. Chapters are in the _chapters folder and are grouped in folders based on the book name. These sub folders are only for organizing the content for ease of editing. Which book they are in depends on the Front Matter Variable "book".

Editing Paragraphs
------------------
Paragraphs are the third level organization of content on the site. Paragraphs can have html at the top of them and a title. Paragraphs are in the _paragraphs folder and are grouped by sub folders by book and chapter. 