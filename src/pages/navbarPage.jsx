import { Box } from "@chakra-ui/react"
import { Navbar } from "../components/navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer"

export const NavbarPage = () => {
    return (
        <Box>
            <Navbar />
            <Outlet /> 
            <Footer />
            {/* outlet nerima semua path yg ada dichildren di app.js*/}
        </Box>
    )
}