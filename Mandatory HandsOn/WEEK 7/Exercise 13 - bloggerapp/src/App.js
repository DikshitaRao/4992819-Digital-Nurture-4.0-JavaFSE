import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
    // State for managing active component
    const [activeComponent, setActiveComponent] = useState('book');
    const [showContent, setShowContent] = useState(true);
    const [userRole, setUserRole] = useState('student'); // student, instructor, admin

    // Method 1: Ternary Operator
    const renderWithTernary = () => {
        return activeComponent === 'book' ? <BookDetails /> :
            activeComponent === 'blog' ? <BlogDetails /> :
                <CourseDetails />;
    };

    // Method 2: Logical AND Operator
    const renderWithLogicalAND = () => {
        return (
            <div>
                {activeComponent === 'book' && <BookDetails />}
                {activeComponent === 'blog' && <BlogDetails />}
                {activeComponent === 'course' && <CourseDetails />}
            </div>
        );
    };

    // Method 3: If-Else Statements (using function)
    const renderWithIfElse = () => {
        if (activeComponent === 'book') {
            return <BookDetails />;
        } else if (activeComponent === 'blog') {
            return <BlogDetails />;
        } else {
            return <CourseDetails />;
        }
    };

    // Method 4: Switch Statement
    const renderWithSwitch = () => {
        switch (activeComponent) {
            case 'book':
                return <BookDetails />;
            case 'blog':
                return <BlogDetails />;
            case 'course':
                return <CourseDetails />;
            default:
                return <BookDetails />;
        }
    };

    // Method 5: Object/Map Approach
    const componentMap = {
        book: <BookDetails />,
        blog: <BlogDetails />,
        course: <CourseDetails />
    };

    const renderWithMap = () => {
        return componentMap[activeComponent] || <BookDetails />;
    };

    // Method 6: Array with find method
    const components = [
        { key: 'book', component: <BookDetails /> },
        { key: 'blog', component: <BlogDetails /> },
        { key: 'course', component: <CourseDetails /> }
    ];

    const renderWithArray = () => {
        const found = components.find(item => item.key === activeComponent);
        return found ? found.component : <BookDetails />;
    };

    // Method 7: Higher Order Component approach
    const withConditionalRendering = (WrappedComponent, condition) => {
        return condition ? <WrappedComponent /> : null;
    };

    // Method 8: Render Props Pattern
    const ConditionalRenderer = ({ render, condition }) => {
        return condition ? render() : null;
    };

    // Method 9: Custom Hook for Conditional Rendering
    const useConditionalRender = (condition, component) => {
        return condition ? component : null;
    };

    // Current rendering method selector
    const [renderMethod, setRenderMethod] = useState('ternary');

    const getCurrentComponent = () => {
        switch (renderMethod) {
            case 'ternary':
                return renderWithTernary();
            case 'logical-and':
                return renderWithLogicalAND();
            case 'if-else':
                return renderWithIfElse();
            case 'switch':
                return renderWithSwitch();
            case 'map':
                return renderWithMap();
            case 'array':
                return renderWithArray();
            default:
                return renderWithTernary();
        }
    };

    return (
        <div className="App">
            <header className="app-header">
                <h1>🚀 Blogger App - Conditional Rendering Demo</h1>
                <p>Exploring multiple ways to conditionally render React components</p>
            </header>

            {/* Navigation Bar */}
            <nav className="nav-bar">
                <button
                    className={`nav-button ${activeComponent === 'book' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('book')}
                >
                    📚 Books
                </button>
                <button
                    className={`nav-button ${activeComponent === 'blog' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('blog')}
                >
                    📝 Blogs
                </button>
                <button
                    className={`nav-button ${activeComponent === 'course' ? 'active' : ''}`}
                    onClick={() => setActiveComponent('course')}
                >
                    🎓 Courses
                </button>
            </nav>

            {/* Rendering Method Selector */}
            <div className="method-selector">
                <h3>Choose Rendering Method:</h3>
                <select
                    value={renderMethod}
                    onChange={(e) => setRenderMethod(e.target.value)}
                    className="method-dropdown"
                >
                    <option value="ternary">Ternary Operator</option>
                    <option value="logical-and">Logical AND (&&)</option>
                    <option value="if-else">If-Else Statement</option>
                    <option value="switch">Switch Statement</option>
                    <option value="map">Object/Map Approach</option>
                    <option value="array">Array with Find</option>
                </select>
                <p className="method-info">Current method: <strong>{renderMethod}</strong></p>
            </div>

            {/* Toggle Content Visibility */}
            <div className="controls">
                <button
                    className="toggle-button"
                    onClick={() => setShowContent(!showContent)}
                >
                    {showContent ? '🙈 Hide Content' : '👁️ Show Content'}
                </button>
            </div>

            {/* Conditional Content Display */}
            <main className="main-content">
                {/* Method 10: Simple boolean check */}
                {showContent && (
                    <div className="content-wrapper">
                        {getCurrentComponent()}
                    </div>
                )}

                {/* Method 11: Null check conditional rendering */}
                {!showContent && (
                    <div className="no-content">
                        <h2>Content is hidden</h2>
                        <p>Click "Show Content" to display the selected component</p>
                    </div>
                )}
            </main>

            {/* Additional Conditional Rendering Examples */}
            <section className="additional-examples">
                <h3>Additional Conditional Rendering Examples:</h3>

                {/* Method 12: Role-based rendering */}
                <div className="role-example">
                    <h4>Role-based Content:</h4>
                    <select
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                    >
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="admin">Admin</option>
                    </select>

                    {userRole === 'student' && (
                        <p>👨‍🎓 Student Dashboard: View courses and assignments</p>
                    )}
                    {userRole === 'instructor' && (
                        <p>👨‍🏫 Instructor Panel: Manage courses and students</p>
                    )}
                    {userRole === 'admin' && (
                        <p>👨‍💼 Admin Control: Full system access</p>
                    )}
                </div>

                {/* Method 13: Multiple conditions */}
                <div className="multi-condition">
                    <h4>Multiple Conditions:</h4>
                    {showContent && activeComponent === 'book' && (
                        <p>✅ Showing books and content is visible</p>
                    )}
                    {showContent && activeComponent === 'blog' && (
                        <p>✅ Showing blogs and content is visible</p>
                    )}
                    {showContent && activeComponent === 'course' && (
                        <p>✅ Showing courses and content is visible</p>
                    )}
                </div>
            </section>

            <footer className="app-footer">
                <p>React Conditional Rendering Techniques Demo</p>
            </footer>
        </div>
    );
}

export default App;