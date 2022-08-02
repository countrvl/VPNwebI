const fs = require('fs').promises;

const path = '/Users/artemkulikov/Desktop/VPNwebI/server/db/etc/ppp/chap-secrets';

// read file for admin
const adminReadFile = async () => {
  await fs.readFile(path, 'utf8');
};

// update file for admin
const adminUpdateFile = async (arr) => {
  arr.forEach(async (obj) => {
    await fs.appendFile(path, `"${obj.ac_name}" l2tpd "${obj.pass}" *\n`);
  });
};

// delete one line
const adminDeleteOneLine = async (arr) => {
  arr.forEach(async (obj) => {
    const data = await fs.readFile(path, 'utf8');
    const array = data.split('\n').filter((el) => !el.includes(obj.ac_name)).join('\n');
    await fs.writeFile(path, array);
  });
};

// change users name and password
const adminChangeUserData = async (name, newName, newPassword) => {
  const data = await fs.readFile(path, 'utf8');
  const arr = data.split('\n').map((el) => (el.includes(name) ? `"${newName}" l2tpd "${newPassword}" *` : el)).join('\n');
  await fs.writeFile(path, arr);
};

module.exports = {
  adminReadFile,
  adminUpdateFile,
  adminDeleteOneLine,
  adminChangeUserData,

};
