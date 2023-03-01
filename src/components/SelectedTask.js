function SelectedTask({item}) {
    return (
      <div className="selectedList">
        <p>Description: {item.description}</p>
        <p>Created: {item.created_at}</p>
        <p>updated: {item.updated_at}</p>
      </div>
    );
}

export default SelectedTask;