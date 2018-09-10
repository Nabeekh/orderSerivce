const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt-nodejs');

let firstnameLengthChecker = (firstname) => {
    if (!firstname) {
        return false;
    } else if (firstname.length < 3 || firstname.length > 15) {
        return false;
    } else {
        return true;
    }
};

let validFirstname = (firstname) => {
    if (!firstname) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(firstname);
    }
};

const firstnameValidators = [
    {
        validator: firstnameLengthChecker,
        message: 'First name must be at least 5 characters but no more than 10'
    },
    {
        validator: validFirstname,
        message: 'First name must not have any special characters or a number'
    }
];

let lastnameLengthChecker = (lastname) => {
    if (!lastname) {
        return false;
    } else if (lastname.length < 5 || lastname.length > 15) {
        return false;
    } else {
        return true;
    }
};

let validLastname = (lastname) => {
    if (!lastname) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(lastname);
    }
};

const lastnameValidators = [
    {
        validator: lastnameLengthChecker,
        message: 'Last name must be at least 5 characters but no more than 15'
    },
    {
        validator: validLastname,
        message: 'Last name must not have any special characters or a number'
    }
];

let emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else if (email.length < 5 || email.length > 30) {
        return false;
    } else {
        return true;
    }
};

let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};

const emailValidators = [
    {
        validator: emailLengthChecker,
        message: 'E-mail must be at least 5 characters but no more than 30'
    },
    {
        validator: validEmailChecker,
        message: 'Must be a valid e-mail'
    }
];


const ShippingSchema = new Schema({

    order_id: { type: String },
    firstname: { type: String, validate: firstnameValidators },
    lastname: { type: String,  validate: lastnameValidators },
    name: { type: String, lowercase: true },
    company: { type: String },
    address1: { type: String },
    address2: { type: String },
    province: { type: String },
    email: { type: String, lowercase: true, unique: true, validate: emailValidators },
    phone: { type: String, required: false },
    items_total: { type: String, required: false },
    items_shipped: { type: String, required: false },
    shipping_method: { type: String },
    base_cost: { type: String },
    cost_ex_tax: { type: String, required: false },
    cost_inc_tax: { type: String },
    cost_tax: { type: String },
    cost_tax_class_id: { type: String },
    base_handling_cost: { type: String },
    handling_cost_ex_tax: { type: String },
    handling_cost_inc_tax: { type: String },
    handling_cost_tax: { type: String },
    base_handling_tax_class_id: { type: String },
    shipping_zone_id: { type: String },
    shipping_zone_name: { type: String },
    latitude: { type: String },
    longitude: { type: String }
});

// Export Module/Schema  
module.exports = mongoose.model('Shipping', ShippingSchema);