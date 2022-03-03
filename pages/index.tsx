import type { NextPage } from 'next'
import Head from 'next/head'
import { Introduction, Posts } from '../components'
// import Image from 'next/image'
import {sanityClient, urlFor} from "../sanity"
import Header from '../components/Header'
import { Post } from '../types'
import Link from 'next/link'

interface Props{
  posts: Post[]
}
export default function Home({posts}: Props){
  // console.log(posts)
  return (
    <div className="mx-auto max-w-full">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Introduction/>
      <Posts posts={posts}/>
      
    </div>
  )
}

export const getServerSideProps =async () => {
  const query = `
    *[_type == "post"]{
      _id,
      title,
      author ->{
      name,
      image
    },
    description,
    mainImage,
    slug
    }
  `

  const posts = await sanityClient.fetch(query)

  return {props: {posts,}}
}

