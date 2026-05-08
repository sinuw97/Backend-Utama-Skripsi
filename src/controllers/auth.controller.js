import { registerUser, loginUser } from "../services/auth.service.js";

// Register Controller
const registerController = async (req, res) => {
  try {
    // ambil username dan pw
    const { username, password } = req.body;

    // cek usn dan pw
    if (!username || !password) {
      return res.status(400).json({
        error: true,
        message: "Username dan password harus di isi!",
      });
    }

    const newUser = await registerUser(username, password);

    return res.status(201).json({
      error: false,
      message: "User berhasil didaftarkan",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error.message || "Terjadi kesalahan saat register"
    });
  }
};

const loginController = async (req, res) => {
  try {
    // ambil username dan pw
    const { username, password } = req.body;

    // cek usn dan pw
    if (!username || !password) {
      return res.status(400).json({
        error: true,
        message: "Username atau password harus di isi!",
      });
    }

    const login = await loginUser(username, password);

    return res.status(200).json({
      error: false,
      message: "Berhasil login!",
      data: login,
    })

  } catch (error) {
    const status = error.message.includes("tidak cocok") ? 401 : 500;
    return res.status(status).json({
      error: true,
      message: error.message || "Terjadi kesalahan saat login"
    });
  }
}

export {
  registerController,
  loginController,
}