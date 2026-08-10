import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

const honorList = [
  { year: "2021", name: "黑龙江省科学技术奖（进步类）一等奖" },
  { year: "2021", name: "科技型中小企业（哈尔滨市科技局）" },
  { year: "2021", name: "医疗器械经营许可证 / 第二类医疗器械经营备案凭证" },
  { year: "2022", name: "国家高新技术企业认定" },
  { year: "2022", name: "知识产权管理体系认证证书" },
  { year: "2023", name: "黑龙江省专精特新中小企业" },
  { year: "2023", name: "创新型中小企业称号" },
  { year: "2024", name: "最具转化潜力科技成果（黑龙江省科技厅）" },
  { year: "2024", name: "医疗器械产品分类界定申请告知书（国家药监局）" },
  { year: "2025", name: "人工智能医疗器械创新任务揭榜挂帅智能数字疗法产品组第三名（工信部、药监局）" },
];

const teamMembers = [
  { name: "刘国超", role: "创始人、董事长", desc: "哈工大和清华大学双硕士，哈工大教授，享受政府特殊津贴专家；曾任哈工大国家大学科技园常务副总裁、辰能哈工大高科技风险投资有限公司总经理，现任哈尔滨股权投资协会会长。曾主持投资友搏药业、九洲电气等多家高科技企业。" },
  { name: "田野", role: "项目发明人、首席科学家", desc: "哈尔滨医科大学心血管内科学博士、二级教授、心内科主任，哈工大博士后，约翰霍普金斯大学医学院高级访问学者；承担国家重大科研仪器研制项目2项、国家自然基金重点项目1项，获省级科技进步奖12项，发表SCI论文141篇。" },
  { name: "张旺生", role: "总经理", desc: "药品/医疗器械专家、执业药师，曾在雅培等大型医疗器械公司任高管，熟悉医疗器械临床试验及申报审批流程，具备丰富的营销与医院推广经验。" },
  { name: "张雪龙", role: "总工程师", desc: "高级工程师、工业自动化领域专家，哈工大工业电气自动化专业毕业，历任国营松江电炉厂厂长兼总工程师，负责公司设备研发。" },
  { name: "王宏民", role: "研发总监", desc: "教授、电机和电器领域专家，哈工大微电机专业毕业，负责公司新技术开发工作。" },
  { name: "吴群", role: "董事、管理总监兼董事会秘书", desc: "高级工程师，哈工大技术物理专业毕业，熟知企业运作，负责公司战略、人事和法务工作。" },
  { name: "卢东阳", role: "董事长助理", desc: "负责公司大健康产品的研发、生产和市场营销工作。" },
  { name: "刘凯", role: "副总工程师兼研发中心主任", desc: "哈工大机械成型及控制工程、仪器科学与技术、电机与电气本硕博，协助总工程师负责设备研发与研发中心管理。" },
  { name: "吴国栋", role: "医学总监", desc: "哈医大生物化学与分子生物学硕士，负责病理研究、临床试验、专利申请和课题申报。" },
  { name: "田浩", role: "临床中心主任", desc: "主治医师、哈医大内科学硕士，熟悉临床试验设计、招募、分组与随访，负责临床医学及临床试验。" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title="走进声诺"
        subtitle="哈尔滨声诺医疗科技有限公司 —— 国家高新技术企业，专注高端医疗装备研发，全球首台（套）动脉斑块声动力智能诊疗系统的缔造者。"
        crumb="走进声诺"
      />
      <AboutContent />
      <Footer />
      <SideTools />
    </main>
  );
}

function AboutContent() {
  return (
    <>
      <section className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[20px]">公司简介</h2>
          <div className="prose max-w-none text-[15px] md:text-[16px] leading-[30px] text-[#555] space-y-4">
            <p>
              哈尔滨声诺医疗科技有限公司成立于2020年12月3日，注册资本1429.9999万元，坐落于哈尔滨市松北区中源大道15199号企业加速器4号楼一单元。公司是国家认定高新技术企业、黑龙江省专精特新中小企业，专注声动力、经颅聚焦超声无创诊疗高端医疗器械的研发、设计、生产、推广与销售。
            </p>
            <p>
              2020年12月，公司通过网上竞价方式购买了哈尔滨医科大学田野教授团队"巨噬细胞靶向声动力疗法治疗动脉粥样硬化斑块"科研成果的全部专利和核心技术，在黑龙江省哈尔滨新区转化落地。公司依托国家重大科研仪器研制项目研究成果，与哈尔滨工业大学、中科院深圳先进技术研究院、国家高性能医疗器械创新中心、哈尔滨医科大学等高校院所深度合作，自主创新、开发研制全球首台（套）"动脉斑块声动力智能诊疗系统"（MT-SDT2.0）。
            </p>
            <p>
              该设备是集生物医疗技术和大数据AI于一体的三类创新型医疗器械，属"国际首报"，完全拥有自主知识产权。公司已获授权专利、软著、外观设计共31项，累计获得13项国家自然科学基金及2项国家支撑计划资助，获得2021年黑龙江省科学技术奖（进步类）一等奖。
            </p>
          </div>
        </div>
      </section>

      <HistoryBlock />

      <OrgBlock />

      <TeamBlock />

      <HonorBlock />
    </>
  );
}

