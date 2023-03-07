import Link from "next/link";

const CategoryNavigation = [
  { id: 1, name: "React.js", path: "/react" },
  { id: 2, name: "Next.js", path: "/Next" },
  { id: 3, name: "Vue.js", path: "/Vue" },
  { id: 4, name: "Node.js", path: "/Node" },
  { id: 5, name: "Electron.js", path: "/Electron" },
];
const AccordionContent = ({ openCategory }) => {
  return (
    <div
      className={`${
        openCategory ? "translate-y-0 opacity-100 transition-all ease-in-out duration-200 " : "-translate-y-60 opacity-0 -z-10 transition-all ease-in-out duration-150"
      } mt-4 flex-col  gap-y-4 bg-white shadow-lg relative rounded-md  `}
    >
      {CategoryNavigation.map((nav) => {
        return (
          <Link
            key={nav.id}
            href={nav.path}
            className="w-full p-2 rounded-md transition-all ease-in-out duration-200 block hover:bg-indigo-500 hover:text-slate-100 "
          >
            {nav.name}
          </Link>
        );
      })}
    </div>
  );
};

export default AccordionContent;
