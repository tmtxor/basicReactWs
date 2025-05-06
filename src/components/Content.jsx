import React from 'react';
import Home from './Home';
import Catalogues from './Catalogues';
import Chatroom1 from './Chatroom1';

function Content({ activeTab }) {
    //Mapped out content varying the active tab from parent
    const contentMap = {
      home: <Home />,
      catalogues: <Catalogues />,
      travel: "Read our Travel Blogs.",
      chatroom1: <Chatroom1 />,
      chatroom2: "Welcome to Chatroom Two."
    };
  
    // there is always an active tab but just in case we have a default value
    return <div>{contentMap[activeTab] || "Select a tab to see content."}</div>;
  }

export default Content;