import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='heading'>Questions</h1>
            <div className='blog'>
                    
                    <div className='blog-item'>
                        <h3>How does React work?</h3>
                        <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.</p>
                    </div>

                    <div className='blog-item'>
                        <h3>Props VS State</h3>
                        <p>State is data set through use of setState, a get is accomplished via this.state.someState, and state is what the reconciliation algorithm looks to to determine when to update the virtual dom.<br></br>Props are a way to inject data into components from a higher level component.<br></br>Both are like generic object properties on each class Component. They can be methods or properties. When a subcomponent inherits props from a parent component it is similar to a prototype chain lookup through js prototypal inheritance.</p>
                    </div>

                    <div className='blog-item'>
                        <h3>Use of useEffect without data load</h3>
                        <p>1. Running on state change: validating input field<br></br>
                           2. Running on state change: live filtering<br></br>
                           3. Running on state change: trigger animation on new array value<br></br>
                           4. Running on props change: update paragraph list on fetched API data update<br></br>
                           5. Running on props change: updating fetched API data to get BTC updated price</p>
                    </div>
                </div>
        </div>
    );
};

export default Blog;