


const roleMiddleware = (roles) => (req, res, next) => {
  if (!roles.includes(req.role)) {
    return res.status(403).json({ message: "Forbidden: Access denied" });
  }
  next();
};

export default roleMiddleware;
