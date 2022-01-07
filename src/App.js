import { Provider } from "react-redux";
import CardList from "./components/CardList";
import store from "./store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <CardList />
    </Provider>
  );
}
