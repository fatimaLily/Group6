import React from 'react';
import './Courses.css';

const Courses = () => {
  const coursesData = [
    {
      id: 1,
      title: 'HTML Fundamentals',
      description: 'Learn how to create website structures.',
      link: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G'
    },
    {
      id: 2,
      title: 'CSS & Web Design',
      description: 'Learn how to style beautiful websites.',
      link: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G'
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Learn how to make websites interactive.',
      link: 'https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU' // Matches requested mapping or JS search query
    },
    {
      id: 4,
      title: 'React Development',
      description: 'Learn how to build websites with React.',
      link: 'https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d'
    },
    {
      id: 5,
      title: 'Node.js',
      description: 'Learn how to build backend applications.',
      link: 'https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU'
    },
    {
      id: 6,
      title: 'MongoDB',
      description: 'Learn how to store and manage data.',
      link: 'https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA'
    },
    {
      id: 7,
      title: 'Git',
      description: 'Learn how to track changes in your code.',
      link: 'https://www.youtube.com/watch?v=4okmgMzPwZ8&list=PL4cUxeGkcC9j2pbmcA93DR1A3m7VEgSxK'
    },
    {
      id: 8,
      title: 'GitHub',
      description: 'Learn how to upload and share your projects.',
      link: 'https://www.youtube.com/watch?v=4okmgMzPwZ8&list=PL4cUxeGkcC9j2pbmcA93DR1A3m7VEgSxK'
    }
  ];

  return (
    <div className="courses-page-container">
      <div className="courses-header">
        <h2>Explore Our Learning Hub</h2>
        <p>Learn the skills you need to become a professional software developer.</p>
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <a 
              href={course.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="watch-lessons-btn"
            >
              Watch Lessons →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;