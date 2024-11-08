import { redirect } from 'next/navigation';
import HouseForm from 'components/HouseForm';
import Link from 'next/link';

export default function EditPage() {
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
    ]
  };

  const handleSave = async (data: typeof houseData) => {
    'use server';
    // In a real application, you would save this data to a database
    console.log('Saving data:', data);
    redirect('/');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Edit House Details</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800"
          >
            Back to View
          </Link>
        </div>
        <HouseForm
          initialData={houseData}
          onSave={handleSave}
        />
      </div>
    </main>
  );
}