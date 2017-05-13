This is a single-page application, eliminating the necessity to make frequent requests of the web server. It serves the customers of Research Publishers.

Note. Research Publishers LLC sells its books and case studies through booksellers and distributors, working in conjunction with the University of Chicago Press. All e-commerce transactions are executed online by software of that press and its distribution services. That is, research-publishes.com itself has no database or e-commerce functions. It does not collect customer information or process orders. This aspect of the website will remain intact at the conclusion of the current project.

Vue.js provides a structure for the front-end, which is the customer website. It is the new technology that we are exploring in the project. Vue.js includes templating tools, which may be used instead of Handlebars.

A simple test of Vue in the front-end was demonstrated in the buyer-website-hello-vue project. That was a start, but it did not provide a full-stack client-server environment as needed for the current project.

So now we move to vue-cli, which permits the construction/compilation of VueJS templates on the server. There will be a build process managed by webpack. We begin with

sudo npm install -g vue-cli

To create the first version of the buyer website we will set up our environment with

vue init webpack buyer-first

We asked for the works in terms of testing and automated setup, giving us many tools we may not need but we are trying to be complete here, anticipating development of a fully functional production application in the future. So we have the following Vue system initialized:

  This will install Vue 2.x version of the template.

? Project name buyer-first
? Project description A Vue.js project
? Author tomcali <tmiller@toutbay.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "buyer-first".

   To get started:
   
     cd buyer-first
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack
   
We go on to begin our work with

cd buyer-first
npm install
npm run dev

This starts the web server on localhost port 8080.

Now we are ready to begin our work in all seriousness.
   









