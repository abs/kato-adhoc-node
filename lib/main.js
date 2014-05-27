module.exports.setInfo = function(options, res) {
	var jwt = require('jwt-simple');
    var payload = {
		exp : Math.round((new Date().getTime() / 1000)) + options.exp,
		user_id : options.user_id,
		user_name : options.user_name,
		room_id : options.room_id,
		room_name : options.room_name,
        user_email: options.user_email,
        welcome_text: options.welcome_text,
        welcome_robot_name: options.welcome_robot_name
	};

    if(options.user_email == '') {
        delete options.user_email;
    }

    if(options.welcome_text == '') {
        delete options.welcome_text;
    }

    if(options.welcome_robot_name == '') {
        delete options.welcome_robot_name;
    }

	token = jwt.encode(payload, options.secret_key);

    res.cookie('KATO_ADHOC_TOKEN', token);
};

module.exports.unset = function(res) {
    res.clearCookie('KATO_ADHOC_TOKEN');
};
