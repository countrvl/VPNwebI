const fs = require('fs').promises;

const path = '/home/stanislav/Рабочий стол/Elbrus bootcamp - Tiger 2022/phase 3/week 3/VPNwebI/server/db/etc/ppp/chap-secrets';

// read file for admin
const adminReadFile = async () => {
  const data = await fs.readFile(path, 'utf8');
  console.log(typeof data);

  return data;
};

// adminReadFile();

// update file for admin
// const userName = 'testname7';
// const userPassword = 'testpass7';

const user = 'pupkin';
const myPassword = 'password';

const adminUpdateFile = async (name, password) => {
  await fs.appendFile(path, `"${name}" l2tpd "${password}" *\n`);
  // console.log('appdate is ok. Your file:');
  // console.log(adminReadFile());
};

adminUpdateFile(user, myPassword);

// delete one line
const adminDeleteOneLine = async (name) => {
  const data = await fs.readFile(path, 'utf8');
  const arr = data.split('\n').filter((el) => !el.includes(name)).join('\n');
  await fs.writeFile(path, arr);
  // console.log(adminReadFile());
  return console.log(arr);
};

// adminDeleteOneLine(user);

// change users name and password
const adminChangeUserData = async (name, newName, newPassword) => {
  const data = await fs.readFile(path, 'utf8');
  const arr = data.split('\n').map((el) => (el.includes(name) ? `"${newName}" l2tpd "${newPassword}" *` : el)).join('\n');
  await fs.writeFile(path, arr);
  return console.log(arr);
};

// adminChangeUserData(user, userName, userPassword);

module.exports = {
  adminReadFile, adminUpdateFile, adminDeleteOneLine, adminChangeUserData,
};
