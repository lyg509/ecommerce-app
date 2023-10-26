import { product } from "@/utils/product";
import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);
  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
