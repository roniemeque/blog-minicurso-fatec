const { getCollection } = require("../../lib/db");

module.exports = async (req, res) => {
  try {
    const collection = await getCollection("posts");

    const posts = await collection
      .find({})
      .sort({ date: -1 })
      .toArray();

    //res.setHeader('Cache-Control', 'maxage=0, s-maxage=600');
    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
