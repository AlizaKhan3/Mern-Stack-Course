const PriceSort = ({sortProducts}) => {
    return (
        <div>
            <select onChange={sortProducts} className="p-2">
                <option disabled className="p-1" value="Default">Filter by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
        </div>
    )
}

export default PriceSort;
