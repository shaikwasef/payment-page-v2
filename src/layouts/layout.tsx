import { Provider } from "react-redux";
import store from "@/store";
import "@/styles/style.css";
import { NavbarComponent } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider store={store}>
      <NavbarComponent>{children}</NavbarComponent>
    </Provider>
  );
}
