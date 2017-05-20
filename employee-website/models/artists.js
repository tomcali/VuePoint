module.exports = function(sequelize, DataTypes) {
	var Artist = sequelize.define("artists", {
		artist: {
			type: DataTypes.STRING	
			
		}, 
		biography: {
			type: DataTypes.STRING
			
		}
	}, {
		timestamps: false
	});
	return Artist;
};
			