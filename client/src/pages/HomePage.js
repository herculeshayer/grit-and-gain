import React from 'react';

import { GoPrimitiveDot } from 'react-icons/go'





const HomePage = () => {
    return(
        <main className="homepage">
            <h1>Welcome to Grit & Gain</h1>
            <p>
                This is a M.E.R.N. stack C.R.U.D. application. It uses AWS Amplify to host both its frontend clientside & backend serverside code.
                <br/>Source code for this application can be found <a href="https://github.com/herculeshayer/grit-and-gain">here</a>.
                <br/>My portfolio website can be found <a href="https://hhayer.me/">here</a>.
            </p>
            <p>The technologies used on this application were:</p>
            
            <section style={{margin:"20px 0px 20px 10vw", textAlign: "left"}}>
                <p><GoPrimitiveDot /> ReactJS</p>
                <p><GoPrimitiveDot /> MongoDB + MongoDB Atlas + MongooseJS</p>
                <p><GoPrimitiveDot /> NodeJS + ExpressJS</p>
                <p><GoPrimitiveDot /> AWS Lambda + API Gateway + Amplify + IAM</p>
                <p><GoPrimitiveDot /> HTML + CSS + JavaScript</p>
                <p><GoPrimitiveDot /> Git</p>
                {/* <p><GoPrimitiveDot /> Unit Testing</p> */}
            </section>

            
            <p>
                This is my first undertaking on an application of this scale; I've only ever completed small projects & assignments.
                Over the duration of this application, I've gained scope for the necessities of  project planning ahead
                and the difficulties it can present if not flawlessly. I've learned numerous technologies, and several 
                lessons on not only how to architect a project but also how to problem solve.
            </p>
            <p>
                Thanks for checking out the website, I hope you enjoyed it!
                <br/>If you've got any questions or criticism please address them to
                my <a href="https://github.com/herculeshayer/">GitHub</a>.
            </p>
            

        </main>
    );
}
export default HomePage;