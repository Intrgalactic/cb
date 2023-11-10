
const UserDetail = ({content,img}) => {
    return (
        <div className="user-detail">
            <img src={img} alt="user detail"/>
            <p>{content}</p>
        </div>
    )
}

export default UserDetail;