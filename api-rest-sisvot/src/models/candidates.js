const mongoose = require("mongoose");

const candidatesSchema = new mongoose.Schema({
    
    name: { 
        type: String, 
        required: true, 
        validate: {
            validator: function(nombre) {
                return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,}$/.test(nombre);
            },
            message: 'El nombre solo puede contener letras y espacios'
        },
        trim: true
    },
    party: { 
        type: String, 
        required: false,
        validate: {
            validator: function(partido) {
                return /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{2,}$/.test(partido);
            },
            message: 'El partido solo puede contener letras, números y espacios'
        }

    },
    votes: { type: Number, default: 0}

});

module.exports = mongoose.model("candidates", candidatesSchema)