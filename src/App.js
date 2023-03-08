import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from './store/slices/UiSlice';
import Notification from './components/UI/Notification';
function App() {

  const cartShow = useSelector(state=> state.ui.cartIsVisible);
  const cart = useSelector(state=> state.cart);
  const notification = useSelector(state=> state.ui.notification);
  const dispatch = useDispatch();
  useEffect(()=>{
    const sendCartData = async ()=>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending...',
        message: 'Sending cart data',
      }))
      const response = await fetch('https://advanced-redux-d764f-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if(!response.ok){
        throw new Error('Sending cart data failed');
        
      }
      // const responseData = await response.json(); NÃO PRECISO DESSA RESPOSTA, NÃO IMPORTA POIS QUERO O ERRO
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Send cart data com sucesso',
      }))
    }

    sendCartData().catch(error =>{
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Erro!',
        message: 'Enviar cart data retornou um erro',
      })) 
    });
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
