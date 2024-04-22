import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])

    const { slug, seasonId } = useParams()
    useEffect(()=>{
        try {
            fetch(`${process.env.REACT_APP_URL}/episodes/${slug}/${seasonId}`)
            .then(response => response.json())
            .then(data => setEpisodes(data))
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }, [])
  return (
    <main class="boxes" style={{}}>
        <p> Episodes </p>
        <div>
            {episodes.map((item)=>(
                <div class="shadow1" key={item[0]}>
                    <div class="box1"> 
                        <Link to={`https://cringe-0-0-1.onrender.com/source/${slug}/${item[0]}`}><h2>{item[1]}</h2></Link>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Episodes
