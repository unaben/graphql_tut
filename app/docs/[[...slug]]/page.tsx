import React from 'react'

const SlugPage = ({params}: {params: {slug: string | Array<string>}}) => {
  const {slug} = params
  console.log({slug});
  
  return (
    <div>SlugPage</div>
  )
}

export default SlugPage