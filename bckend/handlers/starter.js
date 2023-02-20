import {
  ADMINSTRATORS,
  ADMIN_HASH,
  GLOBALS,
  USERS,
  USERS_HASH,
} from "../ds/conn";

let default_admin = "adminstrators~123QNA~1234567890123",
  default_user = "users~123QNA~1234567890123";

const site_metric = "site_metric";

const create_default_admin = () => {
  if (!ADMINSTRATORS.readone(default_admin)) {
    ADMINSTRATORS.write({
      firstname: "QNA",
      lastname: "",
      image: "logo_single.png",
      email: "admin@QNA.com",
      _id: default_admin,
    });
    ADMIN_HASH.write({ admin: default_admin, key: "adminstrator#1" });
  }

  if (!USERS.readone(default_user)) {
    USERS.write({
      _id: default_user,
      firstname: "QNA",
      lastname: "",
      verified: true,
      email: "qna@gmail.com",
    });
    USERS_HASH.write({ user: default_user, key: "adminstrator#1" });
  }

  GLOBALS.write({ global: site_metric });
};

export { create_default_admin, site_metric };
