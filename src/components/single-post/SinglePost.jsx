import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MD from 'react-markdown'

import { useSinglePost } from '../../custom-hooks'
import { readableDate } from '../helpers'
import './SinglePost.less'

export default function SinglePost() {
  const { id } = useParams()
  const [post, isLoading] = useSinglePost(id)

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>

    return (
      <>
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
          <small className="post__intro__date">{readableDate(post.date)}</small>
          <p className="post__intro__desc">{post.description}</p>

          <img
            className="post__intro__img"
            src={post.featuredImage.fields.file.url}
            alt={post.title}
          />
        </div>

        <div className="post__body">
          <MD source={post.body} />
        </div>
      </>
    )
  }

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {'< Back'}
      </Link>

      {renderPost()}
    </div>
  )
}
