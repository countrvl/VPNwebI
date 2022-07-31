const { Router } = require('express');
const usersController = require('../controllers/lk.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');

const lkRouter = Router();

/// ----- пользователи-------///

lkRouter.route('/allusers')
  .get(checkAuth, usersController.getAllUsers);// админ

lkRouter.route('allusers/:id')
  .get(checkAuth, usersController.adminEditUser);

lkRouter.route('/user/:id')
  .patch(checkAuth, checkAuthor, usersController.editUser)
  .get(checkAuth, usersController.getUser)
  .delete(checkAuth, usersController.deleteUser);

/// / ---- аккауны ---///

lkRouter.post('/newacc', checkAuth, usersController.createAcc);
lkRouter.get('/myaccs', usersController.getAllAcc);
lkRouter.delete('/acc/:id', checkAuth, usersController.deleteAcc);
lkRouter.patch('/myaccs/:id', checkAuth, usersController.editAcc);
lkRouter.get('/allaccs/:id', checkAuth, usersController.getAllAccAdm);
lkRouter.patch('/allaccs/:id', checkAuth, usersController.editAccAdm);

module.exports = lkRouter;
