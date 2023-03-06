import Banner from "@/components/banner"
import HeaderComponent from "@/components/layout/Header"
import Skill from "@/components/skill"

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[1140px]">
        <HeaderComponent />
        <Banner />
        <Skill/>
      </div>
    </>
  )
}
