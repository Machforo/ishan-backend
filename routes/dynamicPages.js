const express = require('express');
const router = express.Router();
const dynamicPageController = require('../controllers/dynamicPageController');

router.get('/', dynamicPageController.getPages);
router.get('/:portal/:slug', dynamicPageController.getPageBySlug);
router.post('/', dynamicPageController.createPage);
router.put('/:id', dynamicPageController.updatePage);
router.delete('/:id', dynamicPageController.deletePage);

module.exports = router;
