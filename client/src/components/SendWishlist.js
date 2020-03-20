import React, { Component } from "react";
import SendWishlistInput from "./SendWishlistInput";
import axios from "axios";
import ArrowRight from "./Icons/ArrowRight";
import Check from "./Icons/Check"
import PaperPlane from "./Icons/PaperPlane"
class SendWishlist extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.props.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    formReady: false,
    formSubmitted: false
  };

  FormInputs = [
    {
      width: "fullwidth",
      type: "text",
      name: "name",
      inputID: "inputName",
      label: "Full Name"
    },
    {
      width: "fullwidth",
      type: "email",
      name: "email",
      inputID: "inputEmail",
      label: "Email"
    },
    {
      width: "halfwidth",
      type: "text",
      name: "company",
      inputID: "inputCompany",
      label: "Company"
    },
    {
      width: "halfwidth",
      type: "tel",
      name: "phone",
      inputID: "inputPhone",
      label: "Phone Number"
    },
    {
      width: "fullwidth",
      type: "textarea",
      name: "comments",
      inputID: "inputComments",
      label: "Comments, concerns, custom requests, etc..."
    }
  ];
  FormClass = "Wishlist_Send-form";

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formReady) {
    this.setState({
      formSubmitted: false
    });

    axios
      .post("/api/sendemail", {
        name: this.props.name.value,
        email: this.props.email.value,
        phone: this.props.phone.value,
        company: this.props.company.value,
        comments: this.props.comments.value,
        products: this.props.cartDetails
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          formSubmitted: true
        });
      })
      .catch(err => {
        console.log(err);
      });
    } else console.log("THE FORM IS NOT READY")
  }

  componentDidUpdate(prevProps, prevState) {
    const { company, email, name, phone } = this.props;
    const isReady =
      company.valid && email.valid && name.valid && phone.valid;
    let formReady;
    if (isReady && !this.state.formReady) {
      formReady = true;
      this.setState({
        formReady
      });
    } else if (!isReady && this.state.formReady) {
      formReady = false;
      this.setState({
        formReady
      });
    }
  }

  render() {
    const { color } = this.props;
    return (
      <>
        {this.state.formSubmitted ? (
          <section className="Wishlist_Sent">
            <div className="Wishlist_Sent-check">
              <Check 
                circleFill="#000"
                circleStroke="#000"
                pathStroke={color}
              />
            </div>
            <h1 className="Wishlist_Sent-thanks">
              thank you
              <br />
              for your email!
            </h1>
            <p>someone will reach out to you shortly.</p>
          </section>
        ) : (
          <section className="Wishlist_Send" id="ContactForm">
            <h1 className="Wishlist_Send_title">
              <span> send us your list.</span>
              <span className="Wishlist_Send_title--icon--container">
                <PaperPlane 
                  color={color}
                />
              </span>
            </h1>
            <h3 className="Wishlist_Send_subtitle">
              email us your list to get your items moving!
            </h3>
            <form
              className={this.FormClass}
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              {this.FormInputs.map((input, index) => {
                return (
                  <SendWishlistInput
                    accentColor={color}
                    key={index}
                    input={input}
                    FormClass={this.FormClass}
                    handleKeyPress={e => this.handleKeyPress(e)}
                    status={
                      input.name === "name"
                        ? this.props.name
                        : input.name === "email"
                        ? this.props.email
                        : input.name === "company"
                        ? this.props.company
                        : this.props.phone
                    }
                  />
                );
              })}
              <button
                type="submit"
                className={`Wishlist_Send-form_submit ${this.state
                  .formSubmitted && "email-submitted"}`}
              >
                <p>submit list</p>
                <span className="arrow-icon--container" data-type="arrow">
                  <ArrowRight color={color} />
                </span>
              </button>
            </form>
          </section>
        )}
      </>
    );
  }
}

export default SendWishlist;
