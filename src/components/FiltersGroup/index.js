import './index.css'

const FiltersGroup = props => {
  const renderEmploymentTypesList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employeeType => {
      const {changeEmployeeType} = props
      const onChangeEmployeeType = () =>
        changeEmployeeType(employeeType.employmentTypeId)

      return (
        <li className="list-item" key={employeeType.employmentTypeId}>
          <input
            type="checkbox"
            id={employeeType.employmentTypeId}
            value={employeeType.label}
            onChange={onChangeEmployeeType}
          />
          <label className="label" htmlFor={employeeType.employmentTypeId}>
            {employeeType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentFilters = () => (
    <div>
      <h1 className="employment-heading">Type of Employment</h1>
      <ul className="employment-list">{renderEmploymentTypesList()} </ul>
    </div>
  )

  const renderSalaryRangesList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salaryRange => {
      const {changeSalaryRange} = props

      const onChangeSalaryRange = () =>
        changeSalaryRange(salaryRange.salaryRangeId)

      return (
        <li className="list-item" key={salaryRange.salaryRangeId}>
          <input
            type="radio"
            id={salaryRange.salaryRangeId}
            onChange={onChangeSalaryRange}
            value={salaryRange.label}
            name="salary"
          />
          <label className="label" htmlFor={salaryRange.salaryRangeId}>
            {salaryRange.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div>
      <h1 className="employment-heading">Salary Range</h1>
      <form>
        <ul className="salary-range-list">{renderSalaryRangesList()} </ul>
      </form>
    </div>
  )

  return (
    <div className="filter-group-container">
      {renderEmploymentFilters()}
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
