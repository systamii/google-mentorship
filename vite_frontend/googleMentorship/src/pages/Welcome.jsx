import React from 'react';
function Welcome() {
  return (
    <div className="container">
        <div className="left-panel">
            <div className="illustration">
                <img id="people" src="src/components/images/illustration.png"></img>
            </div>
            <h1>City Learn: Explore Educational Data</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. DExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="right-panel">
            <div className="search-bar">
                <input type="text" placeholder="Press Enter..."></input>
                <button><img src="src/components/images/search-icon.svg"></img></button>
            </div>
            <div className="hmb-wrapper">
                <div className="heatmap-button">
                    <a href="/heatmap"><button>View the Heatmap here!</button></a>
                </div>
                <div className="heatmap-button">
                    <a href="/home"><button>Travel to the homepage here!</button></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Welcome;
