const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add the email "]
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"]
    }
}, {
    timestamps: true,
})

const ContactDetail = mongoose.model("Contacts", contactSchema)
module.exports = ContactDetail