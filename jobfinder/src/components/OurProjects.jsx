import React from 'react';
import blogImg1 from '../assets/images/home-blog1.png';
import blogImg2 from '../assets/images/home-blog2.png';

const BlogArea = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: blogImg1,
      date: '24',
      time: 'Views',
      category: 'Properties',
      title: 'Database for freelance office using SQL',
      link: 'single-blog.html',
    },
    {
      id: 2,
      imgSrc: blogImg2,
      date: '78',
      time: 'Views',
      category: 'Properties',
      title: 'Virtual Mouse Control Using Hand Gestures',
      link: 'single-blog.html',
    },
  ];

  return (
    <div className="home-blog-area blog-h-padding">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Our latest blog</span>
              <h2>Our recent Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-xl-6 col-lg-6 col-md-6">
              <div className="home-blog-single mb-30">
                <div className="blog-img-cap">
                  <div className="blog-img">
                    <img src={post.imgSrc} alt={`Blog post ${post.id}`} />
                    {/* Blog date */}
                    <div className="blog-date text-center">
                      <span>{post.date}</span>
                      <p>{post.time}</p>
                    </div>
                  </div>
                  <div className="blog-cap">
                    <p>| {post.category}</p>
                    <h3>
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <a href="#" className="more-btn">Read more »</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
