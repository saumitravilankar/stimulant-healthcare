"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import data from "@/data/blogs.json";

function Recent() {
  const pathname = usePathname();

  const filteredData = useMemo(() => {
    const pathnameArr = pathname.split("/");
    const currentBlogId = pathnameArr[pathnameArr.length - 2];
    // console.log(currentBlogId);
    const dataToShow = data.filter((dataItem) => {
      // console.log(dataItem);
      return dataItem.id !== parseInt(currentBlogId);
    });
    return dataToShow;
  }, [pathname]);

  return (
    <section className="blog-list-half section-padding sub-bg">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read Latest <span className="fw-200">Blogs</span>
            </h2>
            <div className="ml-auto">
              <a href="/blogs" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredData.map((blog, index) => (
            <div key={index} className="col-lg-6">
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                    <img src={blog.img} alt={blog.tag} className="img-post" />
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-width">
                      <div className="tags mb-15">
                        <a href="/blogs">{blog.tag}</a>
                      </div>
                      <h5>
                        <a href={blog.link}>{blog.title}</a>
                      </h5>
                      <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recent;
