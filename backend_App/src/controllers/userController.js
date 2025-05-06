const User = require('../models/user'); // Ajusta la ruta según tu estructura

exports.getUsers = async (req, res) => {
    console.log('Obteniendo usuarios');
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

exports.createUser = async (req, res) => {
    console.log('Creando usuario:', req.body);
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};
