import React, { Component } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
import OffClick from "react-offclick";

import ZoomIn from "./Icons/ZoomIn";
import Check from "./Icons/Check";
import Add from "./Icons/Add";
import Close from "./Icons/Close";
import MultiItemIcon from "./Icons/MultiItemIcon";

const StyledMultiModal = styled.div`
  @media screen and (max-width: 750px) {
    .zoomModal-close {

      &::before {
        background-color: ${props => props.color}
      }
    }
  }
`;

const StyledBtn1 = styled.button`
  border: 3px solid ${(props) => props.color};
  color: #cbcaca;
  background-color: transparent;
  transition: 0.25s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;

  span {
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: ${(props) => props.color};
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    color: #000;
    &::before {
      height: 100%;
    }
  }

  @media screen and (max-width: 1550px) {
    border-width: 2px;
  }
`;

const StyledBtn2 = styled.button`
  background-color: ${(props) => (props.isModalBtn ? "#000" : props.color)};
  transition: 0.15s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;
  padding-right: 4.5rem;

  span {
    display: block;
    transform: translateX(1.25rem);
    color: ${(props) => {
      if (props.isModalBtn) {
        if (props.clicked) {
          return "#000";
        } else return "#fff";
      } else if (!props.isModalBtn) return "#000";
    }};
    transition: 0.2s all ease;
  }

  .cta-addToList--icon-1 {
    opacity: 1;
    transition: 0.2s opacity ease-out;
    svg g > * {
      stroke: ${(props) => (props.isModalBtn ? props.color : "#fff")};
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    height: ${(props) => (props.clicked ? "100%" : "0%")};
    width: 100%;
    background-color: ${(props) => (props.isModalBtn ? props.color : "#fff")};
    transition: 0.2s all ease;
  }

  &:hover {
    span {
      color: #000;
    }
    &::before {
      height: 100%;
    }
    .cta-addToList--icon-1 {
      opacity: 0;
    }
  }
`;

