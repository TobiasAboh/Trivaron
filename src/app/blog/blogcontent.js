import Image from "next/image";
import BlogCard from "../components/blogcard";
import blogData from "../../../data/blogData.json";

export default function BlogContent() {
  return (
    <section className="relative flex h-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 my-28 mx-auto">
        <BlogCard
          post={blogData[0]}
        />
        <BlogCard
          post={blogData[1]}
        />
        <BlogCard
          post={blogData[2]}
        />
        <BlogCard
          post={blogData[3]}
        />
      </div>
    </section>
  );
}
