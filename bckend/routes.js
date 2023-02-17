import { admin_login, create_admin, get_admins } from "./handlers/admin";
import { ebook, ebooks, upload_ebook } from "./handlers/ebooks";
import { login, signup, user, verify_email } from "./handlers/users";

const routes = (app) => {
  app.get("/user/:user", user);
  app.get("/get_admins", get_admins);
  app.get("/ebooks/:limit", ebooks);
  app.get("/ebook/:ebook", ebook);

  app.post("/admin_login", admin_login);
  app.post("/create_admin", create_admin);
  app.post("/login", login);
  app.post("/signup", signup);
  app.post("/verify_email", verify_email);
  app.post("/upload_ebook", upload_ebook);
};

export default routes;
