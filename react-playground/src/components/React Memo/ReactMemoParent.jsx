import { useState, useCallback, useRef } from "react";

import ReactMemoChild1 from "./ReactMemoChild1";
import ReactMemoChild2 from "./ReactMemoChild2";

const ReactMemoParent = () => {
  const [counter, setCounter] = useState(0);
  const [child1Name, setChild1Name] = useState("");
  const [child2Name, setChild2Name] = useState("");

  const renderCounts = useRef({ parent: 0, child1: 0, child2: 0 });

  const incrementRenderCount = useCallback((componentName) => {
    renderCounts.current[componentName] += 1;
    return renderCounts.current[componentName];
  }, []);

  const updateChildName = (childName, source) => {
    source === "child1" ? setChild1Name(childName) : setChild2Name(childName);
  };

  incrementRenderCount("parent");

  return (
    <section
      className="flex flex-col items-center w-full"
      aria-label="Component tree"
    >
      <div className="w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <h2 className="mb-5 text-xl font-bold text-center text-gray-800">
          Parent Component
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => setCounter(counter + 1)}
              className="px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
            >
              Increase State Value
            </button>
            <span className="text-lg font-semibold text-gray-800 min-w-[2ch] text-center bg-white px-3 py-1 rounded-lg shadow-inner">
              {counter}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span className="px-3 py-2 text-lg font-semibold text-center text-gray-700 bg-slate-200 rounded-lg">
              Render Count
            </span>
            <span className="text-lg font-semibold text-gray-800 min-w-[2ch] text-center bg-white px-3 py-1 rounded-lg shadow-inner">
              {renderCounts.current.parent}
            </span>
          </div>

          <input
            type="text"
            placeholder="Child 1 Name"
            className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={child1Name}
            onChange={(e) => updateChildName(e.target.value, "child1")}
          />
          <input
            type="text"
            placeholder="Child 2 Name"
            className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={child2Name}
            onChange={(e) => updateChildName(e.target.value, "child2")}
          />
        </div>
      </div>

      <div className="w-px h-8 bg-gray-400" aria-hidden="true" />

      <div className="relative grid w-full max-w-6xl grid-cols-1 gap-6 pt-6 md:grid-cols-2 before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-px before:bg-gray-400">
        <ReactMemoChild1
          name={child1Name}
          renderCounts={renderCounts}
          incrementRenderCount={incrementRenderCount}
        />
        <ReactMemoChild2
          name={child2Name}
          renderCounts={renderCounts}
          incrementRenderCount={incrementRenderCount}
        />
      </div>
    </section>
  );
};

export default ReactMemoParent;
