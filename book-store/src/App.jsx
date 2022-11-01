import {Layout} from "./components/Layout/Layout";
import {StorePage} from "./pages/StorePage/StorePage";
import {categories} from "./constants/mock";
import {Header} from "./components/Header/Header";
import {BookPage} from "./pages/BookPage/BookPage";

export function App() {
    return <Layout>
        <Header/>
        <StorePage categories={categories}/>
        {/* <BookPage book={categories[1].books[0]}/> */}
    </Layout>
}
