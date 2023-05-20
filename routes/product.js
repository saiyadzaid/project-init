const express = require('express');
const router = express.Router();
router.post('/list', async function _list(req, res, next) {
    const data = await require('../controllers/product/list')(req.body);
    return res.json({ data: data, message: 'request executed successfully' });
});
router.post('/', async function _create(req, res, next) {
    const data = await require('../controllers/product/create')(req.body);
    return res.json({ data: data, message: 'request executed successfully' });
});
router.get('/:id', async function _get(req, res, next) {
    let id = req.params.id;
    const data = await require('../controllers/product/get')(id);
    return res.json({ data: data, message: 'request executed successfully' });
});
router.delete('/:id', async function _delete(req, res, next) {
    let id = req.params.id;
    const data = await require('../controllers/product/deleteById')(id);
    return res.json({ data: data, message: 'request executed successfully' });
});
module.exports = router;