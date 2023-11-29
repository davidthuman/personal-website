import { markdown2jsx } from "../../../lib/markdown"
import { getSortedPostsData, getPost } from '../../../lib/posts';

export default function Post({params: { id }}) {

    const post = getPost(id)

    const content = markdown2jsx(post.content)

    return (
      <div className="pt-10 flex justify-center">
        <div class="w-10/12 lg:w-6/12">
          <h1 class="text-3xl mb-5">{post.title}</h1>
          <div>{post.author} - {post.created} - {post.tags}</div> <br/>
          <div>{content}</div>
        </div>
      </div>
    )
}