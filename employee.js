const employees = {
    101: { name: 'Saket', role: 'Developer', department: 'Engineering' },
    102: { name: 'Niharika', role: 'Designer', department: 'UX' },
    103: { name: 'Prisha', role: 'Manager', department: 'Operations' }
};

const Employee = (id) => {
    const employee = employees[id];
    return employee ? `ID: ${id}, Name: ${employee.name}, Role: ${employee.role}, Department: ${employee.department}` : `Employee with ID ${id} not found.`;
};
export default Employee;
export const greetFromEmployee = (name) => `Hi, ${name}!`;

