import Button from "../../components/button";
import Card from "../../components/card";
import Blogs from "../../json/blogs.json";
import Users from "../../json/users.json";

export default function Home() {
  const blogs = Blogs.blogs;

  return (
    <section className="bg-light">
      <div className="container grid grid-cols-1 gap-6 px-4 py-24 md:grid-cols-3 ">
        <div className="grid gap-6">
          <div className="h-96 rounded-lg bg-lighter shadow-lg">asd</div>
          <div className="h-96 rounded-lg bg-lighter shadow-lg">asd</div>
        </div>
        <div className="col-span-2 grid h-fit grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card key={index} title={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
