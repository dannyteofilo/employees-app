import jwt from "jsonwebtoken";
import { serialize } from "cookie";
const loginHandler = (req: any, res: any) => {
  const { email, password } = req.body;
  if (email === "admin@test.com" && password === "admin") {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        email: "admin@test.com",
      },
      "secret"
    );
    const serialized = serialize("myToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.json("Success");
  }
  return res.status(401).json({ error: "Invalid credentials" });
};

export default loginHandler;
