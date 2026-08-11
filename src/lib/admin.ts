import { NextRequest } from "next/server";

// 管理员鉴权：请求头 Authorization: Bearer <adminToken>
export function isAdmin(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  return token === process.env.ADMIN_TOKEN;
}