function HistoryBlock() {
  const milestones = [
    { year: "2008-2021", title: "田野教授团队14年科研攻关", desc: "200例校内科研临床、15项专利、近2000万国家自然科学基金资助" },
    { year: "2020.12", title: "声诺医疗成立", desc: "购买田野教授团队科研成果专利技术，在哈尔滨新区转化落地" },
    { year: "2021", title: "完成天使轮融资", desc: "获交润科技、哈尔滨创新投资 800万元天使轮投资" },
    { year: "2023", title: "完成Pre-A轮融资", desc: "获深创投、瑞恒红土、穗甬创投 1800万元 Pre-A1融资；获省重点研发450万元" },
    { year: "2025.07", title: "设备检测合格", desc: "通过天津市医疗器械质量监督检验中心检测，具备临床试验条件" },
    { year: "2025.12", title: "获得伦理批件", desc: "通过哈尔滨医科大学附属第一医院伦理委员会审查，签约CRO公司" },
    { year: "2026", title: "启动多中心临床试验", desc: "启动颈动脉出血斑块、下肢动脉斑块前瞻性多中心随机对照临床试验" },
    { year: "2028.06", title: "取得三类注册证", desc: "计划取得动脉斑块声动力智能诊疗系统三类医疗器械注册证" },
    { year: "2029", title: "启动IPO", desc: "计划启动IPO，登陆多层次资本市场" },
  ];
  return (
    <section className="relative bg-[#f5f5f5] py-[60px] md:py-[90px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">发展历程</h2>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-3 md:gap-8 pb-[25px] md:pb-[30px] border-l-2 border-[#c7000b] pl-5 md:pl-8 ml-2">
              <span className="absolute left-[-9px] top-[6px] w-[16px] h-[16px] bg-[#c7000b] rounded-full" />
              <div className="md:w-[150px] md:text-right md:pr-4 md:-ml-[192px] md:pt-0">
                <span className="text-[16px] md:text-[18px] font-bold text-[#c7000b]">{m.year}</span>
              </div>
              <div>
                <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815]">{m.title}</h3>
                <p className="text-[14px] md:text-[15px] text-[#808080] mt-[4px]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgBlock() {
  return (
    <section className="relative bg-white py-[60px] md:py-[90px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">组织架构</h2>
        <p className="text-[15px] md:text-[16px] leading-[30px] text-[#555] mb-[25px]">
          公司管理分三条线，职责明确、协同高效：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "设备中心", desc: "负责设备研发、组装、调试、检测、生产" },
            { title: "医学中心", desc: "负责设备的医学研究和临床试验" },
            { title: "管理中心", desc: "负责公司发展战略、行政、综合、人力资源、质量管理、党群、后勤管理" },
          ].map((o, i) => (
            <div key={i} className="border border-[#E6E6E6] rounded-[0.6em] p-[25px] hover:shadow-lg transition-shadow">
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#c7000b] mb-[10px]">{o.title}</h3>
              <p className="text-[14px] leading-[26px] text-[#555]">{o.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-[#808080] mt-[25px] leading-[26px]">
          公司现有员工30人（研发人员15人），具有高学历、高职称的员工占90%，初步建立了一支素质优良、专业化程度高的团队。深圳声诺医疗科技有限公司（持股90%）依托国家高性能医疗器械创新中心开展关键技术联合攻关。
        </p>
      </div>
    </section>
  );
}

function TeamBlock() {
  return (
    <section className="relative bg-[#f5f5f5] py-[60px] md:py-[90px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">管理团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((t, i) => (
            <div key={i} className="bg-white rounded-[0.6em] p-[25px] shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815]">{t.name}</h3>
              <p className="text-[13px] text-[#c7000b] mt-[2px]">{t.role}</p>
              <p className="text-[14px] text-[#555] leading-[26px] mt-[8px]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HonorBlock() {
  return (
    <section className="relative bg-white py-[60px] md:py-[90px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">企业荣誉</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {honorList.map((h, i) => (
            <div key={i} className="flex items-center gap-4 border border-[#E6E6E6] rounded-[0.6em] p-[18px] hover:border-[#c7000b] transition-colors">
              <span className="flex-shrink-0 text-[13px] font-bold text-white bg-[#c7000b] px-[10px] py-[4px] rounded-[0.3em]">{h.year}</span>
              <span className="text-[14px] md:text-[15px] text-[#333]">{h.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
