import React, { Component } from 'react';
import './Contact.css'; // Import the CSS file for styling

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h2>Contact Me</h2>
        <p>isaiaspalma@email.com</p>
        <p>714.123.4567</p>
        {/* noopener and noreferrer are for security purposes. noopener prevents the new page from manipulating the 
        original page, similar to locking the door when you leave a room so nothing can sneak in. noreferrer prevents the url
        from the original page to leak into the new page, also for security purposes. The explanation I read described it
         as not telling a stranger which house you just left*/}
        <p><a href="https://github.com/palmaisaias" target="_blank" rel="noopener noreferrer">Visit My GitHub</a></p>
      </section>
    );
  }
}

export default Contact;
