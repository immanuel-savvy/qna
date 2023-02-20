import { FAQS, GLOBALS } from "../ds/conn";
import { site_metric } from "./starter";

const add_faq = (req, res) => {
  let result = FAQS.write(req.body);

  GLOBALS.update({ global: site_metric }, { faqs: { $inc: 1 } });

  res.json({
    ok: true,
    message: "faq added",
    data: { _id: result._id, created: result.created },
  });
};

const update_faq = (req, res) => {
  let faq = req.body;

  let result = FAQS.update(faq._id, faq);

  res.json({
    ok: true,
    message: "faq added",
    data: { _id: result._id, created: result.created },
  });
};

const remove_faq = (req, res) => {
  let { faq } = req.params;

  FAQS.remove(faq);
  GLOBALS.update({ global: site_metric }, { faqs: { $dec: 1 } });

  res.end();
};

const faqs = (req, res) => {
  let { limit, skip } = req.body;

  res.json({
    ok: true,
    message: "faqs",
    data: FAQS.read(null, { limit: Number(limit), skip: Number(skip) }),
  });
};

export { add_faq, update_faq, remove_faq, faqs };
