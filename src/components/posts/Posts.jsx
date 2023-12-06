import Link from "next/link";
import "./posts.scss";
import Image from "next/image";
import tam from "../../assets/images/tam.jpg";

const Posts = () => {
  return (
    <div className="posts main-container">
      <div className="postsTitle">
        <h2 className="mainTitle">Bài viết</h2>
        <Link className="link postsAll" href="/bai-viet">
          Xem thêm
        </Link>
      </div>

      <ul>
        <li>
          <Image src={tam} alt="tam" className="postImg" />
          <div className="postsContent">
            <p className="postTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at
              consectetur optio veniam deleniti voluptatum quam suscipit aperiam
              iusto temporibus totam consequuntur iure, iste aliquam asperiores
              aut quae ipsa nulla!
            </p>
          </div>
        </li>
        <li>
          <Image src={tam} alt="tam" className="postImg" />
          <div className="postsContent">
            <p className="postTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at
              consectetur optio veniam deleniti voluptatum quam suscipit aperiam
              iusto temporibus totam consequuntur iure, iste aliquam asperiores
              aut quae ipsa nulla!
            </p>
          </div>
        </li>
        <li>
          <Image src={tam} alt="tam" className="postImg" />
          <div className="postsContent">
            <p className="postTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at
              consectetur optio veniam deleniti voluptatum quam suscipit aperiam
              iusto temporibus totam consequuntur iure, iste aliquam asperiores
              aut quae ipsa nulla!
            </p>
          </div>
        </li>
        <li>
          <Image src={tam} alt="tam" className="postImg" />
          <div className="postsContent">
            <p className="postTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at
              consectetur optio veniam deleniti voluptatum quam suscipit aperiam
              iusto temporibus totam consequuntur iure, iste aliquam asperiores
              aut quae ipsa nulla!
            </p>
          </div>
        </li>
        <li>
          <Image src={tam} alt="tam" className="postImg" />
          <div className="postsContent">
            <p className="postTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at
              consectetur optio veniam deleniti voluptatum quam suscipit aperiam
              iusto temporibus totam consequuntur iure, iste aliquam asperiores
              aut quae ipsa nulla!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
