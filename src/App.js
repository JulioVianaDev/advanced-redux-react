import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import Notification from './components/UI/Notification'; 
import { sendCartData } from './store/slices/actions/sendCartData';
import { fetchCartData } from './store/slices/actions/fetchCartData';

let isInitial = true;

function App() {

  const cartShow = useSelector(state=> state.ui.cartIsVisible);
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state=> state.ui.notification);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{
    if (isInitial){
      isInitial= false;
      console.log("primeira")
      return;
    }
    dispatch(sendCartData(cart))
    console.log('segunda')
  },[cart,dispatch])
  return (
    <>
      {notification && <Notification 
                          status = {notification.status}
                          message = {notification.message}
                          title = {notification.status}
                        />
      }
      <Layout>
        {cartShow &&  <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
