// import React, { useEffect, useState } from 'react'
// import { Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { BrowserRouter as Router, Link} from "react-router-dom";
// // import useRequestResource from 'src/hooks/useRequestResource';

// import client from 'src/Utils/client';


//     const results = [
//         {
        
//         }
//     ]

//     export default function Pelanggarann() {
//         const [pelanggarannData, setPelanggarannData] = useState([]);
    
//         useEffect(() => {
//             client.get('api/pelanggarann/')
//                 .then(({ data }) => {
//                     setPelanggarannData(data);
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
//                             Tanggal dan Jam
//                         </TableCell>
//                         <TableCell align="center">
//                             Petugas
//                         </TableCell>
//                         <TableCell align="center">
//                             Siswa
//                         </TableCell>
//                         <TableCell align="center">
//                             Kategori Pelanggaran
//                         </TableCell>
//                         <TableCell align="center">
//                             Poin
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
//                     {pelanggarannData.map((r) => {
//                         return <TableRow key={r.id}>
//                             <TableCell align="center">
//                                 {r.SekolahId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.TglJam}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.PetugasId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.SiswaId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.KategoriId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Poin}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Catatan}
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Box sx={{ display: "flex", justifyContent: "center"}}>
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

// export default function Pelanggarann() {
//     const [pelanggarannData, setPelanggarannData] = useState([]);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/pelanggarann/')
//             .then(({ data }) => {
//                 setPelanggarannData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/pelanggarann/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setPelanggarannData((prevData) => prevData.filter((item) => item.id !== id));
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
//                             <TableCell align="center">Tanggal dan Jam</TableCell>
//                             <TableCell align="center">Petugas</TableCell>
//                             <TableCell align="center">Siswa</TableCell>
//                             <TableCell align="center">Kategori Pelanggaran</TableCell>
//                             <TableCell align="center">Poin</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {pelanggarannData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.TglJam}</TableCell>
//                                 <TableCell align="center">{r.PetugasId}</TableCell>
//                                 <TableCell align="center">{r.SiswaId}</TableCell>
//                                 <TableCell align="center">{r.KategoriId}</TableCell>
//                                 <TableCell align="center">{r.Poin}</TableCell>
//                                 <TableCell align="center">{r.Catatan}</TableCell>
//                                 <TableCell align="center">
//                                     <Box sx={{ display: "flex", justifyContent: "center" }}>
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

