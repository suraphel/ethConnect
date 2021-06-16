import './Search.css'

const SearchBar  = props => {
    return (
        <div  >
            <h2>Get the job done by reliable and certified professionals </h2> 
            <form>
                <label> 
                     
                    <input type="text" name= "name" 
                    placeholder="What do you need help with? "  className="searchbar"/>     
                     

                </label>
                </form> 
            
        </div>
    )
}

SearchBar.propTypes = {

}

export default SearchBar 
