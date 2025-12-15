export default function SkillsPage() {
  const skills = [
    "Handcrafted Design",
    "Sustainable Materials",
    "Ethical Sourcing",
    "Artisan Collaboration",
    "Modern Craft Techniques",
    "Eco-friendly Packaging",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-light text-center mb-6">
        OUR SKILLS
      </h1>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
        Every product is a blend of creativity, craftsmanship, and care.
        Our skills define who we are.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map(skill => (
          <div
            key={skill}
            className="border p-6 text-center hover:shadow-sm transition"
          >
            <div className="text-3xl mb-4">✦</div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
