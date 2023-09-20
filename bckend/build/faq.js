"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_faq = exports.remove_faq = exports.faqs = exports.add_faq = void 0;
var _conn = require("../ds/conn");
var _starter = require("./starter");
var add_faq = function add_faq(req, res) {
  var result = _conn.FAQS.write(req.body);
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    faqs: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "faq added",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.add_faq = add_faq;
var update_faq = function update_faq(req, res) {
  var faq = req.body;
  var result = _conn.FAQS.update(faq._id, faq);
  res.json({
    ok: true,
    message: "faq added",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.update_faq = update_faq;
var remove_faq = function remove_faq(req, res) {
  var faq = req.params.faq;
  _conn.FAQS.remove(faq);
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    faqs: {
      $dec: 1
    }
  });
  res.end();
};
exports.remove_faq = remove_faq;
var faqs = function faqs(req, res) {
  var _req$body = req.body,
    limit = _req$body.limit,
    skip = _req$body.skip;
  res.json({
    ok: true,
    message: "faqs",
    data: _conn.FAQS.read(null, {
      limit: Number(limit),
      skip: Number(skip)
    })
  });
};
exports.faqs = faqs;