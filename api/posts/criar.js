import { getCollection } from "../../lib/db";
import { sluggify } from "../../helpers/strings";

module.exports = async (req, res) => {
  const { body } = req;

  try {
    const collection = await getCollection("posts");

    // separando tags
    const tags = body.tags.split(",").map(tag => tag.trim().toLowerCase());

    // criando slug do path
    const path = sluggify(body.titulo);

    const { insertedId } = await collection.insertOne({
      ...body,
      path,
      tags,
      date: new Date()
    });

    return res.status(200).json({
      insertedId
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
