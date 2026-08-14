export interface ProductMeta {
  slug: string;
  type: "product" | "tech";
  image: string;
  detailHtml?: string;
}

export const products: ProductMeta[] = [
  {
    slug: "arterial-plaque-sdt",
    type: "product",
    image: "/images/company-intro.jpg",
    detailHtml: `<h3>产品概述</h3>
<p>动脉斑块声动力智能诊疗系统（MT-SDT2.0）是全球首台（套）针对动脉粥样硬化斑块的声动力治疗设备。该设备通过超声与声敏剂的协同作用，靶向清除动脉粥样硬化斑块，实现无创、精准、安全的治疗。</p>
<h3>技术原理</h3>
<p>声动力疗法（Sonodynamic Therapy, SDT）利用低频超声激活声敏剂，产生活性氧，诱导斑块内巨噬细胞凋亡，减少斑块内脂质核心，增加纤维帽厚度，从而实现斑块的稳定与消退。</p>
<h3>适应症</h3>
<ul><li>下肢动脉粥样硬化症</li><li>颈动脉粥样硬化症</li></ul>
<h3>注册进度</h3>
<p>该产品已通过国家药监局指定检测机构（天津市医疗器械质量监督检验中心）检测合格，具备开展临床试验条件。计划于2026年启动多中心临床试验，2028年取得三类医疗器械注册证。</p>`,
  },
  {
    slug: "tfus-bci",
    type: "product",
    image: "/images/beauty-3.png",
    detailHtml: `<h3>产品概述</h3>
<p>经颅聚焦超声脑机接口诊疗系统是公司布局的前沿技术产品，面向脑胶质瘤、阿尔茨海默症、帕金森病等重大脑疾病，提供无创、深部、精准、可闭环的神经调控诊疗解决方案。</p>
<h3>核心技术</h3>
<p>自研4-8通道同心圆环形相控超声换能器，通过相位调控实现经颅精准聚焦，稳定实现1.5mm级颅内聚焦精度。结合脑机接口技术，实现脑功能的实时闭环监测与调控。</p>
<h3>应用方向</h3>
<ul><li>脑胶质瘤的无创治疗</li><li>阿尔茨海默症的神经调控</li><li>帕金森病的深部脑刺激</li><li>血脑屏障可逆开放辅助药物递送</li></ul>`,
  },
  {
    slug: "mc200-beauty",
    type: "product",
    image: "/images/beauty-2.jpg",
    detailHtml: `<h3>产品概述</h3>
<p>温控型低频超声导入美容仪（MC200）是公司面向大健康消费市场推出的家用美容设备，集冷敷、热敷、超声三种模式于一体，满足清洁、导入、修护、紧致的全流程肌肤护理需求。</p>
<h3>核心功能</h3>
<ul><li><strong>超声导入模式：</strong>低频超声与机械振动打通肌肤吸收通道，促进护肤品有效成分渗透吸收</li><li><strong>热敷模式：</strong>智能温控热敷，打开毛孔、促进血液循环</li><li><strong>冷敷模式：</strong>冰感冷敷，收缩毛孔、舒缓镇静肌肤</li></ul>
<h3>适用场景</h3>
<ul><li>家庭日常面部护理</li><li>美容机构皮肤管理</li></ul>`,
  },
];

export const techs: ProductMeta[] = [
  {
    slug: "ultrasound-plaque-recognition",
    type: "tech",
    image: "",
    detailHtml: `<h3>技术概述</h3>
<p>高分辨率超声成像斑块精准识别技术是MT-SDT2.0系统的核心诊断模块，通过高分辨率诊断超声自动识别、分型斑块，依据斑块厚度、狭窄率、血流速度等多维指标，给出个体化治疗参数建议与预后判断。</p>
<h3>技术优势</h3>
<ul><li>自动识别动脉粥样硬化斑块类型</li><li>多维度量化评估（厚度、狭窄率、血流速度等）</li><li>AI辅助治疗参数推荐</li><li>预后判断与疗效评估</li></ul>`,
  },
  {
    slug: "uniform-ultrasound-transducer",
    type: "tech",
    image: "",
    detailHtml: `<h3>技术概述</h3>
<p>近场均匀稳定超声换能器是公司自主研发的关键核心部件，有效解决了超声换能器近声场强度紊乱这一长期困扰行业的难题。</p>
<h3>性能指标</h3>
<ul><li>波束不均匀系数（BNR）控制在2.0-2.5之间</li><li>超过同类进口品牌性能</li><li>为声动力治疗精准疗效提供硬件保障</li></ul>`,
  },
  {
    slug: "optical-navigation",
    type: "tech",
    image: "",
    detailHtml: `<h3>技术概述</h3>
<p>基于双目立体视觉的近红外光学定位系统，实现诊断超声探头的实时高精度空间定位，并将治疗换能器精确引导至目标斑块位置，是MT-SDT2.0系统精准治疗的关键保障。</p>
<h3>性能指标</h3>
<ul><li>空间定位误差 ＜0.5mm</li><li>实时高精度追踪</li><li>诊断探头与治疗换能器的精准坐标映射</li></ul>`,
  },
  {
    slug: "ai-central-database",
    type: "tech",
    image: "",
    detailHtml: `<h3>技术概述</h3>
<p>人工智能中央数据库基于AI算法和大规模临床样本数据构建，通过深度挖掘诊疗数据，持续优化个体化治疗参数，为声动力疗法的临床研究与推广应用提供坚实的数据保障。</p>
<h3>核心能力</h3>
<ul><li>患者样本数据集中管理</li><li>AI算法驱动治疗参数优化</li><li>临床研究数据支持</li><li>多中心数据协同分析</li></ul>`,
  },
];

export function getProductBySlug(slug: string): ProductMeta | undefined {
  return products.find((p) => p.slug === slug);
}

export function getTechBySlug(slug: string): ProductMeta | undefined {
  return techs.find((t) => t.slug === slug);
}

export function getItemBySlug(slug: string): ProductMeta | undefined {
  return getProductBySlug(slug) ?? getTechBySlug(slug);
}
