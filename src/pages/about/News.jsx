import React from "react";

const News = (props) => {
  const imgAddr = `src/assets/news/${props.imgName}`;
  return (
    <div className={`${props.opacity} hover:scale-110 transition-all m-2 border-2 w-full h-fit bg-white border-blue-950 rounded-xl overflow-hidden`}>
      <div className="border-blue-950 border-b-2">
        <img src={imgAddr} className="h-60 w-full"alt="" />
      </div>
      <div className="p-6 text-white bg-blue-800 h-fit w-80" >
        {props.text}
      </div>
    </div>
  );
};

export default News;
