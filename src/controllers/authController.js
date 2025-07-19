import jwt from "jsonwebtoken";

const default_user = {
  id: 1,
  email: "admin@gmail.com",
  password: "1234",
};

export const loginController = (req, res) => {
  const { email, password } = req.body;

  const user = { id: 1 };

  if (email == default_user.email && password == default_user.password) {
    const payload = { user };
    const expiration = { expiresIn: "1h" };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
    return res.json({ token });
  } else {
    return res.sendStatus(401);
  }
};
