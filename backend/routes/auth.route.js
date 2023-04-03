// const router = require('express').Router();
// const bcrypt = require('bcrypt');
// const { Admin } = require('../db/models');

// router.post('/sign-up', async (req, res) => {
//   try {
//     const { email, password, password2 } = req.body;

//     if (password !== password2) {
//       return res.json({ message: 'Пароли не совпадают' });
//     }
//     if (email && password && password2) {
//       let admin = await Admin.findOne({ where: { email } });
//       if (!admin) {
//         const hash = await bcrypt.hash(password, 10);
//         const newAdmin = await Admin.create({
//           email,
//           password: hash,
//           status: false,
//         });
//         admin = {
//           id: newAdmin.id,
//           email: newAdmin.email,
//         };
//         req.session.adminid = admin.id;
//         res.status(201).json(admin);
//       } else {
//         res.status(403).json({ message: 'Такой email уже существует' });
//       }
//     } else {
//       res.status(403).json({ message: 'Заполните все поля' });
//     }
//   } catch ({ message }) {
//     res.json(message);
//   }
// });

// router.post('/sign-in', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (email && password) {
//       let admin = await Admin.findOne({ where: { email } });
//       if (user && (await bcrypt.compare(password, admin.password))) {
//         admin = {
//           id: admin.id,
//           email: admin.email,
//         };
//         req.session.adminid = admin.id;
//         res.status(201).json(admin);
//       } else {
//         res.status(403).json({ message: 'Неверный email или пароль' });
//       }
//     } else {
//       res.status(403).json({ message: 'Заполните все поля' });
//     }
//   } catch ({ message }) {
//     res.status(500).json(message);
//   }
// });

// router.get('/verification', async (req, res) => {
//   const adminId = req.session.adminid;
//   if (adminId) {
//     const admin = await Admin.findOne({
//       where: { id: adminId },
//       attributes: { exclude: ['password'] },
//     });
//     res.json(admin);
//   } else {
//     res.json({ message: 'no session' });
//   }
// });

// router.get('/logout', (req, res) => {
//   try {
//     req.session.destroy((err) => {
//       if (err) {
//         return res.status(400).json({ message: 'Ошибка удаления сессии' });
//       }
//       res.clearCookie('admin_sid').json({ message: 'ok' });
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
