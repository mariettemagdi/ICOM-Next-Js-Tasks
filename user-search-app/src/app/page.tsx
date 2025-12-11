import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    // add loading later 
   <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">User Directory</h1>
          <p className="text-gray-600">Search and explore our user base</p>
        </div>
      
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400"/>
          </div>
          <input type="text" placeholder="Search by Name..." className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 transition-all"/>
        </div>
        <p className="mt-2 text-sm text-gray-600 text-center">Users found</p>
      </div>
      {/*  card to display name , email and comapany */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">

            <div className="flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full mb-4 mx-auto">
                <span className="text-2xl font-bold text-white">C</span>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">user name</h2>

              <div className="space-y-2">
                <div className="flex items-center justify-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">user.email</span>
                </div>

              <div className="flex items-center justify-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                    <span className="text-sm font-medium">user.company.name</span>
              </div>
              </div>
            </div>
        </div>
      </div>

      </div>
   </div>
  );
}
