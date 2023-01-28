import React from "react";


const Mission = ({img}) => {
  return (
    <article className="wrapper mission_article">
      <div className=" mission_box-title">
        <h2>Mission</h2>
      </div>
      <div className="flex handleContent">
        <span className="span-box_img">
					<img src={img} className="img-mission"/>
				</span>

        <div className="miss_descr">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            sint facilis temporibus doloremque? Totam vero corrupti placeat
            consectetur illum voluptate fugit impedit optio in similique?
            Obcaecati rem nam inventore ipsam! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Placeat sint facilis temporibus
            doloremque? Totam vero corrupti placeat consectetur illum voluptate
            fugit impedit optio in similique? Obcaecati rem nam inventore ipsam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            sint facilis temporibus doloremque? Totam vero corrupti placeat
            consectetur illum voluptate fugit impedit optio in similique?
            Obcaecati rem nam inventore ipsam!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Mission;
