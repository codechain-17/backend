// const logger = require("../helpers/pino.js");
// const moment = require("moment");
import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import passport from "passport";
// const { isAuth } = require("../middlewares/auth.js");
// const { checkout } = require("../config/checkout.js")
// const {
//   sendMailEthereal
// } = require("../helpers/nodemailer.js"); 

async function getUserController(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json("not logged");
  }
}

async function registerLocalController(req, res) {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        github: req.body.github,
        linkedin: req.body.linkedin,
        portfolio: req.body.portfolio,
        knowledgeareas: req.body.knowledgeareas,
        password: hashedPassword,
        gender: req.body.gender
      });
      await newUser.save();
      res.send("User Created");

    //   const infoEthereal = await sendMailEthereal({
    //     to: "antoinette.stokes99@ethereal.email",
    //     subject: `new register: "${newUser.username}"`,
    //     html: `User: '${newUser.username}' register at ${moment().format(
    //       "DD/MM/YYYY h:mm:ss a"
    //     )}`,
    //   });
    //   logger.info(infoEthereal);
    }
  });
}

async function loginLocalController(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, async (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
}

async function logoutController(req, res) {
  req.logout();
  res.redirect("/");
}

export {
  getUserController,
  registerLocalController,
  loginLocalController,
  logoutController
};