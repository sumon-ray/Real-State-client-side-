import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import './slide.css'
// import 'animate.css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from "swiper/react";


const Slide = () => {
    
    return (
        <div className="">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 5000 }}
          effect="fade"
         
        >
          <SwiperSlide>
            <div className="slide slide1 flex flex-col fixed min-h-full">
           {/*  */}
           <div className=" text-white p-8 font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-green-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">MINIMALIST DESIGN</h2>
    <div className="mt-12">
      <p className="text-base">We’re surrounded by information design every day. From train station maps to infographics, exhibitions to tutorials — it’s all around us. Yet, most of the time.</p>
    </div>
    <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Try now</button>
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Cancel</button>
    </div>
  </div>
</div>
           {/*  */}
              <div className="mt-6">
               
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="slide slide2 flex flex-col">
              <div>
            {/*  */}
            <div className=" text-white p-8 font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-green-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">HOLLYWOOD GLAM DESIGN</h2>
    <div className="mt-12">
      <p className="text-base">We’re surrounded by information design every day. From train station maps to infographics, exhibitions to tutorials — it’s all around us. Yet, most of the time.</p>
    </div>
    <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Try now</button>
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Cancel</button>
    </div>
  </div>
</div>
            {/*  */}
              </div>
              <div className="mt-6">
                
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="slide slide3 flex flex-col">
              {/*  */}
              <div className=" text-white p-8 font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-green-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">HOLLYWOOD GLAM DESIGN</h2>
    <div className="mt-12">
      <p className="text-base">We’re surrounded by information design every day. From train station maps to infographics, exhibitions to tutorials — it’s all around us. Yet, most of the time.</p>
    </div>
    <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Try now</button>
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Cancel</button>
    </div>
  </div>
</div>
              {/*  */}
              <div className="mt-6">
                
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="slide slide4 flex flex-col">
              {/*  */}
              <div className=" text-white p-8 font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-green-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">TRANSITIONAL DESIGN</h2>
    <div className="mt-12">
      <p className="text-base">We’re surrounded by information design every day. From train station maps to infographics, exhibitions to tutorials — it’s all around us. Yet, most of the time.</p>
    </div>
    <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Try now</button>
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Cancel</button>
    </div>
  </div>
</div>
              {/*  */}
              <div className="mt-6">
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide5 flex flex-col">
             {/*  */}
             <div className=" text-white p-8 font-[sans-serif]">
  <div className="max-w-xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-green-400 after:left-0 after:right-0 after:mx-auto after:rounded-full">MINIMALIST DESIGN</h2>
    <div className="mt-12">
      <p className="text-base">We’re surrounded by information design every day. From train station maps to infographics, exhibitions to tutorials — it’s all around us. Yet, most of the time.</p>
    </div>
    <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Try now</button>
      <button type="button"
        className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-[#333] bg-[#a8181f] hover:bg-transparent hover:text-white transition-all duration-300">Cancel</button>
    </div>
  </div>
</div>
             {/*  */}
              <div className="mt-6">
               
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  
    );
};

export default Slide;