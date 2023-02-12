import GDS from "generalised-datastore";

let gds;

let USERS, ADMINSTRATORS, ADMIN_HASH, FAQS, GLOBALS, USERS_HASH;

const ds_conn = () => {
  gds = new GDS("QNA").sync();

  USERS = gds.folder("users");
  ADMINSTRATORS = gds.folder("adminstrators");
  ADMIN_HASH = gds.folder("admin_hash", "admin");
  GLOBALS = gds.folder("globals", "global");
  USERS_HASH = gds.folder("user_hash", "user");
  FAQS = gds.folder("faqs");
};

export { gds, USERS, ADMIN_HASH, ADMINSTRATORS, USERS_HASH, GLOBALS, FAQS };
export default ds_conn;
