import Link from "next/link";

const AccordionContent = ({ openCategory, psotCategory }) => {
  return (
    <div
      className={`${
        openCategory
          ? "translate-y-0 opacity-100 transition-all ease-in-out duration-200 "
          : "-translate-y-60 opacity-0 -z-10 transition-all ease-in-out duration-150"
      } mt-4 flex-col  gap-y-4 bg-white shadow-lg relative rounded-md  `}
    >
      <Link
        href={`/blogs/`}
        className="w-full p-2 rounded-md transition-all ease-in-out duration-200 block hover:bg-indigo-500 hover:text-slate-100 "
      >
        All blogs
      </Link>
      {psotCategory.map((nav) => {
        return (
          <Link
            key={nav._id}
            href={`/blogs/${nav.englishTitle}`}
            className="w-full p-2 rounded-md transition-all ease-in-out duration-200 block hover:bg-indigo-500 hover:text-slate-100 "
          >
            {nav.title}
          </Link>
        );
      })}
    </div>
  );
};

export default AccordionContent;
