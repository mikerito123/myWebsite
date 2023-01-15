'use client'

import { useResolveInitialValueForType } from "sanity";
import Image from "next/image";
import { Post } from "../typings";
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../lib/sanity.client";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../pages";
import { CustomContext } from "../contexts/customContext";
import { useContext } from "react";
import { useState } from "react";
import backArrow from "../assets/ArrowBack.png";
import  nextArrow  from "../assets/ArrowNext.png";
import Link from 'next/link'

type Props = {
    posts: Post[];
}


export default function BlogList({ posts }: Props, {

}: InferGetStaticPropsType<typeof getStaticProps>) {



    const builder = imageUrlBuilder(client)

    function urlFor(source: any) {
        return builder.image(source)
    }

    const { customString, setCustomString, gridString, setGridString } = useContext(CustomContext);

    const [imageToShow, setImageToShow] = useState();
    const [imageText, setImageText] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [photoBy, setPhotoBy] = useState("");
    const [photoByUrl, setPhotoByUrl] = useState("");
    const [availableAt, setAvailableAt] = useState("");
    const [availableAtUrl, setAvailableAtUrl] = useState("");
    const [designedWith, setDesignedWith] = useState("");
    const [designedWithUrl, setDesignedWithUrl] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);


    const imageCards = posts.map((post) => (
        <Image className="image-card" alt="image" onClick={() => showImage(post)} src={urlFor(post.mainImage).width(1800).url()} />
    ));


    const showNext = (e : any) => {
        e.stopPropagation();
        let currentIndex = posts.map(e => e.mainImage.asset?._ref).indexOf(selectedImage);
      
        if (currentIndex >= posts.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = posts[currentIndex + 1];
          showImage(nextImage);
        }
      };

      const showPrev = (e : any) => {
        e.stopPropagation();
        let currentIndex = posts.map(e => e.mainImage.asset?._ref).indexOf(selectedImage);
      
        if (currentIndex <= 0)  {
          setLightBoxDisplay(false);
        } else {
          let nextImage = posts[currentIndex - 1];
          showImage(nextImage);
        }
      };

    const showImage = (post: any) => {
        setImageToShow(post.mainImage.asset?._ref);
        setSelectedImage(post.mainImage.asset?._ref);
        setImageText(post.title);
        setPhotoBy(post.photoBy);
        setPhotoByUrl(post.photoByUrl);
        setDesignedWith(post.designedWith);
        setDesignedWithUrl(post.designedWithUrl);
        setAvailableAt(post.availableAt);
        setAvailableAtUrl(post.availableAtUrl);
        setLightBoxDisplay(true);
        
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };


    return (
        <>

            {lightboxDisplay ?
                <div id="lightbox" className="fixed top-0 align-bottom bg-black z-50 left-0 w-screen  h-screen flex center" 
                // onClick={hideLightBox}
                >

                    <div className="h-[80vh] w-[90vw] select-none relative m-auto">
                        <Image
                            fill
                            className="object-contain object-center select-none lg:object-center"
                            src={urlFor(imageToShow).width(1800).url()}
                            // onClick={() => showImage(post.mainImage)}
                            alt="image"

                        />
                    </div>

                    <div className="flex justify-between fixed top-0 bottom-0 left-[20px]">
                        <div className="flex m-auto opacity-0 h-2/4 hover:opacity-100 cursor-pointer" onClick={showPrev} >
                        <Image className="h-[50px] w-auto  mr-40 m-auto" alt="prev"  src={backArrow}></Image>
                        </div>
                    </div>

                    <div className="flex justify-between fixed top-0 bottom-0 right-[20px]">
                        <div className="flex m-auto opacity-0 h-2/4 hover:opacity-100 cursor-pointer" onClick={showNext} >
                        <Image className="h-[50px] w-auto ml-40 m-auto" alt="next"  src={nextArrow}></Image>
                        </div>
                    </div>


                    <div className="flex justify-between fixed top-0 left-0">
                        <h1 className="text-white px-2 cursor-pointer m-6 uppercase self-end" onClick={hideLightBox}>CLOSE</h1>


                    </div>

                    <div className="flex justify-between fixed bottom-0 left-0">
                        <h1 className="text-white px-2 m-6 uppercase self-end">{imageText}</h1>


                    </div>

                    <div className="flex flex-col justify-between fixed top-0 right-0 m-6 items-end">


        
                        {designedWith ?
                            <div className="text-white px-2 flex flex-row">
                                {/* <h1 className="text-white px-2">Designed with</h1> */}
                                {/* <Link className="underline" href="www.calvinlien.com">{designedWith}</Link> */}

                                <h1 className="text-white">Designed with&nbsp;</h1>

                                {designedWithUrl ? 
                                <a target={"_blank"}
                                    rel={"noreferrer"} className="underline" href={designedWithUrl}>{designedWith}</a>
                                    : <h1 className="text-white">{designedWith}</h1>
                                }
                            </div>
                            : ""}

{photoBy ?
                            <div className="text-white px-2 flex flex-row">
                                <h1 >Image by&nbsp;</h1>
                                
                                {photoByUrl ? 
                                <a target={"_blank"}
                                    rel={"noreferrer"} className="underline" href={photoByUrl}>{photoBy}</a>
                                    : <h1 className="text-white">{photoBy}</h1>
                                }

                            </div>
                            : ""}


                    </div>


                    <div className="flex flex-col justify-between fixed bottom-0 right-0 m-6">

                        {availableAt ?

                            <div className="text-white px-2 flex flex-row">
                                <h1 className="text-white">Available at&nbsp;</h1>
                                <a target={"_blank"}
                                    rel={"noreferrer"} className="underline" href={availableAtUrl}>
                                    {availableAt}</a>
                            </div>
                            : ""}

                    </div>
                </div>
                : ""
            }

            <div className={`grid m-6 sm:m-12 lg:m-24 gap-24 mt-24 z-20 
        ${gridString ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-5 '}`}>




                {posts.map(post => (
                    <div key={post._id} className="group cursor-pointer  z-20 select-none p-4 ">
                        <div className={`relative max-h-screen select-none m-auto
                    ${gridString ? 'h-[80vh] w-[90vw]' : 'pb-[100%]'} `}>
                            <Image
                                fill
                                className="object-contain object-center cursor-pointer select-none lg:object-center -translate-y-2/4 -translate-x-2/4 !top-2/4 !left-2/4 "
                                src={urlFor(post.mainImage).width(500).url()}
                                onClick={() => showImage(post)}
                                alt={post.title}

                            />

                        </div>
                        <div className="w-full flex ">
                            <h1 className="flex m-auto mt-6 uppercase text-white opacity-0 transition duration-200 group-hover:opacity-80">{post.title}</h1>
                        </div>
                    </div>
                ))}

            </div>

            {/* <div className="grid grid-cols-1 m-16 gap-16">

            {posts.map(post => (
                <div key={post._id} className="group cursor-pointer max-h-screen">
                    <div className="relative h-[80vh] max-h-screen m-10">
                        <Image
                            className="object-contain object-center cursor-pointer "
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                        />

                    </div>
                </div>
            ))}

        </div> */}

        </>
    )
}

// export default BlogList;