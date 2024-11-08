interface HouseDescriptionProps {
    title: string;
    description: string;
    price: string;
    features: string[];
  }
  
  export default function HouseDescription({ 
    title, 
    description, 
    price, 
    features 
  }: HouseDescriptionProps) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-2xl font-semibold text-blue-600">{price}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }