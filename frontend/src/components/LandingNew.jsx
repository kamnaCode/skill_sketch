import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import "./Group7.css";
import "./Group5.css";
import { Ellipse1 } from "./Ellipse1.jsx";

import Card from 'react-bootstrap/Card'

function LandingPage() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                }
                else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }

            })
            .catch(err => console.log(err));
    };


    return (
        <Card  style={{width:"100%"}}>
<div>
            
            <h2 className='mb-3 text-primary'>Skill Sketch</h2>

            <>
            
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Skill Sketch</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/" element ={<LandingPage/>} > Home</Nav.Link>
                            <Nav.Link href="/Login" element ={<Login/>} >Login</Nav.Link>
                            <Nav.Link href="/register" element={<Register/>}>Sign Up</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>


   
   
</div>

<div className="welcome-to-skill-sketch-your-personalized-platform-for-transforming-everyday-projects-into-powerful-career-assets-whether-you-re-working-on-a-new-assignment-completing-a-challenging-task-or-honing-your-skills-skill-sketch-helps-you-document-your-journey-with-precision-and-professionalism-with-our-ai-powered-tools-you-can-effortlessly-convert-your-work-experiences-into-polished-journal-entries-building-a-comprehensive-career-portfolio-that-showcases-your-growth-when-it-s-time-to-take-the-next-step-skill-sketch-makes-it-easy-to-generate-tailored-c-vs-that-highlight-your-unique-talents-and-achievements-all-drawn-from-your-meticulously-maintained-journal-start-sketching-your-skills-today-one-project-at-a-time">
        Welcome to Skill Sketch, your personalized platform for transforming
        everyday projects into powerful career assets. Whether you&#039;re
        working on a new assignment, completing a challenging task, or honing
        your skills, Skill Sketch helps you document your journey with precision
        and professionalism. With our AI-powered tools, you can effortlessly
        convert your work experiences into polished journal entries, building a
        comprehensive career portfolio that showcases your growth. When
        it&#039;s time to take the next step, Skill Sketch makes it easy to
        generate tailored CVs that highlight your unique talents and
        achievements, all drawn from your meticulously maintained journal. Start
        sketching your skills today, one project at a time!
        <br />{" "}
      </div>
      <img className="line-1" src="line-10.svg" />
        
Easily enter details about your current projects, including title, description, tasks, and outcomes

<div className={"group-5 " }>
      <div className="rectangle-19"></div>
      <div className="rectangle-20"></div>
      <img className="line-2" src="line-20.svg" />
      <div className="how-it-works">How It Works </div>
      <img className="ellipse-1" src="ellipse-10.svg" />
      <Ellipse1 className="ellipse-2-instance"></Ellipse1>
      <Ellipse1 className="ellipse-3-instance"></Ellipse1>
      <Ellipse1 className="ellipse-4-instance"></Ellipse1>
      <div className="step-1-input-your-project-details">
        Step 1: Input Your Project Details{" "}
      </div>
      <div className="step-2-convert-to-professional-entries">
        Step 2: Convert to Professional Entries{" "}
      </div>
      <div className="step-3-build-your-career-journal">
        Step 3: Build Your Career Journal{" "}
      </div>
      <div className="step-4-generate-tailored-c-vs">
        Step 4: Generate Tailored CVs{" "}
      </div>
      <div className="easily-enter-details-about-your-current-projects-including-title-description-tasks-and-outcomes">
        Easily enter details about your current projects, including title,
        description, tasks, and outcomes.{" "}
      </div>
      <div className="maintain-a-chronological-journal-of-your-work-experiences-skills-and-achievements-accessible-anytime">
        Maintain a chronological journal of your work experiences, skills, and
        achievements, accessible anytime.{" "}
      </div>
      <div className="create-customized-c-vs-based-on-your-journal-entries-and-specific-job-descriptions-ensuring-you-always-put-your-best-foot-forward">
        Create customized CVs based on your journal entries and specific job
        descriptions, ensuring you always put your best foot forward.{" "}
      </div>
      <div className="leverage-the-power-of-ai-to-convert-your-input-into-polished-professional-journal-entries">
        Leverage the power of AI to convert your input into polished,
        professional journal entries.{" "}
      </div>
    </div>
                        
        </Card>
        
    );
}

export default LandingPage