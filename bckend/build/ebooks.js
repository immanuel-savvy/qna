"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload_ebook = exports.search_ebooks = exports.has_purchased = exports.ebooks = exports.ebook_purchased = exports.ebook_downloaded = exports.ebook = void 0;
var _conn = require("../ds/conn");
var _exams = require("./exams");
var _starter = require("./starter");
var _utils = require("./utils");
var upload_ebook = function upload_ebook(req, res) {
  var _req$body = req.body,
    book = _req$body.book,
    title = _req$body.title,
    vendor = _req$body.vendor,
    certificate = _req$body.certificate,
    description = _req$body.description,
    price = _req$body.price,
    cover_hash = _req$body.cover_hash,
    cover = _req$body.cover;
  cover = (0, _utils.save_image)(cover);
  book = (0, _utils.save_file)(book, "".concat(title.replace(/ /g, "_"), ".pdf"));
  var result = _conn.EBOOKS.write({
    title: title,
    description: description,
    price: price,
    cover: cover,
    cover_hash: cover_hash,
    vendor: vendor,
    certificate: certificate,
    book: book
  });
  (0, _starter.update_site_metric)({
    ebooks: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "ebook uploaded",
    data: {
      _id: result._id,
      created: result.created,
      cover: cover,
      book: book
    }
  });
};
exports.upload_ebook = upload_ebook;
var ebooks = function ebooks(req, res) {
  var limit = req.params.limit;
  res.json({
    ok: true,
    message: "ebooks",
    data: (0, _exams.certificate_joins)(_conn.EBOOKS.read(limit === "free" ? {
      price: 0
    } : null, {
      limit: Number(limit)
    }))
  });
};
exports.ebooks = ebooks;
var search_ebooks = function search_ebooks(req, res) {
  var _req$body2 = req.body,
    query = _req$body2.query,
    free = _req$body2.free;
  res.json({
    ok: true,
    message: "ebooks result",
    data: (0, _exams.certificate_joins)(_conn.EBOOKS.read(free ? {
      price: 0
    } : null, {
      search_param: query
    }))
  });
};
exports.search_ebooks = search_ebooks;
var ebook = function ebook(req, res) {
  var ebook_id = req.params.ebook;
  res.json({
    ok: true,
    message: "ebook",
    data: (0, _exams.certificate_joins)(new Array(_conn.EBOOKS.readone(ebook_id)))[0]
  });
};
exports.ebook = ebook;
var has_purchased = function has_purchased(req, res) {
  var token = req.body;
  res.json({
    ok: true,
    message: "has purchased ebook?",
    data: {
      purchased: !!_conn.PURCHASED_EBOOKS.readone({
        ebook: token._id,
        email: token.email.toLowerCase()
      })
    }
  });
};
exports.has_purchased = has_purchased;
var ebook_purchased = function ebook_purchased(req, res) {
  var token = req.body;
  var result = _conn.PURCHASED_EBOOKS.write(token);
  _conn.EBOOKS.update({
    _id: token.ebook,
    certificate: token.certificate
  }, {
    purchased: {
      $inc: 1
    }
  });
  (0, _starter.update_site_metric)({
    ebooks_sold: {
      $inc: 1
    },
    ebooks_purchased: {
      $inc: token.price
    }
  });
  res.json({
    ok: true,
    message: "ebook purchased",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.ebook_purchased = ebook_purchased;
var ebook_downloaded = function ebook_downloaded(req, res) {
  var _req$body3 = req.body,
    ebook = _req$body3.ebook,
    certificate = _req$body3.certificate;
  _conn.EBOOKS.update({
    _id: ebook,
    certificate: certificate
  }, {
    downloads: {
      $inc: 1
    }
  });
  res.end();
};
exports.ebook_downloaded = ebook_downloaded;