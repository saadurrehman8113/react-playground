import "./App.css";
import ReactMemoParent from "./components/React Memo/ReactMemoParent";
import UseMemo from "./components/Use Memo/UseMemo";
import UseCallbackParent from "./components/Use Callback/UseCallbackParent";

function App() {
  return (
    <div className="container">
      {/* <ReactMemoParent /> */}
      {/* <UseMemo /> */}
      <UseCallbackParent />
    </div>
  );
}

export default App;
