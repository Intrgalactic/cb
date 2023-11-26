
const Detail = ({detail}) => {
    return (
        <div className="detail">
            <div className="detail__heading">
                <h5>{detail.heading}</h5>
                <h5 onClick={detail.edit} className="detail-edit">Edit</h5>
            </div>
            <p>{detail.content}</p>
        </div>
    )
}

export default Detail;