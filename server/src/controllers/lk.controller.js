const { Account, User } = require('../../db/models');

/// -------- изменение своего пользователя -------///

const editUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedUser] = await User.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

/// -------- инфо пользователя, который зашел -------///

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUser = await User.findByPk(id);
    setTimeout(() => {
      res.json(currentUser);
    }, 2e3);
  } catch (error) {
    res.sendStatus(500);
  }
};

/// / ---- изменение аккаунта ---- ///

const editAcc = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedUser] = await Account.update(updatedFields, {
        where: { id: req.params },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

/// -------- все аккаунты одного пользователя -------///

const getAllAcc = async (req, res) => {
  const { id } = req.session.user;
  try {
    const allAccounts = await Account.findAll({ where: { user_id: id } });
    return res.json(allAccounts);
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// ------- создание аккаунта ------///

const createAcc = async (req, res) => {
  const { id } = req.params;
  try {
    const { acname, pass } = await req.body;
    const newAcc = await Account.create({
      ac_name: acname, pass, user_id: id, status: true,
    });
    return res.json({ newAcc });
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// -----------удаление аккаунта -------///

const deleteAcc = async (req, res) => {
  const { id } = req.params;
  try {
    await Account.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// ----------чисто админ -----------///

/// ----- все пользователи ------///

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// --------изменение пользователей-------////

const adminEditUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedUser] = await User.update(updatedFields, {
        where: { id: req.params },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

/// -----------удаление пользователя -------///

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// -----------все аккаунты всех юзеров -------///

const getAllAccAdm = async (req, res) => {
  const { id } = req.params;
  try {
    const allAccounts = await Account.findAll({ where: { user_id: id } });
    return res.json(allAccounts);
  } catch (error) {
    return res.sendStatus(500);
  }
};

/// ------------ редактирование аккаунтом админом -------//

const editAccAdm = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedUser] = await Account.update(updatedFields, {
        where: { id: req.params },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

module.exports = {
  editUser, //
  editAcc, //
  getUser, //
  getAllUsers, //
  getAllAcc, //
  createAcc, //
  deleteAcc, //
  deleteUser, //
  getAllAccAdm, //
  editAccAdm, //
  adminEditUser, //
};
