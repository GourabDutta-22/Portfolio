import '../styles/Contact.css';

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact me</h2>
    <p><b>📧 Email: </b> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpdCrdfvbDXTDkRnPmVkpXCMbVVSgNtbbdmddXXKJCJVXcWRwVCrzLrtPDlrqSMhFTlBHb">duttagourab163@gmail.com</a></p>
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/gourab-dutta-62b59728a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      &nbsp;&nbsp;&nbsp;
      <a
        href="https://github.com/GourabDutta-22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  </section>
);

export default Contact;