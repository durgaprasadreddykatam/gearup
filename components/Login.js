import { Oswald ,Concert_One } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin']})
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios'
import jwtDecode from "jwt-decode";

  const nameRegex = /^[a-zA-Z]+$/; // regex to match only alphabets
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex to match proper email format
  const phoneRegex = /^\d{10}$/; // regex to match 10-digit phone number

  function Login (props)  {
  const router = useRouter();
  
  const [checkuser, setCheckuser] = useState("null");//emailnotfound, null, emailfound
  const[nextbuttonstyle,setNextbuttonstyle]=useState(false)
  const[signupbuttonstyle,setSignupbuttonstyle]=useState(false)
  const [email, setEmail] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [userdata, setUserdata] = useState({firstName:'',lastName:'',phoneNumber:'',password:''});
  const [showpassowrd, setShowpassword] = useState(false);
  const [loginshowpassowrd, setloginShowpassword] = useState(false);
  const passimage= showpassowrd ? `/icons/hideeye.png` : `/icons/eye.png`;
  const loginpassimage= loginshowpassowrd ? `/icons/hideeye.png` : `/icons/eye.png`;
  const [isLoading, setIsLoading] = useState(false);


  //  this Function is invoked when the user inputs data in email field in first page
  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (emailRegex.test(event.target.value)) {
      setNextbuttonstyle(true)
    }
    else{
      setNextbuttonstyle(false)
    }
  }
  // this is invoked when user Clicks on Next Button
  const [username, setUsername] = useState("");
  const[userid,setUserid]=useState('')
  function Checkemail(event){
    event.preventDefault();
    setIsLoading(true);
    axios.post('/api/logintest', {email:email})
    .then(function (response) {
      if(response.data.message==='emailfound'){
        setUsername(response.data.firstName + ' ' + response.data.lastName)
        setUserid(response.data.id)
        setCheckuser('emailfound')
        setIsLoading(false);
      }
      else{
        setCheckuser('emailnotfound')
        setIsLoading(false);
      }
    })
  
  }
  // This function will be invoked when user inputs data in 2nd page
  const [error, setError] = useState(false);
  function Userdatafunction(event){
    const { name, value } = event.target;
    setUserdata({...userdata,[name]:value})
    let errorMessage = '';
    if (name === 'firstName' || name === 'lastName') {
      if (!nameRegex.test(value)) {
        errorMessage = `${name} should contain only alphabets`;
      }
    }
    else if (name === 'phoneNumber') {
      if (!phoneRegex.test(value)) {
        errorMessage = 'Invalid phone number';
      }
    }
    else if (name === 'password') {
      if (value.length < 8) {
        errorMessage = 'Password should be at least 8 characters long';
      }
    }
    setError(errorMessage);
  }
  
  useEffect(() => {
    if(nameRegex.test(userdata.firstName) && 
    nameRegex.test(userdata.lastName) && 
    phoneRegex.test(userdata.phoneNumber) && 
    userdata.password.length>=8){
      setSignupbuttonstyle(true)
    } else{
      setSignupbuttonstyle(false)
    }

  }, [userdata]);
    
  
  
  

  //this function will be invoked when user clicks on signup button
  function Signupfunction(event){
    setIsLoading(true);
    event.preventDefault();
    axios.post('/api/createaccount', {email:email,userdata:userdata})
    .then(function (response) {
      if(response.data.message==='success'){
        localStorage.setItem('user', JSON.stringify({
          id: response.data.id,
          username:userdata.firstName + ' ' + userdata.lastName,
          userauthenticated:true
        }));
        setIsLoading(false);
        props.onClick();
        router.reload(window.location.pathname)
        
        
  }
  else{
    console.log('error');
    setIsLoading(false);
  }
})
    
  }
  
// this function will be invoked when user clicks on Login button on 3rd page
const[passworderror,setPassworderror]=useState("");
  function Loginfunction(event){
    setIsLoading(true);
    setPassworderror('');
    event.preventDefault();
    axios.post('/api/authuser', {id:userid,password:pswrd})
    .then(function (response) {
      if(response.data.message==='success'){
        localStorage.setItem('user', JSON.stringify({
          id: response.data.id,
          username:username,
          userauthenticated:true
        }));
        setIsLoading(false);
        router.reload(window.location.pathname)
        props.onClick();
  }
  else if(response.data.message==='failure'){
    setPassworderror('Invalid Password')
    setIsLoading(false);
  }
  else{
    console.log('error');
    setIsLoading(false);
  }
})
}

// Sign in With Google

