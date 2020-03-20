import React, { Component } from "react";
import OffClick from "react-offclick";
import SendWishlist from "./SendWishlist";
import DocumentIcon from "./Icons/Document";
import TrashcanIcon from "./Icons/Trashcan";
import Check from "./Icons/Check"
import Note from "./Icons/Note"
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
        value: "",
        valid: null
      },
      email: {
        value: "",
        valid: null
      },
      company: {
        value: "",
        valid: null
      },
      phone: {
        value: "",
        valid: null
      },
      comments: {
        value: ""
      },
      cartDetails: [],
      beingRemoved: {
        giveWarning: false,
        index: null
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.wishlist == this.props.wishlist) return null;
    if (prevProps.wishlist.length < this.props.wishlist.length) {
      const newItem = this.props.wishlist[this.props.wishlist.length - 1];

      this.state.cartDetails.push({
        note: {
          value: "",
          active: false
        },
        tile: {
          photo: newItem.img,
          designParent: newItem.key,
          id: newItem.tile_parent,
          name: newItem.alt
        },
        productKey: newItem.key
      });
    } else if (
      prevProps.wishlist.length > this.props.wishlist.length &&
      this.state.removing
    ) {
      if (this.props.wishlist.length <= 0) {
        this.setState({
          cartDetails: []
        });
      } else {
        const itemRemoved = prevProps.wishlist.filter(
          e => !this.props.wishlist.includes(e)
        );
        console.log(itemRemoved);
        const itemRemovedID = itemRemoved[0].tile_parent;
        this.state.cartDetails.splice(
          this.state.cartDetails.findIndex(
            cartItem => cartItem.tile.id == itemRemovedID
          ),
          1
        );

        this.setState({ removing: false });
      }
    }
  }

  FormClass = "Wishlist_Send-form";
  inputClass = `${this.FormClass}_input`;

  handleKeyPress(e, product = "form input", index = null) {
    let target = e.target;
    let hasValue = target.value.length > 0 ? true : false;

    if (target.name === "name") {
      const regexName = /([ \u00c0-\u01ffa-zA-Z'\- ]{1,30})\w+/g;
      const isValid = regexName.test(target.value);

      hasValue &&
        this.setState({
          name: {
            value: e.target.value,
            valid: isValid
          }
        });
    } else if (target.name === "email") {
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isValid = regexEmail.test(target.value);

      hasValue &&
        this.setState({
          email: {
            value: e.target.value,
            valid: isValid
          }
        });
    } else if (target.name === "company") {
      const regexCompany = /[a-zA-Z<>:,.!@& ]{2,}/;
      const isValid = regexCompany.test(target.value);

      hasValue &&
        this.setState({
          company: {
            value: e.target.value,
            valid: isValid
          }
        });
    } else if (target.name === "phone") {
      const regexPhone = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;

      if (!target.value.match(/^[- +()]*[0-9][-+()0-9]*$/)) {
        target.value = target.value.substring(0, target.value.length - 1);
      }

      if (target.value.length === 1 && target.value !== "(") {
        target.value = `(${target.value}`;
      } else if (target.value.length === 4 && target.value !== ")") {
        target.value = `${target.value})`;
      }

      hasValue &&
        this.setState({
          phone: {
            active: true,
            value: e.target.value,
            valid: regexPhone.test(target.value)
          }
        });
    } else if (target.name === "comments") {
      this.setState({
        comments: {
          value: e.target.value
        }
      });
    } else if (target.name === "wishListNote") {
      let { noteInputHasValue, notePositionActive } = this.state;

      if (e.which === 13) {
        notePositionActive[index] = false;
      }

      this.state.cartDetails[
        this.state.cartDetails.findIndex(item => item.productKey == product)
      ].note.value = target.value;
      hasValue
        ? (noteInputHasValue[target.id] = true)
        : (noteInputHasValue[target.id] = false);

      this.setState({
        noteInputHasValue,
        notePositionActive
      });
    }
  }

  reduceCart(removedItem) {
    const removedItemKey = removedItem.key;
    const newCart = this.state.cartDetails.filter(
      cartItem => cartItem.productKey !== removedItemKey
    );

    this.setState({
      cartDetails: newCart
    });
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
    const { color } = this.props;

    return (
      <>
        <section className="Wishlist" id="Wishlist">
          <h1 className="Wishlist_title">
            quote list
            <span className="Wishlist_title--icon--container">
              <DocumentIcon color={color} />
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
                    <div className={`Wishlist_cart_item`}>
                      <div className="Wishlist_cart_item-image--container">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="Wishlist_cart_item-image"
                        />
                      </div>
                      {this.state.beingRemoved.giveWarning &&
                      this.state.beingRemoved.index === index ? (
                        <div className="item_remove-warning">
                          <div id="trashSVG">
                            <TrashcanIcon color={color} />
                          </div>
                          <p className="item_remove-text">delete this item?</p>
                          <div className="item_remove-btn--container">
                            <button
                              className="item_remove-btn"
                              id="cancelRemove"
                              onClick={() => {
                                this.setState({
                                  beingRemoved: {
                                    giveWarning: false,
                                    index: null
                                  }
                                });
                              }}
                            >
                              cancel
                            </button>
                            <button
                              className="item_remove-btn"
                              id="remove"
                              onClick={() => {
                                this.props.removeItem(item);
                                this.reduceCart(item);
                                this.setState({
                                  beingRemoved: {
                                    giveWarning: false,
                                    index: null
                                  }
                                });
                              }}
                            >
                              <span class="underline">yes</span> delete this
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="Wishlist_cart_item-name">
                            {item.alt}
                          </h3>
                          <div className="Wishlist_cart_item--editor">
                            <StyledNoteIcon
                              color={
                                item.value.length > 0
                                  ? "#14DB60"
                                  : this.state.notePositionActive[index]
                                  ? color
                                  : "rgba(#fff, 0.4)"
                              }
                              className={`Wishlist_cart_item--editor-note ${this
                                .state.notePositionActive[index] &&
                                `Wishlist_cart_item--editor-note--active`}`}
                            >
                              <Note 
                                index={index}
                                onClick={
                                  this.state.notePositionActive[index]
                                    ? this.closeNote(index)
                                    : this.openNote(index)
                                }
                              />
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
                                  product={item.key}
                                  id={item.tile_parent}
                                  onKeyUp={e => {
                                    const { value } = e.target;
                                    console.log(e.which === 13);

                                    this.props.updateValue(value, index);
                                    this.handleKeyPress(e, item.key, index);
                                  }}
                                />
                                <label
                                  htmlFor="note"
                                  className={`addNote_label`}
                                  style={
                                    item.value.length > 0
                                      ? {
                                          transform: "translateY(-500%)",
                                          opacity: 0
                                        }
                                      : {}
                                  }
                                >
                                  add a note
                                </label>
                                <>
                                  <Check
                                    circleFill={"none"}
                                    circleStroke={"#14DB60"}
                                    pathStroke={"#14DB60"}
                                    style={
                                      this.state.notePositionActive[index] &&
                                      item.value.length > 0
                                        ? {
                                            transform: "translateY(0)",
                                            opacity: 1
                                          }
                                        : {
                                            transform: "translateY(-500%)",
                                            opacity: 0
                                          }
                                    }
                                  />
                                </>
                              </div>
                            </StyledNoteIcon>
                            <div
                              onClick={() => {
                                console.log(index + "is being clicked");
                                this.setState({
                                  beingRemoved: {
                                    giveWarning: true,
                                    index: index
                                  }
                                });
                              }}
                              className="Wishlist_cart_item--editor-remove"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 29.414 29.414"
                              >
                                <g
                                  id="Cross"
                                  transform="translate(0.397 0.707)"
                                >
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
                        </>
                      )}
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
          color={this.props.color}
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

export default Wishlist;
