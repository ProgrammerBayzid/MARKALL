const ContactUs = () => {
    return (
        <div>






<div className="card w-[500px] bg-base-100 shadow-xl">
 

<div
              

                    className="card  bg-base-100 shadow-xl">
<div className="px-10">


<h1 className="text-4xl  font-bold mt-5 mb-3">Contact Now</h1>
<h1>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus. </h1>

</div>
                    <form >
                        <div>
                            <div className="card-body lg:w-4/2 flex mx-auto">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Your Email</span>
                                    </label>
                                    <input type="email" name="emails" placeholder="Type Emails" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Phone</span>
                                    </label>
                                    <textarea type='text' name='message' className="textarea input-bordered " placeholder="Phone"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Message</span>
                                    </label>
                                    <textarea type='text' name='message' className="textarea input-bordered " placeholder="Type Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn rounded bg-indigo-500	text-white">Submit</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
  
</div>










           
        </div>
    )
}

export default ContactUs