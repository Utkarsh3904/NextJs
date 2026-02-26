
export default async function comments({params}) {
    const {blogID} = await params;
  return (
    <div>
      <h1>Here are all comments of {blogID} </h1>
    </div>
  )
}

