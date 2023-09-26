import Wrapper from "../UI/Wrapper";
import layout from "../UI/Layout.module.css";
import { useRef } from "react";
import useOnScreen from "../customHooks/useOnScreen";
import Button from "../UI/Button";
import emailjs from "@emailjs/browser";

const serviceID = "service_goyv72h";
const templateID = "template_v38jf0r";
const publicKey = "Vwf-XhbuzMj28m0bT";

const Contact: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const isDivVisible = useOnScreen(divRef, 0.6);
  const isFormVisible = useOnScreen(formRef, 0.5);

  const divClass = isDivVisible
    ? `${layout["text-center"]} ${layout["fade-effect"]} ${layout["fade-up"]}`
    : `${layout["text-center"]} ${layout["fade-effect"]}`;

  const formClass = isFormVisible
    ? `${layout["contact-col"]} ${layout["contact--form"]} ${layout["fade-effect"]} ${layout["fade-up"]}`
    : `${layout["contact-col"]} ${layout["contact--form"]} ${layout["fade-effect"]}`;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.email.value);
    console.log(e.target.elements.comment.value);

    emailjs.send(
      serviceID,
      templateID,
      {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        message: e.target.elements.comment.value,
      },
      publicKey
    );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className={`${layout["section"]} ${layout["section--contact"]} ${layout["section--dark"]}`}
    >
      <Wrapper>
        <div ref={divRef} className={divClass}>
          <h3 className={`${layout.tagline} `}>Want to share?</h3>
          <p className={layout["contact--text"]}>
            Any comments and suggestions will be appreciated.
          </p>
        </div>

        <div ref={formRef} className={formClass}>
          <form className={layout["form-wrap"]} onSubmit={handleSubmit}>
            <div className={layout["contact-col--item"]}>
              <div className={layout["form-group"]}>
                <label htmlFor="name" className={layout["form-label"]}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={layout["form-control"]}
                  type="text"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className={layout["contact-col--item"]}>
              <div className={layout["form-group"]}>
                <label htmlFor="email" className={layout["form-label"]}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className={layout["form-control"]}
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
            </div>

            <div className={`${layout["contact-col--item"]} ${layout["item-fluid"]}`}>
              <div className={layout["form-group"]}>
                <label htmlFor="comment" className={layout["form-label"]}>
                  Feedback
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  className={`${layout["form-control"]} ${layout["form-control--textarea"]}`}
                  placeholder=" "
                  required
                />
              </div>
            </div>

            <div
              className={`${layout["contact-col--item"]} ${layout["item-fluid"]} ${layout["text-center"]}`}
            >
              <Button type={"submit"} name={"submit"} />
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
