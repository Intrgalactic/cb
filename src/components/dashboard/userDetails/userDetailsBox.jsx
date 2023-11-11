import { useState,useEffect } from "react";
import account from 'src/assets/images/icons/user-details/gradient-categories/account.png';
import contact from 'src/assets/images/icons/user-details/gradient-categories/contact.png';
import password from 'src/assets/images/icons/user-details/white-sub-records/password.png';
import email from 'src/assets/images/icons/user-details/white-sub-records/email.png';
import phone from 'src/assets/images/icons/user-details/white-sub-records/phone.png';
import username from 'src/assets/images/icons/user-details/white-sub-records/username.png';
import UserDetails from "./userDetails";

const UserDetailsBox = () => {
    const [userDetails,setUserDetails] = useState();
    useEffect(() => {
        //Retrieve User Details
    },[]);
    const details = [{
        heading: "Account Information",
        categoryImg:account,
        items: [{
            content: "Username - Matyniu",
            img: username
        },
        {
            content: "Pasword - ********",
            img: password
        }]
    },{
        heading: "Contact Information",
        categoryImg:contact,
        items: [{
            content: "Email - Matyniu@gmail.com",
            img: email
        },
        {
            content: "Phone Number - [flag] 514 257 250",
            img: phone
        }]
    }]
    return (
        <div className="dashboard-box__user-details__box">
            {details.map((category,index) => (
                <UserDetails detailsIndex={index} items={category.items} key={index} categoryImg={category.categoryImg} heading={category.heading}/>
            ))}
        </div>
    )
}

export default UserDetailsBox;