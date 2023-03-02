import Image from "next/image"

const Time = () => {
    return (
        <div className="p-10 ">
            <div className=" bg-[#EBEBEB] rounded p-10">
  <div className="grid grid-cols-2">
    <div>
      <h1 className="text-5xl font-bold">Save precious time <br></br>
with automation</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>

      <button className="">Learn more </button>


    </div>

    <div>
    <Image className="ml-24"  src='/auto.png' width={450} height={40}></Image>
    </div>

  </div>

</div>
        </div>
    )
}

export default Time