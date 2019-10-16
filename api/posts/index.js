import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  try {
    const collection = await getCollection("posts");

    const posts = await collection
      .find({})
      .sort({ date: -1 })
      .toArray();

    return res.status(200).json({
      posts
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
