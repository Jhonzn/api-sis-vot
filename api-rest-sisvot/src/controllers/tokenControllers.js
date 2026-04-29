const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

exports.generate_token = async (req, res) => {

    const testUser = {
        id: 1,
        name: "Usuario de Prueba",
        email: "test@example.com",
        role: "admin"
    };
    const token = jwt.sign(testUser, JWT_SECRET, { expiresIn: '24h' });
    res.json({
        message: "Token para pruebas en Postman",
        token: token,
        user: testUser
    });
};
