import {useState} from "react"

function Experience() {
  return (
    <>
      <div className="experience my-12">
        <h3 className="text-2xl font-medium mb-4">Experience</h3>
        <div className="list">
          <ol className="relative border-l ml-[10px] border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-[0.8rem] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-blue-800 dark:text-blue-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <div className=" mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Developer{" "}
                <span className="text-[#6c757d] text-[1rem]">at INSO Vietnam Joint Stock Company </span>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sep, 2021 - Present
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Working with the internship, trained on the HTML/CSS. And to be joined a project manage personel. <br />
                Project management personel system for human resources department <br />- The system helps users to
                manage all personel of departments and candidate recruitment.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-[0.8rem] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-blue-800 dark:text-blue-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <div className=" mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Frontend Developer{" "}
                <span className="text-[#6c757d] text-[1rem]">at HiveTech Technology Company </span>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Apr, 2021 - Aug, 2021
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Working with the internship, trained on the HTML/CSS. And to be joined a project manage personel. <br />
                Project management personel system for human resources department <br />- The system helps users to
                manage all personel of departments and candidate recruitment.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-[0.8rem] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-blue-800 dark:text-blue-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <div className=" mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Intern Frontend Developer{" "}
                <span className="text-[#6c757d] text-[1rem]">at HiveTech Technology Company </span>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jan, 2022 - March, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Working with the internship, trained on the HTML/CSS. And to be joined a project manage personel. <br />
                Project management personel system for human resources department <br />- The system helps users to
                manage all personel of departments and candidate recruitment.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Experience
