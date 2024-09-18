import React from "react";

const Home =()=>{
    return(
        <div className="home">
            <div>
                <a href="http://localhost:5004/automatic-batching">AutoMatic Batching</a>
            </div>
            <div>
                <a href="http://localhost:5004/transition">Transitions</a>
            </div>
            <div>
                <a href="http://localhost:5004/suspense">Suspense</a>
            </div>            
        </div>
    );
}

export default Home;
