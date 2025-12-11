"use client";

import * as z from "zod";
import { useState } from "react";
import {Label} from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff,Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

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
     
    // toast
    const {toast}=useToast();

    //show /hide password
    const[showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    const {register,handleSubmit,formState:{errors},reset}=useForm<RegisterFormData>({resolver:zodResolver(registerSchema)});

    //call api -> useMutation for post, update and delete 
    const registerMutation=useMutation({
        mutationFn:async(data:RegisterFormData)=>{
            const response=await fetch("https://dummyjson.com/users/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                email:data.email,
                password:data.password,
                confirmPassword:data.confirmPassword,
            }),
        });

        if(!response.ok){
            throw new Error("Failed to register");
        }
        return response.json();
    },
    onSuccess:()=>{
        //toast
        toast({
            title:"Success!",
            description:"Your account has been created successfully.",
        });
        reset();
    },
    onError:(error:Error)=>{
        //toast
        toast({
            variant:"destructive",
            title:"Error",
            description:error.message || "Something went wrong. Please try again.", 
        });
    }
});

const onSubmit=(data:RegisterFormData)=>{
    registerMutation.mutate(data);
};

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6">
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-500">Enter your details to register</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="person@example.com" {...register("email")} className={errors.email ? "border-red-500" : ""}/>
                 {/* handle error  */}
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className={errors.password ? "border-red-500" : ""} {...register("password")} />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword?(<EyeOff className="h-4 w-4"/>):(<Eye className="h-4 w-4"/>)}
                    </button>
                </div>
                     {/* handle error  */}
                    {errors.password && ( <p className="text-sm text-red-500">{errors.password.message}</p>)}
            </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="pr-10 [::-ms-reveal]:hidden" {...register("confirmPassword")}/>
                                     {/* handle error  */}
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword?(<EyeOff className="h-4 w-4"/>):(<Eye className="h-4 w-4"/>)}
                        </button>
                    </div>
                {/* handle error  */}
                {errors.confirmPassword && ( <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>)}
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600" disabled={registerMutation.isPending}>{registerMutation.isPending?(
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>):("Register")}</Button>

        </form>

    </div>
  );
}
