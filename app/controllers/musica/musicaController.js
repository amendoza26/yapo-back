const { getMusicInfo } = require("../../services/musicaService");
const { postFavoritos } = require("../../services/favoritosService")


const getArtista = async (req, res) => {
    try {
        const { artista } = req.body;
        const data = await getMusicInfo(artista)
        const totalAlbum = [...new Set(data.map(album => album.collectionName))]
        const totalCanciones = [...new Set(data.map(canciones => canciones.trackName))]
        const newData = {
            "total_albumes": totalAlbum.length,
            "total_canciones": totalCanciones.length,
            "albumes": totalAlbum,
            "canciones": data
        }

        return res.status(200).json({status: 'Ok', description:'data recibida', data: newData })
    } catch (error) {
        return res.status(500).json({ status: -1, info:'NOK',error: error.message });
    }
}

const postDataFavoritos = async (req, res) => {
    try {
        const { artista, cancionId, usuario, ranking } = req.body;
        const data = await postFavoritos(artista, cancionId, usuario, ranking)
        console.log(data);

        return res.status(200).json({status: 'Ok', description:'agregado a Favoritos', data: data })
    } catch (error) {
        return res.status(500).json({ status: -1, info:'NOK',error: error.message });
    }
}

module.exports = {
    getArtista,
    postDataFavoritos
}