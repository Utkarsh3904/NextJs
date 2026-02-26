import { notFound } from 'next/navigation';
import React from 'react'

export default async function blogID({params}) {
    const {blogID} = await params;

//     if (!/^\d+$/.test(blogID)) {
//     notFound();
//     }

    if (blogID === 'test'  || isNaN(Number(blogID))) {
       notFound();
    } 

  return (
    <div>
      <h1>Blog ID: {`${blogID}`}</h1>
    </div>
  )
}

