function SelectedTask({ item }) {
  return (
    <div className="selectedList">
      <table>
        <caption>Transaction history</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
            {/* <td
              style={{ cursor: "pointer" }}
              onClick={() => deleteTransaction(description.id)}
            >
              X
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectedTask;
