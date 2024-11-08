// pages/home.tsx
import { GetServerSideProps } from 'next';
import { db } from '@/lib/db/drizzle';
import { home } from '@/lib/db/schema';

type HomeProps = {
  homes: {
    id: number;
    title: string;
    description: string;
    // Include other fields as necessary
  }[];
};

// ... existing imports ...

async function HomePage() {
    const homes = await db.select().from(home);
    
    return (



      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Home Listings</h1>
          <p className="text-gray-600 mt-2">Discover your perfect home</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homes.map((home) => (




            <article 
              key={home.id} 
              className="border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {home.title}
                </h2>
                <p className="text-gray-600">
                  {home.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </article>
          ))}


        </div>
      </main>
    );



}

export default HomePage;
  /* const HomePage = ({ homes }: HomeProps) => {
  return (
    <div>
      <h1>Home Listings</h1>
      <ul>
        {homes.map((home) => (
          <li key={home.id}>
            <h2>{home.title}</h2>
            <p>{home.description}</p>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const homes = await db.select().from(home);
  return {
    props: {
      homes,
    },
  };
};

export default HomePage; */
