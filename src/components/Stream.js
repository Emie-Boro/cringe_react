import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Stream = () => {
  const [stream, setStream] = useState({})

  const {slug, source } = useParams()

  useEffect(()=>{
    try {
      fetch(`${process.env.REACT_APP_URL}/source/${slug}/${source}`)
      .then(response => response.json())
      .then(data => setStream(data))
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  })
  return (
    <main>
      <video id="myVideo" controls width="320" height="240">
          <source src={`${stream.source}`} type="application/x-mpegURL" />
      </video>
    </main>
  )
}

export default Stream
