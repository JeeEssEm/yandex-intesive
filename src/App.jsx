import { Layout } from "./components/Layout/Layout";
import { StorePage } from "./pages/StorePage/StorePage";
import { categories } from "./constants/mock";
import { BookPage } from "./pages/BookPage/BookPage";
import { store } from "./Store";
import { Provider } from "react-redux";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category } from "./components/Category/Category";

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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* <StorePage /> */}
          {/* <BookPage book={categories[1].books[0]}/> */}
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
