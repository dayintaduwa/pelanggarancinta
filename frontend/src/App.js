import React from "react";
import ReactDOM from "react-dom";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Sekolah from "./pages/Sekolah";
import Siswa from "./pages/Siswa";
import Pelanggarann from "./pages/Pelanggarann";
import Kategori_Pelanggaran from "./pages/Kategori_Pelanggaran";
import Petugas from "./pages/Petugas";
import Kelas from "./pages/Kelas";

export default function App() {
    return <div>
        <CssBaseLine /> 
        <Router>
            <Box sx={{
                bgcolor: (theme) => theme.palette.background.default,minHeight: "100vh"
            }}>
                <Routes>
                    <Route path="/sekolah"
                    element={<Sekolah />} />
                    <Route path="/siswa"
                    element={<Siswa />} />
                    <Route path="/pelanggarann"
                    element={<Pelanggarann />} />
                    <Route path="/kategori_pelanggaran"
                    element={<Kategori_Pelanggaran />} />
                    <Route path="/petugas"
                    element={<Petugas />} />
                    <Route path="/kelas"
                    element={<Kelas />} />
                </Routes>
            </Box>
        </Router>
    </div>
}

ReactDOM.render(<App />, document.
getElementById("root"))