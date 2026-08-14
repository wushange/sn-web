export interface ProductMeta {
  slug: string;
  type: "product" | "tech";
  image: string;
  detailHtml?: { zh: string; en: string };
}

export const products: ProductMeta[] = [
  {
    slug: "arterial-plaque-sdt",
    type: "product",
    image: "/images/company-intro.jpg",
    detailHtml: {
      zh: `<h3>产品概述</h3>
<p>动脉斑块声动力智能诊疗系统（MT-SDT2.0）是全球首台（套）针对动脉粥样硬化斑块的声动力治疗设备。该设备通过超声与声敏剂的协同作用，靶向清除动脉粥样硬化斑块，实现无创、精准、安全的治疗。</p>
<h3>技术原理</h3>
<p>声动力疗法（Sonodynamic Therapy, SDT）利用低频超声激活声敏剂，产生活性氧，诱导斑块内巨噬细胞凋亡，减少斑块内脂质核心，增加纤维帽厚度，从而实现斑块的稳定与消退。</p>
<h3>适应症</h3>
<ul><li>下肢动脉粥样硬化症</li><li>颈动脉粥样硬化症</li></ul>
<h3>注册进度</h3>
<p>该产品已通过国家药监局指定检测机构（天津市医疗器械质量监督检验中心）检测合格，具备开展临床试验条件。计划于2026年启动多中心临床试验，2028年取得三类医疗器械注册证。</p>`,
      en: `<h3>Product Overview</h3>
<p>The Arterial Plaque Sonodynamic Intelligent Treatment System (MT-SDT2.0) is the world's first (set) sonodynamic therapy device for atherosclerotic plaques. Through the synergistic action of ultrasound and sonosensitizers, it precisely removes atherosclerotic plaques, achieving non-invasive, precise and safe treatment.</p>
<h3>Technical Principle</h3>
<p>Sonodynamic Therapy (SDT) uses low-frequency ultrasound to activate sonosensitizers, generating reactive oxygen species that induce apoptosis of macrophages within plaques, reduce the lipid core, and increase fibrous cap thickness, thereby stabilizing and regressing plaques.</p>
<h3>Indications</h3>
<ul><li>Lower-limb atherosclerosis</li><li>Carotid atherosclerosis</li></ul>
<h3>Registration Progress</h3>
<p>The product has passed testing by an NMPA-designated institution (Tianjin Medical Device Quality Supervision & Inspection Center) and is qualified for clinical trials. Multi-center clinical trials are planned for 2026, with Class III medical device registration expected in 2028.</p>`,
    },
  },
  {
    slug: "tfus-bci",
    type: "product",
    image: "/images/beauty-3.png",
    detailHtml: {
      zh: `<h3>产品概述</h3>
<p>经颅聚焦超声脑机接口诊疗系统是公司布局的前沿技术产品，面向脑胶质瘤、阿尔茨海默症、帕金森病等重大脑疾病，提供无创、深部、精准、可闭环的神经调控诊疗解决方案。</p>
<h3>核心技术</h3>
<p>自研4-8通道同心圆环形相控超声换能器，通过相位调控实现经颅精准聚焦，稳定实现1.5mm级颅内聚焦精度。结合脑机接口技术，实现脑功能的实时闭环监测与调控。</p>
<h3>应用方向</h3>
<ul><li>脑胶质瘤的无创治疗</li><li>阿尔茨海默症的神经调控</li><li>帕金森病的深部脑刺激</li><li>血脑屏障可逆开放辅助药物递送</li></ul>`,
      en: `<h3>Product Overview</h3>
<p>The Transcranial Focused Ultrasound Brain-Computer Interface (BCI) Treatment System is a cutting-edge product, providing non-invasive, deep, precise and closed-loop neuromodulation for major brain diseases such as glioma, Alzheimer's and Parkinson's.</p>
<h3>Core Technology</h3>
<p>A self-developed 4-8 channel concentric ring phased-array ultrasound transducer achieves precise transcranial focusing through phase control, stably achieving 1.5mm intracranial focusing precision. Combined with BCI technology, it enables real-time closed-loop monitoring and modulation of brain function.</p>
<h3>Application Directions</h3>
<ul><li>Non-invasive treatment of glioma</li><li>Neuromodulation for Alzheimer's disease</li><li>Deep brain stimulation for Parkinson's disease</li><li>Reversible blood-brain barrier opening to assist drug delivery</li></ul>`,
    },
  },
  {
    slug: "mc200-beauty",
    type: "product",
    image: "/images/beauty-2.jpg",
    detailHtml: {
      zh: `<h3>产品概述</h3>
<p>温控型低频超声导入美容仪（MC200）是公司面向大健康消费市场推出的家用美容设备，集冷敷、热敷、超声三种模式于一体，满足清洁、导入、修护、紧致的全流程肌肤护理需求。</p>
<h3>核心功能</h3>
<ul><li><strong>超声导入模式：</strong>低频超声与机械振动打通肌肤吸收通道，促进护肤品有效成分渗透吸收</li><li><strong>热敷模式：</strong>智能温控热敷，打开毛孔、促进血液循环</li><li><strong>冷敷模式：</strong>冰感冷敷，收缩毛孔、舒缓镇静肌肤</li></ul>
<h3>适用场景</h3>
<ul><li>家庭日常面部护理</li><li>美容机构皮肤管理</li></ul>`,
      en: `<h3>Product Overview</h3>
<p>The Temperature-control Low-frequency Ultrasound Infusion Beauty Device (MC200) is a home beauty device for the health & wellness consumer market, integrating cooling, heating and ultrasound modes to meet the full routine of cleansing, infusion, repair and firming.</p>
<h3>Core Functions</h3>
<ul><li><strong>Ultrasound infusion mode:</strong> Low-frequency ultrasound and mechanical vibration open skin absorption channels to promote penetration of active skincare ingredients</li><li><strong>Heating mode:</strong> Intelligent temperature-controlled heat opens pores and promotes blood circulation</li><li><strong>Cooling mode:</strong> Icy cold compress shrinks pores and soothes skin</li></ul>
<h3>Applicable Scenarios</h3>
<ul><li>Home daily facial care</li><li>Professional skin management at beauty institutions</li></ul>`,
    },
  },
];

