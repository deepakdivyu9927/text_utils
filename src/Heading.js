// function Heading(props) {
//         return (
//             <h1>Hello,{props.firstName}</h1>
//         )
//     }
    
//     export default Heading;
function Heading(props)
{
    return(
    <nav className="main-nam">
        <ul>
            <li>{props.firstName}</li>
            <li>{props.secondName}</li>
           <li>{props.thirdName}</li>
        </ul>
    </nav>
    );
}
export default Heading;