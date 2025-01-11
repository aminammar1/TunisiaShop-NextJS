import UserModel from "../models/user.model";

const admin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await UserModel.findById(userId);
    if (user.role !== "ADMIN") {
      return res
        .status(400)
        .json({ message: "permission denial", error: true, sucess: false });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: true, sucess: false });
  }
};

export default admin;