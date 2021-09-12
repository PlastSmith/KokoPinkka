
const Filter = ({searchTerm, handleSearchTermChange}) => {
    return (
        <>
            filter shown with<input value={searchTerm} onChange={handleSearchTermChange} />
        </>
    )
}

export default Filter