import { categoryArray } from "../../utils/data";
const DataCategory = () => {
  return (
    <div>
      <select name="Category" className="p-4 border-t-emerald-600 border-s-red-500 border-spacing-2">Category
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