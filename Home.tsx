import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black uppercase tracking-tighter mb-8 block">
              Yushu <span className="font-light opacity-40">Zhiwei</span>
            </Link>
            <p className="text-sm font-light opacity-40 leading-relaxed max-w-xs">
              致力于用 AI 重新定义维保边界。构建工业级的数字神经网络。
            </p>
          </div>

          {[
            { title: "探索", links: ["首页", "产品中心", "解决方案"] },
            { title: "公司", links: ["关于我们", "加入我们", "新闻动态"] },
            { title: "支持", links: ["技术白皮书", "服务协议", "隐私政策"] },
          ].map((group, i) => (
            <div key={i}>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-8 opacity-20">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link, j) => (
                   <li key={j}>
                     <a href="#" className="text-sm font-light opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest">{link}</a>
                   </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-20">
            © {currentYear} Yushu Zhiwei Tech. All Rights Reserved. 京ICP备12345678号
          </p>
          <div className="flex gap-10">
            {["Wechat", "Twitter", "Linkedin"].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 hover:opacity-100 transition-opacity">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

