<template>
  <Layout :background="'gradient'">
    <Header />
    <HomeCard/>
    <ActiveSection :sectionName="'home'">
        <div class="content home">
        <!-- title -->
        <div class="title">
          <h2>Full-Stack Developer</h2>         
        </div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="text-box">
              
              <p>
                A Programmer and a Full Stack Web Developer with good programming and coding skills and a strong academic background in Computer 
                Science. I am a problem solver and love working on new challenges everyday. Among my colleagues I am known for my time management
                 skills and always ready attitude for accepting new challenges. My skill set include a wide range of programming and coding languages.
              </p>
            </div>
          </div>      
          <div class="clear"></div>
        </div>
        <!-- <div class="row" style="margin-top: 119px;">   
          <div class="social" style="text-align: right !important;">
            <div class="col col-d-12 col-t-12 col-m-12">
           <b>   <span class="black">Follow me: </span>&nbsp;&nbsp;&nbsp;
              <a target="_blank" href="https://github.com/meenarani22"
           ><span class="fa fa-github"></span
         ></a>&nbsp;&nbsp;
         <a target="_blank" href="https://linkedin.com/"
           ><span class="fa fa-linkedin"></span
         ></a>&nbsp;&nbsp;
         <a target="_blank" href="https://stackoverflow.com/"
                  ><span class="fa fa-stack-overflow"></span
                ></a></b>
            </div>   
       </div>
        </div> -->
      
      </div>
    </ActiveSection>    
    <ActiveSection :sectionName="'about'">
      <!--
        About
      -->
      <div class="content about">
        <!-- title -->
        <div class="title">About Me</div>

        <!-- content -->
        <div class="row">
          <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                Hello! I’m Meena. A Programmer and a Full Stack Web Developer with good programming 
                and coding skills and a strong academic background in Computer Science. I am a problem 
                solver and love working on new challenges everyday.
              </p>
            </div>
          </div>
          
          
          <div class="clear"></div>
        </div>
        <div class="row service-items ">
            <div class="col col-d-6 col-t-6 col-m-6" style="font-size: 13px !important;">
              <div class="row">
                <div class="col col-d-12 col-t-12 col-m-12">
                  <b>Name:</b><span> Meena Rani</span><br />
                  <b>GitHub: </b><a href="https://github.com/meenarani22" target="_blank">github.com/meenarani22</a>  <br />
                  <b>Phone:</b> <span> (431)-866-5003</span><br />
                  <b>Role:</b><span> Web Developer</span>
                </div>                
              </div>
            </div>
          <!-- service item -->
          <div class="col col-d-6 col-t-6 col-m-6"  style="font-size: 13px !important;">
            <div class="row">
                <div class="col col-d-12 col-t-12 col-m-12">
                  <b>Freelance:</b> <span> Available</span><br />
                  <b>Email:</b><span> contactmeenarani@gmail.com</span> <br />
                  <b>Address:</b><span> Winnipeg, Manitoba. Ca</span>
                </div>               
              </div>
          </div>
          </div>
      </div>

     
      
    </ActiveSection>
    <ActiveSection :sectionName="'resume'">
      <!--
        Resume
      -->
      <div class="content resume">
        <!-- title -->
        <div class="title">Resume</div>

        <!-- content -->
        <div class="row">
          <!-- experience -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-briefcase"></i></div>
              <div class="name">Experience</div>
            </div>
            <div class="resume-items">
              <div class="list resume-item border-line-h active">
                <div class="date">March 2022 - October 2022</div>
                <div class="name">Full Stack Developer</div>
                <div class="company">SGA Tech Solutions</div>
               <ul style="list-style: disc !important">
                <li>
                  Worked on ERP System for manufacturing firms to keep track their daily basis sales and purchases
                  records, developed various Reports and Cheque Run functionality using Python for back-end developement, Jinja and vuejs for front-end developement
                  , mariadb for maintaing the database and GitHub uses for version controlling.
                  Worked with the product team to develop upcoming functionalities in Live ERP System.
                  Migrated client’s data in the new ERP system, according to their format and deployed code on Digital Ocean cloud Server.   
                  
                </li>
                <li>
                  Developed web application for client to manage their company's information and manage their projects dynamically and having different user roles and permissions
                  using n-tier object-oriented architecture with .Net Core MVC and Entity Framework and SQL Server Database.
                </li>
               </ul>      
              </div>
              <div class="list resume-item border-line-h active">
                <div class="date">April 2018 - Feburary 2022</div>
                <div class="name">Software Developer</div>
                <div class="company">Interglobe technology Quotient </div>
                <ul style="list-style: disc !important">
                <li>Worked on various projects for Self Booking Tool (SBT)
                   and Corporate Booking Tool (CBT) to book flight tickets using Service Oriented Architecture
                    (SOA). Worked on .Net MVC, Rest API service using WCF for back-end developed, 
                    front-end developed using Razor view, CSS,HTML,ajax and Jquery 
                    and SQL Server to write SQL queries and store procedures</li>
                <li>Worked with the product team to develop upcoming functionalities in Live Corporate Booking Tool and Self Booking Tool to book flight tickets and Hotel ticket online or offline</li>
                <li>Designed custom reports using Microsoft SQL Server Reporting Service (SSRS)</li>
                <li>Developed mobile application using Angular 7</li>
                <li>Tested, maintained, and recommended software improvements to ensure strong functionality and code optimization</li>
                <li>	Used Team Foundation Server (TFS) for version controlling</li>
              </ul>
              </div>
             
            </div>
          </div>

          <!-- education -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="fa fa-university"></i></div>
              <div class="name">Education</div>
            </div>
            <div class="resume-items">
              <div class="list active resume-item border-line-h">
                <div class="date">2011 - 2014</div>
                <div class="name">Master of Computer Applications</div>
                <div class="company">RIMT(Punjab Technical University)</div>
                <p>
                  Master of Computer Applications(MCA) focusses on learn all the advanced aspects in programming, software development, optimizations and operating systems.
                  Completed MCA from one of the best engineering university in Punjab gives you an extra edge. It caters with thriving research environment, advanced industry sponsored infrastructure and stimulating teaching aid.
                   Their program covers all fundamental as well as advanced concepts of engineering and computing,
                </p>
              </div>
              <div class="list active resume-item border-line-h">
                <div class="date">2009 - 2011</div>
                <div class="name">Bachelor's in Computer Application</div>
                <div class="company">RIMT(Punjab Technical University)</div>
                <p>
                  Bachelor's in Computer Application(BCA) focusses on knowledge on the 
                  basics of computer application and software development.
                  BCA includes database management systems, operating systems, software engineering,
                   web technology and languages such as C, C++, HTML, Java etc. Pursued BCA from one of the best engineering university in Punjab gives you an extra edge.
                   Their program covers all fundamental as well as advanced concepts of engineering and computing, paired with a chance to gain exposure in emerging technologies such as Internet of Things (IoT), Mobile Computing, and Open Source and Open Standard.
                </p>
              </div>
             
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>

      <!--
        Skills
      -->
      <div class="content skills">
        <!-- title -->
        <div class="title">My Skills</div>

        <!-- content -->
        <div class="row">
          
          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list circles">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="name">Coding</div>
              </div>
              <ul>
                <SkillProgress :skills="skills" />
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-list"></i></div>
                <div class="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div class="name">Design and development responsive websites</div>
                </li>   
                <li>
                  <div class="name">Website hosting</div>
                </li>
                <li>
                  <div class="name">Database Management</div>
                </li>
                <li>
                  <div class="name">iOS and android apps</div>
                </li>
                <li>
                  <div class="name">Create logo design</div>
                </li>
                             
              </ul>
            </div>
          </div>
