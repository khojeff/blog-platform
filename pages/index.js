import Link from 'next/link';

export default function Home() {
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

      <div>
        {/* Post list will go here later */}
        <p className="text-gray-600">No posts yet. 💤</p>
      </div>
    </div>
  );
}
