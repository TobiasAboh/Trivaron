
export default function BlogCard(props) {
  const { title, image, description } = props;
  return (
    <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-4 max-w-lg min-h-xl border-2 border-gray-300">
      <img
        src={image}
        alt="blog image"
        className="w-full h-60 object-cover rounded-2xl"
      />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href="#" className="text-green-400 underline">
        Read more <span>{">>"}</span>
      </a>
    </div>
  );
};
