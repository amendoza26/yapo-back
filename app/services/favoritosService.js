const { Favoritos } = require('../models/favoritosModel')

const postFavoritos = async (artista, cancionId, usuario, ranking) => {
    try {
        let favoritos = await Favoritos.findOne({ cancion_id: cancionId })
        let msg = ''
        if(favoritos !== null){
            return msg = "Cancion existente en favoritos"
        }

        favoritos = new Favoritos({
            nombre_banda: artista,
            cancion_id: cancionId,
            usuario: usuario,
            ranking
        })

        await favoritos.save()
        return msg ="cancion añadida a favoritos";

    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    postFavoritos
}