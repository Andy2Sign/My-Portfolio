import React from "react";
import "../../App.css";
import "./Blog.css"

const Blog = () => {
  return (
    <div id="Blog">
      <article className="wrapper ">
        <div>
          <h1>Blog</h1>
        </div>
        <div className="flex_wrap handleBlog">
          <h1 className="bLogo">B<em className="log">Log()</em></h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<br/> Consequatur
            ducimus sit molestiae tempora minima unde dicta <br/>
					 quam sunt iusto
            velit reiciendis tenetur fuga obcaecati possimus, hic et odit ipsam
            cum.
          </p>
        </article>
        </div>
      </article>
    </div>
  );
};

export default Blog;
