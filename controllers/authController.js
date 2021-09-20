const jwt = require('jsonwebtoken');
// require model
const User = require('../models/userShema')
//  require bcrypt and create the salt
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});


// login controller
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const compaire = await bcrypt.compare(req.body.password, user.password);
            if (compaire) {
                //  create of jwt token 
                const tokenData = {
                    userId: user._id,
                    email: user.email,
                    role: user.role
                }
                const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
                res.send({ message: 'Auth Successfully', token: token });
            } else {
                res.send({ message: "Wrong email or password." });
            }
        } else {
            res.send({ message: "Wrong email or password." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
    }
}

// register controller 
exports.register = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email });
        if (userFound) {
            res.send({ message: 'email already exist, please choose another email' })
        } else {
            const hashedPwd = await bcrypt.hash(req.body.password, 10);
            const createdUser = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                age: req.body.age,
                password: hashedPwd,
            });
            res.json(createdUser);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.forgotPassword = async (req, res) => {
    const { email } = req.body
    console.log(email)
    console.log(req.body.email)

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "email does not exist" })
        }
        const tokenData = {
            _Id: user._id,
        }
        const token = jwt.sign({ tokenData }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
        const data = {
            to: email,
            from: 'passwordreset@demo.com',
            subject: 'Node.js Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n'
                 + process.env.CLIENT_URL + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        return user.updateOne({ resetlink: token }, async (err, success) => {
            if (err) {
                return res.status(400).json({ error: "reset password link error" })
            } else {
                const info = await transporter.sendMail(data, (error, body) => {
                    if (error) {
                        return res.json({ error: err.message })
                    } else
                        res.json({ message: 'html send'});
                });
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
    }
}
