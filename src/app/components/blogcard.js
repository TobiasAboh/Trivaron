
export default function BlogCard(props) {
  const { title, image, description } = props;
  return (
    <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-4 max-w-md min-h-xl mx-5 md:mx-0 border-2 border-gray-300">
      <img
        src={image}
        alt="blog image"
        className="w-full h-60 object-cover rounded-2xl"
      />
      <h1 className="text-black text-xl font-bold mt-4">{title}</h1>
      <p className="text-gray-500 text-sm">{description}</p>
      <a href="#" className="text-green-400 underline">
        Read more
      </a>
    </div>
  );
};
