export const CustomButton = () => {
    const handleClick = () => {
        alert("YOU CLICKED ME")
    }
    return <button onClick = {handleClick}>Click me</button>
}