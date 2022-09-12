import { device } from "assets/Styles/theme"

export const setBackground = (desktop, tablet, mobile) =>{
    let background
    if(window.matchMedia(`${device.desktop}`).matches) background = desktop
    else if(window.matchMedia(`${device.tablet}`).matches) background = tablet
    else background = mobile

    return background
}