const StyledMultiBtn = styled.div`
  transition: 0.13s background-color ease-out;
  background-color: ${(props) => (props.isClicked ? props.color : "#0e0d0d")};
  width: ${(props) => (props.isClicked ? "12.5rem" : "6rem")};
  height: 2.8vmax;
  min-height: 6rem;
  svg:first-child g > * {
    stroke: ${(props) => props.color};
  }

  #check path {
    stroke: #fff !important;
  }

  &:hover {
    background-color: ${(props) => props.color} !important;
  }
`;

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      itemType: null,
      open: false,
      modal: {
        singleItem: {
          img: "",
          name: "",
          index: null,
        },
        multiItem: {
          name: "",
          products: [],
          index: null,
        },
      },
    };
  }

  expandSingleItem(img, name, index, product, id) {
    this.setState({
      itemType: "single",
      open: true,
      modal: {
        singleItem: {
          img,
          name,
          index,
          product,
          id,
        },
        multiItem: {
          name: "",
          products: [],
        },
      },
    });
  }

  expandMultiItem(name, index, products) {
    this.setState({
      itemType: "multi",
      open: true,
      modal: {
        singleItem: {
          img: "",
          name: "",
          index: null,
        },
        multiItem: {
          name,
          products,
          index,
        },
      },
    });
  }

  render() {
    const noScroll = `
      * {
        overflow-y: hidden;
      }

      svg, g, line, path, .Nav_Wishlist-check {
        overflow-y: visible;
      }
    `;
    const noClick = `
      #Showcase:not(.zoomModal) {
        pointer-events: none;
      }
    `;
    const { color } = this.props;
    return (
      <main id="Showcase" className="showcase_grid" ref={this.myRef}>
        {this.state.itemType === "multi" && this.state.open && (
          <style>{noScroll}</style>
        )}
        {this.state.open && <style>{noClick}</style>}
        {this.props.products.map((product, index) => {
          return (
            <div
              key={index}
              className={`showcase_grid_item showcase_grid_item--colspread_${
                product.columns
              } ${
                product.category === this.props.activeCategory ||
                this.props.activeCategory === "all"
                  ? ""
                  : "notActive"
              }`}
              onClick={
                window.innerWidth > 560
                  ? null
                  : product.singleItem
                  ? (e) => this.props.addItem(product.products[0], index)
                  : (e) =>
                      this.expandMultiItem(
                        product.name,
                        index,
                        product.products
                      )
              }
              category={product.category}
            >
              <p className="showcase_grid_item-name">{product.name}</p>
              <img
                src={product.background}
                alt={product.name}
                className="showcase_grid_item_image"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div
                className={`showcase_grid_item-cta showcase_grid_item-cta-${product
                  .products.length > 1 && "multi"}`}
              >
                <p className="showcase_grid_item-cta_title">{product.name}</p>
                <div className="showcase_grid_item-cta_btn--container">
                  {product.products.length == 1 ? (
                    <>
                      <StyledBtn1
                        name="zoom-btn"
                        className="cta-zoomIn showcase_grid_item-cta_btn"
                        color={color}
                        type="button"
                        onClick={(e) =>
                          this.expandSingleItem(
                            product.products[0].img,
                            product.name,
                            index,
                            product.products[0],
                            product.id
                          )
                        }
                      >
                        <span name="zoom-btn">zoom in</span>

                        <div className="cta-zoomIn--icon" name="zoom-btn">
                          <ZoomIn />
                        </div>
                      </StyledBtn1>
                      <StyledBtn2
                        onClick={() =>
                          this.props.addItem(product.products[0], index)
                        }
                        className="cta-addToList showcase_grid_item-cta_btn"
                        type="button"
                        color={color}
                        isModalBtn={false}
                        clicked={this.props.wishlist.some(
                          (wishlistProd) =>
                            wishlistProd.tile_parent === product.id
                        )}
                      >
                        <span>
                          {this.props.wishlist.some(
                            (wishlistProd) =>
                              wishlistProd.tile_parent === product.id
                          )
                            ? "added!"
                            : "add to list"}
                        </span>
                        {this.props.wishlist.some(
                          (wishlistProd) =>
                            wishlistProd.tile_parent === product.id
                        ) ? (
                          <>
                            <div className="cta-addToList--icon">
                              <Check
                                circleFill={"#000"}
                                circleStroke={"#000"}
                                pathStroke={"#fff"}
                                style={{
                                  display: "auto",
                                }}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="cta-addToList--icon">
                              <Add
                                lineStroke="#fff"
                                circleFill="none"
                                circleStroke="#fff"
                                className=""
                              />
                            </div>

                            <div className="cta-addToList--icon cta-addToList--icon-2">
                              <Add
                                lineStroke="#fff"
                                circleFill={color}
                                circleStroke={color}
                                className=""
                              />
                            </div>
                          </>
                        )}
                      </StyledBtn2>
                    </>
                  ) : (
                    <>
                      <StyledBtn1
                        className="cta-viewAll showcase_grid_item-cta_btn"
                        color={color}
                        onClick={(e) =>
                          this.expandMultiItem(
                            product.name,
                            index,
                            product.products
                          )
                        }
                      >
                        see all
                      </StyledBtn1>
                    </>
                  )}
                </div>
              </div>
              <span className="mobileAddItem--container">
                {product.singleItem ? (
                  <StyledMultiBtn
                    isModalBtn={false}
                    onClick={() =>
                      this.props.addItem(product.products[0], index)
                    }
                    className="mobileAddItem"
                    color={color}
                    isClicked={this.props.wishlist.some(
                      (wishlistProd) => wishlistProd.tile_parent === product.id
                    )}
                  >
                    {this.props.wishlist.some(
                      (wishlistProd) => wishlistProd.tile_parent === product.id
                    ) ? (
                      <>
                        <Check
                          circleFill="#000"
                          circleStroke="#000"
                          pathStroke="#fff"
                          style={{
                            width: "2.85rem",
                            height: "auto",
                            position: "absolute",
                            transition: "0.13s opacity ease-out",
                            zIndex: 5000,
                            right: "1.5rem",
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <Add
                          circleFill="none"
                          circleStroke="#000"
                          lineStroke="#000"
                          className="mobileAddItem__1"
                        />
                        <Add
                          circleFill="#fff"
                          circleStroke="#fff"
                          lineStroke={color}
                          className="mobileAddItem__2"
                        />
                      </>
                    )}
                    <span
                      className={
                        this.props.wishlist.some(
                          (wishlistProd) =>
                            wishlistProd.tile_parent === product.id
                        )
                          ? "added-btn"
                          : ""
                      }
                    >
                      {this.props.wishlist.some(
                        (wishlistProd) =>
                          wishlistProd.tile_parent === product.id
                      )
                        ? "added!"
                        : ""}
                    </span>
                  </StyledMultiBtn>
                ) : (
                  <div className="icon-wrapper">
                    <MultiItemIcon color={this.props.color} />
                  </div>
                )}
              </span>
            </div>
          );
        })}
        {this.state.open && (
          <ShowcaseModal
            wishlist={this.props.wishlist}
            color={this.props.color}
            itemType={this.state.itemType}
            open={this.state.open}
            productInfo={
              this.state.itemType === "single"
                ? this.state.modal.singleItem
                : this.state.modal.multiItem
            }
            addItem={this.props.addItem}
            closeModal={(e) => {
              this.setState({
                itemType: null,
                open: false,
                modal: {
                  singleItem: {
                    img: "",
                    name: "",
                    index: null,
                  },
                  multiItem: {
                    name: "",
                    products: [],
                    index: null,
                  },
                },
              });
            }}
          />
        )}
      </main>
    );
  }
}

function ShowcaseModal(props) {
  const { productInfo } = props;
  const duration = 225;
  const Style = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: `${props.open ? 1 : 0}`,
  };
  return (
    <OffClick handler={() => props.open && props.closeModal()}>
      <div
        className={`${
          props.itemType !== "single" ? "zoomModal--multi__container" : ""
        }`}
      >
        <article
          id={`${props.itemType}Modal`}
          className={`zoomModal ${props.open && "zoomModal--active"} ${
            props.itemType === "single" ? "" : "zoomModal--multi"
          }`}
        >
          {props.itemType === "single" ? (
            <>
              <h2 className="zoomModal_name">{productInfo.name}</h2>
              <div color={props.color} className="zoomModal-close" onClick={props.closeModal}>
                <Close color={props.color} />
              </div>
              <div className="zoomModal_img--container">
                <img
                  onContextMenu={(e) => e.preventDefault()}
                  src={productInfo.img}
                  alt={productInfo.name}
                  className="zoomModal_img"
                  onClick={(e) => console.log("you clicked the image")}
                />
              </div>
              <StyledBtn2
                onClick={() =>
                  props.addItem(productInfo.product, productInfo.index)
                }
                className="zoomModal-addToList cta-addToList showcase_grid_item-cta_btn"
                type="button"
                color={props.color}
                isModalBtn={true}
                clicked={props.wishlist.some(
                  (wishlistProd) => wishlistProd.tile_parent === productInfo.id
                )}
              >
                <span>
                  {props.wishlist.some(
                    (wishlistProd) =>
                      wishlistProd.tile_parent === productInfo.id
                  )
                    ? "added!"
                    : "add to list"}
                </span>
                {props.wishlist.some(
                  (wishlistProd) => wishlistProd.tile_parent === productInfo.id
                ) ? (
                  <>
                    <div className="cta-addToList--icon">
                      <Check
                        circleFill="#000"
                        circleStroke="#000"
                        pathStroke="#fff"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="cta-addToList--icon cta-addToList--icon-1">
                      <Add
                        className=""
                        circleFill="none"
                        circleStroke={props.color}
                        lineStroke={props.color}
                      />
                    </div>
                    <div className="cta-addToList--icon cta-addToList--icon-2">
                      <Add
                        className=""
                        circleFill="#fff"
                        circleStroke="#fff"
                        lineStroke={props.color}
                      />
                    </div>
                  </>
                )}
              </StyledBtn2>
            </>
          ) : (
            <StyledMultiModal color={props.color}>
              <div className="wrapper">
                <div className="zoomModal-close" onClick={props.closeModal}>
                  <Close color={props.color} />
                </div>
              </div>
              <Scrollbars style={{ width: "100%", height: "100vh" }}>
                <h2 className="zoomModal_name">{productInfo.name}</h2>
                <div className="zoomModal-multi-grid">
                  {productInfo.products.map((prod) => {
                    return (
                      <div
                        className="zoomModal-multi-grid-item"
                        onClick={() => props.addItem(prod, productInfo.index)}
                      >
                        <h4 className="zoomModal-multi-grid-item_title">
                          {prod.alt}
                        </h4>
                        <div className="img-container">
                          <img
                            onContextMenu={(e) => e.preventDefault()}
                            src={prod.img}
                            alt={prod.alt}
                          />
                        </div>
                        <StyledMultiBtn
                          onClick={() => props.addItem(prod, productInfo.index)}
                          className="multi--addItem"
                          color={props.color}
                          isClicked={props.wishlist.some(
                            (wishlistProd) => wishlistProd.key === prod.key
                          )}
                        >
                          {props.wishlist.some(
                            (wishlistProd) => wishlistProd.key === prod.key
                          ) ? (
                            <>
                              <Check
                                circleFill="#000"
                                circleStroke="#000"
                                pathStroke="#fff"
                              />
                            </>
                          ) : (
                            <>
                              <Add
                                className="multi--addItem__1"
                                circleFill="none"
                                circleStroke={props.color}
                                lineStroke={props.color}
                              />
                              <Add
                                className="multi--addItem__2"
                                circleFill="#fff"
                                circleStroke="#fff"
                                lineStroke={props.color}
                              />
                            </>
                          )}
                          <span
                            className={
                              props.wishlist.some(
                                (wishlistProd) => wishlistProd.key === prod.key
                              )
                                ? "added-btn"
                                : ""
                            }
                          >
                            {props.wishlist.some(
                              (wishlistProd) => wishlistProd.key === prod.key
                            )
                              ? "added!"
                              : ""}
                          </span>
                        </StyledMultiBtn>
                      </div>
                    );
                  })}
                </div>
              </Scrollbars>
            </StyledMultiModal>
          )}
        </article>
      </div>
    </OffClick>
  );
}

export default Showcase;
