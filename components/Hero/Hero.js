import Image from "next/image"

const Hero = () => {
    return (
        <div>
            <div className="  bg-black p-10 py-28">
  <div className=" grid grid-cols-2 gap-10">
    <div>
      <h1 className="text-5xl font-bold text-white">Reach your - <br></br>
audience & convert <br></br> your leads</h1>
      <p className="py-6 text-white">Get your customers with SEO, rank your business with email marketing, build sales leads</p>
     <div className=" flex gap-x-5"> 
        <button className="btn btn-success">Get Started</button>
     <button className="btn btn-black "><i class="cis-media-play"></i> Watch Now</button>

     </div>
    </div>

    <div>
        <Image className="ml-24"  src='/hero.png' width={450} height={40}></Image>
    </div>
  </div>
</div>
        </div>
    )
}

export default Hero