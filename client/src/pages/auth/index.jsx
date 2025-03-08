import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Background from "../../assets/login2.png"
import victory from "../../assets/victory.svg"
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Auth = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[confirm,setconfirmassword]=useState("");

  const handlelogin= async()=>{

  }
  const handlesignin=async()=>{

  }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
  <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Welcome</h1>
        <img src={victory} alt="emoji" className="h-[60px] md:h-[80px]" />
      </div>
      <p className="font-medium text-lg md:text-xl text-center">Fill your details to get started</p>
    </div>
    <div className="flex items-center justify-center flex-col">
      <Tabs className="w-3/4">
        <TabsList className="flex justify-center bg-transparent w-full">
          <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90
          border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
        data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
          <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90
          border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
        data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Signup</TabsTrigger>
        </TabsList>
        <TabsContent className="flex flex-col gap-5 mt-5" value="login">
          <input placeholder="Email" type="email" className="rounded-full p-6" value={email} 
          onChange={(e)=>setemail(e.target.value)}/>
          <input placeholder="Password" type="password" className="rounded-full p-6" value={password} 
          onChange={(e)=>setpassword(e.target.password)}/>
        </TabsContent>
        <TabsContent className="flex flex-col gap-5 mt-5" value="signup">
        <input placeholder="Email" type="email" className="rounded-full p-6" value={email} 
          onChange={(e)=>setemail(e.target.value)}/>
          <input placeholder="Password" type="password" className="rounded-full p-6" value={password} 
          onChange={(e)=>setpassword(e.target.password)}/>
          <input placeholder="Confirm Password" type="password" className="rounded-full p-6" value={confirm} 
          onChange={(e)=>setconfirmassword(e.target.confirm)}/>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</div>


  );
};

export default Auth;

