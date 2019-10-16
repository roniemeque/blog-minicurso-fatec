const { getCollection } = require("../../lib/db");
const { sluggify } = require("../../helpers/strings");

module.exports = async (req, res) => {
  return res.status(200).json({
    ok: "ok"
  });
};
