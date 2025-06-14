import ProductCard from "./card";
import { cardDataArray } from "../../utils/data";
// import { categoryArray } from "../../utils/data";
import DataCategory from "./Category";
const RenderData = () => {
   
    return (
        <div>
            <DataCategory/>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
            {
                cardDataArray.map((object, index) => {
                    return(
                        <ProductCard key={index} ObjectData={object}/>
                    )
                })
            }
        </div> 
        </div>

    )
}

export default RenderData;