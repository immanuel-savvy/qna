"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vendor_exams = exports.search_questions = exports.search_exams = exports.remove_question = exports.exams = exports.exam_taken = exports.exam_questions = exports.create_exam = exports.certification_exams = exports.certificate_joins = exports.add_question = void 0;
var _conn = require("../ds/conn");
var _starter = require("./starter");
var _utils = require("./utils");
var create_exam = function create_exam(req, res) {
  var exam = req.body;
  var result = _conn.EXAMS.write(exam);
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    exams: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "exam created",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.create_exam = create_exam;
var certificate_joins = function certificate_joins(exams) {
  var cert_ids = new Set(),
    vendor_ids = new Set();
  exams.map(function (exam) {
    cert_ids.add(exam.certificate);
    vendor_ids.add(exam.vendor);
  });
  var certificates = _conn.CERTIFICATES.read({
    _id: Array.from(cert_ids)
  }, {
    subfolder: Array.from(vendor_ids)
  });
  exams = exams.map(function (exam) {
    if (!exam.certificate._id) exam.certificate = certificates.find(function (c) {
      return c._id === exam.certificate;
    });
    return exam;
  });
  return exams;
};
exports.certificate_joins = certificate_joins;
var exams = function exams(req, res) {
  var limit = req.params.limit;
  var exams_ = certificate_joins(_conn.EXAMS.read(null, {
    limit: Number(limit)
  }));
  res.json({
    ok: true,
    message: "exams",
    data: exams_
  });
};
exports.exams = exams;
var certification_exams = function certification_exams(req, res) {
  var certificate = req.params.certificate;
  res.json({
    ok: true,
    message: "certification exams",
    data: certificate_joins(_conn.EXAMS.read({
      certificate: certificate
    }))
  });
};
exports.certification_exams = certification_exams;
var vendor_exams = function vendor_exams(req, res) {
  var vendor = req.params.vendor;
  var certifcates = _conn.CERTIFICATES.read({
    vendor: vendor
  });
  var exams = certificate_joins(_conn.EXAMS.read({
    certificate: certifcates.map(function (c) {
      return c._id;
    })
  }));
  res.json({
    ok: true,
    message: "vendor exams",
    data: exams
  });
};
exports.vendor_exams = vendor_exams;
var search_exams = function search_exams(req, res) {
  var query = req.body.query;
  res.json({
    ok: true,
    message: "exams result",
    data: certificate_joins(_conn.EXAMS.read(null, {
      search_param: query
    }))
  });
};
exports.search_exams = search_exams;
var add_question = function add_question(req, res) {
  var question = req.body;
  question.image = (0, _utils.save_image)(question.image);
  question.aimage = (0, _utils.save_image)(question.aimage);
  question.bimage = (0, _utils.save_image)(question.bimage);
  question.cimage = (0, _utils.save_image)(question.cimage);
  question.dimage = (0, _utils.save_image)(question.dimage);
  question.solution_image = (0, _utils.save_image)(question.solution_image);
  var result;
  if (!question._id) {
    result = _conn.QUESTIONS.write(question);
    _conn.EXAMS.update({
      _id: question.exam,
      certificate: question.certificate
    }, {
      questions: {
        $inc: 1
      }
    });
  } else result = _conn.QUESTIONS.update({
    _id: question._id,
    exam: question.exam
  }, question);
  res.json({
    ok: true,
    message: "question added",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.add_question = add_question;
var exam_taken = function exam_taken(req, res) {
  var _req$body = req.body,
    exam = _req$body.exam,
    certificate = _req$body.certificate;
  _conn.EXAMS.update({
    _id: exam,
    certificate: certificate
  }, {
    taken: {
      $inc: 1
    }
  });
  _conn.GLOBALS.update({
    global: _starter.site_metric
  }, {
    exams_taken: {
      $inc: 1
    }
  });
};
exports.exam_taken = exam_taken;
var exam_questions = function exam_questions(req, res) {
  var exam = req.params.exam;
  var _req$body2 = req.body,
    limit = _req$body2.limit,
    skip = _req$body2.skip;
  var questions = _conn.QUESTIONS.read({
    exam: exam
  }, {
    limit: Number(limit),
    skip: Number(skip)
  });
  res.json({
    ok: true,
    message: "exam questions",
    data: questions
  });
};
exports.exam_questions = exam_questions;
var remove_question = function remove_question(req, res) {
  var _req$body3 = req.body,
    question = _req$body3.question,
    exam = _req$body3.exam;
  _conn.QUESTIONS.remove({
    _id: question,
    exam: exam
  });
  var result = _conn.DISCUSSIONS.remove_several({
    question: question
  });
  Array.isArray(result) && _conn.REPLIES.remove_several({
    comment: result.map(function (r) {
      return r.comment;
    })
  });
  res.end();
};
exports.remove_question = remove_question;
var search_questions = function search_questions(req, res) {
  var _req$body4 = req.body,
    query = _req$body4.query,
    exam = _req$body4.exam;
  res.json({
    ok: true,
    message: "search results in questions",
    data: _conn.QUESTIONS.read({
      exam: exam
    }, {
      search_param: query
    })
  });
};
exports.search_questions = search_questions;