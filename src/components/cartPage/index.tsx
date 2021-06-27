import classNames from "classnames";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { useStyles } from "./styles";
import priceTag from "../../assets/images/price-tag.png";
import cartIcon from "../../assets/images/cart-icon.png";
import location from "../../assets/images/location.png";
import { useQuery } from "react-query";
import {
  CartStore,
  decreaseCart,
  increaseCart,
  setProducts,
  Data,
  Product,
} from "../../core";
import { ModalCart } from "./modalCart";
import { useState } from "react";
import Rating from "react-simple-star-rating";

const CartPage = () => {
  const styles = useStyles();
  const { data, isLoading } = useQuery<Data>(
    "getProducts",
    async () => {
      const data = await fetch(
        "https://run.mocky.io/v3/a8d03157-a077-44db-9746-695e18a7549e"
      ).then((response) => response.json());
      return data;
    },
    {
      onSuccess(data) {
        dispatch(setProducts(data.products));
      },
    }
  );
  const dispatch = CartStore.useDispatch();
  const {
    products: storeProducts,
    selectedItemCount,
    selectedItemAmount,
  } = CartStore.useState();
  const [modalShow, setModalShow] = useState(false);
  const handleRating = () => {
    // Some logic
  };
  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <div className={classNames(styles.container)}>
          <div className={classNames(styles.content)}>
            <div className={classNames(styles.header)}>
              <div className={classNames(styles.logoBox)}>
                <img
                  src="https://i.postimg.cc/76w7frGZ/flashbox-logo.png"
                  className={styles.logImage}
                />
              </div>
              <div className={classNames(styles.headerTexts)}>
                <div>{data?.name}</div>
                <div className={styles.starLine}>
                  <span className={styles.rate}>{data?.rate_average}</span>
                  <Rating
                    ratingValue={data?.rate_average || 0}
                    size={20}
                    fillColor="#fdd835"
                    emptyColor="#c7c7c7"
                    onClick={handleRating}
                  />
                  <span className={styles.rate}>{data?.rate_count}</span>
                </div>

                <div>
                  {data?.address}
                  <img src={location} />
                </div>
              </div>
            </div>
            <div className={classNames(styles.products)}>
              {storeProducts.map((product: Product, _index: number) => (
                <div key={_index} className={styles.product}>
                  <img src={product.image} className={styles.productImage} />
                  <p className={styles.productName}>{product.name}</p>
                  <div>
                    $<span className={styles.amount}>{product.price}</span>
                    <img src={priceTag} />
                  </div>
                  <ButtonGroup
                    className={classNames("mr-2 mt-3", styles.buttonGroup)}
                    aria-label="First group"
                  >
                    <Button
                      className={classNames(styles.plusMinusBtn, "shadow-none")}
                      onClick={() => {
                        dispatch(increaseCart(product.id));
                      }}
                    >
                      +
                    </Button>
                    <Button
                      className={classNames(styles.countBtn, "shadow-none")}
                    >
                      {product.count}
                    </Button>
                    <Button
                      className={classNames(styles.plusMinusBtn, "shadow-none")}
                      onClick={() => {
                        dispatch(decreaseCart(product.id));
                      }}
                    >
                      -
                    </Button>
                  </ButtonGroup>
                </div>
              ))}
            </div>
          </div>
          <div className={classNames(styles.footer)}>
            <div className={classNames(styles.content, styles.footerContent)}>
              <div>${selectedItemAmount}</div>
              <div className={styles.BasketName}>Basket</div>
              <div className={styles.cartAndNumber}>
                <span className={styles.selectedProduct}>
                  {selectedItemCount}
                </span>
                <img src={cartIcon} onClick={() => setModalShow(true)} />
              </div>
            </div>
          </div>
        </div>
      )}
      <ModalCart show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export { CartPage };
