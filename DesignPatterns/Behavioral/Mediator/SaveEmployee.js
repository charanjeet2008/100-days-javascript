const orgChart = {
    addNewEmployee() {
        // getEmployeeDetail provides a view that users interact with
        const employeeDetail = this.getEmployeeDetail();

        // when the employee detail is complete, the mediator (the 'orgchart' object)
        // decides what should happen next
        // [ES2015+] Parentheses are optional when there is only one parameter
        employeeDetail.on('complete', employee => {
            // set up additional objects that have additional events, which are used
            // by the mediator to do additional things
            // [ES2015+] Parentheses are optional when there is only one parameter
            const managerSelector = this.selectManager(employee);
            managerSelector.on('save', employee => {
                employee.save();
            });
        });
    },

    // ...
};