function TodoItem2(){
    let todoname='Go to collge'
    let date='26/11/2023'
    return(
        <div class="container ">
 
 
        <div class="row">
          <div class="col-4">{todoname}</div>
          <div class="col-4 date">{date}</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
        </div>
    );
}
export default TodoItem2;