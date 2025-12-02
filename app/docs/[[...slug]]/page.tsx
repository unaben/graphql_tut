import React from 'react'

const SlugPage = ({params}: {params: {slug: string | Array<string>}}) => {
  const {slug} = params  
  return (
    <div>SlugPage</div>
  )
}

export default SlugPage