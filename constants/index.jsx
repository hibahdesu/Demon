//constants/index.js
export const navLinks = [
  { id: 'home', title: 'Home', isPage: true, path: '/' },
  { id: 'story', title: 'Story Overview' },
  { id: 'fights', title: 'Major Battles' },
  { id: 'trailer', title: 'Trailer' },
  { id: 'analysis', title: 'Analysis', isPage: true, path: '/analysis' },
];

export const aboutContent = [{
  title: 'The Final Stand', 
  text: `In the climactic conclusion of the saga, alliances are tested,
            legacies are forged, and destiny reaches its breaking point. The
            final film delivers a breathtaking finale filled with unforgettable
            battles, sacrifice, and a spark of hope amid darkness. This is more
            than an ending, it’s the birth of legend.`,
  img: '/images/final-movie-still.jpg'
}
]

export const storyOverviewContent = {
  title: 'The Story So Far',
  paragraphs: [
    `The Demon Slayer Corps is pulled into Muzan’s shifting fortress, a surreal, gravity-defying realm where the final battle begins. Inside the castle, Tanjiro, Nezuko, and the Hashira face the remaining Upper Moons in brutal, emotional showdowns. Akaza’s tragic past resurfaces, Shinobu executes her final plan, and Zenitsu steps into his promise.`,
    `As the castle collapses, the Corps prepares for their last stand against Muzan, a fight that will decide the fate of humanity and the legacy of every fallen warrior.`,
  ],
};
export const myBattleData = [
  {
    title: "Zenitsu vs Kaigaku",
    image: "/images/battle1.png",
    description: "Zenitsu confronts Kaigaku his former senior and fellow demon slayer turned demon"
  },
  {
    title: "Shinobu Kocho vs Doma",
    image: "/images/battle2.png",
    description: "Shinobu attempts to kill Doma with poison, but Doma resists and ultimately kills her"
  },
  {
    title: "Akaza vs Tanjiro & Giyu",
    image: "/images/battle3.png",
    description: "Akaza, conflicted by his past, refuses to continue the fight and allows himself to be defeated "
  },
];

export const tangiroAndAkaza = [
  {text: `Akaza, an Upper Rank Three demon, dominates Hashira and Tanjiro with sheer speed, power, and regeneration. His Compass Needle technique reads fighting spirit, making him nearly invincible.`,
    src: ["/images/AkazaTanjiroGiyu1.jpg", "/videos/akazaGiyu3.mp4"]
  },
  {text: `Despite their combined strength, Tanjiro and Giyu are pushed to their limits. Every strike is met with brutal retaliation, and Akaza’s regeneration renders even the deepest wounds meaningless.`,
    src: ["/videos/akazaGiyu2.mp4", "/videos/akazaGiyu.mp4"]
  },
]

export const akaza = [
  {
    title: "The Final Clash in the Infinity Castle. A battle not just of strength, but of ideology, trauma, and redemption.",
    image: "/images/battle1.png",
    description: "Zenitsu confronts Kaigaku his former senior and fellow demon slayer turned demon"
  },
  {
    title: "As an Upper Rank Three demon, Akaza overwhelms both Hashira and Tanjiro with raw speed, power, and regeneration. His technique, Destructive Death: Compass Needle, adapts to the opponents' fighting spirit, making him nearly unbeatable.",
    image: "/images/battle2.png",
    description: "Shinobu attempts to kill Doma with poison, but Doma resists and ultimately kills her"
  },
  {
    title: "Despite their combined strength, Tanjiro and Giyu are pushed to their limits. Every strike is met with brutal retaliation, and Akaza’s regeneration renders even the deepest wounds meaningless.",
    image: "/images/battle2.png",
    description: "Shinobu attempts to kill Doma with poison, but Doma resists and ultimately kills her"
  },
  {
    title: "Akaza vs Tanjiro & Giyu",
    image: "/images/battle3.png",
    description: "Akaza, conflicted by his past, refuses to continue the fight and allows himself to be defeated "
  },
];

export const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

export const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];


export const battles = [
  {
    type: 'combatants',
    image: '/images/battle1-3.png',
    title: 'Dance of the Poisoned Wings',
    description: 'Shinobu confronts Doma, Upper Moon Two, in a chillingly elegant battle. Knowing she lacks the strength to decapitate him, she lures him into underestimating her. Her blade and her body are laced with a deadly plan.'
  },
  {
    type: 'image',
    image: ['/images/ShinobuKochovsDoma3-5.jpg', '/images/ShinobuKochovsDoma3-2.jpg', '/images/ShinobuKochovsDoma3-3.jpg','/images/ShinobuKochovsDoma3-4.jpg'],
    title: 'A Smile Before Deaths',
    description: "Doma absorbs Shinobu after a drawn-out duel. Believing himself victorious, he smiles. But inside him, something is wrong. Her body was saturated with over 700 times the lethal dose of wisteria poison. The trap is set.",

  },
];

