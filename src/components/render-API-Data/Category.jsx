import { categoryArray } from "../../utils/data";
const DataCategory = ({handleCategory}) => {
  return (
    <div>
      <select onChange={handleCategory} name="Category" className="p-2 border-spacing-2 rounded-lg">Category
        <option disabled className="p-1">Select Category</option>
        {
          categoryArray.map((catObj, index) => {
            return(
            <option key={index}>{catObj.name}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default DataCategory;