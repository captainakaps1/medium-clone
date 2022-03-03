import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity";
import { Post } from "../../types";


interface Props{
    posts: Post[]
  }
export const Posts = ({posts}: Props) => {
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6">
            {posts.map(post => {
                const {_id,title,mainImage,description,author,slug} = post
                return(
                    <Link key={_id} href={`/post/${slug.current}`}>
                        <div className="border rounded-lg group cursor-pointer overflow-hidden">
                            <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(mainImage).url()!} alt="" />
                            <div className="flex justify-between p-5 bg-white">
                                <div>
                                    <p className="text-lg font-bold">{title}</p>
                                    <p className="text-xs">{description} by {author.name}</p>
                                </div>
                                <img className="h-12 w-12 rounded-full" src={urlFor(author.image).url()} alt="" />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}