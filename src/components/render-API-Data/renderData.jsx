import ProductCard from "./card";
import { productDataArray } from "../../utils/data";
import DataCategory from "./Category";
import { useState } from "react";
import TitleFilter from "./titleFilter";
import PriceSort from "./priceSort";

const RenderData = () => {
    const [productList, setProductList] = useState(productDataArray)

    const updateProductList = (e) => {
        const selectedCategory = e.target.value;
        console.log(selectedCategory)
        let filteredData;

        if (selectedCategory === "") {
            filteredData = productDataArray;
        } else {
            filteredData = productDataArray.filter((product) => product.category.name === selectedCategory);
            setProductList(filteredData)
        }
    }

    const handleItem = (event) => {
        const searchedItemValue = event.target.value;
        console.log(searchedItemValue)

        let filteredItem;

        if (searchedItemValue === "") {
            setProductList(productDataArray);
        }
        else {
            filteredItem = productDataArray.filter((product) =>
                product.title.toLowerCase().includes(searchedItemValue.toLowerCase())
            );
            setProductList(filteredItem);
        }
        console.log(filteredItem);
        // console.log(searchedItemValue);
    }

    const sortPrice = (e) => {
        const selectedOption = e.target.value;
        console.log(selectedOption)
        const sortedProdList = [...productDataArray]

        //Sort takes 2 objects
        if (selectedOption === "Low to High") {
            sortedProdList.sort((a, b) => a.price - b.price);
            // setProductList(sortedProdList)
        }
        else if (selectedOption === "High to Low") {
            sortedProdList.sort((a, b) => b.price - a.price);
            // setProductList(sortedProdList)
        }
        // else {
            setProductList(sortedProdList)
        // }
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-orange-500">
                <DataCategory handleCategory={updateProductList} />
                <TitleFilter handleSearchedItem={handleItem} />
                <PriceSort sortProducts={sortPrice} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
                {
                    productList.map((object, index) => {
                        return (
                            <ProductCard key={index} ObjectData={object} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RenderData;