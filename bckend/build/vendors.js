"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vendors = exports.vendor_certificates = exports.update_certification = exports.remove_certification = exports.new_vendor = exports.certificates = exports.add_certificate = void 0;
var _conn = require("../ds/conn");
var _starter = require("./starter");
var _utils = require("./utils");
var new_vendor = function new_vendor(req, res) {
  var vendor = req.body;
  var result = _conn.VENDORS.write(vendor);
  (0, _starter.update_site_metric)({
    vendors: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "new vendor",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.new_vendor = new_vendor;
var vendors = function vendors(req, res) {
  var limit = req.limit;
  var vendors_ = _conn.VENDORS.read(null, {
    limit: Number(limit)
  });
  res.json({
    ok: true,
    message: "vendors",
    data: vendors_
  });
};
exports.vendors = vendors;
var add_certificate = function add_certificate(req, res) {
  var certificate = req.body;
  certificate.image = (0, _utils.save_image)(certificate.image);
  var result = _conn.CERTIFICATES.write(certificate);
  (0, _starter.update_site_metric)({
    certificates: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "certificate added",
    data: {
      _id: result._id,
      created: result.created,
      image: certificate.image
    }
  });
};
exports.add_certificate = add_certificate;
var vendor_certificates = function vendor_certificates(req, res) {
  var vendor = req.params.vendor;
  res.json({
    ok: true,
    message: "certificates",
    data: _conn.CERTIFICATES.read({
      vendor: vendor
    })
  });
};
exports.vendor_certificates = vendor_certificates;
var update_certification = function update_certification(req, res) {
  var cert = req.body;
  cert.image = (0, _utils.save_image)(cert.image);
  _conn.CERTIFICATES.update({
    _id: cert._id,
    vendor: cert.vendor
  }, cert);
  res.json({
    ok: true,
    message: "certificate updated",
    data: {
      _id: cert._id,
      created: cert.created
    }
  });
};
exports.update_certification = update_certification;
var remove_certification = function remove_certification(req, res) {
  var query = req.body;
  var result = _conn.CERTIFICATES.remove(query);
  result && (0, _utils.remove_image)(result.image);
  (0, _starter.update_site_metric)({
    certificates: {
      $dec: 1
    }
  });
  res.end;
};
exports.remove_certification = remove_certification;
var certificates = function certificates(req, res) {
  var limit = req.params.limit;
  var vendors = _conn.VENDORS.read().map(function (v) {
    return v._id;
  });
  res.json({
    ok: true,
    message: "certificates",
    data: _conn.CERTIFICATES.read(null, {
      subfolder: vendors
    })
  });
};
exports.certificates = certificates;