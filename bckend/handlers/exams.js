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

const stuff_exam_certificates = (exams) => {
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

  let exams_ = stuff_exam_certificates(
    EXAMS.read(null, { limit: Number(limit) })
  );

  res.json({ ok: true, message: "exams", data: exams_ });
};

export { create_exam, exams };
