import { Header } from "../Header/Header";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
};
