import { DISCUSSIONS, FORUMS, QUESTIONS, REPLIES } from "../ds/conn";

const comments = (req, res) => {
  let { question } = req.params;
  let { limit, skip } = req.body;

  res.json({
    ok: true,
    message: "comments",
    data: DISCUSSIONS.read(
      { question },
      { limit: Number(limit), skip: Number(skip) }
    ),
  });
};

const new_comment = (req, res) => {
  let comment = req.body;

  let result = QUESTIONS.update(
    { _id: comment.question, exam: comment.exam },
    { discussions: { $inc: 1 } }
  );
  if (result && result.discussions === 1) {
    FORUMS.write({
      question: comment.question,
      exam: comment.exam,
      a: comment.answer === "a" ? 1 : 0,
      b: comment.answer === "b" ? 1 : 0,
      c: comment.answer === "c" ? 1 : 0,
      d: comment.answer === "d" ? 1 : 0,
      certification: comment.certification,
    });
  }

  result = DISCUSSIONS.write(comment);

  res.json({
    ok: true,
    message: "comment posted",
    data: { _id: result._id, created: result.created },
  });
};

const new_reply = (req, res) => {
  let reply = req.body;

  let result = REPLIES.write(reply);
  DISCUSSIONS.update(
    { _id: reply.comment, question: reply.question },
    { replies: { $inc: 1 } }
  );

  res.json({
    ok: true,
    message: "reply posted",
    data: { _id: result._id, created: result.created },
  });
};

const replies = (req, res) => {
  let { comment } = req.params;

  res.json({ ok: true, message: "replies", data: REPLIES.read({ comment }) });
};

const like_comment = (req, res) => {
  let { comment, question } = req.body;

  DISCUSSIONS.update({ _id: comment, question }, { likes: { $inc: 1 } });

  res.end();
};

const dislike_comment = (req, res) => {
  let { comment, question } = req.body;

  DISCUSSIONS.update({ _id: comment, question }, { dislikes: { $inc: 1 } });

  res.end();
};

const like_reply = (req, res) => {
  let { comment, reply } = req.body;

  REPLIES.update({ _id: reply, comment }, { likes: { $inc: 1 } });

  res.end();
};

const dislike_reply = (req, res) => {
  let { comment, reply } = req.body;

  REPLIES.update({ _id: reply, comment }, { dislikes: { $inc: 1 } });

  res.end();
};

export {
  comments,
  like_comment,
  dislike_comment,
  like_reply,
  dislike_reply,
  new_comment,
  new_reply,
  replies,
};
