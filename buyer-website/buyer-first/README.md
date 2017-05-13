This is a single-page application, eliminating the necessity to make frequent requests of the web server. It serves the customers of Research Publishers.

Note. Research Publishers LLC sells its books and case studies through booksellers and distributors, working in conjunction with the University of Chicago Press. All e-commerce transactions are executed online by software of that press and its distribution services. That is, research-publishes.com itself has no database or e-commerce functions. It does not collect customer information or process orders. This aspect of the website will remain intact at the conclusion of the current project.

Vue.js provides a structure for the front-end, which is the customer website. It is the new technology that we are exploring in the project. Vue.js includes templating tools, which may be used instead of Handlebars.

Earlier we created installed vue-cli globally

sudo npm install -g vue-cli 

We set up a project under a new directory buyer-first

vue init webpack buyer-first

For subsequent work we use these three commands to get going:

cd buyer-first  [go to the project directory]

vue init webpack  [accept current project name]

npm install  [brings in all the package.json modules]

npm run dev  [starts the developmental server]


