var db = require('../dbconnection');

var Voiture = {
	getAllVoitures: function(callback) {
		return db.query(
			'Select idVoiture, idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d/%m/%Y") as dateImmat, km, prix  from Voiture, Marque where Voiture.idMarque = Marque.idMarque',
			callback
		);
	},
	getAllwithoutGarage: function(callback) {
		return db.query(
			'Select idVoiture, idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d/%m/%Y") as dateImmat, km, prix  from Voiture, Marque where Voiture.idMarque = Marque.idMarque and idGarage IS NULL',
			callback
		);
	},
	getVoitureById: function(id, callback) {
		return db.query(
			'select idVoiture, idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d/%m/%Y") as dateImmat, km, prix from Voiture, Marque where Voiture.idMarque = Marque.idMarque where idVoiture=?',
			[id],
			callback
		);
	},
	getVoitureByGarageId: function(id, callback) {
		return db.query(
			'select idVoiture, idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d/%m/%Y") as dateImmat, km, prix from Voiture, Marque where idGarage=? and Voiture.idMarque = Marque.idMarque',
			[id],
			callback
		);
	},
	addVoiture: function(Voiture, callback) {
		return db.query(
			'Insert into Voiture(idGarage, idMarque, couleur, plaque, model, dateImmat, km, prix) values(?, ?, ?, ?, ?, ?, ? , ?)',
			[
				Voiture.idGarage,
				Voiture.idMarque,
				Voiture.couleur,
				Voiture.plaque,
				Voiture.model,
				Voiture.dateImmat,
				Voiture.km,
				Voiture.prix,
			],
			callback
		);
	},
	deleteVoiture: function(id, callback) {
		return db.query(
			'delete from Voiture where idVoiture=?',
			[id],
			callback
		);
	},
	updateVoiture: function(id, Voiture, callback) {
		return db.query(
			'update Voiture set idGarage=?, couleur=?, plaque=?,  km=?, prix=? where idVoiture=?',
			[
				Voiture.idGarage,
				Voiture.couleur,
				Voiture.plaque,
				Voiture.km,
				Voiture.prix,
				id,
			],
			callback
		);
	},
};
module.exports = Voiture;
