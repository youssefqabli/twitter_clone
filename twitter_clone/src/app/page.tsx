import Image from "next/image";
import Layout from "./layout";
import HeadSection  from "./components/mainSection/Header";
import Modal from './components/authentication/Modal'
export default function Home() {
  return (
    <>
        <Modal isOpen title="test modal"/>
        <HeadSection label="HOME"/>
    </>
  );
}
