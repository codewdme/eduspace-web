import React from "react";

const File = (props) => {
  console.log(props);
  return (
    <div className="flex justify-between items-center p-3 px-8 bg-[#396DB5] hover:bg-blue-600 hover:text-white hover:fill-white cursor-pointer rounded-lg shadow-2x">
      <div className="flex items-center gap-3">
        {/* icon */}
        <a href={props.fileUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1rem"
            viewBox="0 0 384 512"
          >
            <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
          </svg>
        </a>

        {/* filename and details */}
        <p>{props.title}</p>

        <p>{props.year}</p>
      </div>

      {/* download icon */}
      <a href={props.fileDownloadUrl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1rem"
          viewBox="0 0 512 512"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      </a>
    </div>
  );
};

export default File;
