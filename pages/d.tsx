import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Fragment } from "react"
import Head from "next/head"

interface PostProps {
    params: {
        slug: string[]
    }
}


export async function getServerSideProps(content:any) {
    const res = await fetch('https://collect.anyelse.com/artinfo.ashx?id='+content.query.id)
    const json = await res.json()

    console.log(content)
    if(json.state){
      return {
        props: {
          title:json.data.title,
          url:json.data.url,
          cover:json.data.cover,
          description:json.data.description,
          ogurl:json.data.ogurl
        },
      };
    }
    else{
      return {
        props: {
          title:"404",
          url:"",
          cover:"",
          description:"",
          ogurl:""
        },
      };
    }
  }

export default function home(props:any){
    return (
    <Fragment>
    <Head>
    <title>{props.title}</title>
    <meta name="og:title" content={props.title}></meta>
    <meta name="re:url" content={props.url}></meta>
    <meta property="og:title" content={props.title} />
    <meta property="og:url" content={props.ogurl} />
    <meta property="og:image" content={props.cover} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="article" />
    <meta name="description" content={props.description}></meta>
    </Head>
    <div></div>
    <script src="a.js" async>
    </script>

    </Fragment>
    )
}