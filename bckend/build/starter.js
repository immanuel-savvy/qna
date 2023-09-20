"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_site_metric = exports.site_metric = exports.create_default_admin = void 0;
var _conn = require("../ds/conn");
var default_admin = "adminstrators~123QNA~1234567890123",
  default_user = "users~123QNA~1234567890123";
var site_metric = "site_metric";
exports.site_metric = site_metric;
var create_default_admin = function create_default_admin() {
  if (!_conn.ADMINSTRATORS.readone(default_admin)) {
    _conn.ADMINSTRATORS.write({
      firstname: "QNA",
      lastname: "",
      image: "logo_single.png",
      email: "admin@QNA.com",
      _id: default_admin
    });
    _conn.ADMIN_HASH.write({
      admin: default_admin,
      key: "adminstrator#1"
    });
  }
  if (!_conn.USERS.readone(default_user)) {
    _conn.USERS.write({
      _id: default_user,
      firstname: "QNA",
      lastname: "",
      verified: true,
      email: "qna@gmail.com"
    });
    _conn.USERS_HASH.write({
      user: default_user,
      key: "adminstrator#1"
    });
  }
  _conn.GLOBALS.write({
    global: site_metric
  });
};
exports.create_default_admin = create_default_admin;
var site_metric_folder;
var update_site_metric = function update_site_metric(update) {
  if (!site_metric_folder) site_metric_folder = _conn.GLOBALS.readone({
    global: site_metric
  });
  _conn.GLOBALS.update({
    _id: site_metric_folder,
    global: site_metric
  }, update);
};
exports.update_site_metric = update_site_metric;