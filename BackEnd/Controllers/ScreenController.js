const Screen = require("../Modals/ScreenModal");

const addScreen = async (req, res) => {
  try {
    const { theatre, screenName, screenType, totalSeats, status } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const newScreen = new Screen({
      theatre,
      screenName,
      screenType,
      totalSeats,
      status,
      image: imagePath,
    });
    await newScreen.save();
    res.status(201).json({ message: "New Screen Added", screen: newScreen });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to add Screen", error: error.message });
  }
};

module.exports = { addScreen };
