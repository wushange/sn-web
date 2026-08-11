import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/admin";

// PUT /api/news/[id] — 更新新闻（管理员）
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "未授权" }, { status: 401 });
  try {
    const { id } = await params;
    const body = await req.json();
    const news = await prisma.news.update({
      where: { id: Number(id) },
      data: {
        title: body.title !== undefined ? String(body.title) : undefined,
        date: body.date !== undefined ? String(body.date) : undefined,
        image: body.image !== undefined ? String(body.image) : undefined,
        summary: body.summary !== undefined ? String(body.summary) : undefined,
        tag: body.tag !== undefined ? String(body.tag) : undefined,
        sortOrder: body.sortOrder !== undefined ? Number(body.sortOrder) : undefined,
        published: body.published !== undefined ? body.published !== false : undefined,
      },
    });
    return NextResponse.json(news);
  } catch (e) {
    console.error("新闻更新失败:", e);
    return NextResponse.json({ error: "更新失败" }, { status: 500 });
  }
}

// DELETE /api/news/[id] — 删除新闻（管理员）
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "未授权" }, { status: 401 });
  try {
    const { id } = await params;
    await prisma.news.delete({ where: { id: Number(id) } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("新闻删除失败:", e);
    return NextResponse.json({ error: "删除失败" }, { status: 500 });
  }
}
