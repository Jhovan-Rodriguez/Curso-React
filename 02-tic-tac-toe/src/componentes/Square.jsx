//Se crea el componenete Square
/*
  Se le pasan props para modificar el estilo del elemento dependiendo del estado
*/
export const Square = ({children,isSelected,updateBoard,index})=>{
    const className=`square ${isSelected ? 'is-selected':''}`
  
    const handleClick=()=>{
      updateBoard(index)
    }
  
    return(
       <div onClick={handleClick} className={className}>
        {children}
       </div>
    )
  }