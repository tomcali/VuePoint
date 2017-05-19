module.exports = function(sequelize, DataTypes) {
	var Author = sequelize.define("author", {
		author: {
			type: DataTypes.STRING	
			
		}, 
		biography: {
			type: DataTypes.STRING
			
		}
	});
	return Author;
};
		