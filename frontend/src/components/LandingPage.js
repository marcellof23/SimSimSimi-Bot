import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { FaChevronDown, FaEllipsisH } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  tes: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/Landing.jpeg'})`,
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    left :"60px",
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#ffdf6b',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#fea82f',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.tes} id="header">
       
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Sim<span className={classes.colorText}>SimSimi.</span>
          </h1>
          <IconButton>
            <FaEllipsisH className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Sim<span className={classes.colorText}>SimSimi.</span>
          </h1>
            <IconButton href="/chat">
              <FaChevronDown className={classes.goDown} />
            </IconButton>
        </div>
         <div class="Character">
                  <img class="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />      
                  <img class="Character_spritesheet pixelart face-down" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
      </div>
      </Collapse>
    </div>
  );
}