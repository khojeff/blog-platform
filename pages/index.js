import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Platform 📝</h1>
        <Link href="/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create New Post
          </button>
        </Link>
      </header>

      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <Link key={post._id} href={`/posts/${post._id}`}>
              <div className="p-4 border rounded hover:bg-gray-100 cursor-pointer">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600">No posts found. 💤</p>
        )}
      </div>
    </div>
  );
}
