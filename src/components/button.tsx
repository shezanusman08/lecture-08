"use client"

interface IProps{
    text: string
    className: string
}

export default function Button(props: IProps){
    return(
    <button onClick={ handleClick} className="bg-blue-500 hover:bg-blue-400 text-white transition-transform px-4 py-2">{ props.text }</button>
    )
}

const handleClick = () =>{
    alert("Button Clicked")
}