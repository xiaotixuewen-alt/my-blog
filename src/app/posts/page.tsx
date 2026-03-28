import Link from 'next/link';
import { getAllPosts } from '@/lib/data';

export default function PostsPage() {
  const posts = getAllPosts();
  const categories = ['全部', ...Array.from(new Set(posts.map(p => p.category)))];

  return (
    <div className="posts-page">
      <header className="posts-header">
        <h1 className="posts-title">所有文章</h1>
        <p className="posts-subtitle">探索更多精彩内容</p>
        <div className="posts-filter">
          {categories.map((cat) => (
            <button key={cat} className={`filter-btn ${cat === '全部' ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="posts-grid" style={{ paddingBottom: '80px' }}>
        {posts.map((post) => (
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
    </div>
  );
}
