import BlogCard from "./blogcard";

export default function BlogSection() {
  return (
    <section className="pt-20">
      <div className="px-6 md:px-0">
        <h1 className="text-black font-bold text-3xl md:text-4xl md:mx-0 md:text-left md:ml-24">
          Press
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:gap-80 mt-4 md:ml-24 text-md text-gray-500">
          <p className="block">
            Explore our latest updates, insights, and breakthroughs in
            <span>agricultural research</span>
          </p>
          <a href="#" className="text-green-400 underline">
            See all
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-10 mt-10 md:ml-24 pb-20">
        <BlogCard
          title="How to grow your own organic produce"
          image="/cocoa4.jpg"
          description="Learn how to grow your own organic produce using sustainable farming practices."
        />
        <BlogCard
          title="The future of renewable energy"
          image="/tractor.jpg"
          description="Discover the latest developments in renewable energy and how they can benefit your business."
        />
      </div>
    </section>
  );
}
