import React, { useState } from 'react';

const contactBoxContainer = {
    margin: "0 auto",
    width: "200px",
    backgroundColor: "#f5f5f5",
    display: "block",
    marginTop: "55px",
    textAlign: "center",
    border: "solid black 1px",
    borderRadius: "20%"
}

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return(
        <div>
            <h1>Contact</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla lobortis ex, in ullamcorper tellus sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque at nisl vitae urna congue ultricies. Nunc vel mauris pharetra, efficitur dolor quis, rutrum neque. Proin augue neque, cursus et accumsan a, ultricies a est. Duis euismod porta neque. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae erat ex. Curabitur a urna imperdiet, ullamcorper risus eu, porttitor lectus. Maecenas a egestas nulla. Etiam tincidunt faucibus orci. Pellentesque orci metus, imperdiet ac rhoncus nec, iaculis eu purus. Aliquam ut fermentum est, a posuere felis. Suspendisse dapibus accumsan blandit. Duis lectus massa, malesuada et sem nec, ultrices luctus sapien. Donec elit nunc, accumsan quis urna eu, tincidunt facilisis magna. Praesent ut dictum diam, quis eleifend urna. In eget ultricies ipsum. Suspendisse potenti. Nam ut diam dolor. Vestibulum viverra commodo luctus. 
            </p>
            
                <h3 style={{textAlign: "center", marginTop: "50px", marginBottom: "10px"}}>Contact Box</h3>
            <form style={contactBoxContainer} action="mailto:mailto:hhhayer@hotmail.com">
            

                <label>Name: </label>
                <input 
                    type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder="John Doe"/>
                <label>Email: </label>
                <input 
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="JohnDoe@example.com"/>
                <label>Message: </label>
                <textarea 
                    type="text"
                    value={message}
                    cols="25"
                    rows="5"
                    onChange={e=>setMessage(e.target.value)}
                    placeholder="Great website, lets get in touch!"/>
                <button className="contactBoxButton">Send</button>
            
            </form>
           
        </div>
    );
}
export default Contact;