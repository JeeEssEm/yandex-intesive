import { Layout } from "./components/Layout/Layout";
import { StorePage } from "./pages/StorePage/StorePage";
import { BookPage } from "./pages/BookPage/BookPage";
import { store } from "./Store";
import { Provider } from "react-redux";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./components/Category/Category";
import { CartPage } from "./pages/CartPage/CartPage";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/categories" element={<StorePage />}>
              <Route path=":categoryId" element={<Category />}></Route>
            </Route>

            <Route path="/books">
              <Route path=":bookId" element={<BookPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
