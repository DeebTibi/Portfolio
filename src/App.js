import './Reset.css';

import './Seperators.css';
import './App.css';
import './Project_Display.css'
import './menu.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'react-vertical-timeline-component/style.min.css';
import { SocialIcon } from 'react-social-icons';
import face from './Assets/face.jpg';
import haar from './Assets/haar.png';
import portfolio from './Assets/portfolio.png';
import AVL from './Assets/AVL.png'
import GradeSheet from './Assets/grades_website.pdf'
import CV from './Assets/CV.pdf'
import { easeInOut, motion } from "framer-motion"


function App() {

  return (
    <div className='app-background'>
      <div className='app-menu side-pad'>
        <div className='menu-typo menu-container'>
          <h1 className='menu-title'>Socials</h1>
        </div>
        <div className='menu-socials menu-container'>
          <SocialIcon url='https://linkedin.com/in/deeb-tibi' bgColor='rgb(38,38,38)'></SocialIcon>
          <SocialIcon url='https://github.com/DeebTibi' bgColor='rgb(38,38,38)'></SocialIcon>
        </div>
      </div>
      <div className='app-hero'>
        <div className='app-intro'>
          <div className='app-name'>
            <div className='spacer-15p'></div>
            <div className='content-start content-container'>
              <div id="hero-title" >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  className='title-1 primary-text'>
                  {"Hi! I'm"}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} className='title-2 primary-text'>
                  {"Deeb Tibi"}
                </motion.div>
                <div className='spacer-5p'></div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }} className='self-desc secondary-text'>
                  {"Im a B.sc Computer Science student at Tel-Aviv University"}
                </motion.div>
                <div className='spacer-5p'></div>
                <motion.div className='button-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}>
                  <a href={GradeSheet} without rel="noopener noreferrer" target="_blank"><button className='hire-me primary-btn'>{"GRADES"}</button></a>
                  <a href={CV} without rel="noopener noreferrer" target="_blank"><button className='resume'>{"RESUME"}</button></a>
                </motion.div>
              </div>
              <div className='profile-photo'>
                <motion.img animate={{ scale: [0, 1.1, 1] }} transition={{ duration: 0.35, ease: easeInOut }} src={face} className="avatar">
                </motion.img>
                <motion.div animate={{ scale: [0, 1.1, 1] }} transition={{ duration: 0.35, ease: easeInOut, delay: 0.15 }} className='back-circle-1'></motion.div>
                <motion.div animate={{ scale: [0, 1.1, 1] }} transition={{ duration: 0.35, ease: easeInOut, delay: 0.2 }} className='back-circle-2'></motion.div>
              </div>
            </div>
            <div className='app-sep'></div>
          </div>
        </div>
      </div>
      <div className='app-desc section-divider side-pad'>
        <div className='spacer-15p'></div>
        <div className='section-with-padding'>
          <h1 className='paragraph-title-text about-me'>About Me:</h1>
          <div className='spacer-20px'></div>
          <div className='paragraph-text about-me-paragraph'>I'm a computer science and economics enthusiast,
            {`I enjoy practicing and understanding computer related concepts from various fields.
            Learning, teaching, socializing and team work are my daily drivers, that and a good cup of speciality coffee 😄.
            Im currently learning computer science at Tel-Aviv University and plan to enrich my experience, learn, help and aid the Hi-tech field by working in a company.
            I'm familiar and experienced in many programming languages of which are: Python, Java, Node JS, Rustlang, C#, Dart (For flutter development).
            while I'm not that much experienced in the professional space, I do have a good amount of experience working on many personal projects and a considerable amount of freelance work.`}
          </div>
          <div className='spacer-15p'></div>
        </div>
      </div>
      <div className='app-edu side-pad'>
        <div className='spacer-15p'></div>
        <div className='section-with-padding'>
          <h1 className='paragraph-title-text'>Education:</h1>
          <div className='spacer-20px'></div>
          <div className='education-roadmap'>
            <VerticalTimeline lineColor='rgb(38,38,38)'>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(85, 98, 255)', color: '#fff' }}
                iconStyle={{ background: 'rgb(38, 38, 38)' }}
              >
                <h1 className='secondary-text'>Highschool</h1>
                <h1 className='paragraph-text'>2016 - 2019</h1>
                <div className='spacer-20px'></div>
                <div className='paragraph-text'>Graduated Atid Highschool</div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(85, 98, 255)', color: '#fff' }}
                iconStyle={{ background: 'rgb(38, 38, 38)', color: '#fff' }}
              >
                <h1 className='secondary-text'>University</h1>
                <h1 className='paragraph-text'>2021 - Now</h1>
                <div className='spacer-20px'></div>
                <div className='paragraph-text'>Receiving education in Tel-Aviv University</div>
                <div className='bullet-list'><ul class="b paragraph-text">
                  <li>Current GPA: 88.00</li>
                </ul></div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <div className='projects side-pad'>
        <div className='spacer-15p'></div>
        <div className='section-with-padding'>
          <h1 className='paragraph-title-text' style={{ color: "white" }}>
            Side Projects:
          </h1>
          <div className='spacer-20px'></div>
          <div className='project-display'>
            <div className='project-card-basic'>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={haar}
                />
                <CardContent>
                  <Typography style={{ 'fontFamily': 'DM Sans, sans-serif', 'fontWeight': 700 }} variant="h5" component="div">
                    Haar Cascades (Not Finished)
                  </Typography>
                  <Typography variant="body1" style={{ 'fontFamily': 'DM Sans, sans-serif' }}>
                    Based on a 2001 paper by Paul Viola and Michael Jones. In this project I attempted to implement and use the haar features concept utilized in the paper to detect faces on an image.
                    The entire project code is in python.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' size="medium" href='https://github.com/DeebTibi/haar_cascades' >GITHUB</Button>
                </CardActions>
                <div className='spacer-20px'></div>
              </Card>
            </div>
            <div className='project-card-basic'>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={portfolio}
                />
                <CardContent>
                  <Typography style={{ 'fontFamily': 'DM Sans, sans-serif', 'fontWeight': 700 }} variant="h5" component="div">
                    Portfolio
                  </Typography>
                  <Typography variant="body1" style={{ 'fontFamily': 'DM Sans, sans-serif' }}>
                    I thought a Portfolio would put on a good image to any individual looking to turn professional, Thus in this project I use React, JSX, JavaScript, CSS to create a neat simple Portfolio site for myself.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' size="medium" href='https://github.com/DeebTibi/Portfolio'>GITHUB</Button>
                </CardActions>
                <div className='spacer-20px'></div>
              </Card>
            </div>
            <div className='project-card-basic'>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={AVL}
                />
                <CardContent>
                  <Typography style={{ 'fontFamily': 'DM Sans, sans-serif', 'fontWeight': 700 }} variant="h5" component="div">
                    AVL Trees
                  </Typography>
                  <Typography variant="body1" style={{ 'fontFamily': 'DM Sans, sans-serif' }}>
                    An implementation of self balancing Ranked AVL Trees with support for methods like Split, Join, Rank and Select. This project was given to us as an assignment in data structures course.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' size="medium" href='https://github.com/DeebTibi/AVL/tree/main'>GITHUB</Button>
                </CardActions>
                <div className='spacer-20px'></div>
              </Card>
            </div>
          </div>
          <div className='spacer-15p'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
