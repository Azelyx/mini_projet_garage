var db = require('../dbconnection');

var Marque = {
    getAllMarques: function(callback) {
        return db.query('Select * from Marque', callback);
    },
    getMarqueById: function(id, callback) {
        return db.query(
            'select * from Marque where idMarque=?',
            [id],
            callback
        );
    },
    addMarque: function(Marque, callback) {
        return db.query(
            'Insert into Marque(nomMarque) values(?)',
            [Marque.nomMarque],
            callback
        );
    },
    deleteMarque: function(id, callback) {
        return db.query('delete from Marque where idMarque=?', [id], callback);
    },
    updateMarque: function(id, Marque, callback) {
        return db.query(
            'update Marque set nomMarque=? where idMarque=?',
            [Marque.nomMarque, id],
            callback
        );
    },
};
module.exports = Marque;
