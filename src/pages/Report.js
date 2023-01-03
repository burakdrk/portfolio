import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import '../styles/Report.css';

const Report = () => {
    const { id } = useParams();

    switch(id) {
        case '1':
            return(
                <>
                    <Header page={'report'} report={{id, desc: 'Application Developer - Kenna'}}/>
                    <div className='main_wrapper reports'>
                        <h2>Introduction 👋</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I am Burak and I am a 3rd year Computer Science Co-op student at the University of Guelph. In this work term report, I will share my experiences working at Kenna as an application developer for 4 months which was my first co-op, highlighting what I've learned, and how I accomplished my goals.</p>
                        <h2>Information about Kenna 📍</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kenna is a marketing solutions company located in Mississauga, Ontario helping a number of client companies by providing them software, data management solutions/systems since 1985. The team I worked with, the application dev team, designs and maintains many web applications for a client which is the part that is related to my major, computer science.</p>
                        <h2>Job Description 📖</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My main task during this term was to maintain and add new software features like APIs, front-end code, SQL stored procedures to a retailer website according to the business requirements and quality assurance items of the account team. The technologies I used were IBM Domino, Microsoft SQL, React.js, Node.js and many other smaller frameworks. The tasks varied from front-end to back-end with more focus to front-end. While maintaining and adding new features/sub-applications for the retailer website was my main task, I also worked on migrating that website from the legacy frameworks to more modern frameworks using React and Node, which I found to be more interesting. I knew the basics of the technologies and the transferable skills that were required for this job before starting, and learned more and got better as I went along so I can safely say that this co-op experience definitely enhanced my academic experience as well. I also think I was able to accomplish the goals I set for myself when I first started which I will talk about in more detail in the next section.</p>
                        <h2>Goals 🎯</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My first goal was improving my technological literacy and I believe that I was mostly able to learn/improve on the technologies I wanted during this work term. I mostly did front end tasks, specifically React.js and HTML/CSS but I was able to do some back end (SQL, Node.js) as well. For example, one of the big tasks I worked on was migrating a legacy app to modern frameworks which really improved my React, Node and SQL skills. Overall, I was able to do all of the tasks that I was assigned without any issues, and I got better during this process, and I believe I am a lot more knowledgeable on fullstack development than I first started.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another goal I had was improving my oral communication skills which I think is important in any field and I believe that I was able to improve a lot in terms of this goal. I was able to do the tasks I was assigned successfully and during the process I communicated with not only my supervisor but a lot of other people from the account team to make sure I was doing everything right. I attended briefings for the projects, asked questions and gave my opinions and received good feedback in the end.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My last goal was about improving my problem solving skills which I think is very important especially in software development. Most of the tasks I worked on during this work term required me to use my problem solving skills as they were programming related tasks. The more I did them, the better I got, and I was able to reflect on what I've learned to come up with the best solutions. For example, the react migration task I mentioned before required me to come up with a structure for the components that was abstract so that it would work optimally with different pages. I also was able to fix an issue that we faced with the Node.js server which required me to investigate and identify the problems in the app. Overall, I was able to come up with good solutions and fix the problems successfully and now I believe I am a better problem solver/programmer than I was when I first started.</p>
                        <h2>Conclusion 🔚</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the end, I can easily say that I had a great time with Kenna, accomplished all of my goals, have one more great experience to put on my resume and learned a lot about technologies such as React, Node APIs and SQL databases, transferable skills such as communication, problem solving and overall software development processes in a professional business environment and I believe these will help me a lot in my future careers and academics. I definitely couldn't have asked for a better first co-op.</p>
                        <h2>Acknowledgements 🏆</h2>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I first would like to thank my supervisor Kishan, for teaching and helping me with all of the technologies I used during my work term. I think without him, everything would have been a lot more difficult. I also would like to thank Kenna for giving me a chance for this co-op term. Lastly, I would like to thank my co-op coordinators Laura and Kate, they were really helpful during the hiring process and answered all my questions, everthing was clear going into this work term thanks to them.</p>
                    </div>
                </>
            );
        default:
            return(<div>COULD NOT FOUND REPORT ID: {id}</div>);
    }
};

export default Report;
