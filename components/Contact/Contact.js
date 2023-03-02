import Image from "next/image"


const Contact = () => {
    return (
        <div>
            <div className=" bg-cyan-200 p-10 py-20	mt-80 mb-56">
  <div className="grid grid-cols-2">


<div>

      

<div className="mb-16">
<div className="flex gap-2">
<div>
<Image className="ml-24"  src='/p.png' width={30} height={30}></Image>
</div>

<div>
<h1 className="text-2xl font-bold">Call us</h1>
</div>
</div>
<div>
<h1 className="ml-24 mt-2">+911 93545 66860</h1>
<hr className="text-black"></hr>
</div>
                </div>



<div className="mb-16">
<div className="flex gap-2">
<div>
<Image className="ml-24"  src='/l.png' width={30} height={30}></Image>
</div>

<div>
<h1 className="text-2xl font-bold">Location</h1>
</div>
</div>
<div>
<h1 className="ml-24 mt-2">Ghaziabad, Uttar PradeshGhaziabad, Uttar Pradesh</h1>

</div>
                </div>



<div className="">
<div className="flex gap-2">
<div>
<Image className="ml-24"  src='/p.png' width={30} height={30}></Image>
</div>

<div>
<h1  className="text-2xl font-bold">Mail us</h1>
</div>
</div>
<div>
<h1 className="ml-24 mt-2">info@markall.in</h1>

</div>
                </div>







</div>

                
    
  </div>
</div>
        </div>
    )
}

export default Contact