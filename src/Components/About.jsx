const About = () => {
  return (
    <>
    <div className="flex items-center md:justify-start justify-center 
    gap-10 mt-13 mr-2 mb-10">
    <div className="border-3 h-12 rotate-90 rounded-xl md:ml-15"></div>
    <span className="text-4xl font-bold text-gray-700">About</span>
    </div>

    <div className="flex md:justify-start justify-center 
    md:flex-row flex-col ml-16 gap-32">
       <div className="mt-5">
       <img src="\src\assets\robo.png" className="h-90 w-90"></img>
       </div>

       <div className="flex md:mt-20 md:text-xl mr-14">
        <p>Hi, my name is <span className="text-gray-700">Vaishak</span>. I am a <span className="text-gray-700">color grading artist</span>, <span className="text-gray-700">photographer</span>, and a <span className="text-gray-700">freelancer</span>. <br/><br/>
            I love working with colors and bringing out the best in every photo and video.For me, <span className="text-gray-700"> color grading</span> <br/> is not just about adjusting tones – it’s about telling a story and creating the right mood.<br/><br/>

            <span className="text-gray-700">Photography</span> is another passion of mine. I enjoy capturing moments that people can treasure forever. <br/>Every picture I take is special to me because it freezes a memory in time.<br/><br/>

            As a <span className="text-gray-700">freelancer</span>, I work with different clients and projects, giving each one my full attention and creativity.<br/>I believe in working closely with people to understand their vision and bring it to life.</p>
       </div>

       
    </div>
    </>
  )
}

export default About
