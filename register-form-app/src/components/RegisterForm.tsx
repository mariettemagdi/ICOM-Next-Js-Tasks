"use client";

import * as z from "zod";
import { useState } from "react";
import {Label} from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";


//validation schema 
const registerSchema=z.object({
    email:z.string().email({message:"Please enter a valid email"}),
    password:z.string().min(8,{message:"Password must be at least 8 characters long"}),
    confirmPassword:z.string(),
}).refine((data)=>data.password===data.confirmPassword,{
    message:"Passwords do not match",
    path:["confirmPassword"],
});

//generate a typescript type
type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {

    //show /hide password
    const[showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-500">Enter your details to register</p>
        </div>
        <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="person@example.com"/>
                 {/* handle error  */}
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pr-10 [::-ms-reveal]:hidden"/>
                                     {/* handle error  */}
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword?(<Eye className="h-4 w-4"/>):(<EyeOff className="h-4 w-4"/>)}
                    </button>
                </div>
                {/* handle error  */}
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="pr-10 [::-ms-reveal]:hidden"/>
                                     {/* handle error  */}
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword?(<Eye className="h-4 w-4"/>):(<EyeOff className="h-4 w-4"/>)}
                        </button>
                    </div>
                {/* handle error  */}
                </div>
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">Register</Button>

        </form>

    </div>
  );
}
