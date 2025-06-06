const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-center flex flex-col mx-5"> 
            <h2>
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h3 className="text-3xl">{name}</h3>
        <div className="flex-grow">
        {
            features.map((feature, index) => (
                <p key={index} className="text-md mt-2">
                    <span className="text-white">✔️</span> {feature}
                </p>
            ))
        }
        </div>
        <button className="btn btn-primary mt-4">
            Buy Now
        </button>         
        </div>
    );
};

export default PriceOption;