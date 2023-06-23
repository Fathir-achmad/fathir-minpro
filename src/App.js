import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { HomePage } from "./pages/homepage";
// import { Carousel } from "./components/carousel";
import { ProfilePage } from "./pages/profile";
import { NavbarPage } from "./pages/navbarPage";
import { CreateBlog } from "./pages/createBlog";
import { BlogDetail } from "./pages/blogDetail";
import { ResetPsw } from "./pages/newPassword";
import { ForgotPsw } from "./pages/pswForgot";
import { SearchResult } from "./pages/searchResult";
import { Validation } from "./pages/verification";
import { PhoneLogin } from "./pages/phoneLogin";
import { UserLogin } from "./pages/userlogin";
import { useDispatch } from "react-redux";
import  Axios  from "axios";
import { setValue } from "./redux/userSlice";
import { useEffect } from "react";
import { Verify } from "./pages/reset-password";
import { EditProfile } from "./components/editProfile";
import { DetailPage } from "./pages/detailPage";
import { MyBlog } from "./components/myBlog";

const router = createBrowserRouter([
  { path: "/", 
    element: <NavbarPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage/> },
      { path: "/createBlog", element: <CreateBlog/> },
      { path: "/blogDetail", element: <BlogDetail/> },
      { path: "/searchResult", element: <SearchResult/> },      
      { path: "/detailPage/:id", element: <DetailPage/> },
    ]
  },
  
  { path: "/register", element: <RegisterPage/> },
  { path: "/verification/:token", element: <Validation/> },
  { path: "/verification-change-email/:token", element: <Validation/> },
  { path: "/login", element: <LoginPage/> },
  { path: "/userLogin", element: <UserLogin/> },
  {path: "/phoneLogin", element: <PhoneLogin/> },
  // { path: "/resetPsw", element: <ResetPsw/> },
  { path: "/reset-password/:token", element: <ResetPsw/> },
  { path: "/pswForgot", element: <ForgotPsw/> },
  { path: "/editProfile", element: <EditProfile/> },
  { path: "/myBlog", element: <MyBlog/> },

  
])
function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const keepLogin = async() => {
    try{
      const response =  await Axios.get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", { 
        headers: { 
          Authorization: `Bearer ${token}`,
        },
      })
      const { username, email, phone, imgProfile } = response.data
      dispatch(setValue({ username,email,phone,imgProfile }))
      console.log(response.data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      token ? keepLogin() : console.log('Sign in first');
  },[])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App;
