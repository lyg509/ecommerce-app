import { Container } from "@mui/material";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";

import { getCurrentUser } from "@/actions/getCurrentUser";
import AddRating from "./AddRating";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  console.log("params...", params);

  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product)
    return (
      <NullData
        title="Oops! Product with the given id
  does not exist"
      />
    );

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div> Add Rating</div>
        </div>
        <AddRating product={product} user={user} />
        <ListRating product={product} />
      </Container>
    </div>
  );
};

export default Product;
