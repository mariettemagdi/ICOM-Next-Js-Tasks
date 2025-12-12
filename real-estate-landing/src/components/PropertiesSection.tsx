import PropertyCard from './PropertyCard';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button'; 

// Constants
const PRIMARY_RED = '#B83A3A';
const BACKGROUND_LIGHT = '#f5f5f5';

// Placeholder data
const propertyData = [
  { id: 1, imageSrc: '/property-1.jpg' }, 
  { id: 2, imageSrc: '/property-2.jpg' },
  { id: 3, imageSrc: '/property-3.jpg' },
];

const PropertiesSection: React.FC = () => {
  const CONTAINER_WIDTH = 'max-w-[1400px] mx-auto px-6 lg:px-8';
  
  return (
    // Full-width page background
    <section style={{ backgroundColor: BACKGROUND_LIGHT }} className="min-h-screen p-16">
        {/* Property Cards Grid (Pushed up by the negative margin) */}
        {/* The overall container is padded at the bottom to account for the card overlap */}
        <div className="mt-16 pb-24">
          {/* Grid Container for Desktop / Flex + Scroll for Mobile */}
          {/* Note: Cards must be tall enough (h-[450px] in PropertyCard) */}
          <div className="flex space-x-8 overflow-x-scroll pb-4 md:grid md:grid-cols-3 md:gap-8 md:space-x-0">
            {propertyData.map((property) => (
              // Ensures mobile items have a defined width for scrolling
              <div key={property.id} className="shrink-0 w-[85vw] sm:w-100 md:w-auto ">
                <PropertyCard imageSrc={property.imageSrc} />
              </div>
            ))}
          </div>
          
          {/* 'See All Properties' link, positioned at the bottom right */}
          <div className="mt-8 flex justify-end">
            <Button 
              variant="ghost" 
              className={`flex items-center text-base font-semibold text-gray-900 hover:text-gray-700`}
            >
              See All Properties <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </div>
    </section>
  );
};

export default PropertiesSection;