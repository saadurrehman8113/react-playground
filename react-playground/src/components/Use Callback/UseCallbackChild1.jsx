const UseCallbackChild1 = ({ renderCounts, incrementRenderCount }) => {
  incrementRenderCount("child1");

  return (
    <div className="relative pt-3 before:absolute before:top-0 before:left-1/2 before:w-px before:h-3 before:bg-gray-400">
      <div className="h-full p-6 bg-white rounded-xl shadow-md">
        <h2 className="mb-5 text-xl font-bold text-center text-gray-800">
          Child Component 1
        </h2>

        <p className="text-center">
          This component is not wrapped inside React.memo
        </p>

        <div className="grid grid-cols-[auto_auto] items-center justify-center mt-6 gap-x-4 gap-y-5">
          <span className="w-full px-3 py-2 text-lg font-semibold text-center text-gray-700 bg-slate-200 rounded-lg">
            Render Count
          </span>
          <span className="text-lg font-semibold text-gray-800 min-w-[2ch] text-center bg-white px-3 py-1 rounded-lg shadow-inner">
            {renderCounts.current.child1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UseCallbackChild1;
