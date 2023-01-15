import Image from "next/image";
import Link from "next/link";
// import { useToggle } from '../lib/hooks/useToggle''
// import { useState } from "react";
// import { useToggleTheme } from '../lib/hooks/useToggleTheme'
import { AppProps } from 'next/app';

function Info(props: any) {



    return (


        <div className={`fixed items-center bg-opacity-90 opacity-0 z-40 justify-between bg-black top-0 h-screen w-screen text-white
        ${props.contact === false ? 'opacity-0 hidden' : 'opacity-100 flex'}`}>

            <div className="fixed flex flex-col m-auto left-0 top-0 bottom-0 center h-screen w-screen right-0 uppercase">
                <div className="text-center m-auto space-y-2 ml-4 mr-4">
                <h1 className="">Select design works</h1>
                <h1 className="pt-8">ALL WORK IS MADE IN COLLABORATION.</h1>
                {/* <h1 className="">CLICK ON IMG FOR DETAILS.</h1> */}
                <h1 className="">BASED IN NYC.</h1>
                <h1 className="pt-8">hello@mikerito.com</h1>
                <h1 className="">@rito.mike</h1>
                </div>
            </div>
        </div>
    )
}

export default Info;