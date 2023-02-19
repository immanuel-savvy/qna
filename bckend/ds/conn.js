import GDS from "generalised-datastore";

let gds;

let USERS,
  ADMINSTRATORS,
  CERTIFICATES,
  VENDORS,
  ADMIN_HASH,
  EBOOKS,
  FAQS,
  EXAMS,
  GLOBALS,
  DISCUSSIONS,
  FORUMS,
  QUESTIONS,
  USERS_HASH;

const ds_conn = () => {
  gds = new GDS("QNA").sync();

  USERS = gds.folder("users");
  ADMINSTRATORS = gds.folder("adminstrators");
  ADMIN_HASH = gds.folder("admin_hash", "admin");
  GLOBALS = gds.folder("globals", "global");
  VENDORS = gds.folder("vendors");
  DISCUSSIONS = gds.folder("discussions", "question");
  CERTIFICATES = gds.folder("certificates", "vendor", "vendor");
  USERS_HASH = gds.folder("user_hash", "user");
  EXAMS = gds.folder("exams", "certificate", "certificate");
  EBOOKS = gds.folder("ebooks", null, "exam");
  FORUMS = gds.folder("forums");
  QUESTIONS = gds.folder("questions", "exam");
  FAQS = gds.folder("faqs");
};

export {
  gds,
  USERS,
  ADMIN_HASH,
  QUESTIONS,
  ADMINSTRATORS,
  CERTIFICATES,
  USERS_HASH,
  DISCUSSIONS,
  FORUMS,
  EBOOKS,
  VENDORS,
  GLOBALS,
  EXAMS,
  FAQS,
};
export default ds_conn;
