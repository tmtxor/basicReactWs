import React from "react";
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "home", // Default active tab
        };
    }

    setActiveTab(tabId) {
        // Reset styles for all list items using queryselector like JS
        const listItems = document.querySelectorAll(".navigation li");
        listItems.forEach((item) => {
            Object.assign(item.style, {
                color: "white",
                backgroundColor: "green",
                fontWeight: "normal",
            });
        });

        // Update the active tab in state
        this.setState({ activeTab: tabId });

        // Notify parent component about the active tab change
        if (this.props.onTabChange) {
            this.props.onTabChange(tabId);
        }
    }

    render() {
        const liStyle = {
            color: "white",
            transition: "all 0.3s ease",
            backgroundColor: "green",
            display: "inline-flex",
            margin: "0 10px", 
            padding: "5px 10px",
        };

        const liHoverStyle = {
            color: "black",
            backgroundColor: "yellow",
            cursor: "pointer",
            display: "inline-flex",
            margin: "0 10px",
            padding: "5px 10px",
        };

        const activeStyle = {
            color: "gray", // Active tab color
            fontWeight: "bold",
            backgroundColor: "yellow", // Active tab background color
            cursor: "text",
        };

        const ulStyle = {
            listStyleType: "none", 
            padding: 0,
            margin: 0,
        };

        return (
            <nav className="navigation">
                <ul style={ulStyle}>
                    <li
                        id="home"
                        style={{
                            ...liStyle,
                            ...(this.state.activeTab === "home" ? activeStyle : {}),
                        }}
                        onMouseEnter={(e) => Object.assign(e.target.style, liHoverStyle)}
                        onMouseLeave={(e) =>
                            Object.assign(
                                e.target.style,
                                this.state.activeTab === "home" ? activeStyle : liStyle
                            )
                        }
                        onClick={() => this.setActiveTab("home")}
                    >
                        Home
                    </li>
                    <li
                        id="catalogues"
                        style={{
                            ...liStyle,
                            ...(this.state.activeTab === "catalogues" ? activeStyle : {}),
                        }}
                        onMouseEnter={(e) => Object.assign(e.target.style, liHoverStyle)}
                        onMouseLeave={(e) =>
                            Object.assign(
                                e.target.style,
                                this.state.activeTab === "catalogues" ? activeStyle : liStyle
                            )
                        }
                        onClick={() => this.setActiveTab("catalogues")}
                    >
                        Catalogues
                    </li>
                    <li
                        id="travel"
                        style={{
                            ...liStyle,
                            ...(this.state.activeTab === "travel" ? activeStyle : {}),
                        }}
                        onMouseEnter={(e) => Object.assign(e.target.style, liHoverStyle)}
                        onMouseLeave={(e) =>
                            Object.assign(
                                e.target.style,
                                this.state.activeTab === "travel" ? activeStyle : liStyle
                            )
                        }
                        onClick={() => this.setActiveTab("travel")}
                    >
                        Travel Blogs
                    </li>
                    <li
                        id="chatroom1"
                        style={{
                            ...liStyle,
                            ...(this.state.activeTab === "chatroom1" ? activeStyle : {}),
                        }}
                        onMouseEnter={(e) => Object.assign(e.target.style, liHoverStyle)}
                        onMouseLeave={(e) =>
                            Object.assign(
                                e.target.style,
                                this.state.activeTab === "chatroom1" ? activeStyle : liStyle
                            )
                        }
                        onClick={() => this.setActiveTab("chatroom1")}
                    >
                        Chatroom one
                    </li>
                    <li
                        id="chatroom2"
                        style={{
                            ...liStyle,
                            ...(this.state.activeTab === "chatroom2" ? activeStyle : {}),
                        }}
                        onMouseEnter={(e) => Object.assign(e.target.style, liHoverStyle)}
                        onMouseLeave={(e) =>
                            Object.assign(
                                e.target.style,
                                this.state.activeTab === "chatroom2" ? activeStyle : liStyle
                            )
                        }
                        onClick={() => this.setActiveTab("chatroom2")}
                    >
                        Chatroom two
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;