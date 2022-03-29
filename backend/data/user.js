import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Bloggs',
    password: bcrypt.hashSync('123456', 10),
    email: 'jbloggs@example.com',
  },
  {
    name: 'Foo Bar',
    password: bcrypt.hashSync('123456', 10),
    email: 'fbar@example.com',
  },
];


export default users;