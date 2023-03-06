import {useState} from "react"

function Experience() {
  return (
    <>
      <div className="experience">
        <h3>Experience</h3>
        <div className="list">
          <ol className="relative border-1 border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Interns Frontend Developer
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    at Hivetech Viet Nam
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  January, 2021 - July, 2021
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Working with the internship, trained on HTML, CSS, JS. And join to project manage personnel
                  HR Tool is website manage personnel. It help filter list candidate comfotable, 
                </p>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Experience
