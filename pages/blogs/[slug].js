import blogData from "../../data/blogData.json";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function BlogPost({ blog }) {
  return (
      <div>
        <h1>{blog.title}</h1>
        <p>
          <strong>Date:</strong> {blog.date}
        </p>
        <p>{blog.content.split("/").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}</p>
      </div>

  );
}

// Runs during build to generate paths for each blog post
export async function getStaticPaths() {
  const paths = blogData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Runs during build for each path to fetch the blog data
export async function getStaticProps({ params }) {
  const blog = blogData.find((post) => post.slug === params.slug);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
}
