function SelectedTask({item}) {
    return (
      <div className="selectedList">
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        {/* <p>Created: {item.created_at}</p> */}
        {/* <p>updated: {item.updated_at}</p> */}
      </div>
    );
}

export default SelectedTask;