const { response } = require("express");

const userGet = (req, res = response) => {
  const { q, name = "no name", apiKey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - controllers",
    q,
    name,
    apiKey,
    page,
    limit,
  });
};

const userPost = (req, res = response) => {
  const body = req.body;
  res.json({
    msg: "post API - controllersdw",
    body: body,
  });
};

const userPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controllers",
    id,
  });
};

const userPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controllers",
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controllers",
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
};
