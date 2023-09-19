import React from "react";

const File = (props) => {
  return (
    <div className=" relative flex flex-col h-[18rem] w-[15rem] justify-between  items-center border-2 border-border-grey cursor-pointer rounded-xl hover:shadow-2xl hover:scale-[101%] transition hover:ease-in-out  overflow-hidden">
      {/* icon */}
      <a
        className="flex  flex-col text-left w-full justify-between  
         "
        href={props.fileUrl}
        target="_blank"
      >
        <div className="flex flex-col text-left w-full h-[12rem]">
          <svg
            className="w-full h-[60%] bg-black  fill-white p-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
          </svg>

          {/* filename and details */}

          <p className="text-sm text-left font-bold p-4">
            {props.subject}{" "}
            {/* {`${
              (props.assignmentNo === "NULL" || null) &&
              props.category !== "ASSIGNMENTS"
                ? ""
                : ` Assignment - ${props.assignmentNo}`
            }`} */}
          </p>
        </div>
        <div className="h-[20%] w-full flex flex-col">
          <span className="bg-border-grey h-[2px] w-[90%] self-center rounded-sm"></span>

          <div className="flex gap-2 text-xs font-medium justify-center items-center p-2">
            <p>{props.course}</p>
            <p>SEM-{props.semester}</p>
            <p className={`${props.category === "PYQS" ? "" : "hidden"}`}>
              {props.examName === "NULL" || null ? "" : props.examName}
            </p>
            <p className={`${props.category === "NOTES" ? "" : "hidden"}`}>
              {props.unitNo === "NULL" || null ? "" : ` Unit - ${props.unitNo}`}
            </p>
            <p
              className={`${props.category === "ASSIGNMENTS" ? "" : "hidden"}`}
            >
              {props.assignmentNo === "NULL" || null
                ? ""
                : ` ASSIGN - ${props.assignmentNo}`}
            </p>
            <p>{props.year}</p>
          </div>
        </div>
      </a>
      {/* download icon */}
      <a
        className=" absolute top-[10px] right-[10px] hover:scale-125 rounded-lg  transition hover:ease-in-out  bg-border-grey overflow-hidden"
        href={props.fileDownloadUrl}
      >
        <svg
          className="p-2 hover:scale-125 transition hover:ease-in-out hover:fill-black bg-white  "
          xmlns="http://www.w3.org/2000/svg"
          height="2rem"
          viewBox="0 0 512 512"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      </a>
    </div>
  );
};

export default File;
