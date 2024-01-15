import Actividad from "../Actividad/Actividad";
import Home from "../Home/Home";
import Lab from "../Lab/Lab";
import Layout from "../Layout/Layout";

export const RoutesIgClone = [
  {
    path:'/',
    // component: <Layout children={<Home/>}/>,
    main: () => <Layout children={Home}/>
  },
  {
    path:'/actividad',
    main: () => <Layout children={Actividad}/>
  },
  {
    path:'/lab',
    main: () => <Layout children={Lab}/>
  },
]