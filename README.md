# Project Title: VuePoint
This is Bootcamp Project 2 Work. The name comes from Vue, which is one of many technologies used in completing the project.

## Team Members: John Johansen, Chris Ward, and Tom Miller

## Project Description
Research Publishers LLC is a publisher of books and research case studies. The company has a website at research-publishers.com that was designed more than ten years ago. It is a simple static site that relies on frequent client requests to the server. 

This project has two major components. (1) Develop a hosted, database-driven content management system for the Research Publishers' website.

(2) Convert the current multipage site to a single-page application, eliminating the necessity to make frequent requests of the web server. 

Note. Research Publishers LLC sells its books and case studies through booksellers and distributors, working in conjunction with the University of Chicago Press. All e-commerce transactions are executed online by software of that press and its distribution services. That is, research-publishes.com itself has no database or e-commerce functions. It does not collect customer information or process orders. This aspect of the website will remain intact at the conclusion of the current project.

## Technologies to be Used
Back-end technologies include JavaScript packages, including Node, Express, SQLite3, and Sequelize. In addition to providing the initial hosted server location for the new website, these back-end technologies will be used to host the content management system.

Vue.js provides a structure for the front-end. It is the new technology that we are exploring in the project. Vue.js includes templating tools, which may be used instead of Handlebars.

We are thinking of using Pagekit (https://pagekit.com/) as the foundation for our content management system. Pagekit is Vue.js- and SQLite-based. 

## Drawing of System
The file Project2_layout.pdf in the VuePoint repository shows the drawing of the infrastructure and systems for the project.

## Rough Breakdown of Tasks
All members. Develop software/system specifications for the project. 

John. Develop hosted back-end content management system. Initial content in the system will be a clone of current website content. The system should provide an easy-to-use facility for adding new content to the website in the future. New content will update the database. 

Chris. Define the structure of the relational database tables and implement as a SQLite3 database file. There will be a table for each book, including information the about publications (books and research study titles), description of the publication, author name(s), ISBNs, cover art, page count, artist name(s), and desctription of the cover art. There will be a table for each author with author name and bio. There will be a table for each artist with artist name and bio. 

Tom. Lead in developing the Vue.js front-end application framework. Convert the current client-server system to a single-page application using the Vue. Develop reveal.js browser-based presentation.

Team member TBD. Implement the back-end hosted sites on Heroku. Assist with front-end development and testing.

