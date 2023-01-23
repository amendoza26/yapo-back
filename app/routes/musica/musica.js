const { musicaController } = require('../../controllers');

const router = require('express').Router();

router.post('/', musicaController.getArtista);
router.post('/favoritos', musicaController.postDataFavoritos);

module.exports = router