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

let addressLengthChecker = (address) => {
    if (!address) {
        return false;
    } else if (address.length < 5 || address.length > 50) {
        return false;
    } else {
        return true;
    }
};

let validAddress = (address) => {
    if (!address) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]/);
        return regExp.test(address);
    }
};

const addressValidators = [
    {
        validator: addressLengthChecker,
        message: 'Address must be at least 5 characters but no more than 50'
    },
    {
        validator: validAddress,
        message: 'Address must not have any special characters'
    }
];

const CustomerSchema = new Schema({
    firstname: { type: String, validate: firstnameLengthChecker },
    lastname: { type: String, validate: lastnameValidators },
    email: { type: String, lowercase: true, unique: true, validate: emailValidators },
    phone: { type: String, required: true },
    date_created: { type: Date, default: Date.now() },
    date_modified: { type: Date },
    orders_count: { type: String },
    state: { type: String, required: false },
    total_spent: { type: String, required: false },
    last_order_id: { type: String, required: false },
    note: { type: String, required: false },
    verified_email: { type: Boolean, default: false },
    multipass_identifier: { type: String, required: false },
    registration_ip_address: { type: String, required: false },
    customer_group_id: { type: String },
    notes: { type: String },
    tags: { type: String },
    last_order_name: { type: String },
    tax_exempt: { type: false },
    accepts_marketing: { type: Boolean },
    default_address: [{
        id: { type: String },
        customer_id: { type: String },
        firstname: { type: String },
        lastname: { type: String },
        name: { type: String },
        company: { type: String },
        address1: { type: String, validate: addressValidators },
        address2: { type: String, validate: addressValidators },
        city: { type: String },
        province: { type: String },
        province_code: { type: String },
        country: { type: String },
        country_iso2: { type: String },
        zip: { type: String },
        phone: { type: String },
        default: { type: String },
    }]
});

module.exports = mongoose.model('Customer', CustomerSchema);
