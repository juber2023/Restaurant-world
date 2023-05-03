import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-sky-300 w-3/4 mx-auto p-10 rounded-xl my-10'>
                <p className='font-bold text-2xl'>1. What is the differences between uncontrolled and controlled components.?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> Controlled components provide a more reliable and predictable way to manage the state of a component, while uncontrolled components can offer more flexibility in some situations.</p>
                <p className='font-bold text-2xl'>2. How to validate React props using PropTypes?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> Importing the PropTypes library and defining a functional component called MyComponent. We then use the propTypes property to define the expected props for our component. In this case, we are expecting a prop called "text" that should be a string and is required. PropTypes allows us to validate our component props at runtime, helping us to catch errors early and ensure that our components are used correctly..</p>
                <p className='font-bold text-2xl'>3. What is the difference between nodejs and express js?</p>
                <p className='mb-5'><span className='font-bold'>Ans:</span> Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js. Node.js provides the core functionality for running JavaScript code, while Express.js provides a set of tools and conventions for building web applications. Express.js simplifies the process of building web applications by providing features such as routing, middleware, and templating, while Node.js provides the underlying infrastructure for executing the application.</p>
                <p className='font-bold text-2xl'>4. What is a custom hook and why will you create a custom hook?</p>
                <p><span className='font-bold'>Ans:</span> A custom hook is a reusable function in React that encapsulates logic used by multiple components. It allows developers to abstract away complex logic and reuse it throughout their application. Custom hooks can be used to share stateful logic, side effects, and other functionality between components without duplicating code. Developers create custom hooks to simplify their codebase and make it more maintainable.</p>
            </div>
        </div>
    );
};

export default Blog;