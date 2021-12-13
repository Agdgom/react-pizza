import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoaderBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';
import { fetchPizzas } from '../redux/actions/pizzas';
const categories = ['Meat ', 'Vegetarian', 'Grill', 'Pungent', 'Closed'];
const sortItems = [
  { name: 'popular', type: 'popular', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'alphabet', type: 'name', order: 'acs' },
];
function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback(
    (idx) => {
      dispatch(setCategory(idx));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleaddPizzaToCart = React.useCallback(
    (obj) => {
      dispatch(addPizzaToCart(obj));
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categories}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((item) => (
              <PizzaBlock
                onClickAddPizza={handleaddPizzaToCart}
                key={item.id}
                {...item}
                addedCount={cartItems.reduce(
                  (sum, cartItem) => (cartItem.id === item.id ? sum + cartItem.count : sum + 0),
                  0,
                )}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, idx) => <LoaderBlock key={idx} />)}
      </div>
    </div>
  );
}

export default Home;
