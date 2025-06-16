

const PriceSort = ({sortProducts}) => {
    return (
        <div>
            <select onChange={sortProducts} className="p-2 rounded-lg">
                <option disabled  value="Default">Filter by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
        </div>
    )
}

export default PriceSort;
