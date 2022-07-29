const { Router } = require('express');
const usersController = require('../controllers/lk.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');

const lkRouter = Router();

/// ----- пользователи-------///

lkRouter.get('/allusers', usersController.getAllUsers);// админ
lkRouter.route('user/:id')
  .patch(checkAuth, checkAuthor, usersController.editUser)
  .get(checkAuth, usersController.getUser)
  .delete(checkAuth, usersController.deleteUser);

/// / ---- аккауны ---///

lkRouter.post('/newacc', checkAuth, usersController.createAcc);
lkRouter.get('/myaccs', usersController.getAllAcc);
lkRouter.delete('/acc/:id', checkAuth, usersController.deleteAcc);
lkRouter.patch('/myaccs/:id', checkAuth, usersController.editAcc);
lkRouter.get('/allaccs', usersController.getAllAccAdm);
lkRouter.patch('/allaccs/:id', checkAuth, usersController.editAccAdm);

module.exports = lkRouter;
