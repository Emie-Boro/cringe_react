import { useEffect, useState } from "react";

const Search = () => {
    const [searchResult, setSearchResult] = useState([])
    const [searchData, setSearchData] = useState()

    const handleClick = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/search/${searchData}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSearchResult(data['Search Results Subbed']);
        } catch (error) {
            console.error('Failed to fetch trending anime:', error);
        }
    };
    
    
  return (
    <main>
        <div style={{display: 'flex', alignItems:'center'}}>
            <input type="search" value={searchData} onChange={(e)=> setSearchData(e.target.value)} style={{padding: '2px',fontSize: '20px'}}/>
            <button onClick={handleClick}>Search</button>
        </div>
        {/* Search Result */}
        <div className="trending">
            {searchResult ? searchResult.map((item, index)=>(
            <div key={index} class="trending-card">
                <a href={`/details${item.url.substring(9)}`}>
                <img src={item.image} alt="" />
                </a>
            </div>
            )) : <h1>No Search Result</h1>}
        </div>
    </main>
  )
}

export default Search
