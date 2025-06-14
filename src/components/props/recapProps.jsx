import ChildComponent from "./childComponent";

const RecapProps = () => {
    const listOfStds = ["A", 'B', 'C', 'F'];

  return (
    <div>
      <ChildComponent paragraph = {"hi alia here"}/>
      {
        listOfStds.map((value, index) => {
            return(
                // <h1 key={index}>{value}</h1>
                <ChildComponent key={index} paragraph={value}/>
            )
        })
      }
    </div>
  )
}

export default RecapProps;
