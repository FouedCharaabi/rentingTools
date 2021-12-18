const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
	{
		username: { type: String, unique: true },
		fullname: String,
		adrress: String,
		connected: { type: Boolean, default: false },
		email: {
			type: String,
			unique: true,
		},
		phone_number: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			minlength: [8, "Minimum password length is 8 characters"],
		},
		fav_category: Array,

		profile_image_uri: { type: String, default: "" },
		verified: { type: Boolean, default: true },
	},
	{ timestamps: true, versionKey: false }
);
userSchema.pre('save', function(next){
    var user = this;
    bcrypt.genSalt(10,function(err, salt){
        if(err) return next(err)
        bcrypt.hash(user.password, salt,function(err, hash){
            if(err) return next(err)
            user.password = hash;
            next()
        })
    })
}
)

module.exports = mongoose.model("User", userSchema);
