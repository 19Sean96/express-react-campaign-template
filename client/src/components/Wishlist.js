import React, { Component } from "react";
import OffClick from "react-offclick";
import SendWishlist from "./SendWishlist";

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      notePositionActive: [],
      noteInputHasValue: [],
      name: {
        active: false,
        value: "",
        valid: null
      },
      email: {
        active: false,
        value: "",
        valid: null
      },
      company: {
        active: false,
        value: "",
        valid: null
      },
      phone: {
        active: false,
        value: "",
        valid: null
      }
    };

    this.props.wishlist.map(() => {
      this.props.wishlist.length > 0 &&
        this.state.notePositionActive.push(false);
      this.props.wishlist.length > 0 &&
        this.state.noteInputHasValue.push(false);
      return null;
    });
  }

  FormClass = "Wishlist_Send-form";
  inputClass = `${this.FormClass}_input`;

  handleKeyPress(e) {
    let target = e.target;
    let hasValue = target.value.length > 0 ? true : false;
    // const isValid = e.target.validity.valid;
    if (target.name === "name") {
      const { valid } = this.state.name;
      hasValue
        ? this.setState({
            name: {
              active: true,
              value: e.target.value,
              valid
            }
          })
        : this.setState({
            name: {
              active: false,
              value: e.target.value,
              valid
            }
          });
    } else if (target.name === "email") {
      const { valid } = this.state.email;
      hasValue
        ? this.setState({
            email: {
              active: true,
              value: e.target.value,
              valid
            }
          })
        : this.setState({
            email: {
              active: false,
              value: e.target.value,
              valid
            }
          });
    } else if (target.name === "company") {
      const { valid } = this.state.company;
      hasValue
        ? this.setState({
            company: {
              active: true,
              value: e.target.value,
              valid
            }
          })
        : this.setState({
            company: {
              active: false,
              value: e.target.value,
              valid
            }
          });
    } else if (target.name === "phone") {
      const { valid } = this.state.phone;
      hasValue
        ? this.setState({
            phone: {
              active: true,
              value: e.target.value,
              valid
            }
          })
        : this.setState({
            phone: {
              active: false,
              value: e.target.value,
              valid
            }
          });
    } else if (target.name === "wishListNote") {

      let { noteInputHasValue } = this.state;

      hasValue
        ? (noteInputHasValue[target.id] = true)
        : (noteInputHasValue[target.id] = false);

      this.setState({
        noteInputHasValue
      });
    }
  }

  closeNote = i => e => {
    const { notePositionActive } = this.state;
    notePositionActive[i] = false;

    this.setState({
      notePositionActive
    });
  };

  openNote = i => e => {
    const { notePositionActive } = this.state;
    notePositionActive[i] = true;

    this.setState({
      notePositionActive
    });
  };

  render() {
    return (
      <>
        <section className="Wishlist" id="Wishlist">
          <h1 className="Wishlist_title">
            wishlist
            <span className="Wishlist_title--icon--container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46.534 61.545"
              >
                <g id="File" transform="translate(-465 -4258)">
                  <path
                    d="M494.522,4317.545H467V4260h42.534v42.534A15.013,15.013,0,0,1,494.522,4317.545Z"
                    transform="translate(0)"
                    fill="none"
                    stroke="#eae45b"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                  />
                  <g transform="translate(478.259 4277.514)">
                    <line
                      x2="20"
                      transform="translate(-0.259 0.486)"
                      fill="none"
                      stroke="#eae45b"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <line
                      x2="20"
                      transform="translate(-0.259 10.486)"
                      fill="none"
                      stroke="#eae45b"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_270"
                      data-name="Line 270"
                      x2="15"
                      transform="translate(-0.259 20.486)"
                      fill="none"
                      stroke="#eae45b"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </h1>
          <article className="Wishlist_cart content_wrapper">
            {this.props.wishlist.length > 0 ? (
              this.props.wishlist.map((item, index) => {
                return (
                  <OffClick key={index} handler={this.closeNote(index)}>
                    <div
                      className={`Wishlist_cart_item`}
                      dataparentkey={item.parentkey}
                      datachildren={item.children_selected}
                    >
                      <div className="Wishlist_cart_item-image--container">
                        <img
                          src={item.displayImg}
                          alt={item.name}
                          className="Wishlist_cart_item-image"
                        />
                      </div>
                      <h3 className="Wishlist_cart_item-name">{item.name}</h3>
                      <div className="Wishlist_cart_item--editor">
                        <div
                          className={`Wishlist_cart_item--editor-note ${
                            this.state.noteInputHasValue[index]
                              ? "Wishlist_cart_item--editor-note--green"
                              : this.state.notePositionActive[index]
                              ? "Wishlist_cart_item--editor-note--yellow"
                              : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48.414"
                            dataposition={index}
                            onClick={
                              this.state.notePositionActive[index]
                                ? this.closeNote(index)
                                : this.openNote(index)
                            }
                          >
                            <g transform="translate(-1180 -1355)">
                              <path
                                d="M1219,1394h-7l-8,8-8-8h-7a8,8,0,0,1-8-8v-30h46v30A8,8,0,0,1,1219,1394Z"
                                fill="none"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                              <g data-name="Group 107">
                                <line
                                  x2="26"
                                  transform="translate(1191 1366)"
                                  fill="none"
                                  strokeMiterlimit="10"
                                  strokeWidth="2"
                                />
                                <line
                                  x2="26"
                                  transform="translate(1191 1374)"
                                  fill="none"
                                  strokeMiterlimit="10"
                                  strokeWidth="2"
                                />
                                <line
                                  x2="20"
                                  transform="translate(1191 1382)"
                                  fill="none"
                                  strokeMiterlimit="10"
                                  strokeWidth="2"
                                />
                              </g>
                            </g>
                          </svg>
                          <div
                            className={`addNote ${
                              this.state.notePositionActive[index]
                                ? "addNote--active"
                                : "addNote--inactive"
                            } ${
                              this.state.noteInputHasValue[index]
                                ? "activeInput"
                                : ""
                            }`}
                          >
                            <input
                              type="text"
                              name="wishListNote"
                              id={`${index}`}
                              onKeyUp={e => this.handleKeyPress(e)}
                            />
                            <label htmlFor="note" className={`addNote_label`}>
                              add a note
                            </label>
                          </div>
                        </div>
                        <div
                          onClick={() => this.props.removeItem(item)}
                          className="Wishlist_cart_item--editor-remove"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 29.414 29.414"
                          >
                            <g id="Cross" transform="translate(0.397 0.707)">
                              <line
                                x2="28"
                                y2="28"
                                transform="translate(0.31)"
                                fill="none"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                              <line
                                y1="28"
                                x2="28"
                                transform="translate(0.31)"
                                fill="none"
                                stroke="#000"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </OffClick>
                );
              })
            ) : (
              <div className="Wishlist_cart--empty">
                <div className="Wishlist_cart--empty_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47.775 63.931"
                  >
                    <g transform="translate(1000.093 -2611.782)">
                      <text
                        transform="translate(-976 2656)"
                        fill="#d7de3b"
                        fontSize="35"
                        fontFamily="UniversLTStd-BoldCn, Univers LT Std"
                        fontWeight="700"
                      >
                        <tspan x="-5.827" y="0">
                          !
                        </tspan>
                      </text>
                      <path
                        d="M30.619,62.931H1V1H46.775V46.775A16.152,16.152,0,0,1,30.619,62.931Z"
                        transform="translate(-1000.093 2611.782)"
                        fill="none"
                        stroke="#d7de3b"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="Wishlist_cart--empty_message">
                  your list is empty
                </h2>
                <div className="Wishlist_cart--empty_cta">
                  <a href="#Showcase" className="Wishlist_cart--empty_cta-link">
                    add some items.
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40.414"
                    height="40.414"
                    viewBox="0 0 40.414 40.414"
                  >
                    <g transform="translate(-344 -8150.793)">
                      <line
                        x2="39"
                        transform="translate(344 8171)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        d="M363.5,8190.5,383,8171l-19.5-19.5"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </article>
        </section>
        <SendWishlist
          accentColor={this.props.accentColor}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          company={this.state.company}
          handleKeyPress={this.handleKeyPress}
        />
      </>
    );
  }
}

// function checkInputValue(e) {
//   console.log(e.target.value);
//   console.log(e.target.className);
// }

export default Wishlist;
