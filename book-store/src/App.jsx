import {Layout} from "./components/Layout/Layout";
import {StorePage} from "./pages/StorePage/StorePage";
import {categories} from "./constants/mock";
import {Header} from "./components/Header/Header";

export function App() {
    return <Layout>
        <Header/>
        <StorePage categories={categories}/>
    </Layout>
}
