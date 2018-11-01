var db = require('../dbconnection');

var Garage = {
	getAllGarages: function(callback) {
		return db.query('Select * from Garage', callback);
	},
	getGarageById: function(id, callback) {
		return db.query(
			'select * from Garage where idGarage=?',
			[id],
			callback
		);
	},
	addGarage: function(Garage, callback) {
		return db.query(
			'Insert into Garage(nomGarage,cpGarage,villeGarage,adresseGarage,telGarage,mailGarage,nbVoitureMax) values(?,?,?,?,?,?,?)',
			[
				Garage.nomGarage,
				Garage.cpGarage,
				Garage.villeGarage,
				Garage.adresseGarage,
				Garage.telGarage,
				Garage.mailGarage,
				Garage.nbVoitureMax,
			],
			callback
		);
	},
	deleteGarage: function(id, callback) {
		return db.query('delete from Garage where idGarage=?', [id], callback);
	},
	updateGarage: function(id, Garage, callback) {
		return db.query(
			'update Garage set nomGarage=?,cpGarage=?,villeGarage=?,adresseGarage=?,telGarage=?,mailGarage=?,nbVoitureMax=? where idGarage=?',
			[
				Garage.nomGarage,
				Garage.cpGarage,
				Garage.villeGarage,
				Garage.adresseGarage,
				Garage.telGarage,
				Garage.mailGarage,
				Garage.nbVoitureMax,
				id,
			],
			callback
		);
	},
};
module.exports = Garage;
