import IconContact from "@/public/assets/IconContact"
import Image from "next/image"
function Contact() {
  return (
    <>
      <div className="contact mt-12 mb-24">
        <h3 className="text-2xl font-medium mb-8">Contact</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="contact_image">
            <IconContact />
          </div>
          <div className="contact_form">
            <form action="/send-data-here" method="post">
              <div className="form-control mb-10 rounded-[10px] shadow-[0px_48px_100px_0_rgba(17,12,46,0.15)]">
                <input placeholder="Your Name" className="focus-visible:outline-none px-[20px] py-[10px] w-full" type="text" id="first" name="first" />
              </div>
              <div className="form-control mb-10 rounded-[10px] shadow-[0px_48px_100px_0_rgba(17,12,46,0.15)]">
                <input placeholder="Your Email" className="focus-visible:outline-none px-[20px] py-[10px] w-full" type="text" id="last" name="last" />
              </div>
              <div className="form-control mb-10 rounded-[10px] shadow-[0px_48px_100px_0_rgba(17,12,46,0.15)]">
                <input placeholder="Your Message" className="focus-visible:outline-none px-[20px] py-[10px] w-full" type="text" id="last" name="last" />
              </div>
              <button className="bg-orange-400 p-2 rounded-[5px] text-white font-medium text-base" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
