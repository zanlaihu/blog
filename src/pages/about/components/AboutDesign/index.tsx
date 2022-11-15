import './index.css'

const AboutDesign = () => {
  const showpara = [
    '“那你有什么可以展示给我看的吗？”',
    '这是我在去年一场面试中收到的一句话。',
    '那位面试官很友好，一直在试图挖掘我身上的一些闪光点，但最终没有达到他的预期。一方面是那时候掌握的知识点不够而且和他需求不匹配。另一方面也是自己的表达能力有待提高。所以他无比沮丧的问了这一句话。',
    '也因为这句话，让我萌生了建立这个网站的想法。',
    '做这个网站，是为了让他人可以更好地了解和判断我是不是贵司需要的人。',
    '并且，我是一个前端开发人员，那么做一个自己的网站，也是一个很好地展示个人能力的方式。',
  ]
  const para1 = [
    '一开始只是想单纯做一个简历页面。在做的过程中我发现还可以使用它来展示项目，和统一展示一些学习笔记。',
    '构画如下图所示：',
  ]
  const para2 = [
    '因为我并非设计出身，所以UI可能没有特别好看。',
    '相比老版，删除了笔记页面。因为语雀的目录结构和文档真的做的很好了，实在是没有必要耗时再去做一个。（可能未来有空会单独去做吧）',
  ]
  const para3 = [
    '这个网站是基于GitHub pages来部署。使用React框架。',
    '但是因为GitHub pages不支持SPA，所以在点击进入二级页面，比如：“关于我”、“我的项目”等页面时，不能进行刷新，因为GitHub pages只能识别“https://zanlaihu.github.io/blog/”，无法识别“https://zanlaihu.github.io/blog/me”。',
    '后续应该会打算使用其他服务器来搭载，从而避免这个问题。',
  ]

  return (
    <div className='about-design-content'>
      <div className='about-design-middle'>
        <div className='about-design-title'>为什么要建立本站</div>
        {showpara.map((item, index) => (
          <div className='about-design-text' key={index}>
            {item}
          </div>
        ))}
        <div className='about-design-title'>关于设计</div>
        {para1.map((item, index) => (
          <div className='about-design-text' key={index}>
            {item}
          </div>
        ))}
        <div className='about-design-img-content'>
          <img
            src='https://cdn.marmot-cloud.com/storage/2022/11/11/20fe916f-ac14-4ecc-853a-08546597b21d.svg'
            className='about-design-img'
          ></img>
        </div>
        {para2.map((item, index) => (
          <div className='about-design-text' key={index}>
            {item}
          </div>
        ))}
        <div className='about-design-title'>关于部署</div>
        {para3.map((item, index) => (
          <div className='about-design-text' key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutDesign
