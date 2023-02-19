import { admin_login, create_admin, get_admins } from "./handlers/admin";
import { ebook, ebooks, search_ebooks, upload_ebook } from "./handlers/ebooks";
import {
  add_question,
  certification_exams,
  create_exam,
  exams,
  exam_questions,
  search_exams,
  vendor_exams,
} from "./handlers/exams";
import { login, signup, user, verify_email } from "./handlers/users";
import {
  add_certificate,
  certificates,
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
  app.get("/exams/:limit", exams);
  app.get("/vendor_exams/:vendor", vendor_exams);
  app.get("/certification_exams/:certificate", certification_exams);
  app.get("/certificates/:limit", certificates);
  app.get("/vendor_certificates/:vendor", vendor_certificates);

  app.post("/admin_login", admin_login);
  app.post("/create_admin", create_admin);
  app.post("/login", login);
  app.post("/signup", signup);
  app.post("/verify_email", verify_email);
  app.post("/upload_ebook", upload_ebook);
  app.post("/new_vendor", new_vendor);
  app.post("/add_certificate", add_certificate);
  app.post("/create_exam", create_exam);
  app.post("/search_ebooks", search_ebooks);
  app.post("/search_exams", search_exams);
  app.post("/add_question", add_question);
  app.post("/exam_questions/:exam", exam_questions);
};

export default routes;
