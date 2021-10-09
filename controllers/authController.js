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
                res.status(400).send({ message: 'Wrong email or password1.' });
            }
        } else {
            res.status(400).send({ message: "Wrong email or password2." });
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
            res.status(400).send({ message: 'email already exist, please choose another email' })
        } else {
            const hashedPwd = await bcrypt.hash(req.body.password, 10);
            const createdUser = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                age: req.body.age,
                role: req.body.role,
                password: hashedPwd,
            });
            res.json({ message: 'register Successfully' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//reset password contoller
exports.changePassword = async (req, res) => {
    const { resetlink, newPass } = req.body
    try {
        if (resetlink) {
            jwt.verify(resetlink, process.env.RESET_PASSWORD_KEY, async (err, decodedData) => {
                if (err) {
                    res.status(400).json({ message: 'invalid token or it is expired' })
                }
                const user = await User.findOne({ resetlink })

                const hashedPwd = await bcrypt.hash(newPass, 10);
                user.password = hashedPwd;
                user.resetlink = '';
                await user.save();
                res.status(200).json({ message: "your password has been changed" })
            })
        } else {
            res.status(400).json({ message: "reset link is expired" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server error Occured" });
    }
}

//change password controller
exports.resetPassword = async (req, res) => {
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
            html: ejs.render(content, { token, name, email })
        };

        const info = await transporter.sendMail(mailData);
        user.resetlink = token;
        await user.save();
        res.send({ message: "check your Mail", message_id: info.messageId });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
