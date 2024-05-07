import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import done from "../../Animation/Animation - 1701775988372.json";
import email from "../../Animation/Animation - 1701777452336.json";

//
const Contact = () => {
  const [state, handleSubmit] = useForm("meqbyjyv");

  if (state.errors) {
    toast.error("Cant Send Your Massage !!");
  }
  if (state.succeeded) {
    toast.success("Massage Send Successfully!");
    setTimeout(() => {
      document.getElementById("email").value = "";
      document.getElementById("massage").value = "";
    }, 500);
  }

  return (
    <div className="contact">
      <div className="head">
        <h3>
          <i className="fa-solid fa-envelope"></i>
          <span>Contact With Me !</span>
        </h3>
        <p>
          Contact me for more details. You will receive a notification when I
          post anything new 🤍
        </p>
      </div>
      <div className="form-sec">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label>Massage:</label>
              <textarea
                id="massage"
                name="massage"
                required
                placeholder="Enter Your Massage !"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div>
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </div>
            {state.succeeded ? (
              <p className="d-flex align-items-center gap-2">
                <Lottie
                  loop={false}
                  style={{ height: 45 }}
                  animationData={done}
                />
                Your Massage Send succsesfully !
              </p>
            ) : null}
          </form>
        </div>
        <div className="img">
          <Lottie animationData={email} />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
