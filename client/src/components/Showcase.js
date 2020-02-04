import React, { Component } from "react";
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
          imgCollection: []
        }
      }
    };
  }

  expandSingleItem(img, name, index) {
    console.log(img, name, index);
    this.setState({
      itemType: "single",
      open: true,
      modal: {
        singleItem: {
          img,
          name,
          index
        }
      }
    });
  }

  // expandMultiItem() {}

  // closeModal() {}

  render() {
    return (
      <main id="Showcase" className="showcase_grid" ref={this.myRef}>
        {this.props.products.map((product, index) => {
          // console.log(product)
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
              <p className="showcase_grid_item-name">{product.name}</p>
              <img
                src={product.background}
                alt={product.name}
                className="showcase_grid_item_image"
              />
              <div className="showcase_grid_item-cta">
                <p className="showcase_grid_item-cta_title">
                  {product.name}
                </p>
                <div className="showcase_grid_item-cta_btn--container">
                  {product.singleItem ? (
                    <>
                      <button
                        className="cta-zoomIn showcase_grid_item-cta_btn"
                        type="button"
                        onClick={e =>
                          this.expandSingleItem(
                            product.displayImg,
                            product.name,
                            index
                          )
                        }
                      >
                        zoom in
                      </button>
                      <button
                        onClick={() => this.props.addItem(product, index)}
                        className="cta-addToList showcase_grid_item-cta_btn"
                        type="button"
                      >
                        add to list
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="cta-viewAll showcase_grid_item-cta_btn">
                        see all
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* {this.state.zoomedInProduct.index !== null ? ( */}
        <ShowcaseModal
          itemType={this.state.itemType}
          open={this.state.open}
          productInfo={
            this.state.itemType === "single"
              ? this.state.modal.singleItem
              : this.state.modal.multiItem
          }
          // addItem={(product,index) => {
          //   this.props.addItem(product,index)
          // }}
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
                  imgCollection: ""
                }
              }
            });
          }}
        />
        {/* ) : null} */}
      </main>
    );
  }
}

function ShowcaseModal(props) {

  const { productInfo } = props;

  return (
    <article className={`zoomModal ${props.open && "zoomModal--active"}`}>
      <h2 className="zoomModal_name">{productInfo.name}</h2>
      <div
        // onClick={() => this.props.removeItem(item)}
        className="zoomModal-close"
        onClick={props.closeModal}
      >
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
            />
          </div>
          <button
            // onClick={() => props.addItem()}
            className="cta-addToList showcase_grid_item-cta_btn"
            type="button"
          >
            add to list
          </button>
        </>
      ) : (
        <></>
      )}
    </article>
  );
}

export default Showcase;
