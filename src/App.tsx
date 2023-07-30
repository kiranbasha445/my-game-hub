import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-12 bg-primary">nav</div>
          <div className="col-lg-3 d-none d-lg-block bg-secondary">aside</div>
          <div className="col-lg-9 col-12 bg-danger">main</div>
        </div>
      </div>
    </>
  );
}

export default App;
