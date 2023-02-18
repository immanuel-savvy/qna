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
  USERS_HASH;

const ds_conn = () => {
  gds = new GDS("QNA").sync();

  USERS = gds.folder("users");
  ADMINSTRATORS = gds.folder("adminstrators");
  ADMIN_HASH = gds.folder("admin_hash", "admin");
  GLOBALS = gds.folder("globals", "global");
  VENDORS = gds.folder("vendors");
  CERTIFICATES = gds.folder("certificates", "vendor", "vendor");
  USERS_HASH = gds.folder("user_hash", "user");
  EXAMS = gds.folder("exams", "certificate", "certificate");
  EBOOKS = gds.folder("ebooks", null, "exam");
  FAQS = gds.folder("faqs");
};

export {
  gds,
  USERS,
  ADMIN_HASH,
  ADMINSTRATORS,
  CERTIFICATES,
  USERS_HASH,
  EBOOKS,
  VENDORS,
  GLOBALS,
  EXAMS,
  FAQS,
};
export default ds_conn;