export const techs: ProductMeta[] = [
  {
    slug: "ultrasound-plaque-recognition",
    type: "tech",
    image: "",
    detailHtml: {
      zh: `<h3>技术概述</h3>
<p>高分辨率超声成像斑块精准识别技术是MT-SDT2.0系统的核心诊断模块，通过高分辨率诊断超声自动识别、分型斑块，依据斑块厚度、狭窄率、血流速度等多维指标，给出个体化治疗参数建议与预后判断。</p>
<h3>技术优势</h3>
<ul><li>自动识别动脉粥样硬化斑块类型</li><li>多维度量化评估（厚度、狭窄率、血流速度等）</li><li>AI辅助治疗参数推荐</li><li>预后判断与疗效评估</li></ul>`,
      en: `<h3>Technology Overview</h3>
<p>High-resolution ultrasound plaque precise recognition is the core diagnostic module of the MT-SDT2.0 system. It automatically identifies and classifies plaques via high-resolution diagnostic ultrasound, providing individualized treatment parameters and prognosis based on plaque thickness, stenosis rate and blood-flow velocity.</p>
<h3>Technical Advantages</h3>
<ul><li>Automatic identification of atherosclerotic plaque types</li><li>Multi-dimensional quantitative assessment (thickness, stenosis rate, blood-flow velocity, etc.)</li><li>AI-assisted treatment parameter recommendation</li><li>Prognosis and efficacy evaluation</li></ul>`,
    },
  },
  {
    slug: "uniform-ultrasound-transducer",
    type: "tech",
    image: "",
    detailHtml: {
      zh: `<h3>技术概述</h3>
<p>近场均匀稳定超声换能器是公司自主研发的关键核心部件，有效解决了超声换能器近声场强度紊乱这一长期困扰行业的难题。</p>
<h3>性能指标</h3>
<ul><li>波束不均匀系数（BNR）控制在2.0-2.5之间</li><li>超过同类进口品牌性能</li><li>为声动力治疗精准疗效提供硬件保障</li></ul>`,
      en: `<h3>Technology Overview</h3>
<p>The uniform near-field stable ultrasound transducer is a self-developed key component that effectively solves the long-standing industry problem of near-field intensity disorder in ultrasound transducers.</p>
<h3>Performance Indicators</h3>
<ul><li>Beam non-uniformity ratio (BNR) controlled between 2.0-2.5</li><li>Surpasses comparable imported brands</li><li>Provides hardware guarantee for precise sonodynamic therapy</li></ul>`,
    },
  },
  {
    slug: "optical-navigation",
    type: "tech",
    image: "",
    detailHtml: {
      zh: `<h3>技术概述</h3>
<p>基于双目立体视觉的近红外光学定位系统，实现诊断超声探头的实时高精度空间定位，并将治疗换能器精确引导至目标斑块位置，是MT-SDT2.0系统精准治疗的关键保障。</p>
<h3>性能指标</h3>
<ul><li>空间定位误差 ＜0.5mm</li><li>实时高精度追踪</li><li>诊断探头与治疗换能器的精准坐标映射</li></ul>`,
      en: `<h3>Technology Overview</h3>
<p>Based on binocular stereo vision, the near-infrared optical navigation system achieves real-time high-precision spatial localization of the diagnostic ultrasound probe and precisely guides the therapy transducer to the target plaque position, a key guarantee of precise treatment in the MT-SDT2.0 system.</p>
<h3>Performance Indicators</h3>
<ul><li>Spatial localization error < 0.5mm</li><li>Real-time high-precision tracking</li><li>Precise coordinate mapping between diagnostic probe and therapy transducer</li></ul>`,
    },
  },
  {
    slug: "ai-central-database",
    type: "tech",
    image: "",
    detailHtml: {
      zh: `<h3>技术概述</h3>
<p>人工智能中央数据库基于AI算法和大规模临床样本数据构建，通过深度挖掘诊疗数据，持续优化个体化治疗参数，为声动力疗法的临床研究与推广应用提供坚实的数据保障。</p>
<h3>核心能力</h3>
<ul><li>患者样本数据集中管理</li><li>AI算法驱动治疗参数优化</li><li>临床研究数据支持</li><li>多中心数据协同分析</li></ul>`,
      en: `<h3>Technology Overview</h3>
<p>The AI central database is built on AI algorithms and large-scale clinical sample data. By deeply mining diagnostic data, it continuously optimizes individualized treatment parameters, providing solid data support for the clinical research and application of sonodynamic therapy.</p>
<h3>Core Capabilities</h3>
<ul><li>Centralized management of patient sample data</li><li>AI algorithm-driven treatment parameter optimization</li><li>Clinical research data support</li><li>Multi-center collaborative data analysis</li></ul>`,
    },
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
