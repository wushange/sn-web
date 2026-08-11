import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/admin";

// GET /api/news — 公开读取新闻列表（可选 ?admin=1 显示未发布）
export async function GET(req: NextRequest) {
  const isAdminReq = req.nextUrl.searchParams.get("admin") === "1";
  const includeUnpublished = isAdminReq && isAdmin(req);
  try {
    const news = await prisma.news.findMany({
      where: includeUnpublished ? {} : { published: true },
      orderBy: [{ sortOrder: "desc" }, { date: "desc" }],
    });
    return NextResponse.json(news);
  } catch (e) {
    console.error("新闻读取失败:", e);
    return NextResponse.json({ error: "读取失败" }, { status: 500 });
  }
}

// POST /api/news — 新增新闻（管理员）
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "未授权" }, { status: 401 });
  try {
    const body = await req.json();
    const news = await prisma.news.create({
      data: {
        title: String(body.title || ""),
        date: String(body.date || ""),
        image: String(body.image || ""),
        summary: String(body.summary || ""),
        tag: body.tag ? String(body.tag) : null,
        sortOrder: Number(body.sortOrder) || 0,
        published: body.published !== false,
      },
    });
    return NextResponse.json(news, { status: 201 });
  } catch (e) {
    console.error("新闻创建失败:", e);
    return NextResponse.json({ error: "创建失败" }, { status: 500 });
  }
}

