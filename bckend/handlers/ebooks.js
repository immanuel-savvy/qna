import { EBOOKS, GLOBALS } from "../ds/conn";
import { certificate_joins } from "./exams";
import { site_metric, update_site_metric } from "./starter";
import { save_file, save_image } from "./utils";

const upload_ebook = (req, res) => {
  let {
    book,
    title,
    vendor,
    certificate,
    description,
    price,
    cover_hash,
    cover,
  } = req.body;

  cover = save_image(cover);
  book = save_file(book, `${title.replace(/ /g, "_")}.pdf`);

  let result = EBOOKS.write({
    title,
    description,
    price,
    cover,
    cover_hash,
    vendor,
    certificate,
    book,
  });

  update_site_metric({ ebooks: { $inc: 1 } });
  res.json({
    ok: true,
    message: "ebook uploaded",
    data: { _id: result._id, created: result.created, cover, book },
  });
};

const ebooks = (req, res) => {
  let { limit } = req.params;

  res.json({
    ok: true,
    message: "ebooks",
    data: certificate_joins(
      EBOOKS.read(limit === "free" ? { price: 0 } : null, {
        limit: Number(limit),
      })
    ),
  });
};

const search_ebooks = (req, res) => {
  let { query, free } = req.body;

  res.json({
    ok: true,
    message: "ebooks result",
    data: certificate_joins(
      EBOOKS.read(free ? { price: 0 } : null, { search_param: query })
    ),
  });
};

const ebook = (req, res) => {
  let { ebook: ebook_id } = req.params;

  res.json({
    ok: true,
    message: "ebook",
    data: certificate_joins(new Array(EBOOKS.readone(ebook_id)))[0],
  });
};

export { upload_ebook, ebooks, ebook, search_ebooks };
