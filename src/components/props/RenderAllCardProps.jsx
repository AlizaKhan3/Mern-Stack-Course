import MyCard from "./card";

const RenderAllCardProps = () => {
    const CardsArray = [
        {
            title: "Nightshade Running Shoes",
            price: 110,
            description: "Built for speed and daily wear",
            category: "Athletic Footwear",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Ocean Mist Hoodie",
            price: 135,
            description: "Soft fabric with a relaxed fit for cool evenings",
            category: "Hoodies",
            image: "https://i.imgur.com/cSytoSD"
        },
        {
            title: "Vintage Brown Leather Watch",
            price: 85,
            description: "Timeless design with adjustable straps",
            category: "Watches",
            image: "https://i.imgur.com/penhRli.jpeg"
        },
        {
            title: "Explorer Laptop Bag",
            price: 105,
            description: "Spacious interior with anti-theft zipper",
            category: "Travel Gear",
            image: "https://i.imgur.com/cSytoSD"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-6">
         {
            CardsArray.map((object, index) => {
                return(
                    <MyCard data={object} key={index}/>
                )
            })
        }
       </div>
    )
}

export default RenderAllCardProps;