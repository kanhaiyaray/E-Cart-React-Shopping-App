import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { items } from './Data';
import Product from './Product';

const SearchItem = ({ cart, setCart }) => {
  // console.log(useParams())
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      // console.log(data)
      setFilterData(data)
    }

    filteredData();

  }, [term])



  return (
    <Product cart={cart} setCart={setCart} items={filterData} />
  )
}

SearchItem.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired
}

export default SearchItem