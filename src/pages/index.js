import { useState } from "react";
import Layout from "../containers/layout";
import AccordionContent from "../containers/layout/components/accordion/accordion-content";
import AccordionHeader from "../containers/layout/components/accordion/accordion-header";
import { HiOutlineChatBubbleLeftRight , HiOutlineHeart , HiOutlineBookmark} from "react-icons/hi2";
const HomePage = () => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <Layout>
      <div className="px-2 grid md:grid-cols-12  gap-4 md:grid-rows-[50px_minmax(300px,_1fr)]">
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          {/* accordion header */}
          <AccordionHeader
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
          />
          {/* accordion content */}
          <AccordionContent openCategory={openCategory} />
        </div>
        <div className="hidden md:block md:col-span-9">
          <div className="px-2 py-3 text-slate-800 bg-white shadow-md rounded-md flex items-center gap-x-4">
            <span className="font-semibold">filter :</span>
            <span>newest </span>
            <span>oldest </span>
            <span>modern </span>
          </div>
        </div>
        <div className="md:col-span-9 grid grid-cols-6 gap-4">
          {["electron.webp", "flutter.png", "nextjs.png", "node.png", "nuxt.png", "react.svg" , "vue.png"].map((item ,index) => {
            return (
              <div
                key={index}
                className="col-span-6 p-2 md:col-span-3 lg:col-span-2 bg-white rounded-md shadow-md flex flex-col gap-2"
              >
                <div className="aspect-w-16 aspect-h-9 ">
                  <img
                    src={`/images/${item}`}
                    alt="name"
                    className="w-full h-full object-center object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-y-2 justify-between  w-full flex-auto">
                  <h1 className="text-slate-800 font-semibold">
                    {index === 2 ? "React vs Next.js and some body like me and no stop the value" : "react vs nex"}
                  </h1>
                  <div className="flex flex-col  gap-y-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-x-2">
                        <span className="bg-gray-600 w-7 h-7 rounded-full "></span>
                        <h1 className="font-semibold text-slate-800 text-sm">
                          Matin Sangabi
                        </h1>
                      </div>
                      <span className="py-1 px-2 bg-indigo-300 text-slate-800 font-semibold hover:bg-indigo-500 hover:text-slate-100 rounded-xl text-xs ">
                        React
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex justify-items-stretch gap-x-2">
                        <button className="py-1 px-2 bg-gray-300 text-slate-600 hover:bg-gray-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                          <span ><HiOutlineChatBubbleLeftRight/></span>
                          <span>4</span>
                        </button>
                        <button className="py-1 px-2 bg-rose-200 text-slate-600 hover:bg-rose-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                          <span ><HiOutlineHeart/></span>
                          <span>16</span>
                        </button>
                         <button className="py-1 px-2 bg-indigo-200 text-slate-600 hover:bg-indigo-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                          <span ><HiOutlineBookmark/></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
