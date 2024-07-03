import React from "react";

const News = (props) => {
  const imgAddr = `/news/${props.imgName}`;
  return (
    <div className={`${props.opacity} hover:scale-110 transition-all m-2 border-2 w-80 h-fit bg-white border-blue-950 rounded-xl overflow-hidden`}>
      <div className="border-blue-950 border-b-2">
        <img src={imgAddr} className="h-60 w-full"alt="" />
      </div>
      <div className="p-3 h-52 w-full flex flex-col justify-between">
        <div className="text-blue-800 font-bold text-xl">{props.heading}</div>
        <div className="text-slate-600">{props.text}</div>
        <div className="text-blue-800 bottom-0">{props.date}</div>

      </div>




      
    </div>
  );
};

export default News;
