import { product } from "@/utils/product";
import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div>Add Rating</div>
        <div>List</div>
      </Container>
    </div>
  );
};

export default Product;
