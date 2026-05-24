import type { SyntheticEvent } from "react"

interface SearchBarProps {
    searchTerm: string
    onSearchTermChange: (value: string) => void
    onSearch: () => Promise<void>
}

const SearchBar = ({ searchTerm, onSearchTermChange, onSearch }: SearchBarProps) => {
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch()
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type='text'
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <button type='submit'>SEARCH</button>
        </form>
        
    )
}

export default SearchBar