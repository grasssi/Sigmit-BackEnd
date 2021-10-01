const jwt = require('jsonwebtoken');
// require model
const User = require('../models/userShema')
// require the lodash
const _ = require('lodash')
//  require bcrypt and create the salt
const bcrypt = require('bcrypt');
//require nodemailer
const nodemailer = require('nodemailer');

const path = require('path');
const fs = require('fs');
const ejs = require('ejs')
//Create the transporter
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
                res.send({ message: 'Wrong email or password1.' });
            }
        } else {
            res.send({ message: "Wrong email or password.2" });
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
            console.log(req.body.password);
            const hashedPwd = await bcrypt.hash(req.body.password, 10);
            console.log(hashedPwd);
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
//forgot password controller
exports.forgotPassword_v2 = async (req, res) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "email does not exist" })
        }
        const token = jwt.sign({ _Id: user._id, }, process.env.RESET_PASSWORD_KEY, { expiresIn: process.env.JWT_EXPIRE });
        const data = {
            to: email,
            from: 'passwordreset@demo.com',
            subject: 'Node.js Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n'
                + process.env.CLIENT_URL + '/' + token + '\n\n' +
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
                        res.json({ message: 'html send' });
                });
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
    }
}
//reset password contoller
exports.resetPassword = async (req, res) => {
    const { resetlink, newPass } = req.body
    try {
        if (resetlink) {
            jwt.verify(resetlink, process.env.RESET_PASSWORD_KEY, (err, decodedData) => {
                if (err) {
                    return res.status(401).json({ error: 'invalid token or it is expired' })
                }
                User.findOne({ resetlink }, (err, user) => {
                    if (err || !user) {
                        console.log(err)

                        return res.status(400).json({ error: "user with this token does not exist" })
                    }
                    const obj = {
                        password: newPass,
                        resetlink: ''
                    }
                    user = _.extend(user, obj);
                    user.save((err, result) => {
                        if (err) {
                            return res.status(400).json({ error: "reset password error" })
                        }
                        return res.status(200).json({ message: "your password has been changed" })
                    })
                })
            })
        } else {
            return res.status(401).json({ error: "Authentication error" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "email does not exist" })
        }
        const token = jwt.sign({ _Id: user._id, }, process.env.RESET_PASSWORD_KEY, { expiresIn: process.env.JWT_EXPIRE });
        const name = user.firstName;
        // 1. read template path 
        const templatePath = path.resolve('./mail_templates', 'Notification_v2.html');
        // 2. read template content 
        const content = fs.readFileSync(templatePath, { encoding: 'utf-8' });

        const mailData = {
            from: 'AngularGrassi@gmail.com',
            to: email,
            subject: 'subject',
            html: ejs.render(content, { token,name,email })
        };

        const info = await transporter.sendMail(mailData);
        res.send({ message: "html send", message_id: info.messageId });
        return user.updateOne({ resetlink: token }, async (err, success) => {
            try {
                {
                    const info = await transporter.sendMail(data, (error, body) => {
                        if (error) {
                            return res.json({ error: err.message })
                        } else
                            res.json({ message: 'html send' });
                    });
                }
            }
            catch (err) {
                console.log(err);
                return res.status(400).json({ error: "reset password link error" })
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
