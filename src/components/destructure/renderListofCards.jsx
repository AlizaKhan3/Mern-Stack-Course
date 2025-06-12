const RenderListCards = () => {

    const CardsArray = [
        {
            title: "Urban Street Sneakers",
            price: 120,
            description: "Comfortable and stylish everyday wear",
            category: "Footwear",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Sky Blue Denim Jacket",
            price: 150,
            description: "Perfect for winter vibes",
            category: "Jackets",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Minimalist Analog Watch",
            price: 75,
            description: "Elegant wristwatch for all occasions",
            category: "Accessories",
            image: "https://i.imgur.com/penhRli.jpeg"
        },
        {
            title: "Tech Backpack Pro",
            price: 99,
            description: "Laptop-safe and waterproof",
            category: "Bags",
            image: "https://i.imgur.com/cSytoSD"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
            {
                CardsArray.map((object) => {
                    const { title, description, price, category, image } = object
                    return (
                        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
                            <img className="w-full h-60 object-cover rounded-xl" src={`${image}.jpeg`} alt="Black Hooded shirt" />
                            <h2 className="text-xl font-semibold text-gray-900 mt-4"> {object.title}</h2>
                            <p className="text-gray-500 text-sm">{category}</p>
                            <p className="text-gray-700 mt-2 text-sm">{description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">$ {price}</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default RenderListCards;
// const RenderListCards = () => {
//     const cardDataObj = {
//         title: "Classic Black Hooded Shirt",
//         price: 89,
//         description: "ready to wear",
//         category: "Clothes",
//         image: "https://i.imgur.com/cSytoSD"
//     }
//     //Destructing Object - Unpacking of Object Keys
//     const { title,
//         price,
//         description,
//         category,
//         image } = cardDataObj