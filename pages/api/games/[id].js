import { getGame } from "../../../utils/gameUtils";


export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const result = await getGame(id);
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //   if (method === "PUT") {
  //     try {
  //         const product = await Product.create(req.body);
  //         res.status(201).json(product);
  //     } catch (error) {
  //       res.status(500).json(error);
  //     }
  //   }

  //   if (method === "DELETE") {
  //     try {
  //         const product = await Product.create(req.body);
  //         res.status(201).json(product);
  //     } catch (error) {
  //       res.status(500).json(error);
  //     }
  //   }
}


