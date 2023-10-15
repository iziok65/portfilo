import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    massage: string;
}

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const emailSubject = encodeURIComponent(formData.subject);
        const emailBody = encodeURIComponent(`Hi, my name is ${formData.name}. ${formData.massage} (${formData.email})`);
        window.location.href = `mailto:biziokhai@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }
  return (
    <div className='h-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-600 text-2xl'>
        contact Me
        </h3>
        <div className=' flex flex-col space-y-10
        '>
            <h4 className=' text-4xl font-semibold text-center'>
             I have got just what you need.{""} <span className='decoration-[#F7ABBA] underline '>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className=' flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[hsl(348,83%,82%)] h-7 w-7 animate-pulse'/>
                    <p className='text-3xl'>+234-00000000000</p>
                </div>

                <div className=' flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>biziokhai@gmail.com</p>
                </div>
                <div className=' flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'> Oppt Kiss Hotel</p>
                </div>
            </div>
             <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                <input {...register("name")} placeholder='Name' className='contactInput' type="text"/>
                 <input {...register("email")}  placeholder='Email' className='contactInput' type="email"/>
                 </div>
                 <input {...register("subject")} placeholder='subject' className='contactInput' type="subject"/>
                
                <textarea {...register("massage")}placeholder="massage" className='contactInput'/>
                <button type="submit" className='bg-[yellow] py-5 px-10 rounded-md text-yellow font-bold text-lg'>submit</button>
                
            </form>
        </div>
        </div>
        
  )
}