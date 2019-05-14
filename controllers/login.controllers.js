const User =  require('../models/user.models');

module.exports.get = async (req, res, next) => {
    const users = await User.find()

     res.json(users.map(user => user.toJSON()));
}

module.exports.post = async function(req, res) {
	var password = req.body.password;

	var user = await User.findOne({email : req.body.email});

	if (!user) {
		return res.redirect('http://localhost:3000/login');
	}

	if ( user.password !== password) {
		return res.redirect('http://localhost:3000/login');		
	}

	res.cookie('userId', user.id, {signed: true});
    return res.redirect('http://localhost:3000/');
    
};
