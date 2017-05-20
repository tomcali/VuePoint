module.exports = function(sequelize, DataTypes) {
	var Author = sequelize.define("authors", {
		author: {
			type: DataTypes.STRING	
			
		}, 
		biography: {
			type: DataTypes.STRING
			
		}
	}, {
		timestamps: false
	});
	return Author;
};
		