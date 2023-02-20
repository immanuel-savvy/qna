import { ADMINSTRATORS, ADMIN_HASH, GLOBALS } from "../ds/conn";
import { site_metric } from "./starter";

const domain_name = "https://api.voupon.com";

const client_domain = "http://voupon.com";

const site_visit = (req, res) => {
  GLOBALS.update({ global: site_metric }, { visits: { $inc: 1 } });
};

const admin_login = (req, res) => {
  let { email, password } = req.body;

  let admin = ADMINSTRATORS.readone({ email });
  if (admin) {
    let hash = ADMIN_HASH.readone({ admin: admin._id });

    res.json(
      hash.key === password
        ? { ok: true, message: "admin logged-in", data: { admin } }
        : { ok: false, data: { message: "incorrect password" } }
    );
  } else res.json({ ok: false, data: { message: "admin not found" } });
};

const get_admins = (req, res) => {
  let admins = ADMINSTRATORS.read();
  res.json({ ok: true, message: "adminstrators fetched", data: admins });
};

const create_admin = (req, res) => {
  let { email, password, firstname, lastname } = req.body;

  let admin = { email, firstname, lastname };

  let result = ADMINSTRATORS.write(admin);
  admin._id = result._id;
  admin.created = result.created;

  ADMIN_HASH.write({ admin: admin._id, key: password });

  res.json({ ok: true, message: "admin created", data: admin });
};

export {
  admin_login,
  create_admin,
  get_admins,
  client_domain,
  domain_name,
  site_visit,
};
