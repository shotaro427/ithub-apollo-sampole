import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useGetContriesQuery } from '../graphql/api'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { data, loading, error } = useGetContriesQuery()

  if (loading) {
    return <h2>Now Loading...</h2>
  }

  if (error) {
    console.log(error)
    return <h2>Error Happened.</h2>
  }

  console.log(data);
  
  if (!data) {
    return <h2>Not Data.</h2>
  }

  return (
    <div style={{
      height: '100%',
      width: '100%'
    }}>
      <h2>データあるよ</h2>
      {data?.countries.map((contry, i) => {
        return (
          <div style={{
              height: '100px'
            }}
            key={i}>
            <h1>{ contry.name }</h1>
            <p>{ contry.code }</p>
            <p>{ contry.capital }</p>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )
}

export default Home
