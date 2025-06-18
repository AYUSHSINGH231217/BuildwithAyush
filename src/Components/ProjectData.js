import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const projectData = [
  {
    name: "TaskHub",
    image: WigglesImage,
    description: "A full-stack task manager app where users can create, update, and delete daily tasks. Each user's tasks are stored securely in MongoDB, allowing persistent tracking across sessions. It also features filters for pending and completed tasks.",

  },
  {
    name: "BookNest",
    image: NewsletterImage,
    description: "A book collection web app where users can add and manage their personal reading list. MongoDB is used to store book details such as title, author, and read status. This project helped in understanding CRUD operations, React hooks, and Express routing.",

  },
  {
    name: "FitTrack",
    image: RogfreeImage,
    description: "A fitness tracking web app that allows users to log daily workouts, monitor progress, and set fitness goals. Each workout entry is saved in MongoDB, with the UI built using React and styled-components. This project focuses on backend API integration and form handling.",

  },
  {
    name: "QuickNotes",
    image: TindogImage,
    description: "A simple notes application where users can write, edit, and delete notes in real-time. It uses MongoDB for data persistence and Express for API creation. This project was aimed at learning full-stack development with React, MongoDB, and RESTful APIs.",

  }
];

export default projectData;
