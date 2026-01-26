import { Facebook, Instagram, Linkedin } from "lucide-react"
import { emilysCandy, navFont } from "./ui/fonts"

export default function Footer() {
  return (
    <footer className= {`${navFont.className} bg-[#081607] text-white" `}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">

              <span className={`${emilysCandy.className} text-2xl font-serif`}>The Little Sprout</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We're passionate about bringing nature closer to you with healthy, handpicked plants. From indoor greens
              to garden favorites, we help you grow your perfect green space.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-950 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-green-950 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:col-span-3">
            
          {/* Information */}
          <div className= "space-y-6 pt-10 max-sm:pt-0 ">
            {/* <h3 className= {`${navFont.className} bg-[#081607] text-xl font-serif `}>Information</h3> */}
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6 pt-10 max-sm:pt-0">
            {/* <h3 className="text-xl font-serif">Support</h3> */}
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-6 pt-10 max-sm:pt-0">
            {/* <h3 className="text-xl font-serif">Community</h3> */}
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Refer A Friend
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Gift Card
                </a>
              </li>
            </ul>
          </div>
          </div>


        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400">© 2025 The Little Sprout. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
