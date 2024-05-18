// import React, { useEffect, useState } from 'react'
// import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BrowserRouter as Router, Link} from "react-router-dom";
// // import useRequestResource from 'src/hooks/useRequestResource';

// import client from 'src/Utils/client';


//     const results = [
//         {
//             // id: 1,
//             // nama: "SMK Brantas Karangkates",
//             // alamat: "Jl. Lolaras No. 14 Karangkates",
//             // kota: "Malang",
//             // provinsi: "Jawa Timur",
//             // notelp: "(0341)385876",
//             // email: "smkbrantas@gmail.com",
//             // website: "https://smkbrantaskarangkates.sch.id/",
//             // catatan: "Disiplin Tanggung Jawab Patuh Taat "

//         },
//         {
//             // id: 2,
//             // nama: "SMKN 8 Jember",
//             // alamat: "Jalan apelita No.27",
//             // kota: "Jember",
//             // provinsi: "Jawa Timur",
//             // notelp: "0182327",
//             // email:"smknjember@gmail.com",
//             // website:"smknjember.sch.id",
//             // catatan:"catatan",

//         }
//     ]

//     export default function Siswa() {
//         const [ siswaData, setSiswaData] = useState([]);
    
//         useEffect(() => {
//             client.get('api/siswa/')
//                 .then(({ data }) => {
//                     setSiswaData(data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }, []);

// return (
//     <div>
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 360 }} size="small">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell align="right">
//                             Nama Sekolah
//                         </TableCell>
//                         <TableCell align="center">
//                             NIS
//                         </TableCell>
//                         <TableCell align="center">
//                             Nama
//                         </TableCell>
//                         <TableCell align="center">
//                             Kelas 
//                         </TableCell>
//                         <TableCell align="center">
//                             Nama Orang Tua
//                         </TableCell>
//                         <TableCell align="center">
//                             Hp Orang Tua
//                         </TableCell>
//                         <TableCell align="center">
//                             Email Orang Tua
//                         </TableCell>
//                         <TableCell align="center">
//                             Catatan
//                         </TableCell>
//                         <TableCell align="center">
//                             Actions
//                         </TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {siswaData.map((r) => {
//                         return <TableRow key={r.id}>
//                             <TableCell align="center">
//                                 {r.SekolahId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.NIS}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Nama}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.KelasId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.NamaOrtu}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.HpOrtu}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.EmailOrtu}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Catatan}
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
//                                     <Link to={`/siswa/edit/${r.id}`} key="siswa-edit">
//                                         <IconButton size="large">
//                                             <EditIcon />
//                                         </IconButton>
//                                     </Link>

//                                     <IconButton size="large" onClick={null}>
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                             </TableCell>
//                         </TableRow>
//                     })}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     </div>
//   )
// }

// import React, { useEffect, useState } from 'react';
// import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import client from 'src/Utils/client';

// export default function Siswa() {
//     const [siswaData, setSiswaData] = useState([]);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/siswa/')
//             .then(({ data }) => {
//                 setSiswaData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/siswa/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setSiswaData((prevData) => prevData.filter((item) => item.id !== id));
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 360 }} size="small">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center">Nama Sekolah</TableCell>
//                             <TableCell align="center">NIS</TableCell>
//                             <TableCell align="center">Nama</TableCell>
//                             <TableCell align="center">Kelas</TableCell>
//                             <TableCell align="center">Nama Orang Tua</TableCell>
//                             <TableCell align="center">Hp Orang Tua</TableCell>
//                             <TableCell align="center">Email Orang Tua</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {siswaData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.NIS}</TableCell>
//                                 <TableCell align="center">{r.Nama}</TableCell>
//                                 <TableCell align="center">{r.KelasId}</TableCell>
//                                 <TableCell align="center">{r.NamaOrtu}</TableCell>
//                                 <TableCell align="center">{r.HpOrtu}</TableCell>
//                                 <TableCell align="center">{r.EmailOrtu}</TableCell>
//                                 <TableCell align="center">{r.Catatan}</TableCell>
//                                 <TableCell align="center">
//                                     <Box sx={{ display: "flex", justifyContent: "center" }}>
//                                         <Link to={`/siswa/edit/${r.id}`} key="siswa-edit">
//                                             <IconButton size="large">
//                                                 <EditIcon />
//                                             </IconButton>
//                                         </Link>
//                                         <IconButton size="large" onClick={() => handleDelete(r.id)}>
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </Box>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BrowserRouter as Router, Link } from "react-router-dom";
import client from 'src/Utils/client';

export default function Siswa() {
    const [siswaData, setSiswaData] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [currentSiswa, setCurrentSiswa] = useState(null);

    useEffect(() => {
        client.get('http://127.0.0.1:8000/api/siswa/')
            .then(({ data }) => {
                setSiswaData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmDelete) {
            client.delete(`http://127.0.0.1:8000/api/siswa/${id}/`)
                .then(() => {
                    setSiswaData((prevData) => prevData.filter((item) => item.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEdit = (siswa) => {
        setCurrentSiswa(siswa);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setCurrentSiswa(null);
    };

    const handleSaveEdit = () => {
        if (currentSiswa) {
            client.put(`http://127.0.0.1:8000/api/siswa/${currentSiswa.id}/`, currentSiswa)
                .then(() => {
                    setSiswaData((prevData) => prevData.map((item) => item.id === currentSiswa.id ? currentSiswa : item));
                    handleCloseEditDialog();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentSiswa({
            ...currentSiswa,
            [name]: value
        });
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nama Sekolah</TableCell>
                            <TableCell align="center">NIS</TableCell>
                            <TableCell align="center">Nama</TableCell>
                            <TableCell align="center">Kelas</TableCell>
                            <TableCell align="center">Nama Orang Tua</TableCell>
                            <TableCell align="center">Hp Orang Tua</TableCell>
                            <TableCell align="center">Email Orang Tua</TableCell>
                            <TableCell align="center">Catatan</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {siswaData.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell align="center">{r.SekolahId}</TableCell>
                                <TableCell align="center">{r.NIS}</TableCell>
                                <TableCell align="center">{r.Nama}</TableCell>
                                <TableCell align="center">{r.KelasId}</TableCell>
                                <TableCell align="center">{r.NamaOrtu}</TableCell>
                                <TableCell align="center">{r.HpOrtu}</TableCell>
                                <TableCell align="center">{r.EmailOrtu}</TableCell>
                                <TableCell align="center">{r.Catatan}</TableCell>
                                <TableCell align="center">
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <IconButton size="large" onClick={() => handleEdit(r)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton size="large" onClick={() => handleDelete(r.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Siswa</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan edit informasi siswa di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Nama"
                        label="Nama"
                        type="text"
                        fullWidth
                        value={currentSiswa?.Nama || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="NIS"
                        label="NIS"
                        type="text"
                        fullWidth
                        value={currentSiswa?.NIS || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="KelasId"
                        label="Kelas"
                        type="text"
                        fullWidth
                        value={currentSiswa?.KelasId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="NamaOrtu"
                        label="Nama Orang Tua"
                        type="text"
                        fullWidth
                        value={currentSiswa?.NamaOrtu || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="HpOrtu"
                        label="Hp Orang Tua"
                        type="text"
                        fullWidth
                        value={currentSiswa?.HpOrtu || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="EmailOrtu"
                        label="Email Orang Tua"
                        type="email"
                        fullWidth
                        value={currentSiswa?.EmailOrtu || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentSiswa?.Catatan || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}