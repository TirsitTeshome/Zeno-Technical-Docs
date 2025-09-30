import Image from "next/image";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#05192F] text-[#ededed] font-teachers flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Centered Title */}
        <div className="w-full flex flex-col items-center mb-15 ">
          <h1 className="text-5xl font-bold tracking-wide text-center mb-5 uppercase">
            What this Technical documentation has
          </h1>
          <span className="inline-block w-14 h-1 bg-[#ededed] rounded"></span>
        </div>
        
        {/* Optional: Subtitle from your previous code */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#bfbfbf] border-b border-[#bfbfbf]">
          {/* Left: Product Feature */}
          <div className="flex flex-col items-center justify-start pt-8 pb-16 px-4 border-r border-[#bfbfbf]">
          
            <div className="relative flex flex-row items-center justify-center w-full mb-6">
              {/* Product Image */}
              <Image
                src="/zeno-logo.png"
                width={270}
                height={260}
                alt="Tanzania Coffee Can"
                className="mx-auto drop-shadow-xl"
              />
              {/* Specialty rating */}
             
            </div>
            {/* Product Description */}
            <div className="text-center mt-4">
              <div className="font-semibold tracking-wide mb-1">
              If you want to get more information on Zeno AI 
              </div>
              <div className="text-[#bfbfbf] text-sm mb-4">
                Smooth with sweet and tart notes
              </div>
              <button className="text-[#ededed] border-b-2 border-red-500 pb-1 uppercase text-xs font-semibold hover:text-red-500 transition">
                Click here
              </button>
            </div>
          </div>
          {/* Right: Info Section */}
          <div className="grid grid-cols-2 border-l-0 border-t-0 md:border-l border-[#bfbfbf]">
            {/* Top Left: Coffee Thing */}
            <div className="flex flex-col items-center justify-center pt-8 pb-4 border-b border-[#bfbfbf]">
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#ededed]">
                  It's a
                </span>
                <div className="mt-1 mb-2">
                  <span className="inline-block bg-[#ededed] text-[#2D2B32] px-4 py-1 font-bold text-lg uppercase rounded">
                    Coffee
                  </span>
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#ededed]">
                  Thing
                </span>
              </div>
            </div>
            {/* Top Right: Roasting Club Icon */}
            <div className="flex flex-col items-center justify-center pt-8 pb-4 border-b border-[#bfbfbf]">
              {/* SVG of moka pot */}
              <div className="mb-2">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="20" y="20" width="20" height="28" rx="4" stroke="#ededed" strokeWidth="2" />
                  <rect x="28" y="48" width="4" height="8" rx="2" fill="#ededed" />
                  <rect x="22" y="15" width="16" height="8" rx="2" stroke="#ededed" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-[10px] text-center uppercase tracking-wide text-[#bfbfbf]">
                Join our famous roasting club<br />
                and receive unique offers
              </div>
            </div>
            {/* Bottom Left: Map */}
            <div className="flex items-center justify-center pt-8 pb-4 border-b border-[#bfbfbf] border-r border-[#bfbfbf]">
              {/* UK map SVG */}
              <Image
                src="/kmap.png"
                width={200}
                height={260}
                alt="Tanzania Coffee Can"
                className="mx-auto drop-shadow-xl"
              />
            </div>
            {/* Bottom Right: Description */}
            <div className="flex flex-col justify-center pt-8 pb-4 px-5 text-left">
              <h3 className="text-lg font-bold uppercase mb-2 tracking-wide">
                Single-Origin,<br />Micro Roasted Beans
              </h3>
              <span className="inline-block w-8 h-1 bg-[#ededed] rounded mb-3"></span>
              <p className="text-[#bfbfbf] text-xs leading-relaxed">
               Our platform goes beyond simple analytics. It acts as a powerful thought partner, instantly turning complex data and unstructured documents into clear, actionable insights. 
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}