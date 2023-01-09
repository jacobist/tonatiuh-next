import { useState, useRef } from 'react'
import { BsCalendarWeek } from 'react-icons/bs'
import HandleFormSubmit from './Submit'


const Appointment = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  function handleFormSubmit(e) {
    setLoading(true);
    console.log(e + "handler");
    e.preventDefault();
    HandleFormSubmit(e);
  }

  return (
    <main>
      <div className="title">
        <h2 className="delay">Schedule Your Free Consultation</h2>
      </div>
      <form
        ref={form}
        action="https://script.google.com/macros/s/AKfycbxrhRDG0hprR4HDrD3Zl0cFlWP9nKSDX6Wns1aFkDMKTLgv7q-sTJVV8H8OvfFyku5C0Q/exec"
        name="google-sheet"
        onSubmit={handleFormSubmit}
      >
        <div className="fields">
          <BsCalendarWeek size={190} style={{ padding: "2rem" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "50%",
              justifyContent: "space-around",
            }}
          >
            <p className="sm-info">
              Please Note: Any information you send to me via email or form
              submission cannot be secured. Do not send highly sensitive
              information in this manner of communication.
            </p>
            <p className="sm-info">
              If you are in an emergency situation, please do not wait for a
              response.
            </p>
            <p className="sm-info">
              Please visit your nearest emergency room or call 911.
            </p>
          </div>
        </div>

        <div className="fields">
          <p style={{ margin: "2rem 0 3rem", textAlign: "center" }}>
            Please use this form to message us.
            <br /> <br /> We look forward to connecting shortly!
          </p>
          <div className="form-row">
            <label htmlFor="name">What may I call you?</label>
            <input type="text" id="name" name="name" placeholder="name" />
          </div>
          <div className="form-row">
            <label htmlFor="name">Can I have your Email?</label>
            <input type="email" name="email" placeholder="e-mail" />
          </div>
          <div className="form-row">
            <label htmlFor="name">Or a Phone Number?</label>
            <input type="tel" name="phone" placeholder="(000)000-0000" />
          </div>
          <fieldset className="form-row">
            <label htmlFor="message">
              Would you like to leave a short message for me?
            </label>
            <textarea
              maxLength="300"
              id="message"
              name="message"
              placeholder="messsage"
            ></textarea>
          </fieldset>
          <fieldset>
            <legend>
              <p style={{ padding: ".9rem" }}>Counseling Preference:</p>
            </legend>
            <div>
              <input
                id="type--notsure"
                type="radio"
                name="type"
                value="not sure"
                defaultChecked
              />
              <label htmlFor="type--notsure"> Im not sure.</label>
            </div>
            <div>
              <input
                id="type--individual"
                type="radio"
                name="type"
                value="individual"
              />
              <label htmlFor="type--individual"> Individual</label>
            </div>
            <div>
              <input
                id="type--couplescounseling"
                type="radio"
                name="type"
                value="couples"
              />
              <label htmlFor="type--couplescounseling">
                Couples Counseling
              </label>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>
                <br />
                or
              </p>
              <br />
            </div>
            <div>
              <input
                id="type--gottman"
                type="radio"
                name="type"
                value="Gottman Assessment"
              />
              <label htmlFor="type--notsure">Gottman Assessment</label>
            </div>
          </fieldset>
          <button
            className="cta-btn"
            value={loading ? "Loading..." : "Request My Schedule"}
          >
            {loading ? "Sent!" : "Send Message"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Appointment;