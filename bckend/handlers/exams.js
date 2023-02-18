import { CERTIFICATES, EXAMS } from "../ds/conn";

const create_exam = (req, res) => {
  let exam = req.body;

  let result = EXAMS.write(exam);

  res.json({
    ok: true,
    message: "exam created",
    data: { _id: result._id, created: result.created },
  });
};

const certificate_joins = (exams) => {
  let cert_ids = new Set(),
    vendor_ids = new Set();

  exams.map((exam) => {
    cert_ids.add(exam.certificate);
    vendor_ids.add(exam.vendor);
  });

  let certificates = CERTIFICATES.read({
    _id: Array.from(cert_ids),
    vendor: Array.from(vendor_ids),
  });

  exams = exams.map((exam) => {
    if (!exam.certificate._id)
      exam.certificate = certificates.find((c) => c._id === exam.certificate);
    return exam;
  });
  return exams;
};

const exams = (req, res) => {
  let { limit } = req.params;

  let exams_ = certificate_joins(EXAMS.read(null, { limit: Number(limit) }));

  res.json({ ok: true, message: "exams", data: exams_ });
};

const certification_exams = (req, res) => {
  let { certificate } = req.params;

  res.json({
    ok: true,
    message: "certification exams",
    data: certificate_joins(EXAMS.read({ certificate })),
  });
};

export { create_exam, exams, certificate_joins, certification_exams };
