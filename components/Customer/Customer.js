import Image from "next/image"



const Customer = () => {
    return (
        <div 
        className="bg-orange-100	"
        >

        <div className=" grid grid-cols-2 p-10">
                  <div>
        
                  <h1 className="text-sm font-bold text-black">OUR HAPPY CUSTOMERS</h1>
                  <h1 className="text-4xl font-bold text-black">What our customers <br></br>
say about us</h1>
        <div className="mt-5 "><hr></hr></div>
                  </div>
        
                  <div>
        
                  </div>
        
                </div>
        
        
        
                <div className="grid grid-cols-2 p-10">
                  <div>
        
                  
                  </div>
        
                  <div>
                  <div>
    <Image className=""  src='/q.png' width={50} height={40}></Image>
    </div>
       <div className="ml-12">

       <h1 className="font-bold">
        Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.
        </h1>
        <h1 className="text-3xl font-bold text-black">Jane Doe</h1>
        <h1>Product Specialist, Lorem Co.</h1>
       </div>
                  </div>
        
                </div>
        
                </div>
    )
}

export default Customer