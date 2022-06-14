import React, { useRef, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, useGLTF, OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import firebase from 'firebase/app'
import { useRouter } from 'next/router'
import 'firebase/storage'
import { useUser } from '../auth/useUser'
import style from "../pages/register.module.css";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import Swal from "sweetalert2";

export default function App2(props) {

    const router = useRouter()
    const { user } = useUser()
    var today = new Date()
    var minutes = today.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var sec = today.getSeconds()
    sec = sec > 9 ? sec : '0' + sec;

    var time = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '  ' + today.getHours() + ':' + minutes + ':' + sec;

    const [Front, setFront] = useState(props.Front);
    const [Midside, setMidside] = useState(props.Midside);
    const [Side, setSide] = useState(props.Side);
    const [Up, setUp] = useState(props.Up);
    const [Back, setBack] = useState(props.Back);
    const [Down, setDown] = useState(props.Down);
    const [Topic, setTopic] = useState(props.Topic);
    function Model({ ...props }) {


        const group = useRef()
        const texture1 = new THREE.TextureLoader().load(Front); //หน้าล่าง
        const texture2 = new THREE.TextureLoader().load(Midside); //ข้างกลาง
        const texture3 = new THREE.TextureLoader().load(Midside); //ข้างกลาง
        const texture4 = new THREE.TextureLoader().load(Side); //ข้างริม
        const texture5 = new THREE.TextureLoader().load(Side); //ข้างริม
        const texture6 = new THREE.TextureLoader().load('https://th.bing.com/th/id/OIP.QsLz43H_JYtiDSoH3c2PZAAAAA?pid=ImgDet&rs=1'); //tag
        const texture7 = new THREE.TextureLoader().load('https://th.bing.com/th/id/OIP.QsLz43H_JYtiDSoH3c2PZAAAAA?pid=ImgDet&rs=1'); //tag
        const texture8 = new THREE.TextureLoader().load('https://th.bing.com/th/id/OIP.QsLz43H_JYtiDSoH3c2PZAAAAA?pid=ImgDet&rs=1'); //บนเชือก
        const texture9 = new THREE.TextureLoader().load(Back); //หลัง
        const texture10 = new THREE.TextureLoader().load(Back); //หลัง
        const texture11 = new THREE.TextureLoader().load(Down); //พื้น
        const texture12 = new THREE.TextureLoader().load(Up); //หน้า

        const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
        const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
        const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
        const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
        const material5 = new THREE.MeshBasicMaterial({ map: texture5 });
        const material6 = new THREE.MeshBasicMaterial({ map: texture6 });
        const material7 = new THREE.MeshBasicMaterial({ map: texture7 });
        const material8 = new THREE.MeshBasicMaterial({ map: texture8 });
        const material9 = new THREE.MeshBasicMaterial({ map: texture9 });
        const material10 = new THREE.MeshBasicMaterial({ map: texture10 });
        const material11 = new THREE.MeshBasicMaterial({ map: texture11 });
        const material12 = new THREE.MeshBasicMaterial({ map: texture12 });

        const { nodes, materials } = useGLTF('/RT1.glb')
        console.log(time)
        return (

            <group ref={group} {...props} dispose={null}>
                <group position={[-0.06, 0.13, -0.29]} scale={0.02}>
                    <mesh
                        geometry={nodes.Box013003.geometry}
                        material={materials['Clean Aluminium Polished.003']}
                        position={[-52.02, 12.13, 13.97]}
                        rotation={[0, 0.26, 0.47]}
                    />
                    <mesh
                        geometry={nodes.Cylinder013003.geometry}
                        material={nodes.Cylinder013003.material}
                        position={[97.14, -60.35, -27.76]}
                        rotation={[0, 0.4, -Math.PI]}
                        scale={[-0.94, -1, -0.94]}
                    />
                    <mesh
                        geometry={nodes.nike_swoosh_met048003.geometry}
                        material={nodes.nike_swoosh_met048003.material}
                        position={[37.29, -58.09, -13.09]}
                        rotation={[-Math.PI / 2, 0, 0.44]}
                        scale={[-0.03, -0.03, -0.9]}
                    />
                    <mesh
                        geometry={nodes.nike_swoosh_met049003.geometry}
                        material={nodes.nike_swoosh_met049003.material}
                        position={[70.4, -32.47, 20.04]}
                        rotation={[0.1, 0.35, -0.04]}
                        scale={[0.06, 0.06, 0.9]}
                    />
                    <mesh
                        geometry={nodes.nike_swoosh_met050003.geometry}
                        material={nodes.nike_swoosh_met050003.material}
                        position={[125.47, 34.19, -35.41]}
                        rotation={[-2.82, 1.3, 2.83]}
                        scale={[0.05, 0.05, 1.7]}
                    />
                    <mesh
                        geometry={nodes.Object1000003.geometry}
                        material={nodes.Object1000003.material}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1001003.geometry}
                        material={nodes.Object1001003.material}
                        position={[3.62, -56.57, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1002003.geometry}
                        material={nodes.Object1002003.material}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object998003.geometry}
                        material={material1}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <group position={[3.62, -65.75, -2.2]} rotation={[0, 0.26, -Math.PI]} scale={-1.08}>
                        <mesh geometry={nodes.Mesh047.geometry} material={material2} />
                        <mesh geometry={nodes.Mesh047_1.geometry} material={material3} />
                    </group>
                    <group position={[3.62, -65.75, -2.2]} rotation={[0, 0.26, -Math.PI]} scale={-1.08}>
                        <mesh geometry={nodes.Mesh072.geometry} material={material4} />
                        <mesh geometry={nodes.Mesh072_1.geometry} material={material5} />
                    </group>

                    <mesh
                        geometry={nodes.Object978003.geometry}
                        material={material6}
                        position={[58.82, 4.56, 34.81]}
                        rotation={[Math.PI, 1.31, 0]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1003003.geometry}
                        material={material7}
                        position={[35.04, 4.56, -53.95]}
                        rotation={[0, -1.31, 0]}
                        scale={1.08}
                    />

                    <mesh
                        geometry={nodes.Object990003.geometry}
                        material={material8}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1005003.geometry}
                        material={material9}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1007003.geometry}
                        material={material10}
                        position={[3.42, -65.75, -2.15]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object1006003.geometry}
                        material={material11}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object979003.geometry}
                        material={material12}
                        position={[3.59, -65.75, -2.31]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object980003.geometry}
                        material={nodes.Object980003.material}
                        position={[4.79, -64.08, -2.52]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object981003.geometry}
                        material={nodes.Object981003.material}
                        position={[-28.88, 17.76, 9.15]}
                        rotation={[-3.12, 1.23, 0.07]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object982003.geometry}
                        material={nodes.Object982003.material}
                        position={[-34.07, 6.69, 8.74]}
                        rotation={[2.97, 1.31, 0.08]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object983003.geometry}
                        material={nodes.Object983003.material}
                        position={[-27.92, 15.6, 6.52]}
                        rotation={[2.71, 1.33, 0.3]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object984003.geometry}
                        material={nodes.Object984003.material}
                        position={[-0.57, 33.2, 0.87]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object985003.geometry}
                        material={nodes.Object985003.material}
                        position={[-12.67, 24.42, 7.72]}
                        rotation={[2.92, 1.29, 0.37]}
                        scale={[-1.11, -1.11, -1.11]}
                    />
                    <mesh
                        geometry={nodes.Object986003.geometry}
                        material={nodes.Object986003.material}
                        position={[-25.23, 18.67, 7.36]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object987003.geometry}
                        material={nodes.Object987003.material}
                        position={[-25.23, 18.67, 7.36]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object988003.geometry}
                        material={nodes.Object988003.material}
                        position={[-34.27, 6.9, 8.01]}
                        rotation={[2.97, 1.31, 0.16]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object989003.geometry}
                        material={nodes.Object989003.material}
                        position={[-26.86, 18.76, 7.8]}
                        rotation={[-Math.PI, 1.31, 0]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object991003.geometry}
                        material={nodes.Object991003.material}
                        position={[-39.46, 16.98, 5.67]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object992003.geometry}
                        material={nodes.Object992003.material}
                        position={[4.26, -63.71, -4.48]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object993003.geometry}
                        material={nodes.Object993003.material}
                        position={[-16.83, 28.44, -0.74]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.11, -1.11, -1.11]}
                    />
                    <mesh
                        geometry={nodes.Object994003.geometry}
                        material={nodes.Object994003.material}
                        position={[-0.55, 33.2, 1.1]}
                        rotation={[2.91, 1.3, 0.22]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object995003.geometry}
                        material={nodes.Object995003.material}
                        position={[-35.41, 13.08, 13.89]}
                        rotation={[2.92, 1.29, 0.37]}
                        scale={[-1.08, -1.08, -1.08]}
                    />
                    <mesh
                        geometry={nodes.Object996003.geometry}
                        material={nodes.Object996003.material}
                        position={[4.79, -64.08, -2.52]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Object997003.geometry}
                        material={nodes.Object997003.material}
                        position={[4.79, -64.08, -2.52]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                    <mesh
                        geometry={nodes.Shape013003.geometry}
                        material={materials['stich white.006']}
                        position={[3.62, -65.75, -2.2]}
                        rotation={[0, 0.26, -Math.PI]}
                        scale={-1.08}
                    />
                </group>
            </group>
        )

    }
    const sendData = () => {

        if (!Topic) {
            Swal.fire({
                title: "Error",
                text: "กรุณาตั้งชื่อรองเท้าของคุณ",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",

            })
        } else {
            try {
                Swal.fire({
                    title: "Are you sure?",
                    text: "คุณต้องการบันทึก  " + Topic + "  ใช่หรือไม่ ? ",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",

                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await firebase
                            .firestore()
                            .collection('Model')
                            .doc()
                            .set({
                                uid: user.id,
                                topic: Topic,
                                Email: user.email,
                                Type: "NIKE AIR FORCE1",
                                Date: time,
                                urltexfront: Front,
                                urltexmidside: Midside,
                                urltexside: Side,
                                urltexup: Up,
                                urltexdown: Down,
                                urltexback: Back,

                            }
                            )
                            .then(async () => {
                                await Swal.fire({
                                    title: "Save!",
                                    text: "รองเท้า " + Topic + "  ถูกบันทึกแล้ว !",
                                    icon: "success",
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                await router.push('/gallery')

                            });

                    }
                })
            } catch (error) {
                console.log(error)
                alert(error)
            }

        }
    }
    const CssTextField = styled(TextField)({
        "& .MuiInputBase-input": {
            borderRadius: 4,
            position: "relative",
            border: "1px solid #ced4da",
            fontSize: 16,
            width: "auto",
            padding: "8px 10px",
        },
        "& label.Mui-focused": {
            color: "#FFB830",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#030B11",

        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#030B11",

            },
            "&:hover fieldset": {
                borderColor: "#F4FAFF",

            },
            "&.Mui-focused fieldset": {
                borderColor: "#FFB830"
            },
            "&.MuiInputLabel-root": {
                backgroundColor: "#030B11"
            }
        }
    });

    const ResetData = () => {
        setFront("")
        setMidside("")
        setSide("")
        setBack("")
        setUp("")
        setDown("")
    }


    return (
        <div>
            <br />
            <div className={style.loginbox4}>

                <br />
                <input className={style.input2} placeholder="Name" type="Text" id="Name" value={Topic}
                    onChange={(e) => setTopic(e.target.value)} ></input>

                <br />
                <input className={style.input2} placeholder="Front LinkPic Url " type="Text" id="Name" value={Front}
                    onChange={(e) => setFront(e.target.value)} ></input>
                <br />
                <input className={style.input2} placeholder="Mid LinkPic Url" type="Text" id="Name" value={Midside}
                    onChange={(e) => setMidside(e.target.value)}  ></input>
                <br />
                <input className={style.input2} placeholder="Side LinkPic Url" type="Text" id="Name" value={Side}
                    onChange={(e) => setSide(e.target.value)}  ></input>
                <br />
                <input className={style.input2} placeholder="Back LinkPic Url" type="Text" id="Name" value={Back}
                    onChange={(e) => setBack(e.target.value)}  ></input>
                <br />
                <input className={style.input2} placeholder="Top LinkPic Url" type="Text" id="Name" value={Up}
                    onChange={(e) => setUp(e.target.value)} ></input>
                <br />
                <input className={style.input2} placeholder="Buttom LinkPic Url" type="Text" id="Name" value={Down}
                    onChange={(e) => setDown(e.target.value)} ></input>
                <br />
                <button className={style.button3} onClick={ResetData} style={{ width: '100%' }}>ล้างข้อมูล</button>
                <button className={style.button2} onClick={sendData} style={{ width: '100%' }}>บันทึกข้อมูล</button>

            </div>
            <div className={style.container3}>
                <div className={style.loginbox5}>

                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    )
}