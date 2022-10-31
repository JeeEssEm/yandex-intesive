export const Layout = (props) => {
    return <div>
        <header></header>
        <main>
            {props.children}
        </main>
        <footer></footer>
    </div>
}