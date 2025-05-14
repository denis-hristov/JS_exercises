function findEmployeesRole(name) {
    let [first, last] = name.split(" ");

    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      if (employee.firstName === first && employee.lastName === last) {
        return employee.role;
      }
    }

    return "Does not work here!";
}

let employees = [
    { firstName: "Dipper", lastName: "Pines", role: "Boss" },
    { firstName: "Mabel", lastName: "Pines", role: "Designer" },
    { firstName: "Wendy", lastName: "Corduroy", role: "Mover" }
];

    console.log(findEmployeesRole("Mabel Pines"));
    