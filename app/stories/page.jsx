export default function StoriesPage() {
  const stories = [
    {
      title: "From Village to Wardrobe",
      desc: "How traditional techniques find a place in modern fashion.",
    },
    {
      title: "Hands That Create",
      desc: "Meet the artisans behind every handcrafted piece.",
    },
    {
      title: "Sustainability at Heart",
      desc: "Our journey towards responsible fashion.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-light text-center mb-6">
        STORIES
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Stories woven into every thread. Discover the journeys that inspire us.
      </p>

      <div className="space-y-12 max-w-3xl mx-auto">
        {stories.map((story, i) => (
          <div key={i} className="border-b pb-6">
            <h3 className="text-lg font-medium mb-2">
              {story.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {story.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