export const quotes = [
  {
    title: "Akaza, Hakuji",
    image: ["/images/Akaza3.png", "/images/Akaza4.png"],
    quote: "I kept fighting to forget. But every punch brings her back."
    //I remember her smile… and it hurts more than any blade.
  },
  {
    title: "Tanjiro Kamado",
    image: ["/images/Tangiro2.png", "/images/Tangiro1.png"],
    quote: "I don’t fight to destroy demons. I fight to save what’s left of them."
  },
  {
    title: "Zenitsu Agatsuma",
    image: ["/images/Zenitsu1.png", "/images/Zenitsu2.png"],
    quote: "I’m not afraid anymore. I made a promise and lightning never breaks its word."
  },
  {
    title: "Shinobu Kocho",
    image: ['/images/ShinobuKochovsDoma5-1.jpg', '/images/ShinobuKochovsDoma5-2.jpg'],
    quote: "Even if I can’t win, I’ll make sure you lose."
  }
];

export const sections = [
  {
    title: 'Zenitsu vs. Kaigaku',
    text: `Zenitsu faces his former senior, Kaigaku, during the Infinity Castle Arc. Once fellow students of the same master, they now fight as enemies Kaigaku, a demon obsessed with power, and Zenitsu, fighting to honor their shared past. It's a deeply personal, symbolic clash of ideals.`,
    images: ['/images/ZenitsuvsKaigaku1.png', '/images/ZenitsuvsKaigaku1-2.png', '/images/ZenitsuvsKaigaku1-3.png'],
  },
  {
    title: 'Kaigaku’s Strength & Downfall',
    text: 'As a demon, Kaigaku merges Thunder Breathing with demonic abilities, becoming incredibly dangerous. But his arrogance and lack of discipline are his downfall. Zenitsu defeats him using his own Seventh Form: Flaming Thunder God, a move of pure resolve and skill, proving heart matters more than raw power.',
    images: ['/images/ZenitsuvsKaigaku2-1.png', '/images/ZenitsuvsKaigaku2-2.png'],
  },
  {
    title: 'Childhood & Shared History',
    text: "Both Zenitsu and Kaigaku trained under the former Thunder Hashira, Jigoro Kuwajima, but while Kaigaku's pride led him to betray the Corps and become a demon—causing Jigoro to take his own life—Zenitsu, though once fearful, remained loyal and grew stronger to honor their master’s legacy.",
    images: ['/images/ZenitsuvsKaigaku3-1.png', '/images/ZenitsuvsKaigaku3-2.png'],
  },
  {
    title: 'A Clash of Ideals',
    text: "This wasn't just a battle, it was a clash between pride and humility, betrayal and loyalty. Zenitsu’s victory wasn’t just physical. It was a triumph of heart, legacy, and growth.",
    images: ['/images/ZenitsuvsKaigaku4-2.png', '/images/ZenitsuvsKaigaku4-1.png'],
  },
];

export const items = [
  {
    image: "/images/battle3.png",
    title: "Blueprint One",
    description: "Description of the first blueprint.",
  },
  {
    image: "/images/battle2.png",
    title: "Blueprint Two",
    description: "Details about the second blueprint.",
  },
];



export const demoItems = [
  {
    image: '/images/battle2.png',
    title: 'Demo 1',
    description: 'This is demo 1',
  },
  {
    image: '/images/battle2.png',
    title: 'Demo 2',
    description: 'This is demo 2',
  },
  {
    image: '/images/battle2.png',
    title: 'Demo 3',
    description: 'This is demo 3',
  },
];

export const boxOfficeContent = [
  {
    title: 'September 2025',
    text: `The film ranked #2 at the box office, just behind The Conjuring: Last Rites. It earned an impressive $119.8 million across 3,342 theaters, averaging $35,846 per location. It outperformed most competitors in both efficiency and fan turnout, establishing clear dominance in Japan and gaining momentum globally.`,
    img: '/images/september-box-office.png',
    alt: 'September Box Office Chart',
  },
  {
    title: 'October 2025',
    text: `The film ranked #8 amid fierce competition, demonstrating resilience in a crowded market. It added $11.3 million in its second month, holding strong against major releases like Tron: Ares and Taylor Swift: The Official Release Party. With a cumulative total of $131.2 million, it maintained impressive fan engagement and consistent performance throughout its run.`,
    img: '/images/october-box-office.png',
    alt: 'October Box Office Chart',
  },
];

