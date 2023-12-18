import { getCurrentUser } from "@/actions/getCurrentUser";
import getOrders from "@/actions/getOrders";
import NullData from "../components/NullData";
import { Container } from "@mui/material";
import OrderClient from "./OrderClient";
import getOrdersByUserId from "@/actions/getOrdersByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Acces denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders yet" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <OrderClient order={orders} />
      </Container>
    </div>
  );
};

export default Orders;
