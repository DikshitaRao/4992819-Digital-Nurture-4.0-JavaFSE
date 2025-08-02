import React from 'react';

const BlogDetails = () => {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with React",
            author: "John Doe",
            date: "2024-01-15",
            category: "Technology",
            excerpt: "Learn the basics of React and start building modern web applications."
        },
        {
            id: 2,
            title: "JavaScript ES6 Features",
            author: "Jane Smith",
            date: "2024-01-10",
            category: "Programming",
            excerpt: "Explore the powerful features introduced in ES6 and beyond."
        },
        {
            id: 3,
            title: "Web Development Trends 2024",
            author: "Mike Johnson",
            date: "2024-01-05",
            category: "Web Dev",
            excerpt: "Discover the latest trends shaping web development this year."
        },
        {
            id: 4,
            title: "CSS Grid vs Flexbox",
            author: "Sarah Wilson",
            date: "2024-01-01",
            category: "CSS",
            excerpt: "Understanding when to use CSS Grid vs Flexbox for layouts."
        }
    ];

    return (
        <div className="content-section">
            <h2>📝 Blog Details</h2>
            <div className="cards-container">
                {blogs.map(blog => (
                    <div key={blog.id} className="card">
                        <h3>{blog.title}</h3>
                        <p><strong>Author:</strong> {blog.author}</p>
                        <p><strong>Date:</strong> {blog.date}</p>
                        <p><strong>Category:</strong> {blog.category}</p>
                        <p className="excerpt">{blog.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogDetails;