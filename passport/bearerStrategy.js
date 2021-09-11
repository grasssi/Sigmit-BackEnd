const passport = require('passport')
const jwt = require('jsonwebtoken')
const BearerStrategy = require('passport-http-bearer').Strategy
const user = require('../models/userShema')


passport.use(new BearerStrategy(
     (token, done) =>{
        User.findOne({ token: token },  (err, user) => {
            console.log('token=',token)
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));