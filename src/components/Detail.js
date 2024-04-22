import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Detail = () => {
    const [anime, setAnime] = useState()
    const [seasonId, setSeasonId] = useState()

    const { id } = useParams();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL}/details/category/${id}`)
        .then(response => response.json())
        .then(data => setAnime(data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        try {
            fetch(`${process.env.REACT_APP_URL}/seasons/${id}`)
            .then(response => response.json())
            .then(data => setSeasonId(data['seasons'][0][1]))
            .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
    }, [])

  return (
    <main>
        <section style={{display: 'flex',flexDirection:'row-reverse'}}>
            <div class="summarry">
                <div class="inside-summarry">
                    <h1 style={{fontSize: '40px'}}>{anime ? anime.title : ''}</h1>
                    <h4> Season 1 Episode 1 </h4>
                    <h5> Shonen Dark Fantasy </h5>
                    <div class="btn1" style={{margin: '20px', }}> 
                        <a href={'#'}>Play</a>
                        <a href={'#'}><i class="fas fa-heart"></i></a>
                    </div>
                </div>
                <Link to={`/episodes/${id}/${seasonId}`} style={{padding:'10px',backgroundColor:'#12f97f'}}>View Episodes</Link>
            </div>
            <div class="poster" style={{marginRight: '15px'}}>
                <img src={anime ? anime.image : ''} />
            </div>
        </section>
    </main>
  )
}

export default Detail
