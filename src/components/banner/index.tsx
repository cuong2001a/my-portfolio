/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Avatar from "../../public/assets/images.jpg"
import BackGround from "../../public/assets/fptpoly.jpg"
import Link from "next/link"
function Banner() {
  const icons = [
    {
      href: "https://www.facebook.com/phuc.duongvan.31924",
      icon: () => <i className="fab fa-facebook text-white text-2xl"></i>,
    },
    {
      href: "",
      icon: () => <i className="fab fa-instagram text-white text-2xl"></i>,
    },
    {
      href: "https://github.com/cuong2001a",
      icon: () => <i className="fab fa-github text-white text-2xl"></i>,
    },
  ]
  return (
    <>
      <div className="banner h-[500px] relative">
        <Image src={BackGround} className="w-full h-full aspect-w-16 aspect-h-9" alt="" />
        <div className="mask absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-fixed bg-[#000000b3] backdrop-filter-[blur(2px)]">
          <div className="text-center h-full flex items-center flex-col justify-center p-5">
            <Image src={Avatar} alt={"avatar"} width={200} height={200} className="mx-auto rounded-lg border border-[#dee2e6] p-2 bg-white" />
            <div className="">
              <h3 className="text-white text-3xl font-semibold mt-3">Hi, I'm Cuong</h3>
              <p className="text-white text-lg font-semibold mt-3">{`(Ngo Viet Cuong)`}</p>
              <p className="text-white text-lg font-semibold mt-3">I'm frontend developer</p>
              <ul className="flex justify-center flex-row justify-between items-center text-center mt-3">
                {icons?.map(({href,icon})=> {
                  return (
                    <>
                      <li className="w-full">
                        <Link target={"_blank"} className="block leading-6" href={href}>{icon()}</Link>
                      </li>
                    </>
                  )
                })}
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
