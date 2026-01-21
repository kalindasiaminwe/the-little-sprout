import Image from "next/image"

export default function HowToOrder() {
  return (
    <div className="min-h-screen bg-white max-sm:px-8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-serif text-gray-900 leading-tight max-sm:text-4xl max-sm:text-green-800">How to Order</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ordering your favorite plants is simple and quick! Just follow these easy steps:
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 01 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif text-green-900 font-light max-sm:text-3xl">01</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">Choose Your Plant</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Click on the plant you love to see detailed information, care instructions, and pot options.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif text-green-900 font-light">02</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">Place Your Order</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enter your delivery details and make a secure payment using your preferred method.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif text-green-900 font-light">03</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif text-gray-900 mb-3">Get It Delivered</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We carefully package every plant to ensure it arrives fresh and happy at your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className=" p-8 lg:p-12">
              <Image
                src="/images/hto.png"
                alt="Various potted plants including palm and leafy plants arranged beautifully"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
