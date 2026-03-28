import Link from 'next/link';
import { getAllPosts } from '@/lib/data';

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">✨ 知识分享平台</span>
          <h1 className="hero-title">
            用文字记录思想<br />
            <span className="highlight">用代码改变世界</span>
          </h1>
          <p className="hero-description">
            探索历史、技术、设计与创业的交叉地带。<br />
            在这里，每个想法都值得被认真对待。
          </p>
          <div className="hero-actions">
            <Link href="/posts" className="btn-primary">
              阅读文章
            </Link>
            <Link href="/about" className="btn-secondary">
              关于我
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-icon">📚</span>
            <span>历史洞察</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">💻</span>
            <span>技术深度</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">🎨</span>
            <span>设计思维</span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured">
        <h2 className="section-title">
          <span className="title-icon">🔥</span>
          精选文章
        </h2>
        <Link href={`/posts/${featuredPost.slug}`} className="featured-card">
          <div className="featured-badge">{featuredPost.category}</div>
          <h3 className="featured-title">{featuredPost.title}</h3>
          <p className="featured-subtitle">{featuredPost.subtitle}</p>
          <p className="featured-excerpt">{featuredPost.excerpt}</p>
          <div className="featured-meta">
            <span className="meta-item">
              <span className="meta-icon">📅</span>
              {featuredPost.date}
            </span>
            <span className="meta-item">
              <span className="meta-icon">⏱️</span>
              {featuredPost.readTime}
            </span>
          </div>
        </Link>
      </section>

      {/* Recent Posts */}
      <section className="recent">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">📝</span>
            最新文章
          </h2>
          <Link href="/posts" className="view-all">
            查看全部 →
          </Link>
        </div>
        <div className="posts-grid">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
              <div className="post-badge">{post.category}</div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-subtitle">{post.subtitle}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2 className="newsletter-title">订阅更新</h2>
          <p className="newsletter-description">
            获取最新文章推送，不错过任何精彩内容
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              订阅
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
