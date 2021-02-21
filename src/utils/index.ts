export const employeesUrl = `http://api.additivasia.io/api/v1/assignment/employees/`

export const subordinatesUrl = (params?: string) => `${employeesUrl}${params}`
