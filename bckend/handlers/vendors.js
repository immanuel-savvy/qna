import { CERTIFICATES, VENDORS } from "../ds/conn";
import { save_image } from "./utils";

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

export { new_vendor, vendors, add_certificate, vendor_certificates };
