const fs = require('fs');
const path = require('path');
async function generate(moduleName) {
    const rootDir = path.join(path.resolve())

    // list controller
    const listControllerName = 'list';
    const listControllerFunction = `async function ${listControllerName}(params) {
    return {};
}
 module.exports = ${listControllerName};`;


    fs.mkdirSync(path.join(rootDir, 'controllers', moduleName), { recursive: true });
    fs.writeFileSync(path.join(rootDir, 'controllers', moduleName, `${listControllerName}.js`), listControllerFunction);

    // create controller
    const createControllerName = 'create';
    const createControllerFunction = `async function ${createControllerName}(params) {
    return {};
}
 module.exports = ${createControllerName};`;


    fs.mkdirSync(path.join(rootDir, 'controllers', moduleName), { recursive: true });
    fs.writeFileSync(path.join(rootDir, 'controllers', moduleName, `${createControllerName}.js`), createControllerFunction);

    // get controller
    const getControllerName = 'get';
    const getControllerFunction = `async function ${getControllerName}(id) {
    return {};
}
 module.exports = ${getControllerName};`;


    fs.mkdirSync(path.join(rootDir, 'controllers', moduleName), { recursive: true });
    fs.writeFileSync(path.join(rootDir, 'controllers', moduleName, `${getControllerName}.js`), getControllerFunction);

    // deleteById controller
    const deleteControllerName = 'deleteById';
    const deleteControllerFunction = `async function ${deleteControllerName}(id) {
    return {};
}
 module.exports = ${deleteControllerName};`;


    fs.mkdirSync(path.join(rootDir, 'controllers', moduleName), { recursive: true });
    fs.writeFileSync(path.join(rootDir, 'controllers', moduleName, `${deleteControllerName}.js`), deleteControllerFunction);








    // create routes
    const routeName = 'product';
    const createRoute = `const express = require('express');
const router = express.Router();
router.post('/${listControllerName}', async function _list(req, res, next) {
    try {
        const data = await require('../controllers/${routeName}/${listControllerName}')(req.body);
        return res.json({ data: data, message: 'request executed successfully' });    
    } catch (error) {
        next(error);
    }
});
router.post('/', async function _create(req, res, next) {
    try {
        const data = await require('../controllers/${routeName}/${createControllerName}')(req.body);
        return res.json({ data: data, message: 'request executed successfully' });    
    } catch (error) {
        next(error);
    }
});
router.get('/:id', async function _get(req, res, next) {
    try {
        let id = req.params.id;
        const data = await require('../controllers/${routeName}/${getControllerName}')(id);
        return res.json({ data: data, message: 'request executed successfully' });    
    } catch (error) {
        next(error);
    }
});
router.delete('/:id', async function _delete(req, res, next) {
    try {
        let id = req.params.id;
        const data = await require('../controllers/${routeName}/${deleteControllerName}')(id);
        return res.json({ data: data, message: 'request executed successfully' });    
    } catch (error) {
        next(error);
    }
});
module.exports = router;`;

    fs.mkdirSync(path.join(rootDir, 'routes'), { recursive: true });
    fs.writeFileSync(path.join(rootDir, 'routes', `${routeName}.js`), createRoute);
}
module.exports = generate;