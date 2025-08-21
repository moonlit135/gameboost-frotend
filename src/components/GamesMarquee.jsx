"use client";

import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function GamesMarquee() {
  const games = [
    "PUBG", "Free Fire", "Valorant", "Call of Duty", "Apex Legends", "Fortnite"
  ];
  // Repeat the games array to make the scroll seamless
  const marqueeGames = [...games, ...games];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-black py-2 border-y border-gray-700">
      <div className="animate-marquee">
        {marqueeGames.map((game, idx) => (
          <span key={idx} className="mx-8 text-lg font-bold games-marquee-text">
            {game}
          </span>
        ))}
      </div>
    </div>
  );
}