
const DashboardBox = ({heading,children}) => {
    return (
        <div className="dashboard-box">
            <h2 className="dashboard-box__heading">{heading}</h2>
            <div className="dashboard-box__container">
                {children}
            </div>
        </div>
    )
}

export default DashboardBox;