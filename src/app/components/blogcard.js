// import blogData from "../data/blogData";
import Link from "next/link";

export default function BlogCard(props) {
  const { post } = props;
  return (
    <div className="flex flex-col bg-white rounded-2xl p-4 max-w-md min-h-xl mx-5 md:mx-0 border-2 border-gray-300">
      <img
        src={post.image}
        alt="blog image"
        className="w-full h-60 object-cover rounded-2xl"
      />
      <h1 className="text-black text-xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.description}</p>
      <a href={`/blogs/${post.slug}`} className="text-green-400 underline">
        Read more
      </a>
    </div>
  );
}
