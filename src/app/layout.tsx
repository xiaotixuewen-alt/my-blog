import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '我的博客 | 探索技术与思想的边界',
  description: '用文字记录思想，用代码改变世界',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="header">
          <div className="header-content">
            <Link href="/" className="logo">
              <span className="logo-icon">📝</span>
              <span className="logo-text">我的博客</span>
            </Link>
            <nav className="nav">
              <Link href="/" className="nav-link">首页</Link>
              <Link href="/posts" className="nav-link">文章</Link>
              <Link href="/about" className="nav-link">关于</Link>
            </nav>
          </div>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2026 我的博客. 用 Next.js + Vercel 构建</p>
        </footer>
      </body>
    </html>
  );
}