var db = require('../dbconnection');

var Voiture = {
    getAllVoitures: function(callback) {
        return db.query('Select * from Voiture', callback);
    },
    getVoitureById: function(id, callback) {
        return db.query(
            'select * from Voiture where idVoiture=?',
            [id],
            callback
        );
    },
    addVoiture: function(Voiture, callback) {
        return db.query(
            'Insert into Voiture(idGarage, idMarque, couleur, plaque, model) values(?, ?, ?, ?, ?)',
            [
                Voiture.idGarage,
                Voiture.idMarque,
                Voiture.couleur,
                Voiture.plaque,
                Voiture.model,
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
            'update Voiture set idGarage=?, idMarque=?, couleur=?, plaque=?, model=? where idVoiture=?',
            [
                Voiture.idGarage,
                Voiture.idMarque,
                Voiture.couleur,
                Voiture.plaque,
                Voiture.model,
                id,
            ],
            callback
        );
    },
};
module.exports = Voiture;
