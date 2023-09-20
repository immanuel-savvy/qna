"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.site_visit = exports.site_metric_data = exports.get_admins = exports.domain_name = exports.create_admin = exports.client_domain = exports.admin_login = void 0;
var _conn = require("../ds/conn");
var _starter = require("./starter");
var domain_name = "https://api.voupon.com";
exports.domain_name = domain_name;
var client_domain = "http://voupon.com";
exports.client_domain = client_domain;
var site_visit = function site_visit(req, res) {
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    visits: {
      $inc: 1
    }
  });
};
exports.site_visit = site_visit;
var admin_login = function admin_login(req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    password = _req$body.password;
  var admin = _conn.ADMINSTRATORS.readone({
    email: email
  });
  if (admin) {
    var hash = _conn.ADMIN_HASH.readone({
      admin: admin._id
    });
    res.json(hash.key === password ? {
      ok: true,
      message: "admin logged-in",
      data: {
        admin: admin
      }
    } : {
      ok: false,
      data: {
        message: "incorrect password"
      }
    });
  } else res.json({
    ok: false,
    data: {
      message: "admin not found"
    }
  });
};
exports.admin_login = admin_login;
var get_admins = function get_admins(req, res) {
  var admins = _conn.ADMINSTRATORS.read();
  res.json({
    ok: true,
    message: "adminstrators fetched",
    data: admins
  });
};
exports.get_admins = get_admins;
var create_admin = function create_admin(req, res) {
  var _req$body2 = req.body,
    email = _req$body2.email,
    password = _req$body2.password,
    firstname = _req$body2.firstname,
    lastname = _req$body2.lastname;
  var admin = {
    email: email,
    firstname: firstname,
    lastname: lastname
  };
  var result = _conn.ADMINSTRATORS.write(admin);
  admin._id = result._id;
  admin.created = result.created;
  _conn.ADMIN_HASH.write({
    admin: admin._id,
    key: password
  });
  res.json({
    ok: true,
    message: "admin created",
    data: admin
  });
};
exports.create_admin = create_admin;
var site_metric_data = function site_metric_data(req, res) {
  res.json({
    ok: true,
    data: _conn.GLOBALS.readone({
      global: _starter.site_metric
    })
  });
};
exports.site_metric_data = site_metric_data;