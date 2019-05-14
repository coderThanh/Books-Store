const express = require('express');
const Users = require('../models/user.models');

module.exports.requireLogin = async (req, res, next) => {
    const cookieId = req.signedCookies.userId;
    if(!cookieId) {
        return res.redirect('http://localhost:3000/login');
        
    }
    const user = await Users.findById(cookieId);
	if(!user) {
		return res.redirect('http://localhost:3000/login');
    }
    
    next();
}