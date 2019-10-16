import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { postPath }
  } = req;

  console.log(postPath);

  const collection = await getCollection("posts");

  const [post] = await collection.find({ path: postPath }).toArray();

  //res.setHeader('Cache-Control', 'maxage=0, s-maxage=600');
  res.status(200).json({ post });
};
