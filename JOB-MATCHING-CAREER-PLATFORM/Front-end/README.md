react js working =>

src=>
react working=> functional component
parent comp=> App.jsx ..[all child import]
child comp=>Home.jsx,About.jsx....[export]

component first letters always capital

react-router-dom provided hyperlink => {Link}/{NavLink}
<a href="/">home</a>
<Link to="/">home</Link>

core routing=>
<BrowserRouter>,
<Routes>,
<Route path='/' element={<Home/>}></Route>




//project work overview

1.responsive navbar with searchbox
2.jobs cards
3.job slider
4.job add form
5.full crud operation
features: mappping,routing,props,useState,useEffect

//hooks => react js provided predifine hooks methode
viratual dom provided hooks functioality.
react state managment=>

useState()=>
const [state,setState] = usestate(intialvalue);
//booking-addcart
const [count,setCount] = usestate(0);
//form handelling
const [name,setName] = usestate("");
const [form,setForm] = usestate({name:"",location:"".....});
const [data,setData] = usestate([]);
useEffect()=>

useEffect(()=>{
    //fetch work

},[]);




