import { useState } from "react";
import Layout from "../containers/layout";
import AccordionContent from "../containers/layout/components/accordion/accordion-content";
import AccordionHeader from "../containers/layout/components/accordion/accordion-header";

const HomePage = () => {
  const [openCategory , setOpenCategory] = useState(false);
  return (
    <Layout>
      <div className="grid md:grid-cols-12 md:grid-rows-2 gap-4">
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          {/* accordion header */}
            <AccordionHeader openCategory={openCategory}  setOpenCategory={setOpenCategory}/>
          {/* accordion content */}
          <AccordionContent openCategory={openCategory} />
        </div>
        <div className="bg-red-500 hidden md:block md:col-span-9">
          desktop sort
        </div>
        <div className="bg-red-500 hidden md:block md:col-span-9">blogs</div>
      </div>
    </Layout>
  );
};

export default HomePage;
