export const loginMiddleware = (req, res, next) => {
    if (req.user) {
    next();
    } else {
      console.log(req.session.passport.user)
      
      res.status(401).send("Not Authorized");
    }
  };