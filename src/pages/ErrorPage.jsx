import { NavLink, useRouteError } from "react-router-dom";


export const ErrorPage = () =>{
const error = useRouteError();
    return(
        <>
        <img src="/public/images/404_page_cover.jpg" alt="" srcset="" />
        <h1>Oops! An error occourd.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"> {" "}<button>
        Go Home</button></NavLink>
        </>
    )
}