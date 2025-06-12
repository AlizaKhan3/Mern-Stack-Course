// import AppCard from "../cardComponent";

// const RenderIndCardsProps = () => {

//     const CardsArray = [
//         {
//             title: "Urban Street Sneakers",
//             price: 120,
//             description: "Comfortable and stylish everyday wear",
//             category: "Footwear",
//             image: "https://i.imgur.com/cSytoSD"
//         },
//         {
//             title: "Sky Blue Denim Jacket",
//             price: 150,
//             description: "Perfect for winter vibes",
//             category: "Jackets",
//             image: "https://i.imgur.com/cSytoSD"
//         },
//         {
//             title: "Minimalist Analog Watch",
//             price: 75,
//             description: "Elegant wristwatch for all occasions",
//             category: "Accessories",
//             image: "https://i.imgur.com/penhRli.jpeg"
//         },
//         {
//             title: "Tech Backpack Pro",
//             price: 99,
//             description: "Laptop-safe and waterproof",
//             category: "Bags",
//             image: "https://i.imgur.com/cSytoSD"
//         }
//     ];


//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
//             {
//                 CardsArray.map(({ title, description, price, category, image }) => {
//                     return <AppCard title={title} description={description} price={price} category={category} image={image} />

//                 })
//             }
//             {
//                 CardsArray.map((object) => {
//                     const { title, description, price, category, image } = object
//                     return (
//                         <>
//                             With Destructure 
//                             <AppCard title={title} description={description} price={price} category={category} image={image} />

//                             Without Destructure using direct Object
//                             < AppCard title={object.title} description={object.description} image={object.image} category={object.category} price={object.price} />
//                         </>
//                     )

//                 })
//             }
//         </div >
//     )
// }

// export default RenderIndCardsProps;