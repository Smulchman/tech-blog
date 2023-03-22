const checkID = async (req, res, next) => {
  // If the user is not logged in, redirects the user to the login page
  if (!req.id) {
    res.status(404).json({ message: "Invalid ID!" });
    return;
  }
  else {
    next
  }
};

module.exports = checkID;
