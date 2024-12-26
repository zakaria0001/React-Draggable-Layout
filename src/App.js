import '/node_modules/react-resizable/css/styles.css'
import '/node_modules/react-grid-layout/css/styles.css'
import './App.css';
import GridLayout from "react-grid-layout";
import Card from "./components/card"
import TopBar from 'components/TopBar';
import {useState } from 'react';
import { StatusProvider} from 'components/statusContext';

function App() {
  const [showText, setShowText] = useState(false);

  const toggleStatus = () => {
      setShowText((prev) => !prev);
  };
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 ,minW: 0, maxW: 2},
    { i: "b", x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 }
  ];


  return (
    <StatusProvider>
    <section className="w-full bg-orange">
    <TopBar showText={showText} toggleStatus={toggleStatus}/>

  <section>
    <span>Status Message is {showText===true?"Showed":"Hidden"}</span>

  </section>
      <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={30}
          width={1200}
        >
          <div key="a">
            <Card showText={showText}/>
          </div>
          <div key="b">b</div>
          <div key="c">c</div>
          <div key="d">d</div>
        </GridLayout>
    </section>
    </StatusProvider>

  );
}

export default App;
