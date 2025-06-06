import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    
    const priceOptions = [
  {
    id: 1,
    name: "Basic Plan",
    price: 19.99,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "1 guest pass/month"
    ]
  },
  {
    id: 2,
    name: "Student Plan",
    price: 24.99,
    features: [
        "Student ID required",
        "Group fitness classes",
        "Gym access during off-peak hours"
    ]
  },
  {
    id: 3,
    name: "Premium Plan",
    price: 59.99,
    features: [
      "Personal trainer sessions (2/month)",
      "Access to sauna & steam room",
      "All Standard Plan features",
      "5 guest passes/month"
    ]
  }
];
    return (
        <div>
        <h2 className="text-5xl">Best Prices In the Town</h2>
        <div className='grid md:grid-cols-3 gap-6 mt-6'>
            {
            priceOptions.map(option => 
                <PriceOption 
                key={option.id} option={option}>
                </PriceOption>
            )
        }
        </div>
        </div>
    );
};


export default PriceOptions;