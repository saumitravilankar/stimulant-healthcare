import data from "@/data/blogs.json";

function Blog() {
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
          {data.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="item main-bg md-mb50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                    <img src={item.img} alt={item.tag} className="img-post" />
                  </div>
                  <div className="col-lg-6 col-md-7 cont valign">
                    <div className="full-width">
                      <div className="tags mb-15">
                        <a href={item.link}>{item.tag}</a>
                      </div>
                      <h5>
                        <a href={item.link}>{item.title}</a>
                      </h5>
                      <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                        {item.date}
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

export default Blog;
