import React, {useState} from 'react'

const Contact = () => {
  const [contact, setContact] = useState({name:'', email:'', message:''})
  const handleOnChange = (e)=>{
    e.preventDefault();
    setContact({...contact, [e.target.name]:e.target.value})
  }
  const handleOnSubmit = async (e)=>{
    e.preventDefault()
    if(!contact.name || !contact.email || !contact.message){
      alert('Please fill all the fields')
    }else{
      const response = await fetch('/api/contact', {
        method:'POST',
        body:JSON.stringify({name:contact.name, email:contact.email, message:contact.message}),
      })
      const data = await response.json()
      if(data.success){
        alert('Message sent successfully')
      }else{
        alert(data.message)
      }
    }
  }
  return (
    <div className="w-full contact-pg flex flex-col items-center text-white">
      <h1 className="text-2xl font-bold p-2">Contact Us</h1>
      <p>
        If you have any questions, please feel free to contact us.
      </p>
      <p>
        You can contact us via email at <a href="mailto:mohdusman.you@gmail.com">mohdusman.you[at]gmail[dot]com</a>
      </p>
      <form className="w-full flex flex-col items-center p-5 text-white" onSubmit={handleOnSubmit}>
                    <input className="w-full border-b border-gray-300 p-2 contact-input" type="text" name="name" onChange={handleOnChange} placeholder="Name" />
                    <input className="w-full border-b border-gray-300 p-2 contact-input" type="email" name="email" onChange={handleOnChange} placeholder="Email" />
                    <textarea className="w-full border-b border-gray-300 p-2 my-2" name="message" onChange={handleOnChange} placeholder="Message"></textarea>
                    <input className="w-full border-b border-gray-300 p-2 bg-gray-800 cursor-pointer hover:bg-gray-700" type="submit" value='Contact' />
                </form>
    </div>
  )
}

export default Contact