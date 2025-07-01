import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data, comments_data } from '../assets/assets';
import { assets } from '../assets/assets';
import Loader from '../components/Loader'; // Import the Loader component

const Blog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      const foundBlog = blog_data.find(blog => blog._id === id);
      const blogComments = comments_data.filter(comment => comment.blog._id === id);
      const related = blog_data
        .filter(b => b.category === foundBlog?.category && b._id !== id)
        .slice(0, 3);

      setBlog(foundBlog);
      setComments(blogComments);
      setRelatedBlogs(related);
      setLoading(false);
    }, 1000); // 1 second delay to show loader

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-10">
      {/* Blog Header */}
      <div className="mb-10 text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm text-primary bg-primary/10 rounded-full">
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">{blog.subTitle}</p>
        <div className="flex justify-center items-center gap-4">
          <span className="text-sm text-gray-500">Published on: {new Date(blog.createdAt).toLocaleDateString()}</span>
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <img src={assets.comment_icon} className="w-4" alt="comments" />
            {comments.length} comments
          </span>
        </div>
      </div>

      {/* Blog Image */}
      <div className="mb-10 rounded-lg overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover" />
      </div>

      {/* Blog Content */}
      <div className="prose max-w-4xl mx-auto mb-16">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h2>
        
        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment._id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <img src={assets.user_icon} className="w-8 h-8" alt="user" />
                  <h4 className="font-medium">{comment.name}</h4>
                </div>
                <p className="text-gray-700">{comment.content}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}

        {/* Comment Form */}
        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4">Leave a comment</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                required 
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">Comment</label>
              <textarea 
                id="comment" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map(blog => (
              <div 
                key={blog._id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block px-3 py-1 mb-2 text-xs text-primary bg-primary/10 rounded-full">
                    {blog.category}
                  </span>
                  <h3 className="font-medium mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {blog.subTitle}
                  </p>
                  <a 
                    href={`/blog/${blog._id}`} 
                    className="text-sm text-primary hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog