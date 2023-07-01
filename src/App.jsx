import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';
import { useEffect } from 'react';

function App() {
  const [bgColor, toggle] = useLocalStorage("tab", true)
  const {width} = useWindowSize()

  useEffect(() => {
    const backgroundColor = width > 600 && bgColor ? "black" : "white";
    document.body.style.backgroundColor = backgroundColor;
  }, [width, bgColor]);

  return (
    <div>
      <button onClick={() => toggle((prevState) => !prevState)}>Toggle</button>
      {!bgColor && <p>Content that is shown when bgColor is false</p>}

      {width > 600 && <h1>Desktop</h1>}
    </div>
  );
}

export default App;
