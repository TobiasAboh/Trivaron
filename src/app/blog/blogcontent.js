import Image from "next/image";
import BlogCard from "../components/blogcard";

export default function BlogContent() {
  return (
    <section className="relative flex h-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 my-28 mx-auto">
        <BlogCard
          title="How to grow your own organic produce"
          image="/cocoa4.jpg"
          description="Explore our latest updates, insights and breackthroughs in agriculture and energy"
        />
        <BlogCard
          title="The future of renewable energy"
          image="/tractor.jpg"
          description="Discover the latest developments in renewable energy and how they can benefit your business."
        />
        <BlogCard
          title="How to grow your own organic produce"
          image="/tree.jpg"
          description="Discover the latest technologies reshaping the oil and gas industry"
        />
        <BlogCard
          title="The future of renewable energy"
          image="/forrest2.jpg"
          description="Discover the latest developments in renewable energy and how they can benefit your business."
        />
      </div>
    </section>
  );
}
