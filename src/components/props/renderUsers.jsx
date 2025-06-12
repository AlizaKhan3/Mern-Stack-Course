import ChildComponent from "./childComponent";

const RenderUsers = (props) => {
    // const username = "Aliza Khan"
    return (
        <div>
            <p className="font-bold text-primary-color text-3xl">{props.username}</p>
            <ChildComponent childPropName = {props.username}/>
        </div>

    )
}

export default RenderUsers;