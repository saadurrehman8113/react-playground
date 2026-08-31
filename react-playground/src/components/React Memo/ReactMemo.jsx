import React from "react";
import ReactMemoChild1 from "./ReactMemoChild1";
import ReactMemoChild2 from "./ReactMemoChild2";

const ReactMemo = () => {
  const [isReactMemoEnabled, setIsReactMemoEnabled] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4 p-6 bg-gray-100 rounded-xl shadow-md">
        {console.log("ReactMemo")}
        <span className="text-lg font-semibold text-gray-800">React Memo</span>
        <button
          onClick={() => setIsReactMemoEnabled(true)}
          className={`px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer ${
            isReactMemoEnabled
              ? "bg-green-500 text-white ring-2 ring-green-700 ring-offset-2"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          On
        </button>
        <button
          onClick={() => setIsReactMemoEnabled(false)}
          className={`px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer ${
            !isReactMemoEnabled
              ? "bg-red-500 text-white ring-2 ring-red-700 ring-offset-2"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          Off
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 p-6 bg-gray-100 rounded-xl shadow-md">
        <span className="text-lg font-semibold text-gray-800">Counter</span>
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
        >
          Increase Counter
        </button>
        <span className="text-lg font-semibold text-gray-800 min-w-[2ch] text-center bg-white px-3 py-1 rounded-lg shadow-inner">
          {counter}
        </span>
      </div>

      {isReactMemoEnabled ? <ReactMemoChild2 /> : <ReactMemoChild1 />}
    </div>
  );
};

export default ReactMemo;
