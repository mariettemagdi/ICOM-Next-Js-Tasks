"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Heart, Bed, Bath, Maximize } from "lucide-react";
import { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const property: Property = 
    {
      id: 1,
      image: "/property-1.jpg", // You'll replace with actual images
      price: "5,000,000",
      title: "Lorem ipsum dolor sit",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
      location: "Alexandria, Egypt",
      sqft: 400,
      rooms: 6,
      baths: 3,
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 1 * 0.1 }}
    >
      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
        {/* Property Image */}
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${property.image})` }}
          />
          
          {/* Contact Icons - Top Left */}
          <div className="absolute top-4 left-4 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-estate-red hover:text-white transition-colors"
              aria-label="Call"
            >
              <Phone size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </motion.button>
          </div>

          {/* Favorite Button - Top Right */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-colors"
            aria-label="Favorite"
          >
            <Heart 
              size={18} 
              className={isFavorite ? "fill-estate-red text-estate-red" : "text-gray-600"}
            />
          </motion.button>

          {/* Villa Badge - Bottom Right */}
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-white text-estate-dark border-0 shadow-md px-4 py-1.5">
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#A42C2C] rounded-full" />
                Villa
              </span>
            </Badge>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6 bg-white">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-bold text-estate-red">
              {property.price}
            </span>
            <span className="text-gray-500 text-sm">LE</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-estate-dark mb-2">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          {/* Location */}
          <p className="text-gray-500 text-sm mb-4">
            {property.location}
          </p>

          {/* Property Stats */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b">
            {/* Square Feet */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Maximize size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Sq ft</span>
              </div>
              <span className="text-lg font-bold text-estate-dark">{property.sqft}</span>
            </div>

            {/* Rooms */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Bed size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Rooms</span>
              </div>
              <span className="text-lg font-bold text-estate-dark">{property.rooms}</span>
            </div>

            {/* Bathrooms */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <Bath size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Bath</span>
              </div>
              <span className="text-lg font-bold text-estate-dark">{property.baths}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            className="w-full bg-estate-red hover:bg-estate-red/90 text-white py-6 rounded-xl font-medium text-base transition-all"
          >
            View Property Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}