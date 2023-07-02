import React from "react";
import { useAppSelector } from "../../../redux-app/hooks";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Products.module.scss";
import Loader from "../../atoms/Loader/Loader";
const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.currentProducts);
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Row>
          {products ? (
            products.map((product) => (
              <Col className="mb-4" key={product.id} lg={4} md={6}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Loader />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
