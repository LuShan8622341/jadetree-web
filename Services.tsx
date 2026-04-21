import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const sections = [
    {
      title: "JADETREE",
      subtitle: "人工智能与机器人产业科创中心",
      description: "由上市企业玉禾田集团（300815.SZ）与百年工艺香港维修佬集团联合打造的数智化后市场领航者。",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=2000",
      primaryBtn: "探索智维生态",
      primaryLink: "/services"
    },
    {
      title: "双雄战略合力",
      subtitle: "玉禾田集团 × 香港维修佬",
      description: "凝聚玉禾田 10 万余名员工的服务网络，融合维修佬自 1938 年传承至今的工匠精神。深耕 180+ 座城市，服务 1200+ 品牌客户。",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
      primaryBtn: "关于我们",
      primaryLink: "/about"
    },
    {
      title: "科技新零售",
      subtitle: "模块化供给 · 数字化营销 · 智能供应链",
      description: "打破传统零售局限，构建“精准供给+便捷服务”体系。提供全球领先的精密焊接设备、光学显微镜及全方位 3C 数字配件。",
      image: "https://images.unsplash.com/photo-1473960103865-8673971630e9?auto=format&fit=crop&q=80&w=2000",
      primaryBtn: "智能装备",
      primaryLink: "/equipment"
    },
    {
      title: "无人机与机器人后市场",
      subtitle: "综合服务 · 全寿命周期 · 产教融合",
      description: "依托集团深厚技术积淀，通过“产学研用”深度融合，搭建集维修保养、技术支持与人才培育于一体的产业生态平台。",
      image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=2000",
      primaryBtn: "了解更多",
      primaryLink: "/education"
    }
  ];

  return (
    <div className="bg-black">
      {sections.map((section, index) => (
        <section key={index} className="section-full h-[100vh]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={section.image} 
              className="w-full h-full object-cover opacity-60 grayscale-[0.3]" 
              referrerPolicy="no-referrer"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-8 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="max-w-3xl"
            >
              {section.subtitle && (
                <h3 className="text-xl lg:text-2xl font-light tracking-[0.4em] uppercase mb-4 opacity-80">
                  {section.subtitle}
                </h3>
              )}
              {section.title && (
                <h2 className="text-5xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter">
                  {section.title}
                </h2>
              )}
              <p className="text-lg lg:text-xl font-light opacity-60 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {section.description}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <Link 
                  to={section.primaryLink} 
                  className="unitree-button unitree-button-primary inline-flex items-center justify-center"
                >
                  {section.primaryBtn}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom Scroll Indicator for first section */}
          {index === 0 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-pulse">
              <span className="text-[10px] uppercase tracking-[0.5em]">向下滚动</span>
              <div className="w-[1px] h-12 bg-white" />
            </div>
          )}
        </section>
      ))}

      {/* Feature Grid Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-12 uppercase leading-none">
                低空·园区<br />
                <span className="text-stroke text-black">重新定义</span><br />
                智慧化
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                玉树智维不只是提供工具，我们是在构建一个能够自我演进、工业级的数字神经网络。每一个传感器，每一行代码，都在为您的企业资产保驾护航。
              </p>
              <div className="grid grid-cols-2 gap-12">
                {[
                  { label: "毫秒级", detail: "实时预警响应" },
                  { label: "100%", detail: "故障覆盖能力" },
                  { label: "全球化", detail: "远程专家协同" },
                  { label: "零延迟", detail: "数字化孪生" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl font-bold mb-2">{stat.label}</p>
                    <p className="text-sm font-medium opacity-40 uppercase tracking-widest">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1546198632-9ef6368bef12?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
                alt="Tech core"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black text-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter mb-12">
              JOIN THE <br /><span className="text-brand-400">FUTURE</span>
            </h2>
            <p className="text-xl font-light opacity-50 mb-16 max-w-2xl mx-auto uppercase tracking-[0.2em]">
              我们的愿景：让世界各地的工厂都能在智慧的光芒下自由运转
            </p>
            <Link 
              to="/contact" 
              className="unitree-button unitree-button-primary inline-flex items-center gap-4 mx-auto py-5 px-12 text-lg"
            >
              提交您的业务申请 <ChevronRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

