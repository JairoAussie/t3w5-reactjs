export default function Title (props){
    return (
    <>
        <h1>The Fruit App!</h1>
        {
            props.loggedInUser ?
            <h3>NavBar with my account option</h3>
            : 
            <h3>NavBar with log in and sign up options</h3>
        }   
    </>    
    )
}