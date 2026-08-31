const Snack = require("../Modals/SnacksModal");

const addSnacks = async (req, res) => {
  try {
    const { name, price, isAvailable, quantity } = req.body;

    const imagePath = req.file ? req.file.path : null;

    const newSnack = new Snack({
      name,
      price,
      isAvailable,
      quantity,
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

module.exports = { addSnacks };
