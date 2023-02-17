import { EBOOKS } from "../ds/conn";
import { save_file, save_image } from "./utils";

const upload_ebook = (req, res) => {
  let { book, title, description, price, cover_hash, cover } = req.body;

  cover = save_image(cover);
  book = save_file(book, `${title.replace(/ /g, "_")}.pdf`);

  let result = EBOOKS.write({
    title,
    description,
    price,
    cover,
    cover_hash,
    book,
  });

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
    data: EBOOKS.read(null, { limit: Number(limit) }),
  });
};

const ebook = (req, res) => {
  let { ebook: ebook_id } = req.params;

  res.json({ ok: true, message: "ebook", data: EBOOKS.readone(ebook_id) });
};

export { upload_ebook, ebooks, ebook };
