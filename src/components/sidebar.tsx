import Link from "next/link"
import {Fade as Hamburger} from "hamburger-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import * as React from 'react';
import cart from "../../../public/cart-fill.svg"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import closeicon from "../../public/icon-close.svg"
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [isOpen, setOpen] = React.useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <div className='fixed flex justify-center mx-auto items-center flex-col gap-6 top-0 left-0 z-10 h-screen bg-white w-40 font-bold'>
        <a href="/">Home</a>
        <a href="/Men">Men</a>
        <a href="/Women">Women</a>
        <a href="/Kids">Kids</a>
        <a href="#About">About</a>
      </div>
      <div className='fixed top-0 bottom-0 right-0 z-10 w-1/3 bg-black-75 bg-opacity-75'></div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="hamburger-iconnav">
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="hover:rounded-full hover:bg-gray-200 hover:text-black rounded-full" onClick={toggleDrawer(anchor, true)}><div className="flex h-10 w-full  justify-center">
  <div className="group flex h-10 w-10 cursor-pointer items-center justify-center  hover:bg-slate-200">
    <div className="space-y-2">
      <span className="block h-1 w-7 origin-center rounded-full bg-black transition-transform ease-in-out group-hover:w-7 group-hover:translate-y-1.5 group-hover:rotate-45"></span>
      <span className="block h-1 w-7 origin-center rounded-full bg-black transition-transform ease-in-out group-hover:w-7 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
    </div>
  </div>
</div></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

  );
}