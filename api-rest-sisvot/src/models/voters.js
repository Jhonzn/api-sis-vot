const mongoose = require("mongoose");

const votersSchema = new mongoose.Schema({
    
    nombre: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(nombre) {
                return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,}$/.test(nombre);
            },
            message: 'El nombre solo puede contener letras y espacios'
        },
        trim: true},
        email: { 
        type: String, 
        required: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: 'El formato del email no es válido'
        }
    },
    has_voted: { type: Boolean, default: false }

});

module.exports = mongoose.model("voters", votersSchema)