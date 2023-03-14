import { useState } from "react";
import Layout from "../containers/layout";
import AccordionContent from "../containers/layout/components/accordion/accordion-content";
import AccordionHeader from "../containers/layout/components/accordion/accordion-header";
;
import axios from "axios";
import BlogList from "../containers/layout/components/posts/blogsList";
const HomePage = ({blogs , psotCategory}) => {
  console.log(psotCategory)
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <Layout>
      <div className="px-2 grid md:grid-cols-12  gap-4 md:grid-rows-[50px_minmax(300px,_1fr)]">
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          {/* accordion header */}
          <AccordionHeader
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            // psotCategory={psotCategory}
          />
          {/* accordion content */}
          <AccordionContent openCategory={openCategory} psotCategory={psotCategory}/>
        </div>
        <div className="hidden md:block md:col-span-9">
          <div className="px-2 py-3 text-slate-800 bg-white shadow-md rounded-md flex items-center gap-x-4">
            <span className="font-semibold">filter :</span>
            <span>newest </span>
            <span>oldest </span>
            <span>modern </span>
          </div>
        </div>
        <BlogList blogs={blogs.docs} />
      </div>
    </Layout>
  );
};

export default HomePage;

export async function getServerSideProps(ctx) {
  const { data : resault } = await axios.get("http://localhost:5000/api/posts?limit=4&page=2");
  const { data : psotCategory } = await axios.get("http://localhost:5000/api/post-category");
  const {data} = resault;
  return {
    props: {
      blogs: data,
      psotCategory : psotCategory.data
    },
  };
}
