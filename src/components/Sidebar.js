import React from 'react';

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <nav>
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
                <a className="last" href="#">Settings</a>
            </nav>
       </div>
    );
}

export default Sidebar;