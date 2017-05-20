Here we develop a hosted, database-driven content management system for the Research Publishers' website. This will serve the employees who have the need to add new book titles, authors, and artists in the future.

Back-end technologies include JavaScript packages, including Node, Express, a relational database (SQLite3), and Sequelize. In addition to providing the initial hosted server location for the new website, these back-end technologies will be used to host the content management system.

To use, start up the backend by typing "nodemon server.js" on the command line.  The "Data Entry screen" is named index.js in the /public directory.  It can be accessed by the browser at http://localhost:8080

At this time, there is only a screen to enter new books, authors, or artists.  These data will be written to a SQLite database.  

Future plans include creating a query/update screen that frontends the data entry form.  Also needs a user authentication feature.  
