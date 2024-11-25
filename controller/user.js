import { User } from "../modals/user.models.js";

const getUsers = async (req, res) => {
    try {
      const users = await User.find().select("-password -isAccVarified");

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
export default getUsers;