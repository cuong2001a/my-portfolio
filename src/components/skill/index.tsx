import HTMLIcon from "../../public/assets/html.webp"
import CSSIcon from "../../public/assets/css.webp"
import JSIcon from "../../public/assets/javascript.webp"
import TailwindIcon from "../../public/assets/tailwind.webp"
import ReactIcon from "../../public/assets/react.webp"
import FirebaseIcon from "../../public/assets/firebase.webp"
import NextIcon from "../../public/assets/nextjs.webp"
import TypescriptIcon from "../../public/assets/typescript+original-1324760574003158198.png"
import Image from "next/image"
function Skill() {
  const listImages = [
    {title: "HTML", src: HTMLIcon},
    {title: "CSS", src: CSSIcon},
    {title: "Javascript", src: JSIcon},
    {title: "Tailwind Css", src: TailwindIcon},
    {title: "React & React Native", src: ReactIcon},
    {title: "Firebase", src: FirebaseIcon},
    {title: "Nextjs", src: NextIcon},
    {title: "Typescript", src: TypescriptIcon},
  ]
  return (
    <>
      <div className="skills my-12">
        <h2 className="font-light text-2xl mb-4 text-blue-400">Professional Skills</h2>
        <p className="text-xl font-semibold">What Can I Do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listImages?.map(({title, src}) => {
            return (
              <div key={`${title}${src}`} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={src} width={64} height={64} alt={""} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Skill