export const boxOfficeIntroContent = {
  videoSrc: '/videos/hero2.mp4',
  titles: [
    {
      text: 'Box Office',
      className: 'titleHero text-[60px] md:text-[80px] lg:text-[120px] font-logo mb-5 leading-none',
      position: 'top-left',
    },
    {
      text: 'Impact',
      className: 'titleHero absolute bottom-8 right-5 text-[60px] md:text-[90px] lg:text-[120px] font-logo z-10',
      position: 'bottom-right',
    },
  ],
  subtitle: {
    text: 'How Infinity Castle conquered theaters worldwide',
    className: 'subtitle-left-hero text-white text-sm md:text-base',
  },
};

export const akazaEndContent = [
  {
    type: 'image',
    src: '/images/Akaza2.jpg',
    alt: 'Right tall image',
    colStart: 'col-start-2',
    rowStart: 'row-start-1',
    rowSpan: 'row-span-4',
  },
  {
    type: 'video',
    src: '/videos/Akaza1.mp4',
    colStart: 'col-start-1',
    rowStart: 'row-start-2',
    rowSpan: 'row-span-2',
  },
  {
    type: 'text',
    text: 'Akaza, conflicted by his past, refuses to continue the fight and allows himself to be defeated',
    colStart: 'col-start-1',
    rowStart: 'row-start-4',
    rowSpan: 'row-span-2',
    alignment: 'ml-auto',
  },
  {
    type: 'text',
    text: 'His death is not triumphant, but tragic, a demon who remembered love too late.',
    colStart: 'col-start-2',
    rowStart: 'row-start-5',
    rowSpan: 'row-span-2',
    alignment: 'mr-auto',
  },
  {
    type: 'image',
    src: '/images/Akaza.jpg',
    alt: 'Left bottom image',
    colStart: 'col-start-1',
    rowStart: 'row-start-6',
    rowSpan: 'row-span-4',
  },
  {
    type: 'video',
    src: '/videos/Akaza.mp4',
    colStart: 'col-start-2',
    rowStart: 'row-start-7',
    rowSpan: 'row-span-2',
  },
];

export const cinematicFooterContent = {
  quote: {
    text: '“Infinity Castle is not just a finale, it’s a legacy.”',
    author: {
      name: 'Hibah Sindi',
      url: 'https://www.linkedin.com/in/hibah-sindi/',
    },
  },
  socialLinks: [
    {
      icon: 'FaLinkedin',
      url: 'https://www.linkedin.com/in/hibah-sindi/',
    },
    {
      icon: 'FaGithub',
      url: 'https://github.com/hibahdesu',
    },
    {
      icon: 'FaYoutube',
      url: 'https://www.youtube.com/@En_la_programaci%C3%B3n',
    },
    {
      icon: 'FaTiktok',
      url: 'https://www.tiktok.com/@en.la.programacion',
    },
  ],
  copyright: `© ${new Date().getFullYear()} Demon Slayer: Infinity Castle. All rights reserved.`,
};

import { FaFilm, FaUsers, FaAward, FaChartLine } from 'react-icons/fa';

export const culturalImpactContent = {
  quote: {
    text: '“Infinity Castle didn’t just end a story it redefined anime cinema.”',
    source: '— IGN Japan',
  },
  image: {
    src: '/images/fan-reaction.jpg',
    alt: 'Fan Reaction',
  },
  blocks: [
    {
      title: 'Critical Acclaim',
      icon: FaFilm,
      color: 'text-yellow-400',
      refKey: 'criticRef',
      items: [
        '“A visually stunning conclusion to a beloved saga.” — Anime News Network',
        '94% on Rotten Tomatoes, 9.1 on MyAnimeList',
        'Oscar buzz for Best Animated Feature',
      ],
    },
    {
      title: 'Fan Reactions',
      icon: FaUsers,
      color: 'text-pink-400',
      refKey: 'fanRef',
      items: [
        '#InfinityCastleFinale trended globally',
        'Sold-out IMAX screenings',
        'Cosplay, fan art, and viral edits',
      ],
    },
    {
      title: 'Legacy & Influence',
      icon: FaAward,
      color: 'text-emerald-400',
      refKey: 'legacyRef',
      items: [
        'Raised the bar for anime film production',
        'Used in film schools for visual storytelling',
        'Won Best Animation at Japan Academy Prize',
      ],
    },
    {
      title: 'Saudi Box Office Performance',
      icon: FaChartLine,
      color: 'text-red-400',
      refKey: 'saudiRef',
      items: [
        'Week 2 of September (release week): Ranked #1',
        'Week 3 of September: Ranked #1',
        'Week 4 of September: Ranked #2',
        'Week 1 of October: Ranked #3',
        'Week 2 of October: Ranked #4',
        'Week 3 of October: Ranked #8',
        'Week 4 of October: Ranked #8',
      ],
    },
  ],
};