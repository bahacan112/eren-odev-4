import SearchBar from "./SearchBar"

const Navbar = (props) =>
{
    return (
        <>
          <nav className="bg-blue-600 py-4">
            <SearchBar setSearch={ props.setSearch } />
          </nav>
        </>
    )
}

export default Navbar