const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="employee-header">
        <h3>{employee.name}</h3>
        <span className="badge">{employee.department}</span>
      </div>

      <p className="designation">{employee.designation}</p>

      <div className="employee-meta">
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Joined:</strong> {employee.date_of_joining}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
