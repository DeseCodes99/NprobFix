import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Category from "./components/category";
import Popular from "./components/popularRegion";
import AboutUs from "./components/aboutUs";

export default function Home() {
  return (
    <div className="flex flex-col  w-full items-center h-[100%] bg-tan-400">
      <div className="w-[100%] lg:w-[70%] lg:mt-[112px] max-md:mt-[10px] mb-[112px]">
        <Intro />
        <Category />
      </div>
      <div className="bg-slate-700 w-full text-white p-6" id="about">
        <AboutUs />
      </div>
      <div className="w-[70%] my-[30px]">
        <Popular />
      </div>
    </div>
  );
}
