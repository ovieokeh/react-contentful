import { useEffect, useState } from 'react'

import { getBlogPosts } from '../contentful'

const promise = getBlogPosts()

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(blogPosts => {
      setPosts(blogPosts)
      setLoading(false)
    })
  }, [])

  return [posts, isLoading]
}
