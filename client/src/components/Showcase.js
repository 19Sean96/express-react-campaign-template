import React, { Component } from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

const StyledBtn1 = styled.button`
  border: 0.2vmax solid ${props => props.color};
  color: #cbcaca;
  background-color: transparent;
  transition: 0.25s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;

  span {
    position: relative;
    hei
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: #000;
    transition: 0.2s all ease-in-out;
  }

  span::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.2rem;
    width: 0rem;
    background-color: ${props => props.color};
    transition: 0.32s all ease-out;
  }
  &:hover {
    color: #eaeaea;
    &::before {
      height: 100%;
    }

    span::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 560px) {
    span::after {
      top: 80%;
    }
    &:hover span::after {
      width: 50%;
    }
  }
`;

const StyledBtn2 = styled.button`
  background-color: ${props => props.color};
  transition: 0.15s all ease-in;
  position: relative;
  z-index: 20;
  overflow: hidden;
  padding-right: 2.5vmax;

  span {
    display: block;
    transform: translateX(0.25vmax);
    transition: 0.2s all ease;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    height: 100%;
    width: 0%;
    background-color: ${props => props.colorDark};
    transition: 0.2s all ease;
  }

  &:hover {
    color: #eaeaea;

    span {
      transform: translateX(-0.25vmax);
    }
    &::before {
      width: 100%;
    }
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
          index: null
        },
        multiItem: {
          name: "",
          products: [],
          index: null
        }
      }
    };
  }

  expandSingleItem(img, name, index, product) {
    this.setState({
      itemType: "single",
      open: true,
      modal: {
        singleItem: {
          img,
          name,
          index,
          product
        },
        multiItem: {
          name: "",
          products: []
        }
      }
    });
  }

  expandMultiItem(name, index, products) {
    console.log("Name: " + name);
    console.log("Index:" + index);
    console.log("Products: ", products);
    this.setState({
      itemType: "multi",
      open: true,
      modal: {
        singleItem: {
          img: "",
          name: "",
          index: null
        },
        multiItem: {
          name,
          products,
          index
        }
      }
    });
  }

  render() {
    const [color, colorLight, colorDark] = this.props.colors;
    return (
      <main id="Showcase" className="showcase_grid" ref={this.myRef}>
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
              category={product.category}
            >
              <p
                // style={{color: colorLight}}
                className="showcase_grid_item-name"
              >
                {product.name}
              </p>
              <img
                src={product.background}
                alt={product.name}
                className="showcase_grid_item_image"
              />
              <div className="showcase_grid_item-cta">
                <p className="showcase_grid_item-cta_title">{product.name}</p>
                <div className="showcase_grid_item-cta_btn--container">
                  {product.products.length == 1 ? (
                    <>
                      <StyledBtn1
                        className="cta-zoomIn showcase_grid_item-cta_btn"
                        color={color}
                        colorLight={colorLight}
                        colorDark={colorDark}
                        type="button"
                        onClick={e =>
                          this.expandSingleItem(
                            product.background,
                            product.name,
                            index,
                            product.products[0]
                          )
                        }
                      >
                        <span>zoom in</span>
                        <div className="cta-zoomIn--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 47.67 47.67"
                          >
                            <g transform="translate(-340.037 -491.037)">
                              <circle
                                cx="16"
                                cy="16"
                                r="16"
                                transform="translate(341 492)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlismit="10"
                                strokeWidth="1.926"
                              />
                              <line
                                x2="18.686"
                                y2="18.686"
                                transform="translate(368.314 519.314)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                      </StyledBtn1>
                      <StyledBtn2
                        onClick={() =>
                          this.props.addItem(product.products[0], index)
                        }
                        className="cta-addToList showcase_grid_item-cta_btn"
                        type="button"
                        color={color}
                        colorLight={colorLight}
                        colorDark={colorDark}
                      >
                        <span>add to list</span>
                        <div className="cta-addToList--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25.926 25.926"
                          >
                            <g transform="translate(0.792 0.792)">
                              <line
                                x2="10"
                                transform="translate(7.171 12.171)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                              <line
                                y1="10"
                                transform="translate(12.171 7.171)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                transform="translate(0.171 0.171)"
                                fill="none"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="1.926"
                              />
                            </g>
                          </svg>
                        </div>
                      </StyledBtn2>
                    </>
                  ) : (
                    <>
                      <StyledBtn1
                        className="cta-viewAll showcase_grid_item-cta_btn"
                        color={color}
                        colorLight={colorLight}
                        colorDark={colorDark}
                        onClick={e =>
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
            </div>
          );
        })}
        <ShowcaseModal
          colors={this.props.colors}
          itemType={this.state.itemType}
          open={this.state.open}
          productInfo={
            this.state.itemType === "single"
              ? this.state.modal.singleItem
              : this.state.modal.multiItem
          }
          addItem={this.props.addItem}
          closeModal={e => {
            this.setState({
              itemType: null,
              open: false,
              modal: {
                singleItem: {
                  img: "",
                  name: "",
                  index: null
                },
                multiItem: {
                  name: "",
                  products: [],
                  index: null
                }
              }
            });
          }}
        />
      </main>
    );
  }
}

function ShowcaseModal(props) {
  const { productInfo } = props;

  return (
    <article
      // style={{
      //   borderBottom: `solid .3vmin ${props.colors[0]}`,
      //   borderRight: `solid .3vmin ${props.colors[0]}`,

      // }}
      className={`zoomModal ${props.open && "zoomModal--active"}`}
    >
      <h2 className="zoomModal_name">{productInfo.name}</h2>
      <div className="zoomModal-close" onClick={props.closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.414 29.414">
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
      {props.itemType === "single" ? (
        <>
          <div className="zoomModal_img--container">
            <img
              src={productInfo.img}
              alt={productInfo.name}
              className="zoomModal_img"
              onClick={e => console.log("you clicked the image")}
            />
          </div>
          <StyledBtn2
            onClick={() =>
              props.addItem(productInfo.product, productInfo.index)
            }
            className="zoomModal-addToList cta-addToList showcase_grid_item-cta_btn"
            type="button"
            color={props.colors[0]}
            colorLight={props.colors[1]}
            colorDark={props.colors[2]}
          >
            <span>add to list</span>
            <div className="cta-addToList--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25.926 25.926"
              >
                <g transform="translate(0.792 0.792)">
                  <line
                    x2="10"
                    transform="translate(7.171 12.171)"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <line
                    y1="10"
                    transform="translate(12.171 7.171)"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    transform="translate(0.171 0.171)"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="1.926"
                  />
                </g>
              </svg>
            </div>
          </StyledBtn2>
        </>
      ) : (
        <Scrollbars style={{ width: "90%", height: "100%" }}>
          <div className="zoomModal-multi-grid">
            {productInfo.products.map(prod => {
              return (
                <div className="zoomModal-multi-grid-item">
                  <h4 className="zoomModal-multi-grid-item_title">
                    {prod.alt}
                  </h4>
                  <div className="img-container">
                    <img src={prod.img} alt={prod.alt} />
                  </div>
                  <div
                    onClick={() => props.addItem(prod, productInfo.index)}
                    className="multi--addItem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25.926 25.926"
                    >
                      <g transform="translate(0.792 0.792)">
                        <line
                          x2="10"
                          transform="translate(7.171 12.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <line
                          y1="10"
                          transform="translate(12.171 7.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          transform="translate(0.171 0.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="1.926"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              );
            })}
            {productInfo.products.map(prod => {
              return (
                <div className="zoomModal-multi-grid-item">
                  <h4 className="zoomModal-multi-grid-item_title">
                    {prod.alt}
                  </h4>
                  <div className="img-container">
                    <img src={prod.img} alt={prod.alt} />
                  </div>
                  <div
                    onClick={() => props.addItem(prod, productInfo.index)}
                    className="multi--addItem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25.926 25.926"
                    >
                      <g transform="translate(0.792 0.792)">
                        <line
                          x2="10"
                          transform="translate(7.171 12.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <line
                          y1="10"
                          transform="translate(12.171 7.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          transform="translate(0.171 0.171)"
                          fill="none"
                          stroke={props.colors[0]}
                          strokeMiterlimit="10"
                          strokeWidth="1.926"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </Scrollbars>
      )}
    </article>
  );
}

export default Showcase;
