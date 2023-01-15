
import Layout from '../components/common/Layout/Layout'
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import { client } from "../lib/sanity.client";
import { useContext, useEffect } from 'react'
import Header from '../components/Header';

// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import BlogList from '../components/BlogList';
import Info from '../components/Info';
import { CustomContext } from '../contexts/customContext';


const query = groq`
*[_type=='post'] {
    ...,
    } | order (_createdAt desc)
`




export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  // const config = { locale, locales }



  const posts = await client.fetch(query);


  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

export default function Home({
  posts,

}: InferGetStaticPropsType<typeof getStaticProps>) {

  const { customString, setCustomString } = useContext(CustomContext);

  const onButtonClick = () => {
    setCustomString(!customString);
  }


  return (
    <>
      <div className="bg-black min-h-screen">
        {/* <button  onClick={changeInfo} className="text-white cursor-pointer z-50"> HERE YO</button> */}
  
        <Header posts={undefined}  />
      

        {customString ?
              <Info />        
              : <></>}

        <BlogList posts={posts} />
      </div>

    </>
  )
}

Home.Layout = Layout
