import BlogCard from "./blogcard";

export default function BlogSection() {
  return (
    <>
      <h1 className="text-black font-bold text-2xl md:text-4xl mt-10 mx-auto text-center md:mx-0 md:text-left md:ml-24">
        Press
      </h1>
      <div className="flex flex-col md:flex-row gap-80 mt-4 mx-auto text-center md:text-left md:ml-24 text-sm md:text-base text-gray-500">
        <div>
          <p>Explore our latest updates, insights, and breakthroughs in</p>
          <p>agriculture and energy.</p>
        </div>
        {/* <a href="#" className="text-green-400 underline">
          See all
        </a> */}
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 mt-10 md:ml-24 pb-20">
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
    </>
  );
}
