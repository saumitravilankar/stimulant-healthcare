import React from "react";

function Blog() {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  <div className="text">
                    <p>
                      <span className="spec-letter">Q</span> new report said
                      earlier this week that Apple is working on a brand new
                      laptop. Apple plans to release a 15-inch MacBook Air in
                      2023, a first for the Air series. A trusted Apple insider
                      with a proven track record confirmed that Apple is working
                      on the larger MacBook Air.
                    </p>
                  </div>
                  <div className="text">
                    <p>
                      However, Apple might not include it in the Air series when
                      it launches it. As for the notebook’s release date, the
                      15-inch MacBook isn’t coming soon. It’ll get a late 2023
                      release at best, according to the new claims.
                    </p>
                  </div>
                  <div className="title mt-30">
                    <h4>What sizes do MacBook Airs come in?</h4>
                  </div>
                  <div className="text mt-20">
                    <p>
                      Apple currently sells only one MacBook Air size. The
                      laptop comes in a 13-inch version that matches the
                      pre-2021 13-inch MacBook Pro size. Previously, Apple sold
                      an 11-inch MacBook Air, but the company discontinued that
                      model in 2017.
                    </p>
                  </div>
                </article>

                <div className="post-qoute mt-50">
                  <h6 className="fz-20">
                    <span className="l-block">
                      And the day came when the risk to remain tight in a bud
                      was more painful than the risk it took to blossom.
                    </span>
                    <span className="sub-title mt-20 mb-0"> - UiCamp</span>
                  </h6>
                </div>

                <div className="mb-50 mt-50">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="iner-img sm-mb30">
                        <img src="/dark/assets/imgs/blog/b2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="iner-img">
                        <img src="/dark/assets/imgs/blog/b3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="title mb-10">
                  <h4>Apple currently sells.</h4>
                </div>

                <div className="text mb-20">
                  <p>
                    A new report said earlier this week that Apple is working on
                    a brand new laptop. Apple plans to release a 15-inch MacBook
                    Air in 2023, a first for the Air series. A trusted Apple
                    insider with a proven track record confirmed that Apple is
                    working on the larger MacBook Air.
                  </p>
                </div>

                <div className="unorder-list mb-30">
                  <h6 className="mb-15">Ordered & Unordered Lists.</h6>
                  <ul className="rest">
                    <li>Yet this above sewed flirted opened ouch</li>
                    <li>Goldfinch realistic sporadic ingenuous</li>
                    <li>
                      Abominable this abidin far successfully then like piquan
                    </li>
                  </ul>
                </div>

                <div className="order-list mb-30">
                  <h6 className="mb-15">Ordered & Unordered Lists.</h6>
                  <ul className="rest">
                    <li>
                      <span>01 -</span> Yet this above sewed flirted opened ouch
                    </li>
                    <li>
                      <span>02 -</span> Goldfinch realistic sporadic ingenuous
                    </li>
                    <li>
                      <span>03 -</span> Abominable this abidin far successfully
                      then like piquan
                    </li>
                  </ul>
                </div>

                <div className="text">
                  <p>
                    However, Apple might not include it in the Air series when
                    it launches it. As for the notebook’s release date, the
                    15-inch MacBook isn’t coming soon. It’ll get a late 2023
                    release at best, according to the new claims.
                  </p>
                </div>
              </div>
              <div className="info-area flex pt-50 bord-thin-top">
                <div>
                  <div className="tags flex">
                    <div className="valign">
                      <span>Tags :</span>
                    </div>
                    <div>
                      <a href="/dark/blog-classic">Tech</a>
                      <a href="/dark/blog-classic">UiCamp</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="/dark/blog-list">Creative</a>
                  <a href="/dark/blog-list">Design</a>
                  <a href="/dark/blog-list">Dark & Light</a>
                  <a href="/dark/blog-list">Minimal</a>
                  <a href="/dark/blog-list">Infolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
