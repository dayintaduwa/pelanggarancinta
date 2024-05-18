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

//     export default function Kategori_Pelanggaran() {
//         const [kategori_pelanggaranData, setKategori_PelanggaranData] = useState([]);
    
//         useEffect(() => {
//             client.get('api/kategori/')
//                 .then(({ data }) => {
//                     setKategori_PelanggaranData(data);
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
//                         <TableCell align="center">
//                             Sekolah
//                         </TableCell>
//                         <TableCell align="center">
//                             Nama
//                         </TableCell>
//                         <TableCell align="center">
//                             Poin
//                         </TableCell>
//                         <TableCell align="center">
//                             Pesan
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
//                     {kategori_pelanggaranData.map((r) => {
//                         return <TableRow key={r.id}>
//                             <TableCell align="center">
//                                 {r.SekolahId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Nama}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Poin}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Pesan}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Catatan}
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Box sx={{ display: "flex", justifyContent: "center"}}>
//                                     <Link to={`/kategori_pelanggaran/edit/${r.id}`} key="kategori_pelanggaran-edit">
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

// export default function Kategori_Pelanggaran() {
//     const [kategori_pelanggaranData, setKategori_PelanggaranData] = useState([]);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/kategori/')
//             .then(({ data }) => {
//                 setKategori_PelanggaranData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/kategori/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setKategori_PelanggaranData((prevData) => prevData.filter((item) => item.id !== id));
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
//                             <TableCell align="center">Sekolah</TableCell>
//                             <TableCell align="center">Nama</TableCell>
//                             <TableCell align="center">Poin</TableCell>
//                             <TableCell align="center">Pesan</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {kategori_pelanggaranData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.Nama}</TableCell>
//                                 <TableCell align="center">{r.Poin}</TableCell>
//                                 <TableCell align="center">{r.Pesan}</TableCell>
//                                 <TableCell align="center">{r.Catatan}</TableCell>
//                                 <TableCell align="center">
//                                     <Box sx={{ display: "flex", justifyContent: "center" }}>
//                                         <Link to={`/kategori_pelanggaran/edit/${r.id}`} key="kategori_pelanggaran-edit">
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

// import React, { useEffect, useState } from 'react';
// import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import client from 'src/Utils/client';