<!-- skill item -->
<div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-paint-brush"></i></div>
                <div class="name">developement</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">.Net MVC/.Net Core/WCF</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">SQL Server</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">HTML/CSS/JavaScript/jQuery</div>
                  <div class="progress">
                    <div class="percentage" style="width: 75%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">AngularJS//Angular 7/ VUEJS</div>
                  <div class="progress">
                    <div class="percentage" style="width: 65%"></div>
                  </div>
                </li>
                <li>
                  <div class="name">Xamarin Mobile Development</div>
                  <div class="progress">
                    <div class="percentage" style="width: 45%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- skill item -->
          <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list dotted">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="fa fa-flag"></i></div>
                <div class="name">Languages</div>
              </div>
              <ul>
                <li class="border-line-h">
                  <div class="name">English</div>
                  <div class="progress">
                    <div class="percentage" style="width: 90%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Punjabi</div>
                  <div class="progress">
                    <div class="percentage" style="width: 100%"></div>
                  </div>
                </li>
                <li class="border-line-h">
                  <div class="name">Hindi</div>
                  <div class="progress">
                    <div class="percentage" style="width: 100%"></div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>

    </ActiveSection>
    <!--
    Card - Contacts
  -->
    <Contact />
  </Layout>
</template>

<script>
import ActiveSection from "../src/components/ActiveSection.vue";
import Blogs from "../src/components/Blogs.vue";
import Contact from "../src/components/Contact.vue";
import SkillProgress from "../src/components/SkillProgress.vue";
import Testimonials from "../src/components/Testimonials.vue";
import TypingAnimation from "../src/components/TypingAnimation.vue";
import WorkIsotope from "../src/components/WorkIsotope.vue";
import Header from "../src/layout/Header.vue";
import Layout from "../src/layout/Layout.vue";
import { navFunction } from "../src/navFunction";
import HomeCard from "../src/components/HomeCard.vue"
export default {
  name: `index-new`,
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "css/new-skin/new-skin.css",
        },
        {
          rel: "stylesheet",
          href: "css/demos/demo-1-colors.css",
        },
      ],
    };
  },
  data() {
    return {
      navFunction,
      skills: [
        { name: ".Net MVC", value: 90 },
        { name: ".WCF", value: 70 },
        { name: ".Net Core", value: 80 },
        { name: "SQL Server", value: 85 },
        { name: "jQuery / JavaScript", value: 85 },
        { name: "HTML / CSS", value: 85 },
      ],
    };
  },
  components: {
    Layout,
    Header,
    TypingAnimation,
    ActiveSection,
    Contact,
    Blogs,
    WorkIsotope,
    SkillProgress,
    Testimonials,
    HomeCard,
  },
};
</script>
