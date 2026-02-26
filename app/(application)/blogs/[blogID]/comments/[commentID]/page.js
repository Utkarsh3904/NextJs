
export default async function comment({params}) {

    const tempobj = await params;
    const {blogID, commentID} = tempobj;

// const {blogID, commentID } = await params;

  return (
    <div>
      this is the comment : <b>{commentID}</b> of blog : <i>{blogID}</i>;
    </div>
  )
}

