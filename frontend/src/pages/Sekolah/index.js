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

//     export default function Sekolah() {
//         const [sekolahData, setSekolahData] = useState([]);
    
//         useEffect(() => {
//             client.get('api/sekolah/')
//                 .then(({ data }) => {
//                     setSekolahData(data);
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
//                             Nama Sekolah
//                         </TableCell>
//                         <TableCell align="center">
//                             Alamat
//                         </TableCell>
//                         <TableCell align="center">
//                             Kota
//                         </TableCell>
//                         <TableCell align="center">
//                             Provinsi
//                         </TableCell>
//                         <TableCell align="center">
//                             No. Telepon
//                         </TableCell>
//                         <TableCell align="center">
//                             Email
//                         </TableCell>
//                         <TableCell align="center">
//                             Website
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
//                     {sekolahData.map((r) => {
//                         return <TableRow key={r.id}>
//                             <TableCell align="left">
//                                 {r.Nama}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.Alamat}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.Kota}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.Provinsi}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.NoTelp}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.Email}
//                             </TableCell>
//                             <TableCell align="left">
//                                 {r.Website}
//                             </TableCell>

//                             <TableCell align="left">
//                                 {r.Catatan}
//                             </TableCell>
//                             <TableCell align="right">
//                                 <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
//                                     <Link to={`/sekolah/edit/${r.id}`} key="sekolah-edit">
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

// export default function Sekolah() {
//     const [sekolahData, setSekolahData] = useState([]);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/sekolah/')
//             .then(({ data }) => {
//                 setSekolahData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/sekolah/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setSekolahData((prevData) => prevData.filter((item) => item.id !== id));
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
//                             <TableCell align="center">Alamat</TableCell>
//                             <TableCell align="center">Kota</TableCell>
//                             <TableCell align="center">Provinsi</TableCell>
//                             <TableCell align="center">No. Telepon</TableCell>
//                             <TableCell align="center">Email</TableCell>
//                             <TableCell align="center">Website</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {sekolahData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="left">{r.Nama}</TableCell>
//                                 <TableCell align="left">{r.Alamat}</TableCell>
//                                 <TableCell align="left">{r.Kota}</TableCell>
//                                 <TableCell align="left">{r.Provinsi}</TableCell>
//                                 <TableCell align="left">{r.NoTelp}</TableCell>
//                                 <TableCell align="left">{r.Email}</TableCell>
//                                 <TableCell align="left">{r.Website}</TableCell>
//                                 <TableCell align="left">{r.Catatan}</TableCell>
//                                 <TableCell align="right">
//                                     <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//                                         <Link to={`/sekolah/edit/${r.id}`} key="sekolah-edit">
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

