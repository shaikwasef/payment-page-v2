import { fetchUsers } from "@/actions/asyncActions";
import { orderCake, orderIceCream, restockCake, restockIceCream } from "@/actions/cakeOrderAction";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home(props) {
  const { updateCakeOrder, restockCakeOrder } = props;
  const cakeStore = useSelector((state: any) => state.cakeReducer);
  const userStore = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div>{cakeStore.numOfCakes}</div>
      <button onClick={() => updateCakeOrder()}>Click to buy cake</button>
      <button onClick={() => restockCakeOrder()}>Click to restock cake</button>
      <div>{cakeStore.numOfIceCreams}</div>
      <button onClick={() => dispatch(orderIceCream())}>Click to buy ice cream</button>
      <button onClick={() => dispatch(restockIceCream())}>Click to restock ice cream</button>
      <div>check</div>
      <div>
        {userStore.users.map((u: any) => (
          <div>{u}</div>
        ))}
      </div>
      <div>{userStore.loading && "...loading"}</div>
      <button onClick={() => dispatch(fetchUsers())}>clicke me</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCakeOrder: () => dispatch(orderCake()),
    restockCakeOrder: () => dispatch(restockCake()),
  };
};

export const cakeContainer = connect(null, mapDispatchToProps)(Home);
