import Image from "next/image";
import Layout from "./layout";
import HeadSection  from "./components/mainSection/Header";
import Modal from './components/authentication/Modal'
import LoginModal from "./components/modals/loginModal"
import RegisterModal from "./components/modals/registerModal";


export default function Home() {
  return (
    <>
      <RegisterModal  />
        <HeadSection label="HOME"/>
    </>
  );
}
