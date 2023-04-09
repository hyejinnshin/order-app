import classes from  "./Header.module.css";
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
  return ( 
    <>
      <header className={classes.header}>
        <h1>음식 주문</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  );
};
export default Header;
