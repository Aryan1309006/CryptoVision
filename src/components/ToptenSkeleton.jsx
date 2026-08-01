import React from "react";

const ToptenSkeleton = () => {
  return (
    <div className="animate-pulse border-b border-slate-200 last:border-none dark:border-gray-800">
      <div className="flex h-16 items-center px-4 md:h-20 md:px-6">
        <div className="w-[10%] md:w-[8%]">
          <div className="h-4 w-6 rounded bg-slate-300 dark:bg-gray-700"></div>
        </div>

        <div className="flex w-[45%] items-center gap-3 md:w-[34%]">
          <div className="h-8 w-8 rounded-full bg-slate-300 md:h-10 md:w-10 dark:bg-gray-700"></div>

          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-slate-300 md:w-32 dark:bg-gray-700"></div>
            <div className="h-3 w-12 rounded bg-slate-200 dark:bg-gray-800"></div>
          </div>
        </div>

        <div className="flex w-[20%] justify-end md:w-[18%]">
          <div className="h-4 w-20 rounded bg-slate-300 dark:bg-gray-700"></div>
        </div>

        <div className="flex w-[25%] justify-end md:w-[20%]">
          <div className="h-4 w-16 rounded bg-slate-300 dark:bg-gray-700"></div>
        </div>

        <div className="hidden justify-end md:flex md:w-[20%]">
          <div className="h-4 w-24 rounded bg-slate-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default ToptenSkeleton;