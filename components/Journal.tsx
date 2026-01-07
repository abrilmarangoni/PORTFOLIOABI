"use client";

interface JournalEntryProps {
  year: string;
  title: string;
  views?: string;
}

function JournalEntry({ year, title }: JournalEntryProps) {
  return (
    <div className="w-full group cursor-pointer">
      <div className="flex items-center gap-6 py-2 transition-opacity duration-300 group-hover:opacity-70">
        {/* Year */}
        <p className="text-white text-[16px] font-normal w-[49px] flex-shrink-0">
          {year}
        </p>
        
        {/* Title */}
        <p className="text-white text-[16px] font-normal flex-1">
          {title}
        </p>
        
        {/* View Article link */}
        <a 
          href="#" 
          className="flex items-center gap-1 flex-shrink-0 text-white text-[13px] font-normal group-hover:text-[#ff7a28] transition-colors"
        >
          <span>View Article</span>
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 transition-all duration-300 group-hover:rotate-[-35deg] group-hover:text-[#ff7a28]"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path 
              d="M5 3L10 7.5L5 12" 
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </a>
      </div>
      
      {/* Horizontal line */}
      <div className="h-px w-full bg-[#333] opacity-80" />
    </div>
  );
}

export default function Journal() {
  const entries = [
    {
      year: "2025",
      title: "Cultures and Comfort Zones: A Leadership Journey.",
      views: "100"
    },
    {
      year: "2025",
      title: "Cultures and Comfort Zones: A Leadership Journey.",
      views: "100"
    },
    {
      year: "2025",
      title: "Cultures and Comfort Zones: A Leadership Journey.",
      views: "100"
    },
    {
      year: "2025",
      title: "Cultures and Comfort Zones: A Leadership Journey.",
      views: "100"
    },
    {
      year: "2025",
      title: "Cultures and Comfort Zones: A Leadership Journey.",
      views: "100"
    }
  ];

  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-white text-[18px] font-normal mb-8">
        Journal
      </h2>

      {/* Journal Entries */}
      <div className="flex flex-col">
        {entries.map((entry, index) => (
          <JournalEntry
            key={index}
            year={entry.year}
            title={entry.title}
            views={entry.views}
          />
        ))}
      </div>
    </section>
  );
}

