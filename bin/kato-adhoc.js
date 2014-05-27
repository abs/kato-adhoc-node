module.exports = function(options){
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

	return jwt.encode(payload, options.sKey);
}