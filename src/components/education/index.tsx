function Education() {
  return (
    <>
      <div className="my-12 education">
        <h3 className="text-2xl font-medium mb-4">Education</h3>
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
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
              <div className=" mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Infomation Technology <span className="text-[#6c757d] text-[1rem]">at FPT Polytechnic </span>
              </div>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sep, 2019 - Apr, 2021
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                I use 3 years to study and have fun with friends. I have learned a lot from FPT such as teamwork skills,
                problem solving skills and self-discovery skills.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}
export default Education
