
import {uiActions} from '../UiSlice'

export const sendCartData = (cart) =>{
  return async(dispatch)=>{
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'sending...',
      message: 'Sending cart data',
    }))
    const sendRequest =async ()=>{
      const response = await fetch(
          'https://advanced-redux-d764f-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
      )
      if(!response.ok){
        throw new Error('Sending cart data failed');
      }
    }
    try {
      await sendRequest()
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Send cart data com sucesso',
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Erro!',
        message: 'Enviar cart data retornou um erro',
      })) 
    }
  }
}