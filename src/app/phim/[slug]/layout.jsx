import React from "react";
import InfoMovie from "./page";
import axiosInstance from "../../../config";

const InfoLayout = async ({ params }) => {
  const slugMovie = params.slug.split(".")[0];
  const res = await axiosInstance.get("https://ophim1.com/phim/" + slugMovie);
  const movie = await res.data;

  return (
    <div>
      <InfoMovie movie={movie} />
    </div>
  );
};

export default InfoLayout;
