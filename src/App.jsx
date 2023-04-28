import logo from "./assets/logo.png";
import google from "./assets/google_play.png";
import microsoft from "./assets/microsoft.png";
import celular from "./assets/celular.png";
import {RiFacebookBoxFill} from "react-icons/ri";


function App() {
  
  return (
    <div className="pt-0 m-0 bg-branco ">
     <section className="w-935 grid grid-cols-2  pt-10">
        <div className="ml-20">
        <img src={celular} className="ml-10 " alt="celular"/>
        </div>
        <div className="ml-0">
          <form className=" bg-branco-puro mt-1 -ml-15 border text-center border-cinza-claro p-10 w-7/12 h-3.5/6">
            <img src={logo} className="w-2/3 pb-2 ml-10 mb-3" alt="instagram"/>
            <input type='text'  className="pb-4 bg-branco ml-2 w-11/12 h-10 mb-1 pl-1  text-xs border border-cinza-claro rounded" name='username' placeholder="Phone,username or email"/><br></br>
            <input type='password' className="pb-5 bg-branco ml-2 w-11/12 h-10 pl-1  text-xs border border-cinza-claro rounded" name='password' placeholder="Password"/><br></br>
            <button type="button" className=" font-medium text-center text-branco-puro  ml-2 bg-azul-claro w-11/12 h-7 mt-3 rounded">Log in</button>
            <div className="text-center">
            <hr className="text-cinza-claro w-2/6 mt-3 ml-4 mr-0 float-left"></hr><p className="mb-5 mt-6 mx-20 pr-8  text-cinza-medio font-bold text-sm">OR</p><hr className= "text-cinza-claro w-2/6 mr-3 ml-1 -mt-7 float-right"></hr>
            </div>
            <RiFacebookBoxFill size={23} color={'#2c5282'} style={{marginBottom:"-23px", marginLeft:"55px"}}/><a href="/" className="text-azul-escuro text-center font-bold  ml-12 mt-10  text-sm">Log in with Facebook</a><br></br><br></br>
            <a href="/"className="text-xs  text-azul-petroleo">Forgot password?</a>
          </form>
          <div className="mt-3 bg-branco-puro text-center border border-cinza-claro w-7/12 h-1/8 p-9">
            <p className="text-sm "> Don't have an account?<a href="/" className="text-azul-claro font-bold">Sign up</a></p>
          </div>
          <div className="w-7/12 h-90 text-center ">
            <p className="text-sm mt-4 mx-20 mb-2 ">Get the app.</p>
            <div className="flex flex-row space-x-px pl-10">
            <a href="/"> 
              <img src={google} className=" w-80 h-36 ml-12 -mt-10  " alt="Download on the Google Play"/>
            </a>
            <a href="/">
              <img src={microsoft} className="w-3/5 h-8/10 ml-6 mr-5 mt-1 " alt="Download on the Microsoft"/>
            </a>
           </div>
          </div>
        </div>
      </section>
      <footer>
        <nav className="pl-10 pr-10 text-center mb-2">
       <a className="text-xs text-cinza-escuro mr-2 ml-2 " href="/">Meta</a> 
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "  href="/">About</a> 
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Blog</a> 
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Career</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Help</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">API</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Privacy</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Terms</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Main accounts</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Hashtags</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Locations</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Instagram Lite</a>
       <a className="text-xs text-cinza-escuro mr-2 ml-2 "href="/">Loading contacts and non-users</a><br></br>
      
        </nav>
        <div className="text-center pb-10">
        <select className="text-xs bg-branco text-cinza-escuro mr-2 ml-2" name="Português (Brasil)" href="/" >
        <option value="valor2" defaultValue="2">Português (Brasil)</option>
        </select>
        
        
         
        <a className="text-xs text-cinza-escuro mr-2 ml-2 " href="/"> © 2022 Instagram from Meta </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
