'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const compliments = [
  "Your smile lights up the room!",
  "You have an amazing sense of humor!",
  "Your creativity knows no bounds!",
  "You make the world a better place!",
  "Your kindness is contagious!",
  "You're incredibly talented!",
  "Your positive energy is infectious!",
  "You inspire others without even trying!",
  "You have a heart of gold!",
  "Your determination is admirable!",
  "Your enthusiasm is contagious!",
  "You bring out the best in others!",
  "Your passion is truly inspiring!",
  "You have such a beautiful soul!",
  "Your presence makes everything better!",
  "You're a natural leader!",
  "Your strength is remarkable!",
  "You have incredible potential!",
  "Your optimism is refreshing!",
  "You're making a real difference!",
  "Your ideas are brilliant!",
  "You have a gift for making people feel special!",
  "Your courage is inspiring!",
  "You're a true original!",
  "Your empathy is extraordinary!",
  "You have such a warm heart!",
  "Your wisdom is impressive!",
  "You're a fantastic listener!",
  "Your generosity knows no bounds!",
  "You have amazing intuition!",
  "Your authenticity is refreshing!",
  "You're incredibly resourceful!",
  "Your dedication is remarkable!",
  "You have excellent taste!",
  "Your perspective is valuable!",
  "You're a ray of sunshine!",
  "Your confidence is admirable!",
  "You have a beautiful mind!",
  "Your resilience is incredible!",
  "You're wonderfully unique!",
  "Your thoughtfulness touches hearts!",
  "You have amazing potential!",
  "Your spirit is indomitable!",
  "You're exceptionally talented!",
  "Your presence is calming!",
  "You have incredible wisdom!",
  "Your imagination is limitless!",
  "You're a true inspiration!",
  "Your compassion changes lives!",
  "You have remarkable insight!",
  "Your energy is uplifting!",
  "You're beautifully authentic!",
  "Your intelligence shines bright!",
  "You have a magnetic personality!",
  "Your kindness makes a difference!",
  "You're incredibly capable!",
  "Your creativity is boundless!",
  "You have amazing grace!",
  "Your perseverance is admirable!",
  "You're wonderfully thoughtful!",
  "Your charm is delightful!",
  "You have incredible focus!",
  "Your positivity is refreshing!",
  "You're remarkably talented!",
  "Your sincerity is touching!",
  "You have wonderful ideas!",
  "Your determination inspires others!",
  "You're exceptionally kind!",
  "Your presence is reassuring!",
  "You have amazing strength!",
  "Your enthusiasm is motivating!",
  "You're wonderfully creative!",
  "Your spirit is beautiful!",
  "You have incredible patience!",
  "Your attitude is inspiring!",
  "You're remarkably resilient!",
  "Your gentleness is soothing!",
  "You have wonderful insight!",
  "Your passion is contagious!",
  "You're exceptionally caring!",
  "Your mind is fascinating!",
  "You have amazing courage!",
  "Your leadership is inspiring!",
  "You're wonderfully supportive!",
  "Your character is admirable!",
  "You have incredible empathy!",
  "Your optimism is inspiring!",
  "You're remarkably persistent!",
  "Your friendship is precious!",
  "You have wonderful energy!",
  "Your dedication shows!",
  "You're exceptionally genuine!",
  "Your impact is meaningful!",
  "You have amazing potential!",
  "Your presence is a gift!",
  "You're wonderfully wise!",
  "Your heart is beautiful!",
  "You have incredible drive!",
  "Your soul is radiant!",
  "You're remarkably strong!",
  "Your spirit is unbreakable!",
  "You have wonderful dreams!",
  "Your future is bright!"
];

export default function Home() {
  const [compliment, setCompliment] = useState('Click the button to get a compliment!');
  const [isSpinning, setIsSpinning] = useState(false);
  const [showCompliment, setShowCompliment] = useState(true);
  const [rotation, setRotation] = useState(0);

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
  ];

  const getRandomCompliment = () => {
    setShowCompliment(false);
    setIsSpinning(true);
    // Increment rotation by 3600 degrees (10 spins) from wherever it last stopped
    setRotation(prev => prev + 3600);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCompliment(compliments[randomIndex]);
      setIsSpinning(false);
      setTimeout(() => {
        setShowCompliment(true);
      }, 300);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="text-center w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Compliment Giver</h1>
        
        <div className="relative w-80 h-80 mb-8 mx-auto">
          {/* Roulette Wheel */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            animate={{ 
              rotate: rotation,
            }}
            transition={{
              duration: isSpinning ? 2 : 0,
              ease: "easeOut"
            }}
          >
            <div className="relative w-full h-full">
              {colors.map((color, index) => (
                <div
                  key={color}
                  className={`absolute w-full h-full ${color}`}
                  style={{
                    transform: `rotate(${(index * 360) / colors.length}deg)`,
                    transformOrigin: '50% 50%',
                    clipPath: `polygon(50% 50%, 50% 0, ${50 + (360 / colors.length)}% 0, 50% 50%)`
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 rounded-full border-8 border-white" />
          </motion.div>
          
          {/* Center Point */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg" />
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 w-4 h-8 bg-white transform -translate-x-1/2 z-20 shadow-md" />
        </div>

        {/* Compliment Display */}
        <AnimatePresence mode="wait">
          {showCompliment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-xl mb-8 min-h-[100px] flex items-center justify-center mx-auto"
            >
              <p className="text-xl text-gray-800">{compliment}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={getRandomCompliment}
          disabled={isSpinning}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full 
                   transform hover:scale-105 transition-all duration-200 disabled:opacity-50 shadow-lg"
        >
          Spin the Wheel!
        </button>
      </div>
    </main>
  );
} 