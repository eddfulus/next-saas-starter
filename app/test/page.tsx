
import HouseImage from 'components/HouseImage';
import HouseDescription from 'components/HouseDescription';
import Link from 'next/link';

export default function Home() {
  const houseData = {
    title: "Modern Luxury Villa",
    description: "Stunning contemporary villa featuring open-concept living spaces, floor-to-ceiling windows, and premium finishes throughout. This architectural masterpiece seamlessly blends indoor and outdoor living.",
    price: "$1,250,000",
    features: [
      "4 Bedrooms",
      "3.5 Bathrooms",
      "3,200 sq ft",
      "Double Garage",
      "Smart Home System",
      "Heated Pool"
    ],
    image: "/house.jpg"
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-end mb-4">
          <Link
            href="/edit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit Details
          </Link>
        </div>
        <HouseImage
          src={houseData.image}
          alt={houseData.title}
        />
        <div className="mt-8">
          <HouseDescription
            title={houseData.title}
            description={houseData.description}
            price={houseData.price}
            features={houseData.features}
          />
        </div>
      </div>
    </main>
  );
}