module.exports = function(sequelize, DataTypes) {
	var Artist = sequelize.define("artist", {
		artist: {
			type: DataTypes.STRING	
			
		}, 
		biography: {
			type: DataTypes.STRING
			
		}
	});
	return Artist;
};
			