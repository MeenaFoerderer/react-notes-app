function Header({handleToggleDarkMode}) {
    return (
        <div className="header">
            <h1>Sticky</h1>
            <button 
                onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)} 
                className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;