import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function ProjectItem({ data }) {
  // const [tag, setTag] = useState([data.properties.Tags.multi_select.name]);

  const projectTitle = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Url.rich_text[0].href;
  const projectDescription =
    data.properties.Description.rich_text[0].plain_text;

  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.Day.date.start;
  const end = data.properties.Day.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };
  // console.log(endDate);

  return (
    <div className="flex flex-col p-6 m-3 bg-gray-300 rounded-xl transition duration-300 transform border border-gray-300 hover:scale-105 hover:shadow-lg dark:border-gray-200/50 ">
      <img
        className="rounded-t-xl"
        style={{
          height: "100%",
          width: "100%",
          // objectFit: "none",
        }}
        src={imgSrc}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-xl">{projectDescription}</h3>
        <Link className="underline opacity-40" href={githubLink}>
          Github Link
        </Link>
        <p className="my-1 ">
          작업기간 : {start}~{end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md  text-white bg-indigo-500 w-30 mt-3"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
