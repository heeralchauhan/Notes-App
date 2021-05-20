// import { Divider } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import store from "./store";
import { Provider } from "react-redux";

// import "./App.scss";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <div className="App">
          <Header />
          <Notes />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
