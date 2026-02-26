
export default async function allpaths({params}) {
    console.log(await params )
    const {allpaths} = await params ;

  return (
    <div>
      <h1>bekar page khola hai {allpaths?.join("/")}</h1>
    </div>
  )
}

