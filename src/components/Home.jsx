import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is a basic website for the coursera assignment</p> <br />
                <p>I used React to build this website.</p> <br />
                <p style={{backgroundColor: 'red' }}><strong>Click on the tabs to navigate</strong></p>
            </div>
        );
    }
}

export default Home;