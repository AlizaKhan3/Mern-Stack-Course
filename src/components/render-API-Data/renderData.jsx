import ProductCard from "./card";
import { productDataArray } from "../../utils/data";
import DataCategory from "./Category";
import { useState } from "react";

const RenderData = () => {
    const [productList, setProductList] = useState(productDataArray)

    const updateProductList = (e) => {
        const selectedCategory = e.target.value;
        console.log(selectedCategory)
        let filteredData;

        if (selectedCategory === "") {
            filteredData = productDataArray;
        } else {
            filteredData = productDataArray.filter((product) =>  product.category.name === selectedCategory);
            setProductList(filteredData)
        }
    }
    return (
        <div>
            <DataCategory handleCategory={updateProductList} />
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