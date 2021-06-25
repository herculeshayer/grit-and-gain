import React from 'react';

import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Contact = () => {

    return(
        <div>
            <h1>Contact</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla lobortis ex, in ullamcorper tellus sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque at nisl vitae urna congue ultricies. Nunc vel mauris pharetra, efficitur dolor quis, rutrum neque. Proin augue neque, cursus et accumsan a, ultricies a est. Duis euismod porta neque. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat ex. Curabitur a urna imperdiet, ullamcorper risus eu, porttitor lectus. Maecenas a egestas nulla. Etiam tincidunt faucibus orci. Pellentesque orci metus, imperdiet ac rhoncus nec, iaculis eu purus. Aliquam ut fermentum est, a posuere felis. Suspendisse dapibus accumsan blandit. Duis lectus massa, malesuada et sem nec, ultrices luctus sapien. Donec elit nunc, accumsan quis urna eu, tincidunt facilisis magna. Praesent ut dictum diam, quis eleifend urna. In eget ultricies ipsum. Suspendisse potenti. Nam ut diam dolor. Vestibulum viverra commodo luctus. 
            </p>
            
            <form style={{marginTop: "55px", display: "block", width: "10%", margin: "0 auto", textAlign: "center", paddingTop: "10vh"}}>
                <h3>Contact Box</h3>
                <label>Name: </label>
                <input placeholder="John Doe"/>
                <label>Email: </label>
                <input placeholder="JohnDoe@example.com"/>
                <label>Message: </label>
                <textarea placeholder="Great website, lets get in touch!"/>
            </form>
            <section style={{fontSize: "50px", marginTop: "20vh", textAlign: "center"}}>
                <a href="https://ca.linkedin.com/">{<FiLinkedin />}</a>
                <a href="https://www.facebook.com/">{<FiFacebook />}</a>
                <a href="https://www.instagram.com/">{<FiInstagram />}</a>
                <a href="https://twitter.com/?lang=en">{<FiTwitter />}</a>

            </section>
        </div>
    );
}
export default Contact;