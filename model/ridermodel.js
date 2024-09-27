const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true, 
        trim: true     
    },

    location: {
        type: {
            type: String,      
            enum: ['Point'],   
            required: true
        },
        coordinates: {
            type: [Number],   
            required: true
        }
    }
}, {
    timestamps: true 
});

riderSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Rider', riderSchema);
