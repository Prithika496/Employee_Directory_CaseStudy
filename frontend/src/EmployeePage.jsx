import { useEffect, useState } from "react";
import EmployeeList from "./components/EmployeeList.jsx";
import { searchEmployees } from "./services/employeeService.js";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


   useEffect(() => {
    const query = search.trim();

    if (query.length < 2) {
      setEmployees([]);
      setError("");
      setLoading(false);
      return;
    }

    
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchEmployees(query);
        setEmployees(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Unable to fetch employees. Please try again.");
        setEmployees([]);
      } finally {
        setLoading(false);
      }
    }, 500); 

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search by name or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      
      {/* Loading State */}
      {loading && <p className="info-text">Searching employees...</p>}

      {/* Error State */}
      {error && <p className="error-text">{error}</p>}

      {/* No Results */}
      {!loading && !error && search.length >= 2 && employees.length === 0 && (
        <p className="info-text">No employees found</p>
      )}

      {/* Results */}
      {!loading && !error && employees.length > 0 && (
        <EmployeeList employees={employees} />
      )}
      
    </div>
  );
};

export default EmployeePage;
