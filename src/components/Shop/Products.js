import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1',price: 17.77,title: 'my first book' ,description: ' some description'},
  {id: 'p2',price: 27.77,title: 'my second book' ,description: ' some description'},
  {id: 'p3',price: 13.77,title: 'my third book' ,description: ' some description'},
  {id: 'p4',price: 197,title: 'my quarto book' ,description: ' some description'},
]

const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((p)=>(
          <ProductItem
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            id={p.id}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
