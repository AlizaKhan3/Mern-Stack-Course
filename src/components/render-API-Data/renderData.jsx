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

    // const [titleList, setTitleList] = useState(productDataArray);
    // const productTitles = productDataArray.filter((product) => product.title);
    // console.log(productTitles)
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

    const sortProductList = (e) => {
        const selectedOption = e.target.value;
        console.log(selectedOption)
        const productPriceArray = productDataArray.map((product, index) => product.price);
        console.log(productPriceArray)
        // if(selectedOption === ""){
        //     setProductList(productDataArray);
        // }


        //Sort takes 2 objects
        if (selectedOption === "Low to High") {
            productDataArray.sort((a, b) => {

                // product.price.min()


            })
        }
    }

    return (
        <div>
            <div className="container flex m-4 gap-6">
                <DataCategory handleCategory={updateProductList} />
                <TitleFilter handleSearchedItem={handleItem} />
                <PriceSort sortProducts={sortProductList} />
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