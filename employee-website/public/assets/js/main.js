console.log("in main.js");

//set up author and artist selection lists
var authorList = $("#authors");
var artistList = $("#artists");

getAuthors();
getArtists();

function getAuthors() { 
	console.log("in getAuthors");
	$.get("/api/Auth", function(data) {
    	console.log('get author for dropdown' + data);
    	// res.json(data);
    	createAuthSel(data);
    });
};

function getArtists() { 
	console.log("in getArtists");
	$.get("/api/Art", function(data) {
    	console.log('get artist for dropdown' + data);
    	// res.json(data);
    	createArtSel(data);
    });
};

function createAuthSel(authList) {
	console.log("authList" + authList);
	authorList.empty();
	var newAuthRow = $("<option>");
	if (authList[0]) {
		for (var i=0; i < authList.length; i++) { 
			newAuthRow.attr("value", authList[i].author)
			newAuthRow.append(authList[i].author + "</option>")
		};	
	} else {
		newAuthRow.attr("value", "none")
		newAuthRow.append("none</option>")
	};
	console.log(newAuthRow);
	authorList = newAuthRow;
};

function createArtSel(artList) {
	console.log("artList" + artList);
	artistList.empty();
	var newArtRow = $("<option>");
	if (artList[0]) {
		for (var i=0; i < artList.length; i++) { 
			newArtRow.attr("value", artList[i].artist)
			newArtRow.append(artList[i].artist + "</option>")
		};	
	} else {
		newArtRow.attr("value", "none")
		newArtRow.append("none</option>")
	};
	consol.log(newArtRow);
	artistList = newArtRow;
};

$(document).ready(function() {
    console.log("in doc ready");
    // $(".dropdown-toggle").dropdown("toggle");

    // Response to a click of the Submit button within the Add Publication panel
    $("#submitBook").click(function addNewBook() {
        console.log("submitted cms form");
        event.preventDefault();
        var titleIn = $("#bookTitle").val();
        var versIn = $("#version").val();
        var descIn = $("#bookDesc").val();
        var priceIn = $("#price").val();
            // verify required values entered
        // if (!titleIn.trim() || !versIn.trim() || !descIn.trim()) {
        //     return;
        // };

        var newBook = {
            title: titleIn,
            version: versIn,
            description: descIn,
            pagecnt: $("#pagecnt").val(),
            ISBN10: $("#isbn10").val(),
            ISBN13: $("#isbn13").val(),
            price: priceIn,
            coverart: $("#coverart").val(),
            aboutcover: $("#aboutcover").val(),
            outofprint: $("#status").val(),
            role: $("#role").val(),
            author_editor1: $("#authors").val(),
            // author_editor2: req.body.author_editor2,
            // author_editor3: req.body.author_editor3,
            // author_editor4: req.body.author_editor4,
            // author_editor5: req.body.author_editor5,
            // author_editor6: req.body.author_editor6,
            artist1: $("#artists").val()
                // artist2: req.body.artist2,
                // artist3: req.body.artist3,      
                // artist4: req.body.artist4
        }
        console.log('lskdfjdklsjfs')
        submitNewBook(newBook);
    });
    // Response to a click of the Submit button within the Add Author/Editor panel
    $("#submitAuth").click(function addNewAuth() {
        console.log("submitted author form");
        event.preventDefault();
        var authorIn = $("#authName").val();
        var bioIn = $("#authBio").val();
        var newAuth = {
            author: authorIn,
            biography: bioIn
        }
        console.log("adding author");
        submitNewAuth(newAuth);
    });
    // Response to a click of the Submit button within the Add Artist panel
    $("#submitArt").click(function addNewAuth() {
        console.log("submitted artist form");
        event.preventDefault();
        var artistIn = $("#artName").val();
        var bioIn = $("#artBio").val();
        var newArt = {
            artist: artistIn,
            biography: bioIn
        }
        console.log("adding artist");
        submitNewArt(newArt);
    });

    function submitNewBook(Book) {
        console.log("creating new book", Book);
        $.post("/api/newBook", Book, function() {
            console.log('new book created');
        });
    };
    function submitNewAuth(Author) {
        console.log("creating new author", Author);
        $.post("/api/newAuth", authors, function() {
            console.log('new author created');
        });
    }
    function submitNewArt(Artist) {
        console.log("creating new artist", Artist);
        $.post("/api/newArt", artists, function() {
            console.log('new artist created');
        });
    }
});
