const { getCollection } = require("../../lib/db");

module.exports = async (req, res) => {
  return res.status(200).json({
    ok: "ok"
  });
};
