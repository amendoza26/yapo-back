const axios = require('axios');
const cache = require('memory-cache')

const getMusicInfo = async (artista) => {
    try {
        const cachedData = cache.get(artista)
        if (cachedData) {
            return cachedData
        }

        const itunes = `https://itunes.apple.com/search?term=${encodeURIComponent(artista)}&limit=25`
        const res = await axios.get(itunes)
        const data = res.data.results
        const filteredResults = await data.filter(result => result.artistName === artista);

        cache.put(artista, data, 3600 * 1000)

        const cacheData = cache.get(artista);
        if (cacheData) {
            console.log(`Los datos para la consulta ${artista} están en caché: ${cacheData}`);
        } else {
            console.log("Los datos para la consulta ${artista} no están en caché.");
        }

        return filteredResults
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    getMusicInfo
}