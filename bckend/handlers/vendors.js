import { CERTIFICATES, VENDORS } from "../ds/conn";
import { remove_image, save_image } from "./utils";

const new_vendor = (req, res) => {
  let vendor = req.body;

  let result = VENDORS.write(vendor);

  res.json({
    ok: true,
    message: "new vendor",
    data: { _id: result._id, created: result.created },
  });
};

const vendors = (req, res) => {
  let { limit } = req;

  let vendors_ = VENDORS.read(null, { limit: Number(limit) });

  res.json({ ok: true, message: "vendors", data: vendors_ });
};

const add_certificate = (req, res) => {
  let certificate = req.body;

  certificate.image = save_image(certificate.image);

  let result = CERTIFICATES.write(certificate);

  res.json({
    ok: true,
    message: "certificate added",
    data: {
      _id: result._id,
      created: result.created,
      image: certificate.image,
    },
  });
};

const vendor_certificates = (req, res) => {
  let { vendor } = req.params;

  res.json({
    ok: true,
    message: "certificates",
    data: CERTIFICATES.read({ vendor }),
  });
};

const update_certification = (req, res) => {
  let cert = req.body;

  cert.image = save_image(cert.image);

  CERTIFICATES.update({ _id: cert._id, vendor: cert.vendor }, cert);

  res.json({
    ok: true,
    message: "certificate updated",
    data: { _id: cert._id, created: cert.created },
  });
};

const remove_certification = (req, res) => {
  let query = req.body;

  let result = CERTIFICATES.remove(query);
  result && remove_image(result.image);

  res.end;
};

const certificates = (req, res) => {
  let { limit } = req.params;

  let vendors = VENDORS.read().map((v) => v._id);

  res.json({
    ok: true,
    message: "certificates",
    data: CERTIFICATES.read({ vendor: vendors }),
  });
};

export {
  new_vendor,
  vendors,
  certificates,
  add_certificate,
  vendor_certificates,
  update_certification,
  remove_certification,
};
