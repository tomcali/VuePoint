# Project Title: VuePoint
This is Bootcamp Project 2 Work. The name comes from Vue, which is one of many technologies used in completing the project.

## Team Members: John Johansen, Chris Ward, and Tom Miller

## Project Description
Research Publishers LLC is a publisher of books and research case studies. The company has a website at research-publishers.com that was designed more than ten years ago. It is a simple static site that relies on frequent client requests to the server. 

This project has two major components. (1) Develop a hosted, database-driven content management system for the Research Publishers' website. This will serve the employees who have the need to add new book titles, authors, and artists in the future.

(2) Convert the current multipage site into a single-page application, eliminating the necessity to make frequent requests of the web server. This serves the customers of Research Publishers.

Note. Research Publishers LLC sells its books and case studies through booksellers and distributors, working in conjunction with the University of Chicago Press. All e-commerce transactions are executed online by software of that press and its distribution services. That is, research-publishes.com itself has no database or e-commerce functions. It does not collect customer information or process orders. This aspect of the website will remain intact at the conclusion of the current project.

## Technologies to be Used
Back-end technologies include JavaScript packages, including Node, Express, a relational database (SQLite3 or MySQL), and Sequelize. In addition to providing the initial hosted server location for the new website, these back-end technologies will be used to host the content management system.

Vue.js provides a structure for the front-end, which is the customer website. It is the new technology that we are exploring in the project. Vue.js includes templating tools, which may be used instead of Handlebars.

We had evaluated Pagekit (https://pagekit.com/) as the foundation for our content management system but learned that Pagekit was PHP based. We are currently considerinig alternatives for our content management system, which is the foundation for the employee website. 

## Drawing of System
The file Project2_layout_rev.pdf in the VuePoint repository shows the drawing of the infrastructure and systems for the project.

## Rough Breakdown of Tasks
All members. Develop software/system specifications for the project. 

John. Develop hosted back-end content management system. Initial content in the system will be a clone of current website content. The system should provide an easy-to-use facility for adding new content to the website in the future. New content will update the database. 

Chris. Define the structure of the relational database tables and implement as a SQLite3 or MySQL database file. There will be a table for each book, including information the about publications (books and research study titles), description of the publication, author name(s), ISBNs, cover art, page count, artist name(s), and desctription of the cover art. There will be a table for each author with author name and bio. There will be a table for each artist with artist name and bio. 

Tom. Lead in developing the Vue.js front-end application framework. Convert the current client-server system to a single-page application using the Vue. Develop reveal.js browser-based presentation.

Team member TBD. Implement the back-end hosted sites on Heroku. Assist with front-end development and testing.

## GitHub Repository
The GitHub Repository is available at 

https://github.com/tomcali/VuePoint

It is organized into directories organized into five main directories as follows:

buyer-website = structure for the new website, including work on the Vue-based front-end app

database-work = files for the relational database that serves both the buyer-website and the employee-website

employee-website = the locus of the content management system

presentation = files needed for a self-running web-browser-based presentation

rp-website-files = files from the current website at reserach-publishes.com


## Vue.js Application Structure

Drawing on example code from the Schwarzmuller Udemy course, we implemented a single-page application (SPA) using vue.js and vue-router.js, all implemented via node.js, nmp, and webpack. Much of the syntax is similar to what we expect to see in the final weeks of the bootcamp program when we will see the React framework.

Our first order of business in developing the SPA was the definition of components and routes. We were less concerned about the import of source images. So what we see in the running SPA is mostly text and routing across Vue components. 

Like React, Vue.js is a front-end framework that relies on a virtual DOM to provide fast rendering of web pages. And, like React, Vue provides components and routes for implementing SPAs. So we need to make fewer trips between the client front-end and the server back-end. 

Vue.js also provides templating tools, so we have no need for handlebars. Here we review the file structure used in implementing the single-page application:


  ```
  vue-spa-vXXX
    - node_modules
      - src
        - assets [static files, images]
        - components
          	- user
          	 	- User.vue
          	 	- UserDetail.vue
          	 	- UserRequest.vue
          	 	- UserStart.vue
          	- Header.vue
          	- Home.vue
        - App.vue
        - main.js
        - routes.js
    - .babelrc
    - index.html
    - package.json
    - webpack.config.js
    - server.js
  ```

Files with the .vue extension are Vue-specific, involving template code and often JavaScript code. These SPA components correspond to web pages or portions of web pages that we would associate with a multi-page application. 

The use of webpack and babel opened the door to using ES6 syntax and capabilities. A review of the code will show the use of modularized code via import statements.

To bring the application into operation we locate ourselves in the vue-spa directory and we use the node package manager commands:

npm install

npm run dev [in development mode]

npm run build [in production mode]

## Training Resources
We utilized a number of training resources in learning Vue.js for this project. These included Lynda.com and Udemy video courses and Packt Publishing books:

Filipova, O. 2016. Learning Vue.js 2. Birmingham, Ala.: Packt. With GitHub respository https://github.com/PacktPublishing/Learning-Vuejs-2 

Passaglia, A. 2017. Vue.js 2 Cookbook: Build Modern, Interactive Web Applications with Vue.js Birmingham, Ala.: Packt.

Schwarzmüller, M. 2017. Udemy Vue 2 Course at https://www.udemy.com/vuejs-2-the-complete-guide/ 
This Udemy course included 18 hours of video and numerous code examples with exercises and projects. The initial code from Maximilian Schwarzmüller was essential to getting us started on the path toward building a Vue-enabled SPA.


