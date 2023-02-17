import { admin_login, create_admin, get_admins } from "./handlers/admin";
import { ebook, ebooks, upload_ebook } from "./handlers/ebooks";
import { login, signup, user, verify_email } from "./handlers/users";
import {
  add_certificate,
  new_vendor,
  vendors,
  vendor_certificates,
} from "./handlers/vendors";

const routes = (app) => {
  app.get("/user/:user", user);
  app.get("/get_admins", get_admins);
  app.get("/vendors/:limit", vendors);
  app.get("/ebooks/:limit", ebooks);
  app.get("/ebook/:ebook", ebook);
  app.get("/vendor_certificates/:vendor", vendor_certificates);

  app.post("/admin_login", admin_login);
  app.post("/create_admin", create_admin);
  app.post("/login", login);
  app.post("/signup", signup);
  app.post("/verify_email", verify_email);
  app.post("/upload_ebook", upload_ebook);
  app.post("/new_vendor", new_vendor);
  app.post("/add_certificate", add_certificate);
};

export default routes;
