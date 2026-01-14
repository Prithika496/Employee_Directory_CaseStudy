import EmployeeCard from "./EmployeeCard";
import SkeletonCard from "./SkeletonCard";

const EmployeeList = ({ employees, loading }) => {

  if (loading) {
    return (
      <div className="employee-grid">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!employees.length) {
    return <p className="empty-text">No employees found</p>;
  }

  return (
    <div className="employee-grid">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
