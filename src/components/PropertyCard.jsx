import React from 'react';
import { Heart } from 'lucide-react';

const PropertyCard = ({ image, price, title, location }) => {
  return (
    <div className="group rounded-2xl overflow-hidden cursor-pointer relative">
      <div className="absolute top-4 right-4 z-10">
        <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors text-slate-400 hover:text-red-500">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="mt-4 px-1">
        <h3 className="font-bold text-slate-800 text-lg mb-1">{price}</h3>
        <p className="font-medium text-slate-700 text-sm mb-1">{title}</p>
        <p className="text-slate-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
