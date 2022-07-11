import React, { Children } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/theme/theme";

const Theme = ({Children}) =>{
    <ThemeProvider theme={theme}> {Children} </ThemeProvider>
}

export default Theme