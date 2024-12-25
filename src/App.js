import logo from './logo.svg';
import '/node_modules/react-resizable/css/styles.css'
import '/node_modules/react-grid-layout/css/styles.css'
import './App.css';
import GridLayout from "react-grid-layout";
import Card from "./components/card"

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 ,minW: 0, maxW: 2},
    { i: "b", x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 }
  ];
  return (
    <section className="w-full bg-orange">
      <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={30}
          width={1200}
        >
          <div key="a">
            <Card/>
          </div>
          <div key="b">b</div>
          <div key="c">c</div>
          <div key="d">d</div>
        </GridLayout>
    </section>
    
  );
}

export default App;
