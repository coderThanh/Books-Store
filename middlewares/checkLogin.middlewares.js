// const express = require('express');
const Users = require('../models/user.models');

module.exports.requireLogin = async (req, res, next) => {
    const cookieId = req.signedCookies.userId;
    if(!cookieId) {
        res.redirect('/login');
    }
    const user = await Users.findById(cookieId);
	if(!user) {
		res.redirect('/login');
    }
    
    next();
}