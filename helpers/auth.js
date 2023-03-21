const withAuth = async (req, res, next) => {
  // If the user is not logged in, redirects the user to the login page
  if (!req.session.loggedIn){
    res.redirect('login');
  }
  else {
    next();
  }
};

module.exports = withAuth;
