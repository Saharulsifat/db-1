const express = require('express');
const router = express.Router();
const bolgcontroller = require('../controllers/blogController');
const commentController = require('../controllers/commentController');
const massageController = require('../controllers/messageController');
const protfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');

//blog controlller
router.get('/blog-create', bolgcontroller.create);
router.get('/blog-read', bolgcontroller.read);
router.get('/bolg-update', bolgcontroller.update);
router.get('/bolg-delete', bolgcontroller.delete);
//comment controller
router.get('/comment-create', commentController.create);
router.get('/comment-read', commentController.read);
router.get('/comment-update', commentController.update);
router.get('/comment-delete', commentController.delete);
//massage controller
router.get('/massage-create', massageController.create);
router.get('/massage-read', massageController.read);
router.get('/massage-update', massageController.update);
router.get('/massage-delete',massageController.delete);
//protfoio controller
router.get('/protfolio-create', protfolioController.create);
router.get('/protfolio-read', protfolioController.read);
router.get('/protfolio-update', protfolioController.update);
router.get('/protfolio-delete', protfolioController.delete);
//product controller
router.get('/product-create', productController.create);
router.get('/product-read', productController.read);
router.get('/product-update', productController.update);
router.get('/product-delete', productController.delete);

module.exports = router;