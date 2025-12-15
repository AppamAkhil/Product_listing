export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16 px-6 py-14 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* NEWSLETTER */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-2">
            BE THE FIRST TO KNOW
          </h4>
          <p className="text-gray-400 text-xs mb-4">
            Sign up for updates from metta muse.
          </p>

          <div className="flex">
            <input
              placeholder="Enter your e-mail..."
              className="p-2 text-black w-full"
            />
            <button className="border px-4 ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-2">CONTACT US</h4>
          <p className="text-gray-400 text-xs">
            +44 221 133 5360
          </p>
          <p className="text-gray-400 text-xs">
            customercare@mettamuse.com
          </p>
        </div>

        {/* CURRENCY */}
        <div>
          <h4 className="font-semibold mb-2">CURRENCY</h4>
          <p className="text-gray-400 text-xs">USD</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mt-12 border-t border-gray-700 pt-10">

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-3">metta muse</h4>
          <ul className="space-y-2 text-gray-400 text-xs">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">QUICK LINKS</h4>
          <ul className="space-y-2 text-gray-400 text-xs">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">FOLLOW US</h4>
          <p className="text-gray-400 text-xs">Instagram · LinkedIn</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">metta muse ACCEPTS</h4>
          <p className="text-gray-400 text-xs">
            Visa · MasterCard · Amex · PayPal
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        Copyright © 2023 metta muse. All rights reserved.
      </p>
    </footer>
  );
}
