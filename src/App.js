import './App.css';
import {navigationData} from "./constants/constants";

function App() {
  return (
    <div className="App">
      <header className="fixed z-50 top-0 right-0 left-0 w-full py-0 px-4">
          <nav className="flex justify-center align-middle max-w-[1600px] mt-5 mx-0 mb-auto relative z-50">
              <ul className="flex list-none m-0 p-[calc(1.25rem) - 10px] rounded transition-all">
                  {navigationData.map((item) => (
                      <li className="flex relative">
                          {item.title}
                      </li>
                  ))}
              </ul>
          </nav>
      </header>
    </div>
  );
}

export default App;
