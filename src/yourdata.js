// Skills Icons
import htmlIcon from "./images/html.png"
import cIcon from "./images/c.png"
import reactIcon from "./images/react.png"
import jsIcon from "./images/javascript.png"
import javaIcon from "./images/java.png"
import pythonIcon from "./images/python.png"
import mongooseIcon from "./images/mongoose.png"
import expressIcon from "./images/express.png"
import reduxIcon from "./images/redux.png"
import nodeIcon from "./images/nodejs.png"

// Social Icon
import githubIcon from "./images/github.png"
import linkedIn from "./images/linkedIn.png"


export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Yacine",
  headerTagline: [
    //Line 1 For Header
    "Hey, I'm Yacine!",

  ],
  //   Header Paragraph
  headerParagraph:
    "Welcome to my portfolio site, here I show only a sample of what work I've done so far, come take a look!",

  //Contact Email
  contactEmail: "yac.sao453@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Sylabl", //Project Title - Add Your Project Title Here
      para:
        "Sylable is an open source project that aims to allow users to post videos and have an AI analyze their body language and speaking patterns to suggest improvments.", // Add Your Service Type Here
      fullPara: "I was a fullstack developer on Sylabl. both frontend and backend were done using the MERN stack. I was responsible for a majority of the website including creating a secure sign up system using MongoDB, a login system that authenticates the user with a JSON webtoken, and a personal video posting page that allowed the user to upload and view their own .mp4 videos that is stored on an Amazon S3 bucket. The AI component is not completed yet but the intention is to allow the user to view relevant statistics that would give the user areas to improve in their speech delivieries.",
      id: "Sylabl",
      github: [
        {
          link: "https://github.com/Yacine-Saoudi/orate-io-frontend",
          name: "Sylabl Frontend Repo"
        },
        {
          link: "https://github.com/Yacine-Saoudi/orate-io-backend",
          name: "Sylabl Backend Repo"
        },
      ],
      langs: [
        {
          img: javaIcon,
          para:
            "Java",
        },
        {
          img: jsIcon,
          para:
            "JavaScript",
        },
        {
          img: nodeIcon,
          para:
            "NodeJS",
        },
        {
          img: reactIcon,
          para:
            "React",
        },
        {
          img: reduxIcon,
          para:
            "Redux",
        },
        {
          img: expressIcon,
          para:
            "Express",
        },
        {
          img: mongooseIcon,
          para:
            "Mongoose",
        },
        {
          img: htmlIcon,
          para:
            "HTML",
        },
      ]
     },
 
    {
      title: "Calorie Counter", //Project Title - Add Your Project Title Here
      para:
        "This Calorie Counter allows the user to search for any food item and add it to their daily list which counts how many calories total has been consumed.", // Add Your Service Type Here
      fullPara: "The Calories counter was completed in less than 24-hours with a team of 4. It was coded in Python and used rapidAPI to fetch the name of the food the user put in and return with relevant search results. I had only learned how to use API's recently so this was my first time using them in a project, to great success. My responsibilities centered around the search and API code, the GUI was created using the TKinter library",
      id: "Calorie",
      github: [
        {
        link: "https://github.com/Yacine-Saoudi/hackathonRepo",
        name: "Calorie Counter Repo"
        },
      ],
      langs: [
        {
          img: pythonIcon,
          para:
            "Python",
        }
      ]
    },
    {
      title: "Mock Social Media Website", //Project Title - Add Your Project Title Here
      para:
        "Website that allows a user to create an account and add, update, or delete their information", // Add Your Service Type Here
      fullPara: "This unfinished project was my first time making a sizeable project using the MERN stack. As it is a fullstack project, I worked on making post, get, delete, etc. requests for user accounts that the user made themselves. Most requests required authentication and was done using a JSON web token. Passwords and account information were stored using MongoDB and salted to be kept secure. I also used tools like Postman to test any HTTP requests. ",
      id: "Mock", 
      github: [
        {
        link: "https://github.com/Yacine-Saoudi/mern-practice",
        name: "Mock Site Repo"
        },
      ],
      langs: [
        {
          img: javaIcon,
          para:
            "Java",
        },
        {
          img: jsIcon,
          para:
            "JavaScript",
        },
        {
          img: nodeIcon,
          para:
            "NodeJS",
        },
        {
          img: reactIcon,
          para:
            "React",
        },
        {
          img: expressIcon,
          para:
            "Express",
        },
        {
          img: mongooseIcon,
          para:
            "Mongoose",
        },
        {
          img: htmlIcon,
          para:
            "HTML",
        },
      ]    
    }
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaTwo:    "As a second year student at Carleton, in terms of projects, I worked in Java, Python, and C during my courses and hackathons. I've been programming since high school using a variety of languages. I worked with the MERN webstack and have been a fullstack developer for Sylabl, an open-source project.",


  aboutParaOne:
    "I'm a second year Computer Science honours student in the cybersecurity stream and am always looking to find avenues to increase my experience, below you can see only a few of the projects that I've done.",
  aboutImage:
    "https://i.imgur.com/QJApxMQh.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: javaIcon,
      para:
        "Java",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: nodeIcon,
      para:
        "NodeJS",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: reduxIcon,
      para:
        "Redux",
    },
    {
      img: expressIcon,
      para:
        "Express",
    },
    {
      img: mongooseIcon,
      para:
        "Mongoose",
    },
    {
      img: pythonIcon,
      para:
        "Python",
    },
    {
      img: cIcon,
      para:
        "C",
    },
    {
      img: htmlIcon,
      para:
        "HTML",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Thanks for taking a look! If you want to contact me further take a look at the links below.",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Yacine-Saoudi" },
    {
      img: linkedIn,
      url: "https://www.linkedin.com/in/yacine-saoudi-9635121b0//",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
