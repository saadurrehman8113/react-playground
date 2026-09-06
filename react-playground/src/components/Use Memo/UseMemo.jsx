import { useState, useRef, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";

function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [slowFibInput, setSlowFibInput] = useState(0);
  const [result, setResult] = useState(0);

  const renderCounts = useRef(0);
  const debounceRef = useRef(null);

  let memoizedResult = 0;

  const calculate = (slowFibInput) => {
    toast("Calculating without useMemo");
    const result = slowFib(slowFibInput);
    toast("Calculated without useMemo");
    setResult(result);
  };

  memoizedResult = useMemo(() => {
    toast("Calculating in useMemo");
    return slowFib(slowFibInput);
  }, [slowFibInput]);

  renderCounts.current += 1;

  return (
    <section
      className="flex flex-col items-center w-full"
      aria-label="Component tree"
    >
      <div className="w-full max-w-3xl p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
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
              {renderCounts.current}
            </span>
          </div>

          <input
            type="number"
            placeholder="Numeric Value b/w 0-30"
            className="w-[17.75rem] justify-self-center sm:col-span-2 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              const value = e.target.value;

              if (debounceRef.current) {
                clearTimeout(debounceRef.current);
              }

              debounceRef.current = setTimeout(() => {
                if (value) {
                  if (value > 30) {
                    toast("Input value cannot be greater than 30");
                  } else {
                    setSlowFibInput(value);
                    calculate(value);
                  }
                }
              }, 1000);
            }}
          />

          <div className="flex flex-col gap-3 sm:col-span-2">
            <div className="grid grid-cols-[13rem_4rem] justify-center items-center gap-3">
              <span className="px-3 py-2 text-lg font-semibold text-center text-gray-700 bg-slate-200 rounded-lg">
                Result without useMemo
              </span>
              <span className="text-lg font-semibold text-gray-800 text-center bg-white px-3 py-1 rounded-lg shadow-inner">
                {result}
              </span>
            </div>

            <div className="grid grid-cols-[13rem_4rem] justify-center items-center gap-3">
              <span className="px-3 py-2 text-lg font-semibold text-center text-gray-700 bg-slate-200 rounded-lg">
                Result with useMemo
              </span>
              <span className="text-lg font-semibold text-gray-800 text-center bg-white px-3 py-1 rounded-lg shadow-inner">
                {memoizedResult}
              </span>
            </div>

            <p>
              On this input field, 2 functions get triggered simultaneously, 1st
              one is simple function and 2nd one is wrapped inside useMemo.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer style={{ top: "5rem" }} />
    </section>
  );
};

export default UseMemo;
