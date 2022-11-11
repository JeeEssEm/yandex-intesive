import { Layout } from "./components/Layout/Layout";
import { StorePage } from "./pages/StorePage/StorePage";
import { BookPage } from "./pages/BookPage/BookPage";
import { store } from "./store";
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
            <Route path="/" element={<StorePage />}>
              <Route path="/categories/:categoryId" element={<Category />}/>
            </Route>
            <Route path="/books/:bookId" element={<BookPage />}/>
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
