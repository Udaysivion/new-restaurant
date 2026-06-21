import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, CheckCircle, Info, Armchair, Coffee, UtensilsCrossed, Bath, DoorOpen } from 'lucide-react';
import toast from 'react-hot-toast';

// Floor Plan Map (Grid: 12 cols x 8 rows)
const INITIAL_TABLES = [
  // Window Tables (Right Edge)
  { id: 'W1', capacity: 2, type: 'Window', isAvailable: true, col: 11, row: 2 },
  { id: 'W2', capacity: 2, type: 'Window', isAvailable: false, col: 11, row: 4 },
  { id: 'W3', capacity: 4, type: 'Window', isAvailable: true, col: 11, row: 6 },
  
  // VIP Booths (Top Edge near windows)
  { id: 'V1', capacity: 6, type: 'VIP Booth', isAvailable: true, col: 8, row: 1 },
  { id: 'V2', capacity: 8, type: 'VIP Booth', isAvailable: false, col: 10, row: 1 },

  // Standard Dining (Center)
  { id: 'T1', capacity: 2, type: 'Standard', isAvailable: true, col: 5, row: 3 },
  { id: 'T2', capacity: 4, type: 'Standard', isAvailable: true, col: 7, row: 3 },
  { id: 'T3', capacity: 4, type: 'Standard', isAvailable: false, col: 5, row: 5 },
  { id: 'T4', capacity: 4, type: 'Standard', isAvailable: true, col: 7, row: 5 },
  { id: 'T5', capacity: 6, type: 'Standard', isAvailable: true, col: 5, row: 7 },
  { id: 'T6', capacity: 6, type: 'Standard', isAvailable: true, col: 7, row: 7 },

  // Waiting Lounge (Bottom Left)
  { id: 'L1', capacity: 2, type: 'Standard', isAvailable: true, col: 3, row: 7 },
  { id: 'L2', capacity: 2, type: 'Standard', isAvailable: true, col: 4, row: 7 },
];

const generateNext7Days = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    dates.push(d);
  }
  return dates;
};

const LUNCH_SLOTS = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"];
const DINNER_SLOTS = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];

