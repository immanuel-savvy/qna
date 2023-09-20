"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replies = exports.new_reply = exports.new_comment = exports.like_reply = exports.like_comment = exports.dislike_reply = exports.dislike_comment = exports.discussions = exports.comments = void 0;
var _conn = require("../ds/conn");
var comments = function comments(req, res) {
  var question = req.params.question;
  var _req$body = req.body,
    limit = _req$body.limit,
    skip = _req$body.skip;
  res.json({
    ok: true,
    message: "comments",
    data: _conn.DISCUSSIONS.read({
      question: question
    }, {
      limit: Number(limit),
      skip: Number(skip)
    })
  });
};
exports.comments = comments;
var new_comment = function new_comment(req, res) {
  var comment = req.body;
  var result = _conn.QUESTIONS.update({
    _id: comment.question,
    exam: comment.exam
  }, {
    discussions: {
      $inc: 1
    }
  });
  if (result && result.discussions === 1) {
    _conn.FORUMS.write({
      question: comment.question,
      exam: comment.exam,
      a: comment.answer === "a" ? 1 : 0,
      b: comment.answer === "b" ? 1 : 0,
      c: comment.answer === "c" ? 1 : 0,
      d: comment.answer === "d" ? 1 : 0,
      certificate: comment.certificate
    });
  }
  result = _conn.DISCUSSIONS.write(comment);
  res.json({
    ok: true,
    message: "comment posted",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.new_comment = new_comment;
var new_reply = function new_reply(req, res) {
  var reply = req.body;
  var result = _conn.REPLIES.write(reply);
  _conn.DISCUSSIONS.update({
    _id: reply.comment,
    question: reply.question
  }, {
    replies: {
      $inc: 1
    }
  });
  res.json({
    ok: true,
    message: "reply posted",
    data: {
      _id: result._id,
      created: result.created
    }
  });
};
exports.new_reply = new_reply;
var replies = function replies(req, res) {
  var comment = req.params.comment;
  res.json({
    ok: true,
    message: "replies",
    data: _conn.REPLIES.read({
      comment: comment
    })
  });
};
exports.replies = replies;
var like_comment = function like_comment(req, res) {
  var _req$body2 = req.body,
    comment = _req$body2.comment,
    question = _req$body2.question;
  _conn.DISCUSSIONS.update({
    _id: comment,
    question: question
  }, {
    likes: {
      $inc: 1
    }
  });
  res.end();
};
exports.like_comment = like_comment;
var dislike_comment = function dislike_comment(req, res) {
  var _req$body3 = req.body,
    comment = _req$body3.comment,
    question = _req$body3.question;
  _conn.DISCUSSIONS.update({
    _id: comment,
    question: question
  }, {
    dislikes: {
      $inc: 1
    }
  });
  res.end();
};
exports.dislike_comment = dislike_comment;
var like_reply = function like_reply(req, res) {
  var _req$body4 = req.body,
    comment = _req$body4.comment,
    reply = _req$body4.reply;
  _conn.REPLIES.update({
    _id: reply,
    comment: comment
  }, {
    likes: {
      $inc: 1
    }
  });
  res.end();
};
exports.like_reply = like_reply;
var dislike_reply = function dislike_reply(req, res) {
  var _req$body5 = req.body,
    comment = _req$body5.comment,
    reply = _req$body5.reply;
  _conn.REPLIES.update({
    _id: reply,
    comment: comment
  }, {
    dislikes: {
      $inc: 1
    }
  });
  res.end();
};
exports.dislike_reply = dislike_reply;
var discussions = function discussions(req, res) {
  var _req$body6 = req.body,
    limit = _req$body6.limit,
    skip = _req$body6.skip;
  var discussions_ = _conn.FORUMS.read(null, {
    limit: limit,
    skip: skip
  });
  for (var i = 0; i < discussions_.length; i++) {
    var d = discussions_[i];
    d.question = _conn.QUESTIONS.readone({
      _id: d.question,
      exam: d.exam && d.exam._id || d.exam
    });
    d.exam = _conn.EXAMS.readone({
      _id: d.exam,
      certificate: d.certificate
    });
  }
  res.json({
    ok: true,
    data: discussions_
  });
};
exports.discussions = discussions;