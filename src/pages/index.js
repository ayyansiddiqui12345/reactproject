import { IntroductionComponent } from "@/components/Portfolio/introduction";
import {NavbarComponent } from "@/components/Portfolio/navbar";
import {ContainerComponent } from "@/components/Portfolio/container/index";
import {AboutComponent } from "@/components/Portfolio/about";
import {ContactComponent } from "@/components/Portfolio/contact";
import {FooterComponent } from "@/components/Portfolio/footer";





export default function Home() {
  return (
    <div>

      <NavbarComponent/>;
      <IntroductionComponent/>
      <ContainerComponent/>
      <AboutComponent/>
      <ContactComponent/>
      <FooterComponent/>
      
    </div>
  );
}