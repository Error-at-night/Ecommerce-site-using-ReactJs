//  FetchData Function
import { fetchData } from "../Helpers/FetchData";

// React Router Dom Imports
import { useLoaderData } from "react-router-dom";

// Library Imports (Toast Message)
import { toast } from "react-toastify";

// Components
import LoginForm from "./LoginForm"
import WelcomePage from "./WelcomePage/WelcomePage";

// HomeLoader Function 
export function HomeLoader() {
    const userName = fetchData("userName")

    return { userName }
}

// Action
export async function HomeAction({request}) {

    const data = await request.formData()
    const { _action, ...values } = Object.fromEntries(data)

    // New User Submission
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        }
        catch(e) {
            throw new Error("There was a problem creating your account") 
        }
    }    
}

const Home = () => {
    const { userName } = useLoaderData()

    return ( 
        <>
            { userName ? (<WelcomePage/>) : (<LoginForm/>) }
        </>
    );
}
 
export default Home;