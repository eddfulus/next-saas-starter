import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">StaySini</h2>
            <p className="mt-2">Simplify Your Stay</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><Facebook /></a>
            <a href="#" className="hover:text-gray-200"><Twitter /></a>
            <a href="#" className="hover:text-gray-200"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-orange-400 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} StaySini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Simplify Your Stay
                <span className="block text-orange-500">with StaySini</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                StaySini is your all-in-one solution for hassle-free short-term rentals.
                Manage bookings, communicate with guests, and optimize your property's
                performance with ease.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a href="#" target="_blank">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Smart Booking Management
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Effortlessly manage reservations, automate check-ins, and sync calendars
                  across multiple platforms.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Powerful Analytics
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Gain insights into your property's performance with detailed analytics
                  and occupancy reports.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Secure Payments
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Process payments securely and automatically, with support for multiple
                  currencies and payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to simplify your rental business?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Join thousands of property managers who are already using StaySini to
                streamline their operations and boost their revenue.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="#" target="_blank">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  Start your free trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
