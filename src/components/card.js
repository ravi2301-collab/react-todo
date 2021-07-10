function Card({list, handleDelete}){
    return(
        list.map( (item, index) => {  return(
        <div className="card shadow-lg mt-2">
            <div className="card-body"> 
                <button  onClick={()=> { handleDelete(index) }} className="btn btn-circle  float-right btn-danger"> X </button>
                <p className="lead text-center"> { item } </p>
            </div>
        </div>
    )})
    );

}

export default Card;