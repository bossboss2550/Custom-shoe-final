
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
import MultiActionAreaCard from '../components/shoelist'
import Gridshoe from '../components/shoegrid';
import { useRouter } from 'next/router';
import Link from 'next/link'
import shoeinfo from './api/shoedata';
import firebase from 'firebase/app'
import 'firebase/storage'
import { useState } from 'react';


export default function Index() {
  const { user, logout } = useUser()
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const handleUpload = () => {
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      snapshot => { },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrl(url)
          })
      }
    )
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  console.log("image: ", image)



  if (user) {

    return (
      <div >
        <Gridshoe />
        <input type='file' onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        {url}
        <img src={url} />
      </div>

    )

  }

  else return (
    <>
      <main >
        <Gridshoe />
      </main>
    </>
  )
}