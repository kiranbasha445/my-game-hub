import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";

function App() {
  const enableDarkMode = () => {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
  };

  return (
    <>
      <div className="container container-bg">
        <div className="row row-cols-2">
          <div className="col-12 pln5">
            <NavBar></NavBar>
          </div>
          <div className="col-md-3 bg-primary d-none d-md-block">aside</div>
          <div className="col-12 col-md-9 bg-danger d-flex justify-content-end">
            <div className="form-check form-switch mx-4 ">
              <input
                className="form-check-input p-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={enableDarkMode}
              />
              Dark
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
