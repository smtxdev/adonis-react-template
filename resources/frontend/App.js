import React, { useEffect, useState } from 'react'

let lastUrlFetched = '/test'

const UsingFetch = () => {
  const [data, setData] = useState([])

  const fetchData = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    console.log(json)
    lastUrlFetched = url
  }

  useEffect(() => {
    fetchData('/test')
    console.log(lastUrlFetched)
  }, [lastUrlFetched])

  return (
    <div>
      {data.length >= 1 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  )
}

export default UsingFetch