// export default function Kategori_Pelanggaran() {
//     const [kategori_pelanggaranData, setKategori_PelanggaranData] = useState([]);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [currentKategori, setCurrentKategori] = useState(null);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/kategori/')
//             .then(({ data }) => {
//                 setKategori_PelanggaranData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/kategori/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setKategori_PelanggaranData((prevData) => prevData.filter((item) => item.id !== id));
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (kategori) => {
//         setCurrentKategori(kategori);
//         setOpenEditDialog(true);
//     };

//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setCurrentKategori(null);
//     };

//     const handleSaveEdit = () => {
//         if (currentKategori) {
//             client.put(`http://127.0.0.1:8000/api/kategori/${currentKategori.id}/`, currentKategori)
//                 .then(() => {
//                     setKategori_PelanggaranData((prevData) => prevData.map((item) => item.id === currentKategori.id ? currentKategori : item));
//                     handleCloseEditDialog();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentKategori({
//             ...currentKategori,
//             [name]: value
//         });
//     };

//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 360 }} size="small">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center">Sekolah</TableCell>
//                             <TableCell align="center">Nama</TableCell>
//                             <TableCell align="center">Poin</TableCell>
//                             <TableCell align="center">Pesan</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {kategori_pelanggaranData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.Nama}</TableCell>
//                                 <TableCell align="center">{r.Poin}</TableCell>
//                                 <TableCell align="center">{r.Pesan}</TableCell>
//                                 <TableCell align="center">{r.Catatan}</TableCell>
//                                 <TableCell align="center">
//                                     <Box sx={{ display: "flex", justifyContent: "center" }}>
//                                         <IconButton size="large" onClick={() => handleEdit(r)}>
//                                             <EditIcon />
//                                         </IconButton>
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

//             <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
//                 <DialogTitle>Edit Kategori Pelanggaran</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Silakan edit informasi kategori pelanggaran di bawah ini.
//                     </DialogContentText>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         name="SekolahId"
//                         label="Sekolah"
//                         type="text"
//                         fullWidth
//                         value={currentKategori?.SekolahId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Nama"
//                         label="Nama"
//                         type="text"
//                         fullWidth
//                         value={currentKategori?.Nama || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Poin"
//                         label="Poin"
//                         type="text"
//                         fullWidth
//                         value={currentKategori?.Poin || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Pesan"
//                         label="Pesan"
//                         type="text"
//                         fullWidth
//                         value={currentKategori?.Pesan || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Catatan"
//                         label="Catatan"
//                         type="text"
//                         fullWidth
//                         value={currentKategori?.Catatan || ''}
//                         onChange={handleChange}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseEditDialog}>Cancel</Button>
//                     <Button onClick={handleSaveEdit}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BrowserRouter as Router, Link } from "react-router-dom";
import client from 'src/Utils/client';

export default function Kategori_Pelanggaran() {
    const [kategori_pelanggaranData, setKategori_PelanggaranData] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [currentKategori, setCurrentKategori] = useState(null);

    useEffect(() => {
        client.get('http://127.0.0.1:8000/api/kategori/')
            .then(({ data }) => {
                setKategori_PelanggaranData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmDelete) {
            client.delete(`http://127.0.0.1:8000/api/kategori/${id}/`)
                .then(() => {
                    // Update state to remove deleted item
                    setKategori_PelanggaranData((prevData) => prevData.filter((item) => item.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEdit = (kategori) => {
        setCurrentKategori(kategori);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setCurrentKategori(null);
    };

    const handleSaveEdit = () => {
        if (currentKategori) {
            client.put(`http://127.0.0.1:8000/api/kategori/${currentKategori.id}/`, currentKategori)
                .then(() => {
                    setKategori_PelanggaranData((prevData) => prevData.map((item) => item.id === currentKategori.id ? currentKategori : item));
                    handleCloseEditDialog();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleAddNew = () => {
        setCurrentKategori({ SekolahId: '', Nama: '', Poin: '', Pesan: '', Catatan: '' });
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
        setCurrentKategori(null);
    };

    const handleSaveNew = () => {
        if (currentKategori) {
            client.post('http://127.0.0.1:8000/api/kategori/', currentKategori)
                .then(({ data }) => {
                    setKategori_PelanggaranData((prevData) => [...prevData, data]);
                    handleCloseAddDialog();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentKategori({
            ...currentKategori,
            [name]: value
        });
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, mt: 2}}>
                <Button variant="contained" color="primary" onClick={handleAddNew}>
                    Add New Kategori Pelanggaran
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Sekolah</TableCell>
                            <TableCell align="center">Nama</TableCell>
                            <TableCell align="center">Poin</TableCell>
                            <TableCell align="center">Pesan</TableCell>
                            <TableCell align="center">Catatan</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {kategori_pelanggaranData.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell align="center">{r.SekolahId}</TableCell>
                                <TableCell align="center">{r.Nama}</TableCell>
                                <TableCell align="center">{r.Poin}</TableCell>
                                <TableCell align="center">{r.Pesan}</TableCell>
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
                <DialogTitle>Edit Kategori Pelanggaran</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan edit informasi kategori pelanggaran di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah"
                        type="text"
                        fullWidth
                        value={currentKategori?.SekolahId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Nama"
                        label="Nama"
                        type="text"
                        fullWidth
                        value={currentKategori?.Nama || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Poin"
                        label="Poin"
                        type="text"
                        fullWidth
                        value={currentKategori?.Poin || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Pesan"
                        label="Pesan"
                        type="text"
                        fullWidth
                        value={currentKategori?.Pesan || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentKategori?.Catatan || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Add New Kategori Pelanggaran</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan masukkan informasi kategori pelanggaran di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah"
                        type="text"
                        fullWidth
                        value={currentKategori?.SekolahId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Nama"
                        label="Nama"
                        type="text"
                        fullWidth
                        value={currentKategori?.Nama || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Poin"
                        label="Poin"
                        type="text"
                        fullWidth
                        value={currentKategori?.Poin || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Pesan"
                        label="Pesan"
                        type="text"
                        fullWidth
                        value={currentKategori?.Pesan || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentKategori?.Catatan || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog}>Cancel</Button>
                    <Button onClick={handleSaveNew}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

