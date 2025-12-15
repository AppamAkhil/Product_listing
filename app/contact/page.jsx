export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-light text-center mb-6">
        CONTACT US
      </h1>

      <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">
        We'd love to hear from you. Reach out with questions, feedback,
        or collaborations.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* CONTACT FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 w-full text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 w-full text-sm"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-3 w-full text-sm"
          ></textarea>

          <button className="bg-black text-white px-6 py-2 text-sm">
            SEND MESSAGE
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="text-sm text-gray-600 space-y-4">
          <p>
            <strong>Email:</strong> customercare@mettamuse.com
          </p>
          <p>
            <strong>Phone:</strong> +44 221 133 5360
          </p>
          <p>
            <strong>Address:</strong> 123 Artisan Street, Creative City
          </p>
          <p className="text-gray-400">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
