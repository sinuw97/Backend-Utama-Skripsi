import {
  searchArticlesAndClasify,
  summarizeArticle,
} from "../services/ai.service.js";

const searchController = async (req, res) => {
  try {
    const { query } = req.body;
    const { userId } = req.user;
    
    if (!query) {
      return res.status(400).json({
        message: "Query tidak boleh kosong",
      });
    }

    if (!userId) {
      return res.status(403).json({
        message: "User Id tidak ada atau tidak valid!",
      });
    }

    const result = await searchArticlesAndClasify(query, userId);
    return res.status(200).json(result);
  } catch (error) {
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.detail || "Gagal menghubungi layanan AI";
    return res.status(status).json({ message });
  }
};

const summarizeController = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ message: "URL tidak boleh kosong" });
    }

    const result = await summarizeArticle(url);
    return res.status(200).json(result);
  } catch (error) {
    const status = error.response?.status || 500;
    const message =
      error.response?.data?.detail || "Gagal menghubungi layanan AI";
    return res.status(status).json({ message });
  }
};

export { searchController, summarizeController };
