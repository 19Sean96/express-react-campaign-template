import React, { Component } from "react";
import OffClick from "react-offclick";
import SendWishlist from "./SendWishlist";
import styled from "styled-components";

const StyledNoteIcon = styled.div`
  svg {
    g > * {
      stroke: ${props => props.color};
    }
  }
`;

const StyledWishlistCTA = styled.a`
  &::before {
    background-color: ${props => props.color};
  }
`;

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
      },
      comments: {
        value: "",
        valid: null
      },
      cartDetails: [],
      removing: false
    };

    this.props.wishlist.map(item => {
      console.log(item);
      this.props.wishlist.length > 0 &&
        this.state.notePositionActive.push(false);
      this.props.wishlist.length > 0 &&
        this.state.noteInputHasValue.push(false);

      return null;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PREVIOUS", prevProps.wishlist);
    console.log("CURRENT", this.props.wishlist);

    if (prevProps.wishlist == this.props.wishlist) return null;
    if (prevProps.wishlist.length < this.props.wishlist.length) {
      console.log("YOU ADDED ONE");

      const newItem = this.props.wishlist[this.props.wishlist.length - 1];

      this.state.cartDetails.push({
        note: {
          value: "",
          active: false
        },
        tile: {
          photo: newItem.background,
          designParent: newItem.designParent,
          id: newItem.id,
          name: newItem.name
        },
        products: newItem.products
      });
    } else if ((prevProps.wishlist.length > this.props.wishlist.length) && this.state.removing) {
      console.log("YOU REMOVED ONE");

      if (this.props.wishlist.length <= 0) {
        this.state.cartDetails = []
      } else {
        const itemRemoved = (prevProps.wishlist.filter(e => !this.props.wishlist.includes(e)))
        const itemRemovedID = itemRemoved[0].id; 
        console.log(itemRemovedID)
        this.state.cartDetails.splice(this.state.cartDetails.findIndex(cartItem => cartItem.tile.id == itemRemovedID), 1)

        this.setState({removing: false})
      }
    }
  }

  FormClass = "Wishlist_Send-form";
  inputClass = `${this.FormClass}_input`;

  handleKeyPress(e) {
    let target = e.target;
    let id = parseInt(e.target.id)
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
    } else if (target.name === "comments") {
      const { valid } = this.state.comments;
      this.setState({
        comments: {
          value: e.target.value,
          valid
        }
      });
    } else if (target.name === "wishListNote") {
      let { noteInputHasValue } = this.state;

      this.state.cartDetails[this.state.cartDetails.findIndex(item => item.tile.id == target.id)].note.value = target.value;
      hasValue
        ? (noteInputHasValue[target.id] = true)
        : (noteInputHasValue[target.id] = false);

      this.setState({
        noteInputHasValue
      });
    }
  }

  reduceCart(removedItem) {
    const index = this.state.cartDetails.findIndex(cartItem => cartItem.id === removedItem.id)
    this.state.cartDetails.splice(index,1);
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
    const [color, colorLight, colorDark] = this.props.colors;
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
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="4"
                  />
                  <g transform="translate(478.259 4277.514)">
                    <line
                      x2="20"
                      transform="translate(-0.259 0.486)"
                      fill="none"
                      stroke={color}
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <line
                      x2="20"
                      transform="translate(-0.259 10.486)"
                      fill="none"
                      stroke={color}
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_270"
                      data-name="Line 270"
                      x2="15"
                      transform="translate(-0.259 20.486)"
                      fill="none"
                      stroke={color}
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </h1>
          <h3 className="Wishlist_subtitle">
            Here are the items that you are interested in.
          </h3>
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
                          src={item.background}
                          alt={item.name}
                          className="Wishlist_cart_item-image"
                        />
                      </div>
                      <h3 className="Wishlist_cart_item-name">{item.name}</h3>
                      <div className="Wishlist_cart_item--editor">
                        <StyledNoteIcon
                          color={
                            // this.state.cartDetails[
                            //   this.state.cartDetails.findIndex(
                            //     cartItem => cartItem.tile.id === item.id
                            //   )
                            // ].note.active
                            this.state.noteInputHasValue[item.id]
                              ? "#1dad13"
                              : this.state.notePositionActive[index]
                              ? color
                              : "rgba(#fff, 0.4)"
                          }
                          className={`Wishlist_cart_item--editor-note`}
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
                              this.state.noteInputHasValue[item.id]
                                ? "activeInput"
                                : ""
                            }`}
                          >
                            <input
                              type="text"
                              name="wishListNote"
                              product={item.designParent}
                              id={item.id}
                              onKeyUp={e => this.handleKeyPress(e)}
                            />
                            <label htmlFor="note" className={`addNote_label`}>
                              add a note
                            </label>
                          </div>
                        </StyledNoteIcon>
                        <div
                          onClick={() => {
                            this.setState({removing: true})
                            this.props.removeItem(item);
                          }}
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
                        fill={color}
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
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="Wishlist_cart--empty_message">
                  your list is empty
                </h2>
                <div color={color} className="Wishlist_cart--empty_cta">
                  <StyledWishlistCTA
                    href="#Showcase"
                    className="Wishlist_cart--empty_cta-link"
                    color={color}
                  >
                    add some items.
                  </StyledWishlistCTA>
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
                        stroke={color}
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        d="M363.5,8190.5,383,8171l-19.5-19.5"
                        fill="none"
                        stroke={color}
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
          colors={this.props.colors}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          company={this.state.company}
          comments={this.state.comments}
          cartDetails={this.state.cartDetails}
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
