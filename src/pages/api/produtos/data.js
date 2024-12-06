import { esportes } from "./esportes";

export default function handler(req, res) {
    res.status(200).json(esportes)
  }