import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error('Failed to fetch post', error);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <Link href="/">
        <button className="mb-4 text-blue-500">&larr; Back to Home</button>
      </Link>

      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(post.createdAt).toLocaleString()}</p>

      <div className="text-gray-800 whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
}
