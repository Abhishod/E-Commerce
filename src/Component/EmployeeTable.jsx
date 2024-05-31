import React from 'react';

const Employees = [
    {
        name: "Shriya",
        Designation: "Web Developer",
        Department: "IT Department",
        Skills: ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL"],
        phone: 7619338271,
        email: "adarsh@sdmcujire.in",
        image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        address: "Mangalore"
    },
    {
        name: "Akshay",
        Designation: "Analytical Manager",
        Department: "IT Department",
        Skills: ["HTML", "CSS", "JavaScript", "React", "Java", "MongoDB"],
        phone: 44645434,
        email: "akshay@sdmcujire.in",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Bangalore"
    },
    {
        name: "Vijay",
        Designation: "Tester",
        Department: "IT Department",
        Skills: ["HTML", "CSS", "JavaScript", "Python"],
        phone: 876543534,
        email: "vijay@sdmcujire.in",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Hyderabad"
    },
    {
        name: "Nishmitha",
        Designation: "CEO",
        Department: "IT Department",
        Skills: ["HTML", "CSS", "JavaScript", "React", "Java", "MongoDB", "Machine Learning", "Artificial Intelligence"],
        phone: 487348348723,
        email: "nish@sdmcujire.in",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "Chennai"
    },
];

const EmployeeTable = () => {
    const rows = Employees.map((employee, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>
                <img src={employee.image} alt={employee.name} width="50" style={{ borderRadius: '50%' }} />
                &nbsp;{employee.name}
            </td>     
            <td>{employee.Designation}</td>
            {/* demo */}
            <td>{employee.Department}</td>
            <td>
                <ul>
                    {employee.Skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
        </tr>
    ));

    return (
        <div>
            <h1>Employee Information</h1>
            <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Profile</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Skills</th>
                        <th>Contacts</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
