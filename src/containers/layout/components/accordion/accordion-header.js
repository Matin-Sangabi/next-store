import { HiChevronDown } from "react-icons/hi";

const AccordionHeader = ({openCategory ,setOpenCategory}) => {
  return (
    <div className="flex z-10 cursor-pointer items-center justify-between p-4 rounded-md bg-white shadow-lg" onClick={() => setOpenCategory(!openCategory)}>
      <span className="text-sm text-slate-800 font-semibold ">Category</span>
      <span className={`text-xl ${openCategory ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300`}>
        <HiChevronDown />
      </span>
    </div>
  );
};

export default AccordionHeader;
