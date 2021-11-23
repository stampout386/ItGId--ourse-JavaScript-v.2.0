function Header(){
    return (
        <>
        <header>
            <h1>My site header</h1>
            <h2>Second header</h2>
            <Nav></Nav>
        </header>
        </>
    )
}

function Nav(){
    return(
        <nav>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        </nav>
    )
}

export default Header;