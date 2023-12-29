import { IntroductionComponent } from "@/components/Portfolio/introduction";
import {NavbarComponent } from "@/components/Portfolio/navbar";
import {ContainerComponent } from "@/components/Portfolio/container/index";
import {AboutComponent } from "@/components/Portfolio/about";



export default function Home() {
  return (
    <div>

      <NavbarComponent/>;
      <IntroductionComponent/>
      <ContainerComponent/>
      <AboutComponent/>
      
    </div>
  );
}