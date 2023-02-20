import {
  admin_login,
  create_admin,
  get_admins,
  site_metric_data,
  site_visit,
} from "./handlers/admin";
import {
  ebook,
  ebooks,
  ebook_downloaded,
  ebook_purchased,
  has_purchased,
  search_ebooks,
  upload_ebook,
} from "./handlers/ebooks";
import {
  add_question,
  certification_exams,
  create_exam,
  exams,
  exam_questions,
  exam_taken,
  remove_question,
  search_exams,
  vendor_exams,
} from "./handlers/exams";
import { add_faq, faqs, remove_faq, update_faq } from "./handlers/faq";
import {
  comments,
  dislike_comment,
  dislike_reply,
  like_comment,
  like_reply,
  new_comment,
  new_reply,
  replies,
} from "./handlers/forum";
import { login, signup, user, verify_email } from "./handlers/users";
import {
  add_certificate,
  certificates,
  new_vendor,
  remove_certification,
  update_certification,
  vendors,
  vendor_certificates,
} from "./handlers/vendors";

const routes = (app) => {
  app.get("/user/:user", user);
  app.get("/get_admins", get_admins);
  app.get("/site_metric_data", site_metric_data);
  app.get("/replies/:comment", replies);
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
  app.post("/site_visit", site_visit);
  app.post("/login", login);
  app.post("/signup", signup);
  app.post("/verify_email", verify_email);
  app.post("/upload_ebook", upload_ebook);
  app.post("/new_vendor", new_vendor);
  app.post("/add_certificate", add_certificate);
  app.post("/exam_taken", exam_taken);
  app.post("/create_exam", create_exam);
  app.post("/search_ebooks", search_ebooks);
  app.post("/search_exams", search_exams);
  app.post("/add_question", add_question);
  app.post("/exam_questions/:exam", exam_questions);
  app.post("/new_comment", new_comment);
  app.post("/comments/:question", comments);
  app.post("/new_reply", new_reply);
  app.post("/update_certificate", update_certification);
  app.post("/remove_certificate", remove_certification);
  app.post("/add_faq", add_faq);
  app.post("/update_faq", update_faq);
  app.post("/remove_faq/:faq", remove_faq);
  app.post("/faqs", faqs);
  app.post("/has_purchased", has_purchased);
  app.post("/ebook_downloaded", ebook_downloaded);
  app.post("/ebook_purchased", ebook_purchased);
  app.post("/remove_question", remove_question);
  app.post("/like_comment", like_comment);
  app.post("/dislike_comment", dislike_comment);
  app.post("/like_reply", like_reply);
  app.post("/dislike_reply", dislike_reply);
};

export default routes;
