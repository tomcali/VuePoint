// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/Auth", function(req, res) {
    db.authors.findAll({})
    .then(function(dbAuthor) {
      res.json(dbAuthor);
    })
  });
  app.get("/api/Art", function(req, res) {
    db.artists.findAll({})
    .then(function(dbArtist) {
      res.json(dbArtist);
    })
  })
  app.get("/api/books/", function(req, res) {
    db.book.findAll({})
    .then(function(dbBook) {
      res.json(dbBook);
    });
  });
  // Route for creating new book/publication in the book table.
  app.post("/api/newBook", function(req, res) {
    db.book.create({
      title: req.body.title,
      version: req.body.version,
      description: req.body.description,
      pagecnt: req.body.pagecnt,
      isbn10: req.body.isbn10,
      isbn13: req.body.isbn13,
      price: req.body.price,
      coverart: req.body.coverart,
      aboutcover: req.body.aboutcover,
      outofprint: req.body.outofprint,
      role: req.body.role,
      author_editor1: req.body.author_editor1,
      // author_editor2: req.body.author_editor2,
      // author_editor3: req.body.author_editor3,
      // author_editor4: req.body.author_editor4,
      // author_editor5: req.body.author_editor5,
      // author_editor6: req.body.author_editor6,
      artist1: req.body.artist1
      // artist2: req.body.artist2,
      // artist3: req.body.artist3,      
      // artist4: req.body.artist4,
    })
  });
  // Route for creating new author in the author table.
  app.post("/api/newAuth", function(req, res) {
    Author.create({
      author: req.body.author,
      biography: req.body.biography
    })
  });
    // Route for creating new author in the author table.
  app.post("/api/newArt", function(req, res) {
    Artist.create({
      artist: req.body.artist,
      biography: req.body.biography
    })
  });
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
