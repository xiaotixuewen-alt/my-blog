import React from 'react';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/data';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="post-detail">
        <Link href="/posts" className="post-back">
          ← 返回文章列表
        </Link>
        <h1>文章不存在</h1>
      </div>
    );
  }

  return (
    <article className="post-detail">
      <Link href="/posts" className="post-back">
        ← 返回文章列表
      </Link>
      
      <header className="post-header">
        <span className="post-category">{post.category}</span>
        <h1 className="post-heading">{post.title}</h1>
        <p className="post-subheading">{post.subtitle}</p>
        <div className="post-info">
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime}</span>
        </div>
      </header>

      <div className="post-content">
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return <h2 key={i}>{line.replace('## ', '')}</h2>;
          }
          if (line.startsWith('### ')) {
            return <h3 key={i}>{line.replace('### ', '')}</h3>;
          }
          if (line.trim() === '') {
            return <br key={i} />;
          }
          if (line.startsWith('- ')) {
            return <li key={i}>{line.replace('- ', '')}</li>;
          }
          if (line.startsWith('```')) {
            return null;
          }
          return <p key={i}>{line}</p>;
        })}
      </div>
    </article>
  );
}
