import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Bell, User, SlidersHorizontal } from 'lucide-react';
import PropertyCard from './PropertyCard';

const SearchWidget = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  const tabs = ['Rent', 'Buy', 'Sell'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl p-6 md:p-8"
    >
      {/* Top Header inside widget */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Hello, Natalia!</h2>
          <p className="text-slate-500">Let's help you find your dream home</p>
        </div>
        
        {/* Tabs & Icons */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-between">
          <div className="flex gap-6 border-b border-slate-200 pb-2 md:pb-0 md:border-none w-full md:w-auto justify-center">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-[9px] md:-bottom-2 left-0 right-0 h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 hidden md:flex">
            <button className="text-slate-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Row */}
      <div className="flex flex-col lg:flex-row items-center gap-4 bg-slate-50/80 p-2 rounded-2xl border border-slate-100 mb-8">
        
        {/* Location Input */}
        <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full border-b lg:border-b-0 lg:border-r border-slate-200">
          <Search className="w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Vaalserberg" 
            className="bg-transparent w-full outline-none text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 md:gap-4 px-2 lg:px-4 w-full lg:w-auto overflow-x-auto scrollbar-hide py-2 lg:py-0">
          <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm border border-slate-100">
            $500-$5,000
          </div>
          <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm border border-slate-100">
            2 Beds
          </div>
          <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm border border-slate-100">
            1000-2000 ft²
          </div>
        </div>

        {/* Filter Button */}
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-emerald-800 transition-colors flex items-center gap-2 w-full lg:w-auto justify-center shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PropertyCard 
          image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60"
          price="$2,500"
          title="Modern Family Home"
          location="123 Oak Street, Vaalserberg"
        />
        <PropertyCard 
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60"
          price="$1,800"
          title="Cozy Cottage"
          location="45 Pine Ave, Vaalserberg"
        />
        <PropertyCard 
          image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60"
          price="$3,200"
          title="Luxury Villa"
          location="789 High Road, Vaalserberg"
        />
      </div>
    </motion.div>
  );
};

export default SearchWidget;
