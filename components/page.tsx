import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import BlogList from "./BlogList";

const query = groq`
*[_type=='post'] {
    ...,
    } | order (_createdAt desc)
`

export default async function HomePage() {

    const posts = await client.fetch(query);
    console.log(posts);

    return (
        <div className="">

        <BlogList posts={posts} />

        </div>
    );
}