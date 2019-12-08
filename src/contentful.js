const client = require('contentful').createClient({
  space: 'wbbhf1qd7970',
  accessToken: '-W1IoA-JTS3yA3py_FyXDdG42P02SFq5vLBff-KXfrQ'
})

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'blogPost'
    })
    .then(response => response.items)

export { getBlogPosts, getSinglePost }
