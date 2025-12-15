export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-light text-center mb-6">
        ABOUT US
      </h1>

      <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16">
        metta muse is a celebration of craftsmanship, culture, and conscious
        creation. We believe fashion should tell stories, respect nature,
        and empower communities.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            Founded with a vision to bring authentic handcrafted products
            to the world, metta muse bridges tradition with contemporary
            aesthetics.
          </p>
          <p>
            Every piece you see is thoughtfully designed, ethically sourced,
            and responsibly produced.
          </p>
          <p>
            We collaborate directly with artisans, ensuring fair practices
            and sustainable growth.
          </p>
        </div>

        <div className="bg-gray-100 h-64 flex items-center justify-center">
          <span className="text-gray-400">Brand Image</span>
        </div>
      </div>
    </main>
  );
}
