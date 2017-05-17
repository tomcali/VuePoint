
$(document).ready(function() {
	// $(".dropdown-toggle").dropdown("toggle");
	var cmsForm = $("#cms");


// Response to a click of the Submit button within the Add Publication panel
	$(cmsForm).on("submit", function addNewBook() {
		event.preventDefault();
		var titleIn = $("#bookTitle");
		var versIn = $("#version");
		var descIn = $("#bookDesc");
		var priceIn = $("#price");

		// verify required values entered
		if (!titleIn.val().trim() || !versIn.val().trim() || !descIn.val().trim()) {
      		return;
      	};

		var newBook = {
			title: titleIn,
     		version: versIn,
      		description: descIn,
      		pagecnt: $("#pagecnt"),
      		ISBN10: $("#isbn10"),
      		ISBN13: $("#isbn13"),
      		price: priceIn,
      		coverart: $("#coverart"),
      		aboutcover: $("#aboutcover"),
      		outofprint: $("#status"),
      		role: $("#role"),
      		author_editor1: $("#authors"),
      		// author_editor2: req.body.author_editor2,
      		// author_editor3: req.body.author_editor3,
      		// author_editor4: req.body.author_editor4,
      		// author_editor5: req.body.author_editor5,
      		// author_editor6: req.body.author_editor6,
      		artist1: $("#artists")
      		// artist2: req.body.artist2,
      		// artist3: req.body.artist3,      
      		// artist4: req.body.artist4
		}

		submitNewBook(newBook);
	});
});

function submitNewBook(Book) {
    $.post("/api/newBook/", Book, function() {
      console.log(Book);
    });
}