// export default function Pelanggarann() {
//     const [pelanggarannData, setPelanggarannData] = useState([]);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [currentPelanggaran, setCurrentPelanggaran] = useState(null);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/pelanggarann/')
//             .then(({ data }) => {
//                 setPelanggarannData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/pelanggarann/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setPelanggarannData((prevData) => prevData.filter((item) => item.id !== id));
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (pelanggaran) => {
//         setCurrentPelanggaran(pelanggaran);
//         setOpenEditDialog(true);
//     };

//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setCurrentPelanggaran(null);
//     };

//     const handleSaveEdit = () => {
//         if (currentPelanggaran) {
//             client.put(`http://127.0.0.1:8000/api/pelanggarann/${currentPelanggaran.id}/`, currentPelanggaran)
//                 .then(() => {
//                     setPelanggarannData((prevData) => prevData.map((item) => item.id === currentPelanggaran.id ? currentPelanggaran : item));
//                     handleCloseEditDialog();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentPelanggaran({
//             ...currentPelanggaran,
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
//                             <TableCell align="center">Tanggal dan Jam</TableCell>
//                             <TableCell align="center">Petugas</TableCell>
//                             <TableCell align="center">Siswa</TableCell>
//                             <TableCell align="center">Kategori Pelanggaran</TableCell>
//                             <TableCell align="center">Poin</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {pelanggarannData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.TglJam}</TableCell>
//                                 <TableCell align="center">{r.PetugasId}</TableCell>
//                                 <TableCell align="center">{r.SiswaId}</TableCell>
//                                 <TableCell align="center">{r.KategoriId}</TableCell>
//                                 <TableCell align="center">{r.Poin}</TableCell>
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
//                 <DialogTitle>Edit Pelanggaran</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Silakan edit informasi pelanggaran di bawah ini.
//                     </DialogContentText>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         name="SekolahId"
//                         label="Sekolah"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.SekolahId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="TglJam"
//                         label="Tanggal dan Jam"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.TglJam || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="PetugasId"
//                         label="Petugas"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.PetugasId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="SiswaId"
//                         label="Siswa"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.SiswaId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="KategoriId"
//                         label="Kategori Pelanggaran"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.KategoriId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Poin"
//                         label="Poin"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.Poin || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Catatan"
//                         label="Catatan"
//                         type="text"
//                         fullWidth
//                         value={currentPelanggaran?.Catatan || ''}
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

export default function Pelanggarann() {
    const [pelanggarannData, setPelanggarannData] = useState([]);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [currentPelanggaran, setCurrentPelanggaran] = useState(null);
    const [newPelanggaran, setNewPelanggaran] = useState({
        SekolahId: '',
        TglJam: '',
        PetugasId: '',
        SiswaId: '',
        KategoriId: '',
        Poin: '',
        Catatan: ''
    });

    useEffect(() => {
        client.get('http://127.0.0.1:8000/api/pelanggarann/')
            .then(({ data }) => {
                setPelanggarannData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmDelete) {
            client.delete(`http://127.0.0.1:8000/api/pelanggarann/${id}/`)
                .then(() => {
                    // Update state to remove deleted item
                    setPelanggarannData((prevData) => prevData.filter((item) => item.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleEdit = (pelanggaran) => {
        setCurrentPelanggaran(pelanggaran);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
        setCurrentPelanggaran(null);
    };

    const handleSaveEdit = () => {
        if (currentPelanggaran) {
            client.put(`http://127.0.0.1:8000/api/pelanggarann/${currentPelanggaran.id}/`, currentPelanggaran)
                .then(() => {
                    setPelanggarannData((prevData) => prevData.map((item) => item.id === currentPelanggaran.id ? currentPelanggaran : item));
                    handleCloseEditDialog();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPelanggaran({
            ...currentPelanggaran,
            [name]: value
        });
    };

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
        setNewPelanggaran({
            SekolahId: '',
            TglJam: '',
            PetugasId: '',
            SiswaId: '',
            KategoriId: '',
            Poin: '',
            Catatan: ''
        });
    };

    const handleSaveAdd = () => {
        client.post('http://127.0.0.1:8000/api/pelanggarann/', newPelanggaran)
            .then(({ data }) => {
                setPelanggarannData((prevData) => [...prevData, data]);
                handleCloseAddDialog();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNewPelanggaranChange = (e) => {
        const { name, value } = e.target;
        setNewPelanggaran({
            ...newPelanggaran,
            [name]: value
        });
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button variant="contained" color="primary" onClick={handleOpenAddDialog}>
                    Add New
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 360 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Sekolah</TableCell>
                            <TableCell align="center">Tanggal dan Jam</TableCell>
                            <TableCell align="center">Petugas</TableCell>
                            <TableCell align="center">Siswa</TableCell>
                            <TableCell align="center">Kategori Pelanggaran</TableCell>
                            <TableCell align="center">Poin</TableCell>
                            <TableCell align="center">Catatan</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pelanggarannData.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell align="center">{r.SekolahId}</TableCell>
                                <TableCell align="center">{r.TglJam}</TableCell>
                                <TableCell align="center">{r.PetugasId}</TableCell>
                                <TableCell align="center">{r.SiswaId}</TableCell>
                                <TableCell align="center">{r.KategoriId}</TableCell>
                                <TableCell align="center">{r.Poin}</TableCell>
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
                <DialogTitle>Edit Pelanggaran</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan edit informasi pelanggaran di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.SekolahId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="TglJam"
                        label="Tanggal dan Jam"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.TglJam || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="PetugasId"
                        label="Petugas"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.PetugasId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="SiswaId"
                        label="Siswa"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.SiswaId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="KategoriId"
                        label="Kategori Pelanggaran"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.KategoriId || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Poin"
                        label="Poin"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.Poin || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentPelanggaran?.Catatan || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Add New Pelanggaran</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan tambahkan informasi pelanggaran di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah"
                        type="text"
                        fullWidth
                        value={newPelanggaran.SekolahId}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="TglJam"
                        label="Tanggal dan Jam"
                        type="text"
                        fullWidth
                        value={newPelanggaran.TglJam}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="PetugasId"
                        label="Petugas"
                        type="text"
                        fullWidth
                        value={newPelanggaran.PetugasId}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="SiswaId"
                        label="Siswa"
                        type="text"
                        fullWidth
                        value={newPelanggaran.SiswaId}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="KategoriId"
                        label="Kategori Pelanggaran"
                        type="text"
                        fullWidth
                        value={newPelanggaran.KategoriId}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="Poin"
                        label="Poin"
                        type="text"
                        fullWidth
                        value={newPelanggaran.Poin}
                        onChange={handleNewPelanggaranChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={newPelanggaran.Catatan}
                        onChange={handleNewPelanggaranChange}
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
