import { useState, useCallback, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import UseCallbackChild1 from "./UseCallbackChild1";
import UseCallbackChild2 from "./UseCallbackChild2";

const UseCallbackParent = () => {
  const [counter, setCounter] = useState(0);
  const [useCallbackEnabled, setUseCallbackEnabled] = useState(false);

  const renderCounts = useRef({ parent: 0, child1: 0, child2: 0 });

  const incrementRenderCount = (componentName) => {
    renderCounts.current[componentName] += 1;
    return renderCounts.current[componentName];
  };

  const incrementRenderCountUseCallback = useCallback((componentName) => {
    renderCounts.current[componentName] += 1;
    return renderCounts.current[componentName];
  }, []);

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
          <div className="flex items-center justify-center gap-3">
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

          <div className="flex items-center justify-center gap-3">
            <span className="px-3 py-2 text-lg font-semibold text-center text-gray-700 bg-slate-200 rounded-lg">
              Render Count
            </span>
            <span className="text-lg font-semibold text-gray-800 min-w-[2ch] text-center bg-white px-3 py-1 rounded-lg shadow-inner">
              {renderCounts.current.parent}
            </span>
          </div>

          <label className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 cursor-pointer sm:col-span-2">
            useCallback
            <input
              type="checkbox"
              checked={useCallbackEnabled}
              onChange={(e) => {
                setUseCallbackEnabled(e.target.checked);
                e.target.checked
                  ? toast(
                      "useCallback enabled, now notice child 2 will not re-render by updating Parent State Value. ",
                    )
                  : toast(
                      "useCallback disabled, now notice child 2 re-render by updating Parent State Value. Even though it is wrapped inside React.memo already. ",
                    );
              }}
              className="sr-only peer"
            />
            <span className="relative w-11 h-6 bg-gray-300 rounded-full transition-colors peer-checked:bg-blue-500 after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform peer-checked:after:translate-x-5" />
          </label>
        </div>
      </div>

      <div className="w-px h-8 bg-gray-400" aria-hidden="true" />

      <div className="relative grid w-full max-w-6xl grid-cols-1 gap-6 pt-6 md:grid-cols-2 before:absolute before:top-0 before:left-1/4 before:right-1/4 before:h-px before:bg-gray-400">
        <UseCallbackChild1
          renderCounts={renderCounts}
          incrementRenderCount={
            useCallbackEnabled
              ? incrementRenderCountUseCallback
              : incrementRenderCount
          }
        />
        <UseCallbackChild2
          renderCounts={renderCounts}
          incrementRenderCount={
            useCallbackEnabled
              ? incrementRenderCountUseCallback
              : incrementRenderCount
          }
        />
      </div>
      <ToastContainer />
    </section>
  );
};

export default UseCallbackParent;
