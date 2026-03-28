import { NextResponse } from 'next/server';

const posts = [
  {
    slug: 'why-industrial-revolution-first-in-britain',
    title: '为什么工业革命最先在英国爆发？',
    subtitle: '《全球通史》第十一章精读',
    date: '2026-03-27',
    category: '历史',
    excerpt: '深入分析工业革命在英国爆发的六大核心要素，从地理资源到制度创新，揭示现代化的第一性原理。',
    readTime: '8 分钟'
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Next.js 入门指南',
    subtitle: '现代 React 框架实战',
    date: '2026-03-25',
    category: '技术',
    excerpt: '从零开始学习 Next.js，掌握 App Router、Server Components 等核心特性，构建现代化的 React 应用。',
    readTime: '12 分钟'
  },
  {
    slug: 'design-to-code-workflow',
    title: '设计转代码的最佳实践',
    subtitle: 'Design to Code 工作流',
    date: '2026-03-20',
    category: '设计',
    excerpt: '探讨如何高效地将设计稿转换为生产级代码，从 Figma 到 React/Vue 的完整工作流程。',
    readTime: '10 分钟'
  }
];

export async function GET() {
  return NextResponse.json({ posts });
}
