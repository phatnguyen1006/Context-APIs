import React, { useState,useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { ThemeContext } from 'styled-components';
import { ThemeContext } from '../context/change-theme.js'
// import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar({ children }) {
  const { state, dispatch } = useContext(ThemeContext)
  const [ demo, setDemo] = useState(true)
    const classes = useStyles();
    const changeColor = () => {
        dispatch({
            type: 'CHANGE',
            payload: {
                color: 'purple'
            }
        })
    }
  
    
  
  // componentsDidUpdate
  // Moi khi components tac dong den cay DOM / UI
  // Do khi co 1 state thay doi

  // useEffect(() => {
  //   console.log("Effected!!")
  // })
// --------------------------------------------

  // componentsDidMount
  // Dependencies array - Nhan cac bien 
  // Components code 
  // Quyet dinh Code chay hay khong
  // Tuy thuoc vao bien
  // Khong phu thuoc vao ai khi de mang rong~, chi chay Effect 1 lan

  // useEffect(() => {
  //   console.log("Effected!!")
  //   // setDemo(false)
  // }, [])
// ----------------------------------------------

  // componentsWillMount
  // Update khi co dieu kien, dependency
  // demo thay doi thi render lai ham duoi

  // useEffect(() => {
  //   console.log("re-render Effected!!")
  // }, [demo])
// -----------------------------------------------

  // componentsWillUnMount
  // Đảm bảo các State cũ đã được hủy
  // Thường xài cho các hành động cập nhật State liên tục
  // Chat app...

  // useEffect(() => {
  //   // clean up
  // })
// ----------------------------------------------

    return (
    <>
        <div className={classes.root}>
            <AppBar style={{ background: state.color }} position="static">
            <Toolbar>
                <IconButton onClick={changeColor} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                NTP
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </div>
        { children }
    </>
    );
}

