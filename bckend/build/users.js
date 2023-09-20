"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify_email = exports.user = exports.to_title = exports.signup = exports.send_mail = exports.login = void 0;
var _conn = require("../ds/conn");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _functions = require("generalised-datastore/utils/functions");
var _emails = require("./emails");
var _starter = require("./starter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var email_verification_codes = new Object();
var to_title = function to_title(string) {
  if (!string) return string;
  var str = "";
  string.split(" ").map(function (s) {
    if (s) str += " " + s[0].toUpperCase() + s.slice(1);
  });
  return str.trim();
};
exports.to_title = to_title;
var send_mail = function send_mail(_ref) {
  var recipient = _ref.recipient,
    recipient_name = _ref.recipient_name,
    sender_pass = _ref.sender_pass,
    sender_name = _ref.sender_name,
    sender = _ref.sender,
    subject = _ref.subject,
    text = _ref.text,
    html = _ref.html,
    to = _ref.to;
  var transporter = _nodemailer.default.createTransport({
    host: "premium217.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: sender,
      pass: sender_pass
    }
  });
  transporter.sendMail({
    from: "".concat(sender_name, " <").concat(sender, ">"),
    to: to || "".concat(recipient_name, " <").concat(recipient, ">"),
    subject: subject,
    text: text,
    html: html
  });
};
exports.send_mail = send_mail;
var signup = function signup(req, res) {
  var user = req.body;
  var key = user.password;
  delete user.password;
  user.email = user.email.toLowerCase().trim();
  var user_exists = _conn.USERS.readone({
    email: user.email
  });
  if (user_exists && user_exists.verified) return res.json({
    ok: false,
    message: "user exists",
    data: "email already used."
  });
  if (user_exists) {
    user._id = user_exists._id;
    _conn.USERS_HASH.update({
      user: user._id
    }, {
      key: key
    });
  } else {
    var result = _conn.USERS.write(user);
    user._id = result._id;
    user.created = result.created;
    _conn.USERS_HASH.write({
      user: user._id,
      key: key
    });
  }
  var code = (0, _functions.generate_random_string)(6);
  email_verification_codes[user.email] = code;
  send_mail({
    recipient: user.email,
    recipient_name: "",
    subject: "[QNA] Please verify your email",
    sender: "signup@giitafrica.com",
    sender_name: "QNA",
    sender_pass: "signupgiitafrica",
    html: (0, _emails.verification)(code, "")
  });
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    users: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "user signup",
    data: {
      email: user.email,
      _id: user._id
    }
  });
};
exports.signup = signup;
var user = function user(req, res) {
  var user_id = req.params.user_id;
  res.json({
    ok: true,
    message: "user fetched",
    data: _conn.USERS.readone(user_id)
  });
};
exports.user = user;
var verify_email = function verify_email(req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    verification_code = _req$body.verification_code;
  email = email && email.trim().toLowerCase();
  verification_code = verification_code && verification_code.trim();
  var code = email_verification_codes[email];
  if (!code || code !== verification_code) return res.json({
    ok: false,
    message: "",
    data: "Email verification failed."
  });
  var user = _conn.USERS.readone({
    email: email
  });
  _conn.USERS.update(user._id, {
    verified: true
  });
  delete email_verification_codes[email];
  res.json({
    ok: true,
    message: "user email verified",
    data: user
  });
};
exports.verify_email = verify_email;
var login = function login(req, res) {
  var _req$body2 = req.body,
    email = _req$body2.email,
    password = _req$body2.password;
  var user = _conn.USERS.readone({
    email: email.toLowerCase()
  });
  if (!user) return res.json({
    ok: false,
    message: "user not found",
    data: "User not found"
  });
  var user_hash = _conn.USERS_HASH.readone({
    user: user._id
  });
  if (!user_hash || user_hash && user_hash.key !== password) return res.json({
    ok: false,
    message: "invalid password",
    data: "Invalid password"
  });
  res.json({
    ok: true,
    message: "user logged-in",
    data: user
  });
};
exports.login = login;