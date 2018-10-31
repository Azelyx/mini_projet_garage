var db = require('../dbconnection');

var Voiture = {
    getAllVoitures: function(callback) {
        return db.query(
            'Select idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d-%m-%Y") as dateImmat, km  from Voiture, Marque where Voiture.idMarque = Marque.idMarque',
            callback
        );
    },
    getAllwithoutGarage: function(callback) {
        return db.query(
            'Select Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d-%m-%Y") as dateImmat, km  from Voiture, Marque where Voiture.idMarque = Marque.idMarque and idGarage IS NULL',
            callback
        );
    },
    getVoitureById: function(id, callback) {
        return db.query(
            'select idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d-%m-%Y") as dateImmat, km from Voiture, Marque where Voiture.idMarque = Marque.idMarque where idVoiture=?',
            [id],
            callback
        );
    },
    getVoitureByGarageId: function(id, callback) {
        return db.query(
            'select idGarage, Marque.idMarque, Marque.nomMarque, couleur, plaque, model, Date_Format(dateImmat,"%d-%m-%Y") as dateImmat, km from Voiture, Marque where idGarage=? and Voiture.idMarque = Marque.idMarque',
            [id],
            callback
        );
    },
    addVoiture: function(Voiture, callback) {
        return db.query(
            'Insert into Voiture(idGarage, idMarque, couleur, plaque, model, dateImmat, km) values(?, ?, ?, ?, ?)',
            [
                Voiture.idGarage,
                Voiture.idMarque,
                Voiture.couleur,
                Voiture.plaque,
                Voiture.model,
                Voiture.dateImmat,
                Voiture.km,
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
            'update Voiture set idGarage=?, idMarque=?, couleur=?, plaque=?, model=?, dateImmat=?, km=? where idVoiture=?',
            [
                Voiture.idGarage,
                Voiture.idMarque,
                Voiture.couleur,
                Voiture.plaque,
                Voiture.model,
                Voiture.dateImmat,
                Voiture.km,
                id,
            ],
            callback
        );
    },
};
module.exports = Voiture;
