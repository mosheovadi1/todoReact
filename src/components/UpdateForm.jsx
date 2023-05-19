const UpdateForm = (
    {
        updateData,
        changeTask,
        updateTask,
        cancelUpdate,
    }
) =>{
    return (
        <div className="row">
        <div className="col">
        <input className="form-control form-control-lg"
          value={updateData && updateData.title }
          onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto">
        <button onClick={(e) =>updateTask(e)} className="btn btn-lg btn-success mr-20">
          update 
          </button>
          <button onClick={cancelUpdate} className="btn btn-lg btn-warning ">
          cancel 
          </button>
        </div>
      </div>
    );
}

export default UpdateForm