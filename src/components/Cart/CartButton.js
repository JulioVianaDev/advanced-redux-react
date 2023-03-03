import classes from './CartButton.module.css';
import { uiActions } from '../../store/slices/UiSlice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const ShowCart =()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={ShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
