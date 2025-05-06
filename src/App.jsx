import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <header>
        <h1 id="title" className="mainTitle">Everything all of the time!</h1>
      </header>
      <div>
        {/* //I used this prop to set the active tab and update the content based on activeTab */}
        <Navigation onTabChange={setActiveTab} />
        <Content activeTab={activeTab} />
      </div>
      <h4>Copyright © 2025 Trifan Mihail Teodor</h4>
    </div>
  )
}

export default App;
