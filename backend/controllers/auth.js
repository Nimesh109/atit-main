//Importing register schema from models folder.
const registerModel = require("../models/register");

const { v4: uuidv4 } = require("uuid");

//Importing bcrypt to hash the password.
const bcrypt = require("bcryptjs");

//Importing jwt to create a token.
const jwt = require("jsonwebtoken");

//Importing nodemailer for sending mail.
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  try {
    //Destructuring the object.
    const { name, email, number, password, role } = req.body;

    //Creating user id.
    const uid = uuidv4();

    if (name && email && number && password && role) {
      //Hashing the password.
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      //Creating a token.
      const token = jwt.sign(
        { userId: uid, name, email, number, role, password: hash },
        "jwtsecret",
        {
          expiresIn: "120s",
        }
      );

      //Creating a medium to send email.
      let transporter = nodemailer.createTransport({
        //Domain name.
        service: "hotmail",
        auth: {
          //Your email
          user: `${process.env.EMAIL}`,
          //Your password
          pass: `${process.env.PASSWORD}`,
        },
      });

      //Contents of email.
      let mailConfiguration = await transporter.sendMail({
        from: `${process.env.EMAIL}`,
        to: `${email}`,
        subject: "Email verifications",
        html: `<h3>Hi! There, You have recently visited
      our website and entered your email.
      Please follow the given link to verify your email
      http://localhost:8000/api/verify/${token}
      Thanks</h3>`,
      });

      //Sending message to user email for verification.
      transporter.sendMail(mailConfiguration, (error, result) => {
        //If not successful.
        if (error) {
          throw new CustomAPIError("Email not send");
        } else {
          //If successful.
          console.log("Sent: " + info.response);
        }
      });
      return res.send("Sucess");
    }
    res.send("Unsucessfull");
  } catch (error) {
    console.log(error);
  }
};

const verify = async (req, res) => {
  try {
    //Decoding the token with secret key and token.
    let decoded = await jwt.verify(req.params.id, "jwtsecret");

    res.cookie("signedIn", true);

    //Storing decoded value in database.
    await registerModel.create({ ...decoded });

    res.redirect(`http://localhost:3000/login`);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check if user email exist in database.
    const checkEmail = await registerModel.findOne({ email });

    if (!checkEmail) {
      return res.json({ data: "Unsucessfull" });
    }

    //Checking if password matches with database password.
    const checkIfPassMatch = await bcrypt.compare(
      password,
      checkEmail.password
    );
    //If password matches.
    if (checkIfPassMatch) {
      const checkUserId = await registerModel.findOne({ email });

      res.cookie("signedIn", true, {
        maxAge: 150000000,
        signed: true,
      });
      res.cookie("userId", checkUserId.userId, {
        maxAge: 150000000,
        signed: true,
      });
      return res.json({ data: "sucess", role: checkUserId.role });
    }
    //If not.
    return res.json({ data: "Unsucessfull" });
  } catch (error) {
    console.log(error);
  }
};

const sendResetPasswordLink = async (req, res) => {
  try {
    //Destructuring the object.
    const { email } = req.body;

    //Searching for email in the database.
    const checkEmail = await registerModel.findOne({ email: email });

    //Checking if email exists in the database.
    if (!checkEmail) {
      return res.send("Unsucessfull");
    }

    //Creating a token using json web token.
    const token = jwt.sign({ email }, "jwtsecret", {
      expiresIn: "1200s",
    });

    console.log(token);

    // //Creating a medium to send email.
    // let transporter = nodemailer.createTransport({
    //   //Domain name.
    //   service: "hotmail",
    //   auth: {
    //     //Your email
    //     user: `${process.env.EMAIL}`,
    //     //Your password
    //     pass: `${process.env.PASSWORD}`,
    //   },
    // });

    // //Contents of email.
    // let mailConfiguration = await transporter.sendMail({
    //   from: `${process.env.EMAIL}`,
    //   to: `${email}`,
    //   subject: "Email verifications",
    //   html: `<h3>Hi! There, You have recently visited
    // 	our website and entered your email.
    // 	Please follow the given link to verify your email to reset the password
    // 	http://localhost:8000/api/verifyEmail/${token}
    // 	Thanks</h3>`,
    // });

    // //Sending message to user email for verification.
    // transporter.sendMail(mailConfiguration, function (error, info) {
    //   if (error) {
    //     //If not successful.
    //     console.log(error);
    //   } else {
    //     //If successful.
    //     console.log("Sent: " + info.response);
    //   }
    // });
    res.send("Sucess");
  } catch (error) {
    console.log(error);
  }
};

const checkLoginCookie = async (req, res) => {
  try {
    const { signedIn } = req.signedCookies;
    if (signedIn === "true") {
      return res.json({ success: true });
    }

    res.json({ success: false });
  } catch (error) {
    console.log(error);
  }
};

const deleteLoginCookie = async (req, res) => {
  try {
    res.clearCookie("signedIn");
    res.clearCookie("userId");

    res.json({ success: false });
  } catch (error) {
    console.log(error);
  }
};

const verifyEmail = async (req, res) => {
  try {
    //Destructuring the object.
    const { id } = req.params;

    //Decoding the email.
    const { email } = await jwt.verify(id, "jwtsecret");

    //Searching for email in the database.
    const checkEmail = await registerModel.findOne({ email });

    //Checking if email exists in the database.
    if (!checkEmail) {
      return res.send("Sorry no email found");
    }
    res.redirect(`http://localhost:3000/changePassword/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (req, res) => {
  try {
    console.log(req.body);
    //Decoding the email recieved from req.params.
    let { email } = await jwt.verify(req.body.email, "jwtsecret");
    //Finding the email.
    const getUserData = await registerModel.findOne({ email });

    if (getUserData) {
      //Generating the salt.
      const salt = await bcrypt.genSalt(10);
      //Hashing the password.
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await registerModel.findOneAndUpdate(
        { email },
        {
          password: hashedPassword,
        }
      );

      return res.json({ success: true });
    }
    res.send("No Email Found in Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  verify,
  login,
  sendResetPasswordLink,
  verifyEmail,
  changePassword,
  checkLoginCookie,
  deleteLoginCookie,
};
