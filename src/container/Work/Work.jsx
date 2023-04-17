import React, {useState, useEffect}  from 'react'
import {AppWrap, MotionWrap} from '../../wrapper'
import {AiFillEye} from 'react-icons/ai'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import {urlFor, client} from '../../client'
import './Work.scss'



const works = [
  {
    title: '5 Proofreading Tools To Keep Your Writing Mistake-free.', 
    description: "Proofreading is fundamental to a writer’s editing process. Most writers often dismiss the importance of editing, which is very vital to your writing journey, because a clean and accurate text makes the reader’s experience extensively engaging and seamless. ", 
    imgUrl: images.download,
    projectLink: 'https://blog.booktraction.com/2023/02/06/5-proofreading-tools-to-keep-your-writing-mistake-free/'
   
  },
  {
    title: 'Self-Publishing Vs Traditional Publishing', 
    description: 'The key difference between self-publishing and traditional-publishing is simply the level of control both parties have over the rights and production of their books. ', 
    imgUrl:images.publishing,
    projectLink: 'https://blog.booktraction.com/2023/03/13/self-publishing-vs-traditional-publishing/'
  },

  {
    title: '5 Best Paraphrasing Tools For Every Writer', 
    description: 'paraphrasing tools helps to ensure that your writing looks professional, concise and readable all while giving your work originality. ', 
    imgUrl:images.paraphrase,
    projectLink: 'https://blog.booktraction.com/2023/02/13/5-best-paraphrasing-tools-for-every-writer/'
  },
  {
    title: 'How To Identify The Target Audience For Your Book', 
    description: 'Identifying with your target audience, this helps gives room to more accommodations not just in the content of your book, but also enlarges your book coverage in terms of sales. So, you should not tick that off your list!', 
    imgUrl:images.identify,
    projectLink: 'https://blog.booktraction.com/2023/02/10/how-to-identify-your-target-audience-for-your-book/'
  },
  {
    title: 'Literary Agents:Why Writers Need Them', 
    description: 'We live in the times where there are thousands of amazing writers of the very same niche, and the chances of you getting the desired recognition by a publishing agency gets slimmer than you’d like to admit, and with that, comes the introduction of literary agents. ', 
    imgUrl:images.literary,
    projectLink: 'https://blog.booktraction.com/2023/02/20/literary-agentswhy-writers-need-them/'
  },
  {
    title: 'Quick Tip To Writing a Self-help Book', 
    description: 'Writing a self help book is more common than you think. A survey carried out in 2022 showed over 70,000 books on Amazon were self help books.  ', 
    imgUrl:images.self,
    projectLink: 'https://blog.booktraction.com/2023/01/27/quick-tip-to-writing-a-self-hlep-book/'
  },
  {
    title: 'Secrets To Writing Compelling Books', 
    description: " There’s no shame in seeking just a little guidance, especially when you’re looking out to write compelling books that are sure to get your readers hooked and running back for more.", 
    imgUrl:images.secrets,
    projectLink: 'https://blog.booktraction.com/2023/01/24/secrets-to-writing-compelling-books/'
  },
   {
    title: "Overcoming Writer’s Block: 4 simple steps.", 
    description: "The causes of writer’s block varies, but one thing for certain is that it largely has to do with our mental state. With careful research and analysis by some professionals, some causes has been identified as the cause to having a writer’s block.", 
    imgUrl:images.overcome,
    projectLink: 'https://blog.booktraction.com/2023/01/21/overcoming-writers-block4-simple-steps/'
  },
]
const Work = () => {

  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  // const [works, setWorks] = useState([])

  // useEffect(() => {
  //  const query = '*[_type == "works"]'

  //  client.fetch('*[_type == "works"]')
  //  .then((data) => setWorks(data))
  // }, [])
  
  return (
    <section id='portfolio' className='app__works'>
       <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>

      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}} 
      className='app__work-portfolio'
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name}/>

              <motion.div
              whileHover={{opacity: [0, 1]}}
              transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
              className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration: 0.25}}
                  className="app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop:10}}>{work.description}</p>
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                 <p className='p-text' style={{marginTop:10}}>Continue Reading...</p>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}


export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'works',
  "app__whitebg"
  ) 