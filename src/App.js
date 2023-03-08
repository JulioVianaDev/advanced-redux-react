import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from './store/slices/UiSlice';
import Notification from './components/UI/Notification'; 


let isInitial = true;

function App() {

  const cartShow = useSelector(state=> state.ui.cartIsVisible);
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state=> state.ui.notification);
  const dispatch = useDispatch();
  useEffect(()=>{
    
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
