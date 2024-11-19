import hero from "../../assets/images/Hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CButton from "../shared/CustomButton";
import Slide from "./Slide";

export default function MainSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 40000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ height: "70vh" }}
      >
        <SwiperSlide className="h-full">
          <Slide bgImage={hero}>
            <div className="flex flex-col justify-start w-2/3 p-4 gap-28">
              <span className="text-9xl">Transform Your Living Space.</span>
              <div className="grid grid-cols-6  gap-3  ">
                <CButton clasName="border-0 bg-black text-white hover:bg-[#0000330F] hover:text-black font-semibold">
                  Discover Furniture
                </CButton>
                <CButton clasName="border-0 w-3/4 bg-[#0000330F] font-semibold hover:bg-black hover:text-white  ">
                  Start Selling
                </CButton>
              </div>
            </div>
          </Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
