import React from 'react';

const CourseDetails = () => {
    const courses = [
        {
            id: 1,
            title: "React Fundamentals",
            instructor: "Alex Brown",
            duration: "8 weeks",
            level: "Beginner",
            price: "$199",
            rating: 4.8
        },
        {
            id: 2,
            title: "Advanced JavaScript",
            instructor: "Emily Davis",
            duration: "12 weeks",
            level: "Advanced",
            price: "$299",
            rating: 4.9
        },
        {
            id: 3,
            title: "Node.js Backend Development",
            instructor: "Robert Taylor",
            duration: "10 weeks",
            level: "Intermediate",
            price: "$249",
            rating: 4.7
        },
        {
            id: 4,
            title: "Full Stack Web Development",
            instructor: "Lisa Anderson",
            duration: "16 weeks",
            level: "Intermediate",
            price: "$399",
            rating: 4.9
        }
    ];

    return (
        <div className="content-section">
            <h2>🎓 Course Details</h2>
            <div className="cards-container">
                {courses.map(course => (
                    <div key={course.id} className="card">
                        <h3>{course.title}</h3>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                        <p><strong>Level:</strong> {course.level}</p>
                        <p><strong>Price:</strong> {course.price}</p>
                        <p><strong>Rating:</strong> ⭐ {course.rating}/5</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetails;