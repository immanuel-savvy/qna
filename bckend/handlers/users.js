import { GLOBALS, USERS, USERS_HASH } from "../ds/conn";
import nodemailer from "nodemailer";
import { generate_random_string } from "generalised-datastore/utils/functions";
import { verification } from "./emails";
import { site_metric } from "./starter";

let email_verification_codes = new Object();

const to_title = (string) => {
  if (!string) return string;

  let str = "";
  string.split(" ").map((s) => {
    if (s) str += " " + s[0].toUpperCase() + s.slice(1);
  });
  return str.trim();
};

const send_mail = ({
  recipient,
  recipient_name,
  sender_pass,
  sender_name,
  sender,
  subject,
  text,
  html,
  to,
}) => {
  let transporter = nodemailer.createTransport({
    host: "premium217.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: sender,
      pass: sender_pass,
    },
  });

  transporter.sendMail({
    from: `${sender_name} <${sender}>`,
    to: to || `${recipient_name} <${recipient}>`,
    subject,
    text,
    html,
  });
};

const signup = (req, res) => {
  let user = req.body;

  let key = user.password;
  delete user.password;
  user.email = user.email.toLowerCase().trim();

  let user_exists = USERS.readone({ email: user.email });
  if (user_exists && user_exists.verified)
    return res.json({
      ok: false,
      message: "user exists",
      data: "email already used.",
    });

  if (user_exists) {
    user._id = user_exists._id;

    USERS_HASH.update({ user: user._id }, { key });
  } else {
    let result = USERS.write(user);
    user._id = result._id;
    user.created = result.created;

    USERS_HASH.write({ user: user._id, key });
  }

  let code = generate_random_string(6);
  email_verification_codes[user.email] = code;

  send_mail({
    recipient: user.email,
    recipient_name: "",
    subject: "[QNA] Please verify your email",
    sender: "signup@giitafrica.com",
    sender_name: "QNA",
    sender_pass: "signupgiitafrica",
    html: verification(code, ""),
  });

  GLOBALS.update({ global: site_metric }, { users: { $inc: 1 } });

  res.json({
    ok: true,
    message: "user signup",
    data: { email: user.email, _id: user._id },
  });
};

const user = (req, res) => {
  let { user_id } = req.params;

  res.json({ ok: true, message: "user fetched", data: USERS.readone(user_id) });
};

const verify_email = (req, res) => {
  let { email, verification_code } = req.body;
  email = email && email.trim().toLowerCase();
  verification_code = verification_code && verification_code.trim();

  let code = email_verification_codes[email];

  if (!code || code !== verification_code)
    return res.json({
      ok: false,
      message: "",
      data: "Email verification failed.",
    });

  let user = USERS.readone({ email });
  USERS.update(user._id, { verified: true });
  delete email_verification_codes[email];

  res.json({ ok: true, message: "user email verified", data: user });
};

const login = (req, res) => {
  let { email, password } = req.body;

  let user = USERS.readone({ email: email.toLowerCase() });
  if (!user)
    return res.json({
      ok: false,
      message: "user not found",
      data: "User not found",
    });

  let user_hash = USERS_HASH.readone({ user: user._id });
  if (!user_hash || (user_hash && user_hash.key !== password))
    return res.json({
      ok: false,
      message: "invalid password",
      data: "Invalid password",
    });

  res.json({ ok: true, message: "user logged-in", data: user });
};

export { signup, login, user, send_mail, verify_email, to_title };
