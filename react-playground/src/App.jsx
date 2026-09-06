import "./App.css";
import { useState } from "react";
import ReactMemoParent from "./components/React Memo/ReactMemoParent";
import UseMemo from "./components/Use Memo/UseMemo";
import UseCallbackParent from "./components/Use Callback/UseCallbackParent";

function App() {
  const [activeDemo, setActiveDemo] = useState("reactMemo");

  const demos = {
    reactMemo: { label: "React.memo", component: <ReactMemoParent /> },
    useMemo: { label: "useMemo", component: <UseMemo /> },
    useCallback: { label: "useCallback", component: <UseCallbackParent /> },
  };

  return (
    <main className="app">
      <nav className="navbar" aria-label="Component demonstrations">
        <span className="navbar__brand">React Playground</span>
        <div className="navbar__links">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              type="button"
              className={`navbar__link ${activeDemo === key ? "navbar__link--active" : ""}`}
              onClick={() => setActiveDemo(key)}
              aria-current={activeDemo === key ? "page" : undefined}
            >
              {demo.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="container">{demos[activeDemo].component}</div>
    </main>
  );
}

export default App;
