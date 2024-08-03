import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


//image import : 
import codeImage from "../public/code.jpg"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <Image src={codeImage} alt="code image" width={500} height={500}/>
      <hr/>
      <Image src={"/code.jpg"} alt="code image" width={500} height={500}/>
       <br/>
       <Image src={"https://res.cloudinary.com/mudemoenv/image/upload/v1718251473/zidgvnsed9at6jabzcnc.jpg"} alt="code image" width={500} height={500}/>
     
       <br/>

      <img src="https://res.cloudinary.com/mudemoenv/image/upload/v1718251473/zidgvnsed9at6jabzcnc.jpg" width={500}/>

    </>
  );
}
