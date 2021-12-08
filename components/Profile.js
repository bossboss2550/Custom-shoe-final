import React,{useState} from "react";
import firebase from 'firebase/app'
import { useUser } from '../auth/useUser'
import 'firebase/firestore'

const Profile = (props) => {
  const[Name, setName] = useState("");
  const[Age, setAge] = useState("");
  const[Address, setAddress] = useState("");
  const[Sex, setSex] = useState("");
  
  const { user } = useUser();


  class Data {
    constructor(Name, Sex, Age, Address) {
      this.Name = Name;
      this.Sex = Sex;
      this.Address = Address;
      this.Age = Age;
    }
    toString() {
      return this.Name + "," + this.Sex + "," + this.Address + "," + this.Age;
    }
  }

  var DataConverter = {
    toFirestore: function (Data) {
      return {
        Name: Data.Name,
        Age: Data.Age,
        Sex: Data.Sex,
        Address: Data.Address,
        

      };
    },
    fromFirestore: function (snapshot, options) {
      const data = snapshot.data(options);
      return new Data(data.Name, data.Sex, data.Age , data.Address );
    }
  }

  firebase.firestore().collection("User").doc(user.id)
    .withConverter(DataConverter)
    .get().then((doc) => {
      if (doc.exists) {

        var Name = doc.data().Name;
        var Age = doc.data().Age;
        var Sex = doc.data().Sex;
        var Address = doc.data().Address;
        

        setName(Name.toString());
        setAge(Age.toString());
        setSex(Sex.toString());
        setAddress(Address.toString());
        
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
    if(user){
    return (
      <>
      <NavbarArtist/>
      <div className="box-profile">
          <div className="mt-5">
              <img
                  alt="Imge"
                  src={userProfile}
                  className=" max-w-100-px rounded-full"
              />
          </div>
          <div className="box-profile-1 ">
              <label id="name">
                  Name : {Name}
              </label>
          </div>
          <div className="box-profile-1 ">
              <label>
                  About me
              </label>
          </div>
          <div>
              <label>
                  {Sex,Age,Address}
              </label>
          </div>
          <div className="box-profile-2 ">
              <div className=" profile-grid ">
                  <h2>
                      Picture
                  </h2>
              </div>
              <div className="profile-grid" >
                  <div className="img-item ">
                  <img src="/Image/pexels-photo-2088167.jpeg"
                      className="max-w-200-px "
                  />
                 </div> 
                 <div className="img-item ">
                  <img src="/Image/Logo1.png"
                      className="max-w-200-px "
                  />
                 </div> 
                 <div className="img-item ">
                  <img src="/Image/Logo2.png"
                      className="max-w-200-px "
                  />
                 </div> 
                 <div className="img-item ">
                  <img src="/Image/bg1.jpg"
                      className="max-w-200-px "
                  />
                 </div> 
                 
              </div>
          </div>

      </div>

</>

    )
}
}

export default Profile;