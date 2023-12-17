import { Container } from "@mui/material";
import OrderDetails from "./OrderDetails";
import ListRating from "./ListRating";
import { orders } from "@/utils/";
import getOrderById from "@/actions/getOrderById";

interface IParams {
  orderId?: string;
}

const Order = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
        <div className="flex flex-col mt-20 gap-4">
          <div> Add Rating</div>
        </div>
        <ListRating order={order} />
      </Container>
    </div>
  );
};

export default Order;