// export default function Sekolah() {
//     const [sekolahData, setSekolahData] = useState([]);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [currentSekolah, setCurrentSekolah] = useState(null);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/sekolah/')
//             .then(({ data }) => {
//                 setSekolahData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/sekolah/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setSekolahData((prevData) => prevData.filter((item) => item.id !== id));
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (sekolah) => {
//         setCurrentSekolah(sekolah);
//         setOpenEditDialog(true);
//     };

//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setCurrentSekolah(null);
//     };

//     const handleSaveEdit = () => {
//         if (currentSekolah) {
//             client.put(`http://127.0.0.1:8000/api/sekolah/${currentSekolah.id}/`, currentSekolah)
//                 .then(() => {
//                     setSekolahData((prevData) => prevData.map((item) => item.id === currentSekolah.id ? currentSekolah : item));
//                     handleCloseEditDialog();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentSekolah({
//             ...currentSekolah,
//             [name]: value
//         });
//     };

//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 360 }} size="small">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="center">Nama Sekolah</TableCell>
//                             <TableCell align="center">Alamat</TableCell>
//                             <TableCell align="center">Kota</TableCell>
//                             <TableCell align="center">Provinsi</TableCell>
//                             <TableCell align="center">No. Telepon</TableCell>
//                             <TableCell align="center">Email</TableCell>
//                             <TableCell align="center">Website</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {sekolahData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="left">{r.Nama}</TableCell>
//                                 <TableCell align="left">{r.Alamat}</TableCell>
//                                 <TableCell align="left">{r.Kota}</TableCell>
//                                 <TableCell align="left">{r.Provinsi}</TableCell>
//                                 <TableCell align="left">{r.NoTelp}</TableCell>
//                                 <TableCell align="left">{r.Email}</TableCell>
//                                 <TableCell align="left">{r.Website}</TableCell>
//                                 <TableCell align="left">{r.Catatan}</TableCell>
//                                 <TableCell align="right">
//                                     <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
//                 <DialogTitle>Edit Sekolah</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Silakan edit informasi sekolah di bawah ini.
//                     </DialogContentText>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         name="Nama"
//                         label="Nama Sekolah"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Nama || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Alamat"
//                         label="Alamat"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Alamat || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Kota"
//                         label="Kota"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Kota || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Provinsi"
//                         label="Provinsi"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Provinsi || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="NoTelp"
//                         label="No. Telepon"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.NoTelp || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Email"
//                         label="Email"
//                         type="email"
//                         fullWidth
//                         value={currentSekolah?.Email || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Website"
//                         label="Website"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Website || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Catatan"
//                         label="Catatan"
//                         type="text"
//                         fullWidth
//                         value={currentSekolah?.Catatan || ''}
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
import AddIcon from "@mui/icons-material/Add";
import { BrowserRouter as Router, Link } from "react-router-dom";
import client from 'src/Utils/client';

export default function Sekolah() {
    const [sekolahData, setSekolahData] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [currentSekolah, setCurrentSekolah] = useState(null);
    const [newSekolah, setNewSekolah] = useState({
        Nama: '',
        Alamat: '',
        Kota: '',
        Provinsi: '',
        NoTelp: '',
        Email: '',
        Website: '',
        Catatan: ''
    });

    useEffect(() => {
        client.get('http://127.0.0.1:8000/api/sekolah/')
            .then(({ data }) => {
                setSekolahData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmDelete) {
            client.delete(`http://127.0.0.1:8000/api/sekolah/${id}/`)
                .then(() => {
                    // Update state to remove deleted item
                    setSekolahData((prevData) => prevData.filter((item) => item.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEdit = (sekolah) => {
        setCurrentSekolah(sekolah);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setCurrentSekolah(null);
    };

    const handleSaveEdit = () => {
        if (currentSekolah) {
            client.put(`http://127.0.0.1:8000/api/sekolah/${currentSekolah.id}/`, currentSekolah)
                .then(() => {
                    setSekolahData((prevData) => prevData.map((item) => item.id === currentSekolah.id ? currentSekolah : item));
                    handleCloseEditDialog();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentSekolah({
            ...currentSekolah,
            [name]: value
        });
    };

    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setNewSekolah({
            ...newSekolah,
            [name]: value
        });
    };

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
        setNewSekolah({
            Nama: '',
            Alamat: '',
            Kota: '',
            Provinsi: '',
            NoTelp: '',
            Email: '',
            Website: '',
            Catatan: ''
        });
    };

    const handleSaveAdd = () => {
        client.post('http://127.0.0.1:8000/api/sekolah/', newSekolah)
            .then(({ data }) => {
                setSekolahData([...sekolahData, data]);
                handleCloseAddDialog();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, mt: 2}}>
                <Button variant="contained" color="primary" onClick={handleOpenAddDialog} startIcon={<AddIcon />}>
                    Tambah Sekolah
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nama Sekolah</TableCell>
                            <TableCell align="center">Alamat</TableCell>
                            <TableCell align="center">Kota</TableCell>
                            <TableCell align="center">Provinsi</TableCell>
                            <TableCell align="center">No. Telepon</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Website</TableCell>
                            <TableCell align="center">Catatan</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sekolahData.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell align="left">{r.Nama}</TableCell>
                                <TableCell align="left">{r.Alamat}</TableCell>
                                <TableCell align="left">{r.Kota}</TableCell>
                                <TableCell align="left">{r.Provinsi}</TableCell>
                                <TableCell align="left">{r.NoTelp}</TableCell>
                                <TableCell align="left">{r.Email}</TableCell>
                                <TableCell align="left">{r.Website}</TableCell>
                                <TableCell align="left">{r.Catatan}</TableCell>
                                <TableCell align="right">
                                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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

            {/* Dialog Edit Sekolah */}
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Sekolah</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan edit informasi sekolah di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Nama"
                        label="Nama Sekolah"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Nama || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Alamat"
                        label="Alamat"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Alamat || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Kota"
                        label="Kota"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Kota || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Provinsi"
                        label="Provinsi"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Provinsi || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="NoTelp"
                        label="No. Telepon"
                        type="text"
                        fullWidth
                        value={currentSekolah?.NoTelp || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={currentSekolah?.Email || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Website"
                        label="Website"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Website || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentSekolah?.Catatan || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog Tambah Sekolah */}
            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Tambah Sekolah</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan isi informasi sekolah di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Nama"
                        label="Nama Sekolah"
                        type="text"
                        fullWidth
                        value={newSekolah.Nama}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Alamat"
                        label="Alamat"
                        type="text"
                        fullWidth
                        value={newSekolah.Alamat}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Kota"
                        label="Kota"
                        type="text"
                        fullWidth
                        value={newSekolah.Kota}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Provinsi"
                        label="Provinsi"
                        type="text"
                        fullWidth
                        value={newSekolah.Provinsi}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="NoTelp"
                        label="No. Telepon"
                        type="text"
                        fullWidth
                        value={newSekolah.NoTelp}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={newSekolah.Email}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Website"
                        label="Website"
                        type="text"
                        fullWidth
                        value={newSekolah.Website}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={newSekolah.Catatan}
                        onChange={handleAddChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog}>Cancel</Button>
                    <Button onClick={handleSaveAdd}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