useEffect(() => {
  google.accounts.id.initialize({
      client_id:process.env.NEXT_PUBLIC_GOOGLEOATH_CLIENT_ID,
      callback:handleCredentialResponse 
  })
  google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      { theme: "outline", size: "large", text:"sign", width: "400px",logo_alignment:"center"}
  );
}, []);
function handleCredentialResponse(response) {
  const userObject = jwtDecode(response.credential);
  //checks if user Signs Up for First time or not
  axios.post('/api/logintest', {email:userObject.email})
  .then(function (response) {
    if(response.data.message==='emailfound'){
      //user is already Signed Up
      setUserid(response.data.id)
      axios.post('/api/authuser', {id:response.data.id,password:"googleauthenticated"})
      .then(function (response1) {
        if(response1.data.message==='success'){
          localStorage.setItem('user', JSON.stringify({
            id: response1.data.id,
            username:response1.data.firstName + ' ' + response1.data.lastName,
            userauthenticated:true
          }));
          router.reload(window.location.pathname)
        }})
      
    }
     //if user is signing up for first time then create account

    else if(response.data.message==='emailnotfound'){
      axios.post('/api/createaccount', {email:userObject.email,userdata:{firstName:userObject.given_name,lastName:userObject.family_name,phoneNumber:'',password:userObject.sub}})
      .then(function (response) {
        if(response.data.message==='success'){
          localStorage.setItem('user', JSON.stringify({
            id: response.data.id,
            username:userObject.given_name + ' ' +userObject.family_name,
            userauthenticated:true
          }));
          router.reload(window.location.pathname)
        }});
  
    }
  
  })
  // 
}

  
  
  

  return (
    <>
    <div className='w-full relative  flex  items-center justify-center '>

      {checkuser==="null"&&
          <div className={`w-full relative rounded-lg flex p-5 sm:w-120  items-center flex-col ${oswald.className}` }>
            <span className='absolute top-5 text-green-700 right-36'>Demo-Email:<span className='text-blue-500 font-extrabold'>demouser@mail.com</span></span>
              <Image onClick={props.onClick} className='absolute h-6 w-6 left-6 cursor-pointer' alt='' width={100} height={100} src={`/icons/close.png`}/>
              <div className='text-3xl mt-10 font-bold'>Sign up or Sign in</div>
              <span className='mt-5 text-sm'>Type your email address below and we'll check if you already have an account. Otherwise, we'll quickly create one for you.</span>
              <form className=' w-full flex flex-col'>
                  <div  className='mt-5  flex pl-3 flex-col border-2 h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                      <span className='text-xs  font-extrabold text-sky-500'>Email address</span>
                      <input onChange={handleEmailChange}  value={email}className='h-10  focus:outline-none'></input>
                  </div>
                  {!nextbuttonstyle && <div className={`mt-5 h-12  flex items-center justify-center text-white cursor-not-allowed bg-sky-300 font-bold rounded-lg`}>Next</div>}
                  {nextbuttonstyle && <button onClick={Checkemail} className={`mt-5 flex items-center justify-center h-12 text-white bg-sky-500 font-bold rounded-lg `}>
                                                {isLoading && <div className='h-5 mr-4 rounded-full animate-spin border-2 border-gray-400 w-5 border-t-2 border-t-white'></div>}
                                                {isLoading ? `Loading`:`Next`}
                                        </button>}

              {/* button for Google Signup */}
              
              <div className='flex mt-10 justify-center items-center'>
                    <div id='signindiv'></div>
              </div>
              
              {/* button for Github Signup */}
              <div className='flex justify-center'>or</div>
              <button className={`mt-5 h-12  flex items-center justify-center text-white cursor-not-allowed bg-sky-300 font-bold rounded-lg`}>Signup using GitHub</button>
              </form>

              <span className='mt-10 text-xs font-light'>By continuing, you agree to GearUp's Terms of Service and Privacy Policy.</span>
             
          </div>
          
      }

    {/* if New User and if email is not found render this  */}

    { checkuser ==="emailnotfound" &&   
        <div className={`w-full flex p-5 rounded-lg sm:w-120 relative items-center flex-col ${oswald.className}`}>
            <Image onClick={props.onClick} src={`/icons/close.png`} height={100} alt='' width={100}  className='h-5 w-5 cursor-pointer absolute top-4 left-2'/>
            <span className='text-xl'>Continue with Email</span>
            <span className='font-extralight text-lg'>It looks like you're new around here! Please sign up below!</span>
            <form className=' w-full flex flex-col'>
                <div  className='mt-5 justify-center cursor-not-allowed bg-gray-100  flex pl-3 flex-col border-2 h-12 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                  <span className='text-lg  font-extrabold text-gray-500'>{email}</span>
                </div>
                <div  className='mt-5  flex pl-3 flex-col border-2 h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                    <input onChange={Userdatafunction} name='firstName' value={userdata.firstName} className='h-full w-full pl-1 text-2xl focus:outline-none' placeholder='First Name'></input>
                </div>
                <div  className='mt-5  flex pl-3 flex-col border-2 h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                    <input onChange={Userdatafunction} name='lastName' value={userdata.lastName} className='h-full w-full pl-1 text-2xl focus:outline-none' placeholder='Last Name'></input>
                </div>
                <div  className='mt-5  flex pl-3 items-center  border-2 h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                    <Image src={`/icons/usflag.png`} height={100} width={100} alt='' className='h-7 w-7 mr-1 w-12'/>
                    <input onChange={Userdatafunction} name='phoneNumber' value={userdata.phoneNumber} className='h-full w-full pl-1 text-2xl focus:outline-none' placeholder='Phone Number'></input>
                </div>
                <div  className='mt-5  flex pl-3 border-2 items-center h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                  <input onChange={Userdatafunction} name='password' value={userdata.password} className='h-full w-full pl-1 text-2xl focus:outline-none' autoComplete="current-password" type= {showpassowrd ? '':'password' } placeholder='Password'></input>
                  <Image onClick={()=>{setShowpassword(!showpassowrd)}} alt='' className='h-5 w-5 mx-1 cursor-pointer' src={passimage} width={90} height={90}/>
                </div>
                <div className='h-12 flex items-center justify-center text-xs text-red-500'>{error}</div>
                {!signupbuttonstyle && <div className='mt-1 h-12 flex items-center justify-center cursor-not-allowed text-white bg-sky-300 font-bold rounded-lg'>Sign Up</div>}
                {signupbuttonstyle && <button onClick={Signupfunction}  className={`mt-5 flex items-center justify-center h-12 text-white bg-sky-500 font-bold rounded-lg `}>
                                                {isLoading && <div className='h-5 mr-4 rounded-full animate-spin border-2 border-gray-400 w-5 border-t-2 border-t-white'></div>}
                                                {isLoading ? `Loading`:`Sign Up`}
                                        </button>}
            </form>
        </div>

        
      
    }
    {/* if email is found render this */}
    { checkuser ==="emailfound" &&   
        <div className={`w-full flex p-5 relative rounded-lg sm:w-120 items-center flex-col ${oswald.className}`}>
          <span className='absolute top-1 text-green-700 right-36'>Demo-Password:<span className='text-blue-500 font-extrabold'>Pass@demo</span></span>
            <Image onClick={props.onClick} src={`/icons/close.png`} height={100} width={100} alt='' className='h-5 w-5 cursor-pointer absolute top-4 left-2'/>
            <span className='text-xl'>Login with Email</span>
            <span className='font-extralight mt-5 text-lg'>Welcome Back <span className='text-2xl font-bold'>{username}</span> </span>
            <span className='font-extralight text-lg'>Enter Your Password to Login!</span>
            <form className=' w-full flex flex-col'>
                <div  className='mt-5 cursor-not-allowed bg-gray-100 justify-center  flex pl-3 flex-col border-2 h-12 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                          <span className='text-sm  font-extrabold text-gray-500'>{email}</span>
                </div>
                <div  className='mt-5  flex pl-3 items-center  border-2 h-16 rounded-lg p-1 focus-within:border-sky-500 focus-within:border-2 ' >
                    <input value={pswrd} onChange={(event)=>{setPswrd(event.target.value);}} className='h-10 w-full focus:outline-none' placeholder='Password' type= {loginshowpassowrd ? '':'password' }></input>
                    <Image onClick={()=>{setloginShowpassword(!loginshowpassowrd)}} alt='' className='h-5 w-5 mx-1 cursor-pointer' src={loginpassimage} width={90} height={90}/>
                </div>
                <div className='h-10 flex items-center justify-center text-xs text-red-500'>{passworderror}</div>
                <button onClick={Loginfunction} className={`mt-5 flex items-center justify-center h-12 text-white bg-sky-500 font-bold rounded-lg `}>
                                                {isLoading && <div className='h-5 mr-4 rounded-full animate-spin border-2 border-gray-400 w-5 border-t-2 border-t-white'></div>}
                                                {isLoading ? `Loading`:`Login`}
                                        </button>
            </form>
        </div>
      
    }
    </div>
    </>
    
  )
}

export default Login

