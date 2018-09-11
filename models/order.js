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

const OrderSchema = new Schema({

    order_number: { type: String },
    customer_id: { type: String },
    source: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    date_shipped: { type: String },
    status_id: { type: String },
    status: { type: String },
    custom_status: { type: String },
    subtotal_ex_tax: { type: String, required: false },
    subtotal_inc_tax: { type: String, required: false },
    subtotal_tax: { type: String },
    base_shipping_cost: { type: String },
    shipping_cost_ex_tax: { type: String, required: false },
    shipping_cost_tax_class_id: { type: String },
    base_handling_cost: { type: String },
    cost_tax_class_id: { type: String },
    base_handling_cost: { type: String },
    handling_cost_ex_tax: { type: String },
    handling_cost_inc_tax: { type: String },
    handling_cost_tax: { type: String },
    handling_cost_tax_class_id: { type: String },
    base_wrapping_cost: { type: String },
    wrapping_cost_ex_tax: { type: String },
    wrapping_cost_inc_tax: { type: String },
    wrapping_cost_tax_class_id: { type: String },
    cancelled_at: { type: Date },
    cancel_reason: { type: String },
    taxes_included: { type: Boolean },
    subtotal_price: { type: String },
    total_weight: { type: String },
    total_tax: { type: String },
    tax_included: { type: Boolean },
    currency: { type: String },
    financial_status: { type: String },
    confirmed: { type: Boolean },
    total_discounts: { type: String },
    total_line_items_price: { type: String },
    cart_token: { type: String },
    buyer: { type: Boolean },
    name: { type: String },
    referring_site: { type: String },
    landing_site: { type: String },
    cancelled_at: { type: Date },
    cancel_reason: { type: String },
    total_price_usd: { type: String },
    checkout_token: { type: String },
    user_id: { type: String },
    location_id: { type: String },
    source_identifier: { type: String },
    source_url: { type: String },
    processed_at: { type: String },
    device_id: { type: String },
    phone: { type: String },
    customer_locale: { type: String },
    app_id: { type: String },
    browser_ip: { type: String },
    landing_site_ref: { type: String },
    order_number: { type: String },
});

// Export Module/Schema  
module.exports = mongoose.model('Order', OrderSchema);