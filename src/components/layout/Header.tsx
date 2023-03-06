import Link from "next/link"
import {useEffect, useRef, useState} from "react"
export default function HeaderComponent() {
  const links = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/contact", label: "Contact"},
  ]
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const checkbox = checkboxRef.current

    if (checkbox) {
      checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark")
      })
    }
  }, [])
  return (
    <>
        <header className="flex justify-between items-center flex-row py-3  mt-5">
          <div className="header_logo">
            <h2 className="header_text text-3xl font-semibold">Việt Cường</h2>
          </div>
          <nav className="header_menu">
            <ul className="menu flex flex-row">
              {links?.map(({path, label}) => {
                return (
                  <li key={`${path}${label}`} className="menu_item cursor-pointer p-4 mr-2">
                    <Link className="text-lg font-semibold" href={path}>
                      {label}
                    </Link>
                  </li>
                )
              })}
              <li className="menu_item cursor-pointer p-4 mr-2">
                <div>
                  <input type="checkbox" className="checkbox" id="checkbox" ref={checkboxRef} />
                  <label htmlFor="checkbox" className="label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball" />
                  </label>
                </div>
              </li>
            </ul>
          </nav>
        </header>
    </>
  )
}
