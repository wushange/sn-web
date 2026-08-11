"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  tag?: string;
  sortOrder: number;
  published: boolean;
}

const TOKEN_KEY = "sn_admin_token";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({ title: "", date: "", image: "", summary: "", tag: "", sortOrder: 0, published: true });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) {
      setToken(saved);
      setLoggedIn(true);
      loadNews(saved);
    }
  }, []);

  const loadNews = async (tk: string) => {
    const res = await fetch("/api/news?admin=1", { headers: { Authorization: `Bearer ${tk}` } });
    if (res.ok) setNews(await res.json());
  };

  const login = () => {
    localStorage.setItem(TOKEN_KEY, token);
    setLoggedIn(true);
    loadNews(token);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setLoggedIn(false);
    setToken("");
    setNews([]);
  };

  const save = async () => {
    const method = editing ? "PUT" : "POST";
    const url = editing ? `/api/news/${editing.id}` : "/api/news";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setMsg(editing ? "已保存" : "已添加");
      setEditing(null);
      setForm({ title: "", date: "", image: "", summary: "", tag: "", sortOrder: 0, published: true });
      loadNews(token);
      setTimeout(() => setMsg(""), 2000);
    } else {
      setMsg("保存失败");
    }
  };

  const remove = async (id: number) => {
    if (!confirm("确定删除这条新闻？")) return;
    await fetch(`/api/news/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    loadNews(token);
  };

  const startEdit = (n: NewsItem) => {
    setEditing(n);
    setForm({ title: n.title, date: n.date, image: n.image, summary: n.summary, tag: n.tag || "", sortOrder: n.sortOrder, published: n.published });
  };

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-[#f5f5f5]">
        <Header />
        <div className="flex items-center justify-center py-[120px]">
          <div className="bg-white rounded-[0.8em] p-[40px] shadow-lg w-full max-w-[400px]">
            <h1 className="text-[24px] font-normal text-[#221815] mb-[8px]">内容管理后台</h1>
            <p className="text-[14px] text-[#808080] mb-[25px]">请输入管理令牌登录</p>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="管理令牌"
              onKeyDown={(e) => e.key === "Enter" && login()}
              className="w-full h-[46px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] mb-[15px] text-[15px]"
            />
            <button onClick={login} className="w-full h-[46px] bg-(--brand-primary) text-white rounded-[0.4em] hover:opacity-90 transition-opacity">
              登录
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <section className="bg-(--brand-primary) pt-[120px] pb-[40px]">
        <div className="container-custom flex items-center justify-between">
          <div>
            <h1 className="text-[28px] md:text-[36px] font-normal text-white">内容管理后台</h1>
            <p className="text-[14px] text-white/80 mt-[8px]">管理网站新闻资讯</p>
          </div>
          <button onClick={logout} className="text-[14px] text-white border border-white/50 rounded-[0.4em] px-[15px] py-[8px] hover:bg-white/10 transition-colors">
            退出
          </button>
        </div>
      </section>

      <section className="container-custom py-[40px]">
        {msg && <div className="mb-[20px] bg-green-50 text-green-700 rounded-[0.4em] p-[12px] text-[14px]">{msg}</div>}

        {/* 编辑表单 */}
        <div className="bg-white rounded-[0.8em] p-[25px] shadow mb-[40px]">
          <h2 className="text-[18px] font-medium text-[#221815] mb-[20px]">{editing ? "编辑新闻" : "新增新闻"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="标题 *" className="h-[44px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] text-[14px] md:col-span-2" />
            <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="日期（如 2026-08-11）" className="h-[44px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] text-[14px]" />
            <input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} placeholder="分类标签（如 公司动态）" className="h-[44px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] text-[14px]" />
            <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="图片路径（如 /images/news-1.jpg）" className="h-[44px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] text-[14px] md:col-span-2" />
            <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} placeholder="内容摘要" rows={3} className="px-[15px] py-[10px] border border-[#E6E6E6] rounded-[0.4em] text-[14px] md:col-span-2" />
            <input value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })} type="number" placeholder="排序（大在前）" className="h-[44px] px-[15px] border border-[#E6E6E6] rounded-[0.4em] text-[14px]" />
            <label className="flex items-center gap-2 text-[14px] text-[#555]">
              <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
              发布
            </label>
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <button onClick={save} className="px-[25px] h-[42px] bg-(--brand-primary) text-white rounded-[0.4em] hover:opacity-90 transition-opacity">
              {editing ? "保存修改" : "添加新闻"}
            </button>
            {editing && <button onClick={() => { setEditing(null); setForm({ title: "", date: "", image: "", summary: "", tag: "", sortOrder: 0, published: true }); }} className="px-[20px] h-[42px] border border-[#E6E6E6] rounded-[0.4em] text-[#666]">取消</button>}
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="bg-white rounded-[0.8em] shadow overflow-hidden">
          <div className="p-[20px] border-b border-[#E6E6E6] flex items-center justify-between">
            <h2 className="text-[18px] font-medium text-[#221815]">新闻列表（{news.length}）</h2>
            <button onClick={() => loadNews(token)} className="text-[13px] text-(--brand-primary) hover:underline">刷新</button>
          </div>
          {news.length === 0 ? (
            <p className="p-[30px] text-center text-[#808080] text-[14px]">暂无新闻</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-[#fafafa] text-left text-[13px] text-[#808080]">
                  <th className="p-[12px] font-medium">标题</th>
                  <th className="p-[12px] font-medium">日期</th>
                  <th className="p-[12px] font-medium">标签</th>
                  <th className="p-[12px] font-medium">发布</th>
                  <th className="p-[12px] font-medium">操作</th>
                </tr>
              </thead>
              <tbody>
                {news.map((n) => (
                  <tr key={n.id} className="border-t border-[#f0f0f0]">
                    <td className="p-[12px] text-[14px] text-[#333] max-w-[300px] truncate">{n.title}</td>
                    <td className="p-[12px] text-[13px] text-[#666]">{n.date}</td>
                    <td className="p-[12px] text-[13px] text-[#666]">{n.tag || "-"}</td>
                    <td className="p-[12px] text-[13px] text-[#666]">{n.published ? "✓" : "✗"}</td>
                    <td className="p-[12px]">
                      <button onClick={() => startEdit(n)} className="text-[13px] text-(--brand-primary) hover:underline mr-[12px]">编辑</button>
                      <button onClick={() => remove(n.id)} className="text-[13px] text-[#c7000b] hover:underline">删除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
