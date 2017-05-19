module.exports = function(sequelize, DataTypes) {
	var Book = sequelize.define("book", {
		title: {
			type: DataTypes.STRING
			
			
		}, 
		version: {
			type: DataTypes.STRING
			
		},
		description: {
			type: DataTypes.STRING
			
			
		},
		pagecnt: {
			type: DataTypes.INTEGER
		},
		ISBN10: {
			type: DataTypes.INTEGER
		},
		ISBN13: {
			type: DataTypes.INTEGER
		},
		price: {
			type: DataTypes.INTEGER,
		},
		coverart: {
			type: DataTypes.TEXT
		},
		aboutcover: {
			type: DataTypes.TEXT
		},
		outofprint: {
			type: DataTypes.TEXT
		},
		role: {
			type: DataTypes.TEXT,
		},
		author_editor1: {
			type: DataTypes.TEXT,
		},
		author_editor2: {
			type: DataTypes.TEXT,
		},
		author_editor3: {
			type: DataTypes.TEXT,
		},
		author_editor4: {
			type: DataTypes.TEXT,
		},
		author_editor5: {
			type: DataTypes.TEXT,
		},
		author_editor6: {
			type: DataTypes.TEXT,
		},
		artist1: {
			type: DataTypes.TEXT,
		},
		artist2: {
			type: DataTypes.TEXT,
		},
		artist3: {
			type: DataTypes.TEXT,
		},
		artist4: {
			type: DataTypes.TEXT,
		}
	});
	return Book;
};