import Link from "next/link";

const NotFound = () => {
  return (
    <div className="errorWrap">
      <h1 className="errorTitle">
        Trang không tồn tại! Trở về{" "}
        <Link href="/" className="link errorTitleLink">
          trang chủ
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
