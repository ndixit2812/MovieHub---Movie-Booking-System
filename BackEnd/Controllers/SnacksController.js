const Snack = require("../Modals/SnacksModal");

const addSnacks = async (req, res) => {
  try {
    const { name, price, status, description, category } = req.body;

    const imagePath = req.file ? req.file.path : null;

    // const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : null;

    const newSnack = new Snack({
      name,
      price,
      status,
      description,
      category,
      image: imagePath,
    });
    await newSnack.save();
    res.status(201).json({ message: "New item added as Snacks", newSnack });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to add item", error: error.message });
  }
};

const getAllSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find();

    res.status(200).json({
      message: "Snacks fetched successfully",
      snacks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch snacks",
      error: error.message,
    });
  }
};

module.exports = { addSnacks, getAllSnacks };
