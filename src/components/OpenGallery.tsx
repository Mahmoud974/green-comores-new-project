import {
  Drawer,

  DrawerContent,

  DrawerHeader,

  DrawerTrigger,
} from "@/components/ui/drawer";

import Galery from "./Galery";

export default function OpenGallery() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Galery />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
