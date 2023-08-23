"use client"
import localFont from "next/font/local";
import React, { useState } from 'react';
import SigninApi from '../apisign/signin'; 
import Background from '@/components/background/Background';
import Link from "next/link";
import SigninButton from "@/components/SigninButton";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });


const Signin = () => {
  const handleSignin = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);

    try {
      const response = await SigninApi(data); 
      console.log('Signin successful:', response);
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  return (
    <div>
      <Background/>
      <div class={`flex justify-center p-1`}>
        <img src="logo.png" alt="logo" className="h-12 w-12" />
        <a href="/" className={`${me.className} my-2 text-nSize text-black`}>
          ToolBeng
        </a>
      </div>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        paddingRight: '3.5vw',
        paddingLeft: '3.5vw',
        paddingTop: '1vw',
        paddingBottom: '1vw',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)'
      }}>
          <h2 className={`${me.className} flex justify-center text-rSize text-black`}>Sign In</h2>
        <form onSubmit={handleSignin}>
        <div>
          <div class={`flex justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email"
            class={`flex w-full rounded-lg text-black p-2`}
            />
          </div>
          <div class={`flex justify-center border border-gray-500 rounded-lg my-2 ${lun.className}`}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class={`flex w-full rounded-lg text-black p-2`}
            />
          </div>
        </div> 
          <div class={`justify-center`}>
            <button type="submit" class={`flex justify-center w-full text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${lun.className}`}>Sign In</button>
          </div>
        </form>
        <div class="flex flex-col items-center">
          <hr class="w-full border-t border-black my-5"/>
          <div class={`my-1`}>
            <button class={`${lun.className} border border-gray-500 w-full bg-white text-black py-2 rounded-lg mb-2`}>
              <div class={`flex justify-center`}>
                <img src="google.svg" alt="google" class="h-5 w-5 md:h-6 md:w-6 mx-2" />
                <SigninButton/>
              </div>
            </button>
            <button class={`${lun.className} border border-gray-500 w-full bg-white text-black py-2 rounded-lg`}>
              <div class={`flex justify-center`}>
                <img src="apple.svg" alt="apple" class="h-5 w-5 md:h-6 md:w-6 mx-2" />
                Continue With Apple ID
              </div>
            </button>
          </div>
        </div>

      </div>
      <div class={`my-1 flex justify-center text-gray-500 text-sm mb-2 ${lun.className}`}>
        &copy; Toolbeng
      </div>
    </div>
  );
};

export default Signin;