const Reservation = () => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedTable, setSelectedTable] = useState(null);
  const [tables, setTables] = useState(INITIAL_TABLES);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const next7Days = generateNext7Days();

  // Simulate live availability changes and auto-select
  useEffect(() => {
    if (date && time) {
      const randomized = INITIAL_TABLES.map(t => ({
        ...t,
        isAvailable: Math.random() > 0.3 // 70% chance to be available
      }));
      setTables(randomized);
      
      // Auto-select first available table fitting the party
      const suitableTable = randomized.find(t => t.isAvailable && t.capacity >= guests);
      if (suitableTable) {
        setSelectedTable(suitableTable.id);
      } else {
        setSelectedTable(null);
        toast.error(`No tables available for ${guests} guests at this time. Please select another time.`);
      }
    }
  }, [date, time, guests]);

  const handleTableSelect = (table) => {
    if (!table.isAvailable) {
      toast.error("This table is currently occupied.");
      return;
    }
    if (table.capacity < guests) {
      toast.error(`Table ${table.id} can only seat ${table.capacity} guests.`);
      return;
    }
    setSelectedTable(table.id);
  };

  const onSubmit = (data) => {
    if (!selectedTable) {
      toast.error("Please select a table from the floor plan.");
      return;
    }
    console.log({ ...data, guests, date, time, selectedTable });
    toast.success("Reservation confirmed! Your exclusive table awaits.");
    reset();
    setSelectedTable(null);
    setDate('');
    setTime('');
  };

  const getTableStyle = (table) => {
    if (!table.isAvailable) return "bg-gray-900 border-gray-800 text-gray-700 cursor-not-allowed opacity-40";
    if (selectedTable === table.id) return "bg-primary border-primary text-bg shadow-[0_0_20px_rgba(212,175,55,0.4)] transform scale-110 z-10";
    if (table.capacity < guests) return "bg-bg border-luxury text-gray-600 cursor-not-allowed opacity-40";
    return "bg-bg border-luxury text-white hover:border-primary hover:text-primary cursor-pointer hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]";
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-bg min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Reserve a Table | Taste of Home</title>
        <meta name="description" content="Book your dining experience instantly with our interactive floor plan." />
      </Helmet>

      {/* Hero */}
      <div className="bg-bg text-white py-16 border-b border-luxury relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Experience Luxury</span>
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-4">Secure Your Reservation</h1>
          <p className="text-text-muted font-light max-w-xl mx-auto text-sm">Design your perfect evening. Select your party size, date, and time to view live table availability across our dining spaces.</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: Booking Preferences */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Guest Count */}
            <div className="border border-luxury p-6 bg-cream/5">
              <h3 className="text-sm font-heading tracking-widest uppercase text-white flex items-center gap-2 mb-6">
                <Users size={16} className="text-primary" /> Guest Count
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <button
                    key={num}
                    onClick={() => setGuests(num)}
                    className={`py-3 text-xs tracking-widest border transition-all ${
                      guests === num 
                      ? 'bg-primary border-primary text-bg font-semibold' 
                      : 'border-luxury text-text-muted hover:border-primary hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="border border-luxury p-6 bg-cream/5">
              <h3 className="text-sm font-heading tracking-widest uppercase text-white flex items-center gap-2 mb-6">
                <Calendar size={16} className="text-primary" /> Select Date
              </h3>
              <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
                {next7Days.map((d, i) => {
                  const dateStr = d.toISOString().split('T')[0];
                  const dayName = i === 0 ? 'Today' : i === 1 ? 'Tmw' : d.toLocaleDateString('en-US', { weekday: 'short' });
                  const dayNum = d.getDate();
                  const monthName = d.toLocaleDateString('en-US', { month: 'short' });
                  return (
                    <button
                      key={dateStr}
                      onClick={() => setDate(dateStr)}
                      className={`flex-shrink-0 w-20 py-3 flex flex-col items-center border transition-all ${
                        date === dateStr
                        ? 'bg-primary border-primary text-bg'
                        : 'border-luxury text-text-muted hover:border-primary hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">{dayName}</span>
                      <span className="text-xl font-light">{dayNum}</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-80">{monthName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="border border-luxury p-6 bg-cream/5">
              <h3 className="text-sm font-heading tracking-widest uppercase text-white flex items-center gap-2 mb-6">
                <Clock size={16} className="text-primary" /> Select Time
              </h3>
              
              <div className="mb-4">
                <span className="text-[10px] text-primary tracking-widest uppercase mb-3 block">Lunch Service</span>
                <div className="flex flex-wrap gap-2">
                  {LUNCH_SLOTS.map(t => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`px-4 py-2 text-xs tracking-wider border transition-all ${
                        time === t ? 'bg-primary border-primary text-bg' : 'border-luxury text-text-muted hover:border-primary hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-primary tracking-widest uppercase mb-3 block">Dinner Service</span>
                <div className="flex flex-wrap gap-2">
                  {DINNER_SLOTS.map(t => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`px-4 py-2 text-xs tracking-wider border transition-all ${
                        time === t ? 'bg-primary border-primary text-bg' : 'border-luxury text-text-muted hover:border-primary hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Floor Plan */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            <div className="border border-luxury p-1 relative min-h-[600px] flex flex-col bg-bg overflow-hidden">
              <div className="p-4 border-b border-luxury flex justify-between items-center bg-cream/5">
                 <h2 className="text-lg font-heading text-white tracking-wide">Restaurant Floor Plan</h2>
                 <div className="flex gap-4 text-[10px] tracking-widest uppercase text-text-muted font-semibold">
                    <span className="flex items-center gap-2"><span className="w-3 h-3 border border-luxury inline-block"></span> Available</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-900 border border-gray-800 inline-block"></span> Occupied</span>
                    <span className="flex items-center gap-2"><span className="w-3 h-3 bg-primary border border-primary inline-block"></span> Selected</span>
                 </div>
              </div>

              {!date || !time ? (
                <div className="flex-grow flex flex-col items-center justify-center text-text-muted bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                  <div className="bg-bg border border-luxury p-8 text-center max-w-sm">
                    <Info size={32} className="mb-4 opacity-50 mx-auto text-primary" />
                    <p className="font-light tracking-widest uppercase text-xs text-white">Unlock Floor Plan</p>
                    <p className="text-text-muted text-xs mt-2 font-light">Please select a date and time. We will automatically assign the best table for your party size.</p>
                  </div>
                </div>
              ) : (
                <div className="flex-grow relative overflow-auto p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] flex items-center justify-center">
                  
                  {/* The Architectural Grid */}
                  <div className="min-w-[800px] h-[500px] grid grid-cols-12 grid-rows-8 gap-3 relative border border-luxury/30 p-4 bg-bg shadow-2xl">
                    
                    {/* Fixed Architectural Zones */}
                    
                    {/* Entrance / Reception */}
                    <div className="col-span-3 row-span-2 border border-luxury/50 flex flex-col items-center justify-center text-text-muted bg-cream/5 relative">
                      <DoorOpen size={24} className="mb-1 opacity-50" />
                      <span className="text-[10px] tracking-widest uppercase font-semibold">Reception</span>
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] tracking-[0.3em] uppercase text-primary">Entrance</div>
                    </div>

                    {/* Washrooms */}
                    <div className="col-start-1 col-end-3 row-start-7 row-end-9 border border-luxury/50 flex flex-col items-center justify-center text-text-muted bg-cream/5">
                      <Bath size={24} className="mb-1 opacity-50" />
                      <span className="text-[10px] tracking-widest uppercase font-semibold">Restrooms</span>
                    </div>

                    {/* Open Kitchen */}
                    <div className="col-start-5 col-end-9 row-start-1 row-end-3 border border-primary/20 flex flex-col items-center justify-center text-primary bg-primary/5 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
                      <UtensilsCrossed size={24} className="mb-1 opacity-80" />
                      <span className="text-[10px] tracking-widest uppercase font-semibold">Open Kitchen</span>
                    </div>

                    {/* Waiting Lounge */}
                    <div className="col-start-1 col-end-4 row-start-4 row-end-6 border border-luxury/50 flex flex-col items-center justify-center text-text-muted bg-cream/5">
                      <Coffee size={24} className="mb-1 opacity-50" />
                      <span className="text-[10px] tracking-widest uppercase font-semibold">Waiting Lounge</span>
                    </div>

                    {/* Windows Edge Label */}
                    <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-[0.4em] uppercase text-primary font-semibold border-b border-primary pb-1">
                      Panoramic City Views
                    </div>

                    {/* Tables rendering over the grid */}
                    {tables.map(table => (
                      <div 
                        key={table.id}
                        onClick={() => handleTableSelect(table)}
                        className={`
                          flex flex-col items-center justify-center border transition-all duration-300 relative
                          ${getTableStyle(table)}
                        `}
                        style={{ gridColumn: table.col, gridRow: table.row }}
                      >
                        <Armchair size={table.type === 'VIP Booth' ? 24 : 18} strokeWidth={1} className="mb-1" />
                        <span className="text-[10px] font-bold tracking-widest">{table.id}</span>
                        <span className="text-[8px] tracking-widest uppercase mt-1 opacity-70">Seats {table.capacity}</span>
                        {table.type === 'VIP Booth' && <span className="absolute top-1 right-1 text-[8px] text-primary">★</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Details Form */}
            <AnimatePresence>
              {selectedTable && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-primary p-8 bg-primary/5"
                >
                  <h3 className="text-xl font-heading text-white mb-6 border-b border-luxury pb-4">Confirm Reservation</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    
                    <div className="w-full md:w-1/3 border-r border-luxury pr-8">
                      <h4 className="text-primary text-xs tracking-widest uppercase font-semibold mb-3">Booking Summary</h4>
                      <p className="text-white font-light text-sm mb-1">Table {selectedTable} • {tables.find(t=>t.id===selectedTable)?.type}</p>
                      <p className="text-text-muted font-light text-xs mb-1">{date} at {time}</p>
                      <p className="text-text-muted font-light text-xs">{guests} Guests</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input 
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-0 py-2 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light text-sm"
                            placeholder="Full Name"
                          />
                          {errors.name && <p className="text-primary text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <input 
                            {...register("phone", { required: "Phone is required" })}
                            className="w-full px-0 py-2 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light text-sm"
                            placeholder="Phone Number"
                          />
                          {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                      <div>
                        <input 
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          className="w-full px-0 py-2 bg-transparent border-b border-luxury text-white focus:outline-none focus:border-primary transition-colors placeholder-gray-700 font-light text-sm"
                          placeholder="Email Address"
                        />
                        {errors.email && <p className="text-primary text-xs mt-1">{errors.email.message}</p>}
                      </div>

                      <button 
                        type="submit" 
                        className="w-full mt-4 py-4 bg-primary text-bg text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors flex justify-center items-center gap-2"
                      >
                        Confirm Booking <CheckCircle size={16} />
                      </button>
                    </form>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reservation;
