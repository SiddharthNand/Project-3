import './Products.css';
import ProductCard from '../../components/ProductCard'

export default function ProductsPage({ list, user, quantity, setQuantity }) {
  const handleClick = async (item) => {
    const res = await fetch(`/cart/${user._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: item.item, price: item.price, img: item.img, user: user._id })
    })
    res.json()
    setQuantity(quantity + 1)
  }
  const productsCards = list.map((item, index) => {
    return <ProductCard key={`${index}`} item={item} handleClick={handleClick} />
  })
  return (
    <>
      <h1>Christmas Sweaters</h1>
      {productsCards}
    </>
  );
}


