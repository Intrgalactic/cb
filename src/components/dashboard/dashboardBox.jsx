
const DashboardBox = ({heading,children,containerClass}) => {
    return (
        <div className="dashboard-box">
            <h2 className="dashboard-box__heading">{heading}</h2>
            <div className={`dashboard-box__container ${containerClass}`}>
                {children}
            </div>
        </div>
    )
}

export default DashboardBox;