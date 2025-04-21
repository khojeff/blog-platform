import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen p-8">
      <Link href="/">
        <button className="mb-4 text-blue-500">&larr; Back to Home</button>
      </Link>

      <h1 className="text-2xl font-bold mb-4">Post Detail - {id}</h1>

      <div className="mb-4">
        <p className="text-gray-700">
          Post content will be displayed here.
        </p>
      </div>

      <div className="flex space-x-4">
        <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
