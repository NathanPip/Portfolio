import emailjs from "@emailjs/browser";
import { Component, createSignal } from "solid-js";
import { aos } from "../utils/helpers";

const Contact: Component = () => {
  const [submitStatus, setSubmitStatus] = createSignal(false);
  let form: HTMLFormElement;

  const AOS = aos;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if(e.target === null) {return}
    const target = e.target as HTMLFormElement;

    const elements = {
      name: target.name,
      email: target.email,
      message: target.message,
    };
    if (!submitStatus) {
      emailjs
        .sendForm(
          "service_gmld2ys",
          "template_nr3gwiz",
          form,
          "user_lXjYwTQ6tLx48Qt9b27XP"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitStatus(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
    }
  };

  return (
    <div
      className="contact"
      use:AOS={{name: "fade-in", duration: .5, offset: 200, once: true}}
      >
      <h2 id="contact" className="contact-form-title">Contact</h2>
      <div className="contact-body">
        <div
          className="contact-aside"
          use:AOS={{name: "slide-in-left", duration: 1, delay: 200, offset: 200, once: true}}
        >
          <p>Get in touch!</p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email-open.png"
              alt="email envelope icon"
            />{" "}
            <a href="mailto: nathan.piper.sd@gmail.com">
              nathan.piper.sd@gmail.com
            </a>
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
              alt="linkedin logo"
            />{" "}
            <a
              href="https://www.linkedin.com/in/nathan-piper-3b8610231"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </p>
          <p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"
              alt="telephone icon"
            />{" "}
            <a href="tel:7075099345">1 (707) 509-9345</a>
          </p>
        </div>
        <div
          className="contact-form-container"
          use:AOS={{name: "slide-in-right", duration: 1, delay: 200, offset: 200, once: true}}
        >
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="to_name"></input>

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="user_email" required></input>

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">{submitStatus() ? "Sent!" : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
