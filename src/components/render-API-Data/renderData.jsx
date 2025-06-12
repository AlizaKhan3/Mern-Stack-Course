import ProductCard from "./card";
import { cardDataArray } from "../../utils/data";
const RenderData = () => {
   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
            {
                cardDataArray.map((object, index) => {
                    return(
                        <ProductCard key={index} ObjectData={object}/>
                    )
                })
            }
            
        </div>
    )
}

export default RenderData;