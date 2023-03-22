const checkID = async (req, res, next) => {
    if (!req.params.id){
      res.status(400).json('That ID does not exist!');
    }
    else {
      next();
    }
  };

  module.exports = checkID;