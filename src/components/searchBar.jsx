import { debounce } from "lodash";

const SearchBar = ({setVoiceSearchFilter,placeholder}) => {
    const debounceSearch = debounce(function (e) {
        setVoiceSearchFilter(e.target.value);
    },400);
    return (
        <div className="search-bar">
            <input type="text" onChange={(e) => {debounceSearch(e)}} placeholder={placeholder}/>
        </div>
    )
};

export default SearchBar;