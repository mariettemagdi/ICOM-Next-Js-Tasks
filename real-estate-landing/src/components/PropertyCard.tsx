'use client'; 

import { Heart, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button'; 

interface PropertyCardProps {
  imageSrc: string;
}

const PRIMARY_RED = '#B83A3A'; 
const TEXT_GRAY = '#707070';  

const PropertyCard: React.FC<PropertyCardProps> = ({ imageSrc }) => {
  const CARD_RADIUS = 'rounded-[16px]';
  
  const hoverAnimation = {
    y: -8, 
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  };

  return (
    // Outer container: Relative, fixed height, overflow visible to allow white box margins
    <motion.div
      className={`relative w-full h-125`}
      whileHover={hoverAnimation}
      initial={{ y: 0 }}
    >
      {/* 1. Property Image (Takes full width and height, z-index: 0) */}
      <div 
        className={`absolute inset-0 ${CARD_RADIUS} overflow-hidden shadow-lg`}
        style={{ 
          backgroundImage: `url(${imageSrc})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
        
      {/* 2. Icon Buttons (Z-index: 3) - Top of card with margins */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-between p-5">
        {/* Left Icons: Call & WhatsApp (flex: row, together) */}
        <div className="flex gap-3">
          {/* Call Icon */}
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform" 
            style={{ backgroundColor: PRIMARY_RED }}
          >
            <Phone className="h-5 w-5 text-white" />
          </div>
          {/* WhatsApp Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-md cursor-pointer hover:scale-110 transition-transform">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
        </div>
        
        {/* Right Icon: Heart (at most right) */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:scale-110 transition-transform">
          <Heart className="h-5 w-5" style={{ color: PRIMARY_RED }} />
        </div>
      </div>

      {/* 3. White Information Box (Z-index: 2) - Overlapping bottom half with margins */}
      <div 
        className="absolute bottom-0 left-5 right-5 z-20 bg-white rounded-2xl shadow-2xl"
        style={{ 
          height: '50%', // Takes half of the card
          padding: '24px',
          marginBottom: '16px' // Margin from bottom so image shows below
        }}
      >
        
        {/* LINE 1: Price and Villa Tag (flex row, space-between) */}
        <div className="flex items-center justify-between mb-3">
          {/* Price (at most left) */}
          <p className="text-[26px] font-bold leading-none" style={{ color: PRIMARY_RED }}>
            5,000,000 L.E
          </p>
          
          {/* Logo and Tag (at most right, together) */}
          <div className="flex items-center gap-2">
            {/* Placeholder Logo Icon */}
            <div className="h-5 w-5 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full" style={{backgroundColor: PRIMARY_RED}}></div>
            </div>
            {/* Villa Tag */}
            <div 
              className="rounded px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: PRIMARY_RED, color: 'white' }}
            >
              Villa
            </div>
          </div>
        </div>
        
        {/* LINE 2: Title */}
        <h3 className="text-[19px] font-semibold text-black leading-tight">
          Lorem ipsum dolor sit
        </h3>
        
        {/* LINE 3: Description */}
        <p className="mt-2 text-[14px] leading-relaxed" style={{ color: TEXT_GRAY }}>
          A chic and fully-furnished 2-bedroom apartment with panoramic city views.
        </p>

        {/* Horizontal Divider Line (Grey) */}
        <div className="my-4 border-t border-gray-300" />

        {/* LINE 4: Location and Stats (flex row, space-between) */}
        <div className="flex items-center justify-between "style={{ margin: '10px 0' }}>
          {/* Location (at most left) */}
          <p className="text-[14px] font-medium text-black">
            Alexandria, Egypt
          </p>
          
          {/* Stats (at most right, flex row with minimal gap and vertical dividers) */}
          <div className="flex items-center gap-3">
            {/* Stat Item 1 */}
            <div className="flex items-center gap-1">
              <p className="text-[15px] font-bold text-black">400</p>
              <p className="text-[12px]" style={{ color: TEXT_GRAY }}>Sq ft</p>
            </div>
            
            {/* Vertical Divider */}
            <div className="h-5 w-[1px] bg-gray-300" />
            
            {/* Stat Item 2 */}
            <div className="flex items-center gap-1">
              <p className="text-[15px] font-bold text-black">6</p>
              <p className="text-[12px]" style={{ color: TEXT_GRAY }}>Rooms</p>
            </div>
            
            {/* Vertical Divider */}
            <div className="h-5 w-[1px] bg-gray-300" />
            
            {/* Stat Item 3 */}
            <div className="flex items-center gap-1">
              <p className="text-[15px] font-bold text-black">3</p>
              <p className="text-[12px]" style={{ color: TEXT_GRAY }}>Bath</p>
            </div>
          </div>
        </div>

        {/* LINE 5: CTA Button */}
        <Button
          className="w-full py-[14px] text-[15px] font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: PRIMARY_RED }} 
        >
          View Property Details
        </Button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;