const mongoose = require('mongoose');

const FavoritosSchema = mongoose.Schema({
    nombre_banda: { type: String, required: true },
    cancion_id: { type: Number, required: true },
    usuario: { type: String, required: true },
    ranking: { type: String, required: true }
})

const Favoritos = mongoose.model("Favoritos", FavoritosSchema)

module.exports = { Favoritos }