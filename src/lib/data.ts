export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'why-industrial-revolution-first-in-britain',
    title: '为什么工业革命最先在英国爆发？',
    subtitle: '《全球通史》第十一章精读',
    date: '2026-03-27',
    category: '历史',
    excerpt: '深入分析工业革命在英国爆发的六大核心要素，从地理资源到制度创新，揭示现代化的第一性原理。',
    readTime: '8 分钟',
    content: `
## 引言

工业革命是人类历史上最重要的转折点之一。它彻底改变了人类的生产方式、生活方式，乃至思维方式。但一个值得深思的问题是：为什么这场革命最先在英国爆发，而不是在资源更丰富的国家，或者文明更悠久的国家？

## 六大核心要素

### 1. 地理资源优势

英国拥有丰富的煤炭和铁矿资源。18世纪的英格兰已开采了欧洲最密集的煤矿网络。煤炭不仅是蒸汽机的燃料，也是冶铁业的关键能源。这种"资源禀赋"为工业革命提供了物质基础。

### 2. 产权制度保障

英国普通法传统确立了私有财产神圣不可侵犯的原则。这种法律保障使企业家能够安心投资、积累资本，无需担忧王权或政府的任意剥夺。

### 3. 金融制度创新

1694年英格兰银行的成立标志着现代金融体系的诞生。政府债务、股份公司、债券市场的形成，使社会闲散资金得以有效聚集并转化为工业投资。

### 4. 议会制度约束

1688年光荣革命后，议会对王权的有效约束限制了专制权力的滥用。这意味着商业活动不会因君主的一时兴起而遭受干预。

### 5. 农业革命先行

圈地运动和新农业技术的推广大幅提高了农业生产效率。农业剩余的增加释放了大量农村劳动力，为工厂制大工业提供了人力资源保障。

### 6. 技术创新积累

从约翰·凯的飞梭到詹姆斯·瓦特的蒸汽机，英国孕育了人类历史上第一批职业发明家。皇家学会的成立、专利制度的完善，形成了技术进步的制度化机制。

## 结论

工业革命不是某项单一发明的产物，而是制度、技术、资源、文化多重因素交织的结果。这便是工业革命的第一性原理：让创造性破坏得以发生的制度环境，比任何单项发明都更为根本。
    `
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Next.js 入门指南',
    subtitle: '现代 React 框架实战',
    date: '2026-03-25',
    category: '技术',
    excerpt: '从零开始学习 Next.js，掌握 App Router、Server Components 等核心特性，构建现代化的 React 应用。',
    readTime: '12 分钟',
    content: `
## 什么是 Next.js？

Next.js 是一个基于 React 的全栈框架，由 Vercel 开发并维护。它提供了服务端渲染、静态站点生成、API 路由等功能，是现代 Web 开发的首选框架之一。

## 为什么选择 Next.js？

- **性能优化**：自动代码分割、图片优化、字体优化
- **灵活的渲染方式**：SSR、SSG、ISR 按需选择
- **开发者体验**：热更新、快速构建、TypeScript 原生支持
- **部署简单**：一键部署到 Vercel

## 开始使用

\`\`\`bash
npx create-next-app@latest my-blog
cd my-blog
npm run dev
\`\`\`

## App Router 新特性

Next.js 13 引入的 App Router 带来了革命性的变化：

- **React Server Components**：默认在服务端渲染，减少客户端 JavaScript
- **嵌套布局**：更灵活的布局系统
- **流式渲染**：Streaming SSR，提升首屏加载速度

## 部署到 Vercel

只需将代码推送到 GitHub，然后连接到 Vercel，即可自动部署。

\`\`\`bash
npm install -g vercel
vercel
\`\`\`
    `
  },
  {
    slug: 'design-to-code-workflow',
    title: '设计转代码的最佳实践',
    subtitle: 'Design to Code 工作流',
    date: '2026-03-20',
    category: '设计',
    excerpt: '探讨如何高效地将设计稿转换为生产级代码，从 Figma 到 React/Vue 的完整工作流程。',
    readTime: '10 分钟',
    content: `
## 为什么需要 Design to Code？

在现代开发流程中，设计师和开发者之间的协作至关重要。Design to Code（设计转代码）工作流可以帮助团队：

- 减少设计-开发之间的沟通成本
- 提高 UI 一致性
- 加速产品迭代

## 常用工具

### 设计工具
- **Figma**：最流行的协作设计工具
- **Sketch**：macOS 专属设计软件
- **Adobe XD**：Adobe 家族的设计工具

### 代码生成工具
- **Figma to Code**：自动生成 HTML/CSS/React 代码
- **Anima**：Figma 插件，生成响应式代码
- **Locofy**：AI 驱动的设计转代码工具

## 最佳实践

### 1. 建立设计系统
统一的组件库、颜色、字体、间距规范。

### 2. 使用组件化思维
设计时考虑复用，开发时遵循原子设计原则。

### 3. 保持沟通
定期 Design Review，及时发现并解决问题。

### 4. 自动化测试
视觉回归测试确保 UI 一致性。
    `
  }
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
