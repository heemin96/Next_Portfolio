import Link from "next/link";
import React from "react";
import Animation from "../Animation";

function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 신입 개발자 김희민 입니다
        </h1>

        <p className="mb-8 leading-relaxed">
          새로운것을 배우고 익히는데 두려움이 없습니다.
          <br className="leading-" />
          팀에 필요한일을 찾고 해결하는것에서 재미를 느낍니다.
          <br className="leading-3" />
          회사의 성장이 곳 제 성장이라 생각합니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}

export default Hero;
