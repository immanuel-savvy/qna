"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gds = exports.default = exports.VENDORS = exports.USERS_HASH = exports.USERS = exports.REPLIES = exports.QUESTIONS = exports.PURCHASED_EBOOKS = exports.GLOBALS = exports.FORUMS = exports.FAQS = exports.EXAMS = exports.EBOOKS = exports.DISCUSSIONS = exports.CERTIFICATES = exports.ADMIN_HASH = exports.ADMINSTRATORS = void 0;
var _generalisedDatastore = _interopRequireDefault(require("generalised-datastore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var gds;
exports.gds = gds;
var USERS, ADMINSTRATORS, CERTIFICATES, VENDORS, ADMIN_HASH, EBOOKS, FAQS, EXAMS, GLOBALS, REPLIES, DISCUSSIONS, FORUMS, QUESTIONS, PURCHASED_EBOOKS, USERS_HASH;
exports.USERS_HASH = USERS_HASH;
exports.PURCHASED_EBOOKS = PURCHASED_EBOOKS;
exports.QUESTIONS = QUESTIONS;
exports.FORUMS = FORUMS;
exports.DISCUSSIONS = DISCUSSIONS;
exports.REPLIES = REPLIES;
exports.GLOBALS = GLOBALS;
exports.EXAMS = EXAMS;
exports.FAQS = FAQS;
exports.EBOOKS = EBOOKS;
exports.ADMIN_HASH = ADMIN_HASH;
exports.VENDORS = VENDORS;
exports.CERTIFICATES = CERTIFICATES;
exports.ADMINSTRATORS = ADMINSTRATORS;
exports.USERS = USERS;
var ds_conn = function ds_conn() {
  exports.gds = gds = new _generalisedDatastore.default("QNA").sync();
  exports.USERS = USERS = gds.folder("users");
  exports.ADMINSTRATORS = ADMINSTRATORS = gds.folder("adminstrators");
  exports.ADMIN_HASH = ADMIN_HASH = gds.folder("admin_hash", "admin");
  exports.GLOBALS = GLOBALS = gds.folder("globals", "global");
  exports.VENDORS = VENDORS = gds.folder("vendors");
  exports.DISCUSSIONS = DISCUSSIONS = gds.folder("discussions", "question");
  exports.CERTIFICATES = CERTIFICATES = gds.folder("certificates", "vendor", "vendor");
  exports.USERS_HASH = USERS_HASH = gds.folder("user_hash", "user");
  exports.EXAMS = EXAMS = gds.folder("exams", "certificate", "certificate");
  exports.EBOOKS = EBOOKS = gds.folder("ebooks", null, "exam");
  exports.FORUMS = FORUMS = gds.folder("forums", null, new Array("exam"));
  exports.PURCHASED_EBOOKS = PURCHASED_EBOOKS = gds.folder("purchased_ebooks");
  exports.REPLIES = REPLIES = gds.folder("replies", "comment");
  exports.QUESTIONS = QUESTIONS = gds.folder("questions", "exam");
  exports.FAQS = FAQS = gds.folder("faqs");
};
var _default = ds_conn;
exports.default = _default;