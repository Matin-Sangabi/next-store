import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHeart,
  HiOutlineBookmark,
} from "react-icons/hi2";
const BlogList = ({ blogs }) => {
  return (
    <div className="md:col-span-9 grid grid-cols-6 gap-4">
      {blogs.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-6 p-2 md:col-span-3 lg:col-span-2 bg-white rounded-md shadow-md flex flex-col gap-2"
          >
            <div className="aspect-w-16 aspect-h-9 ">
              <img
                src={`${item.coverImage}`}
                alt="name"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-2 justify-between  w-full flex-auto">
              <h1 className="text-slate-800 font-semibold">{item.title}</h1>
              <div className="flex flex-col  gap-y-2">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-x-2">
                    <span className="bg-gray-600 w-7 h-7 rounded-full "></span>
                    <h1 className="font-semibold text-slate-800 text-sm">
                      {item.author.name}
                    </h1>
                  </div>
                  <span className="py-1 px-2 bg-indigo-300 text-slate-800 font-semibold hover:bg-indigo-500 hover:text-slate-100 rounded-xl text-xs ">
                    {item.category.title}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-items-stretch gap-x-2">
                    <button className="py-1 px-2 bg-gray-300 text-slate-600 hover:bg-gray-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                      <span>
                        <HiOutlineChatBubbleLeftRight />
                      </span>
                      <span>4</span>
                    </button>
                    <button className="py-1 px-2 bg-rose-200 text-slate-600 hover:bg-rose-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                      <span>
                        <HiOutlineHeart />
                      </span>
                      <span>16</span>
                    </button>
                    <button className="py-1 px-2 bg-indigo-200 text-slate-600 hover:bg-indigo-500 hover:text-slate-50 rounded-lg flex items-center gap-x-1">
                      <span>
                        <HiOutlineBookmark />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

