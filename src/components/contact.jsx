import { useState, useContext } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { MyContext } from "../context/MainContext";
const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {/* <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="footer">
        <div className="container text-center">
          <p>
            {language === "es" && (
              <>
                © 2024 Tanabe Kai. Desarrollado por{" "}
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://detipcompany.com/"
                >
                  DeTip Company.
                </a>
              </>
            )}
            {language === "us" && (
              <>
                © 2024 Tanabe Kai. Developed by{" "}
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://detipcompany.com/"
                >
                  DeTip Company.
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
