import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const General = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>using useEffect</h2>
      {data.map(a => {
        return <div key={a.id}>{a.name}</div>
      })}
    </>
  )
}
