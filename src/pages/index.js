import { IntroductionComponent } from "@/components/Portfolio/introduction";
import {NavbarComponent } from "@/components/Portfolio/navbar";
import {ContainerComponent } from "@/components/Portfolio/container/index";
import {AboutComponent } from "@/components/Portfolio/about";
import {ContactComponent } from "@/components/Portfolio/contact";




export default function Home() {
  return (
    <div>

      <NavbarComponent/>;
      <IntroductionComponent/>
      <ContainerComponent/>
      <AboutComponent/>
      <ContactComponent/>
      
    </div>
  );
}