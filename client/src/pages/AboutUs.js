import React from 'react';

import blueEye from '../images/about-us-img.jpg'

const imageStyle = {
    display: "block",
    // marginLeft: "auto",
    // marginRight: "auto",
    margin: "50px auto 0px auto",
    textAlign: "center",
    borderRadius: "20%"
}
const attribution = {
    display: "block",
    // marginLeft: "auto",
    // marginRight: "auto",
    margin: "0px auto 0px auto",
    textAlign: "center",
    fontSize: "12px"
}

const AboutUs = () => {

    return(
        <div>
            <h1>About Us</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pelentesque fringilla lobortis ex, in ullamcorper tellus sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque at nisl vitae urna congue ultricies. Nunc vel mauris pharetra, efficitur dolor quis, rutrum neque. Proin augue neque, cursus et accumsan a, ultricies a est. Duis euismod porta neque. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat ex. Curabitur a urna imperdiet, ullamcorper risus eu, porttitor lectus. Maecenas a egestas nulla. Etiam tincidunt faucibus orci. Pellentesque orci metus, imperdiet ac rhoncus nec, iaculis eu purus. Aliquam ut fermentum est, a posuere felis. Suspendisse dapibus accumsan blandit. Duis lectus massa, malesuada et sem nec, ultrices luctus sapien. Donec elit nunc, accumsan quis urna eu, tincidunt facilisis magna. Praesent ut dictum diam, quis eleifend urna. In eget ultricies ipsum. Suspendisse potenti. Nam ut diam dolor. Vestibulum viverra commodo luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec luctus neque et egestas tempus. Nullam lorem sem, ultricies id ullamcorper ac, consectetur vel augue. Sed scelerisque ante sed porta sagittis. Etiam feugiat dictum luctus. In eu lectus nibh. Quisque eget interdum orci. Integer rutrum nulla sed malesuada hendrerit. Ut in nibh id lorem venenatis porta a eget odio. Mauris et semper ipsum. Nam consequat lacinia finibus. Mauris felis lacus, vestibulum ac elit in, porta auctor ante. Duis bibendum ligula non ipsum aliquet, eu lacinia eros laoreet. Cras non ornare metus. Suspendisse finibus mollis tempor. Cras iaculis dolor id hendrerit cursus. Proin eget dolor mauris. Sed cursus, justo non aliquam tincidunt, tellus mi imperdiet nunc, ac dapibus metus massa non ligula. Donec tempus massa diam, quis posuere quam euismod ac.
            </p>
            <img src={blueEye} className="unsplashIMG" width="600px" style={imageStyle}/>
            <div style={attribution}>
                <a href="https://unsplash.com/@dmey503?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Meyers</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    );
}
export default AboutUs;