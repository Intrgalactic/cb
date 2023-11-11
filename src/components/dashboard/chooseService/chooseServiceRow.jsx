import ChooseService from './chooseService';

const ChooseServiceRow = ({items}) => {
    console.log(items);
    return (
        <div className="dashboard-box__choose-service__row">
            {items.map((item,index) => (
                <ChooseService link={item.link} key={index} name={item.name} img={item.img}/>
            ))}
        </div>
    )
}

export default ChooseServiceRow;