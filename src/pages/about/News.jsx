import React from "react";

const News = (props) => {
  const imgAddr = `src/assets/news/${props.imgName}`;
  return (
    <div className="hover:scale-110 transition-all m-2 border-2 w-fit h-fit bg-white border-blue-950 rounded-xl overflow-hidden">
      <div className="border-blue-950 border-b-2">
        <img src={imgAddr} height="100px" width="320px" alt="" />
      </div>
      <div className="p-6 text-white bg-blue-950 h-fit w-80" >
        {props.text}
      </div>
    </div>
  );
};

export default News;
