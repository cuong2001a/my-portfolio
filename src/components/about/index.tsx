function About() {
  const infomations = [
    {
      icon: ()=> <i className="far fa-calendar-alt text-2xl"></i>,
      title: 'DOB',
      value: "18/09/2001"
    },
    {
      icon: ()=> <i className="far fa-envelope text-2xl"></i>,
      title: 'Email',
      value: "cuongnv.fpl@gmail.com"
    },
    {
      icon: ()=> <i className="fab fa-github text-2xl"></i>,
      title: 'Github',
      value: "https://github.com/cuong2001a"
    },
    {
      icon: ()=> <i className="fas fa-phone text-2xl"></i>,
      title: 'Phone',
      value: "0971455981"
    },
    {
      icon: ()=> <i className="fas fa-map-marker-alt text-2xl"></i>,
      title: 'Address',
      value: "Ha Noi, Viet Nam"
    }
  ]
  return (
    <>
      <div className="my-12 grid grid-cols-2 gap-8">
        <div className="introduce">
          <h3 className="text-3xl font-medium mb-4">About me</h3>
          <p className="leading-7 font-normal">
            Hello, my name is Viet Cuong and I am a skilled frontend developer with experience in building dynamic and
            responsive web applications. I am proficient in HTML, CSS, JavaScript, and other modern web development
            technologies.
          </p>
        </div>
        <div className="information">
          <h3 className="text-3xl font-medium mb-4">Bio</h3>
          {infomations?.map(({icon, title, value}) => {
            return (
              <>
                <div key={`${icon}`} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    {icon()}
                    <span>{title}</span>
                  </div>
                  <div>
                    {value}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default About
