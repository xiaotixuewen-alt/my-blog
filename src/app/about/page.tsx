export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-avatar">👨‍💻</div>
        <h1 className="about-name">我的博客</h1>
        <p className="about-role">记录思考，分享成长</p>
      </header>

      <section className="about-section">
        <h2>🧑‍💻 关于我</h2>
        <p>
          你好！我是一名热爱技术、历史的创作者。这个博客是我记录思考、分享知识的园地。
          我相信好的内容能够连接思想，而代码和文字是两种最强大的表达工具。
        </p>
      </section>

      <section className="about-section">
        <h2>📝 博客内容</h2>
        <p>
          这里主要分享三个领域的内容：<br /><br />
          <strong>技术文章</strong> - 探讨软件开发、Web 技术、工具效率<br />
          <strong>历史洞察</strong> - 读书笔记、历史分析、文明思考<br />
          <strong>设计思维</strong> - 产品设计、用户体验、创意方法
        </p>
      </section>

      <section className="about-section">
        <h2>🛠️ 技术栈</h2>
        <div className="skills-grid">
          <span className="skill-tag">Next.js</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Vercel</span>
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">Git</span>
        </div>
      </section>

      <section className="about-section">
        <h2>📬 联系作者</h2>
        <p>
          如果你有任何问题、建议或合作意向，欢迎通过以下方式联系我：<br /><br />
          GitHub: github.com/yourusername<br />
          Email: hello@example.com
        </p>
      </section>
    </div>
  );
}
