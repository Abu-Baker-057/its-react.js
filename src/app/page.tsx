import { AboutPage } from "@/components/AboutPage";
import Input from "@/components/input";
import { Button } from "@/components/ui/button";
import Use from "@/components/use";
import styles from "./appp.module.css";
import Profile from "@/components/displaydata";
import ConditionalRendering from "@/components/Conditionalrendering"
import Renderinglist from "@/components/renderinglist";

export default function Home() {
  return (
    <div className="p-5">
      <div className="p-3 flex gap-5 flex-wrap">
        <Button> Simple Shadcn Button</Button>
        <Button variant={"secondary"}>Secondary Shadcn Button</Button>
        <Button variant={"ghost"}>Ghost Shadcn Button</Button>
        <Button variant={"destructive"}>Destructive Shadcn Button</Button>
        <Button variant={"outline"}>Outline Shadcn Button</Button>
        <Button variant={"link"}>Link Shadcn Button</Button>
        <Use />
        <Input />
      </div>
      <AboutPage />
      <img
      className={styles.img}
      src="https://media.istockphoto.com/id/1831908061/photo/a-balcony-door-featuring-stained-glass-allows-white-light-to-shine-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=nMbvwPn4GTNOObJyzksXrDXjJ98FAjZWY6BXoe8et1Q="/>
      <Profile />
      <ConditionalRendering />
      <Renderinglist />



    </div>
  );
}
