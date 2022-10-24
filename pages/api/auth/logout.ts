import { serialize } from "cookie";
import { verify } from "jsonwebtoken";

const logoutHandler = (req: any, res: any) => {
  const { myToken } = req.cookies;
  if (!myToken) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    verify(myToken, "secret");
    const serialized = serialize("myToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json("Success");
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default logoutHandler;
