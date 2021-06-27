import { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { CartStore, Product } from "../../core";
import { useStyles } from "./styles";
interface Props {
  show: boolean;
  onHide: () => void;
}
export const ModalCart = (props: Props) => {
  const styles = useStyles();
  const { products } = CartStore.useState();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (products) {
      setSelectedProducts(
        products.filter((product: Product) => (product?.count ?? 0) > 0)
      );
    }
  }, [products]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {selectedProducts &&
            selectedProducts.map((product: Product) => (
              <ListGroup.Item>
                <div className={styles.modalList}>
                  <div>{product.name}</div>
                  <div>{product.count}</div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
