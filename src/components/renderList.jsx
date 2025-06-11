function RenderList() {
    let arr = [1, 8, 3, 4, 5, 100, 3000, 19110];
    // let arr = [1, 8, 3];

    let rollno = [17, 18, 19, 20, 21, 22, 23, 24, 25];
    return (
        <div>
            <ul>
                {
                    arr.map((value, index) => {
                        console.log(value, index);

                        return (
                            <li key={index}>{value}</li>
                        )
                    })
                }
            </ul>
            <div>
                <p class="text-4xl font-bold underline">
                    Hello world!
                </p>
                {
                    rollno.map((val, ind) => {
                        return (
                            <h1 key={ind}> {val} </h1>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default RenderList;