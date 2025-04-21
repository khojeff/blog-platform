import Link from 'next/link';

export default function CreatePost() {
  return (
    <div className="min-h-screen p-8">
      <Link href="/">
        <button className="mb-4 text-blue-500">&larr; Back to Home</button>
      </Link>

      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>

      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Title</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Post title" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Content</label>
          <textarea className="w-full border rounded px-3 py-2" rows="6" placeholder="Post content"></textarea>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}
