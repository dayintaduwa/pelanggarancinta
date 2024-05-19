// import React, { useEffect, useState } from 'react'
// import { Button, Box, Paper, Table, TableBody, TableCell, TabelContainer, TableHead, TableRow, IconButton, TableContainer } from "@mui/material";
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

//     export default function Kelas() {
//         const [kelasData, setKelasData] = useState([]);
    
//         useEffect(() => {
//             client.get('api/kelas/')
//                 .then(({ data }) => {
//                     setKelasData(data);
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
//                             Tingkat
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
//                     {kelasData.map((r) => {
//                         return <TableRow key={r.id}>
//                             <TableCell align="center">
//                                 {r.SekolahId}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Nama}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Tingkat}
//                             </TableCell>
//                             <TableCell align="center">
//                                 {r.Catatan}
//                             </TableCell>
//                             <TableCell align="center">
//                                 <Box sx={{ display: "flex", justifyContent: "center"}}>
//                                     <Link to={`/kelas/edit/${r.id}`} key="kelas-edit">
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

// export default function Kelas() {
//     const [kelasData, setKelasData] = useState([]);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/kelas/')
//             .then(({ data }) => {
//                 setKelasData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/kelas/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setKelasData((prevData) => prevData.filter((item) => item.id !== id));
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
//                             <TableCell align="center">Tingkat</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {kelasData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.Nama}</TableCell>
//                                 <TableCell align="center">{r.Tingkat}</TableCell>
//                                 <TableCell align="center">{r.Catatan}</TableCell>
//                                 <TableCell align="center">
//                                     <Box sx={{ display: "flex", justifyContent: "center" }}>
//                                         <Link to={`/kelas/edit/${r.id}`} key="kelas-edit">
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

// export default function Kelas() {
//     const [kelasData, setKelasData] = useState([]);
//     const [openEditDialog, setOpenEditDialog] = useState(false);
//     const [currentKelas, setCurrentKelas] = useState(null);

//     useEffect(() => {
//         client.get('http://127.0.0.1:8000/api/kelas/')
//             .then(({ data }) => {
//                 setKelasData(data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//         if (confirmDelete) {
//             client.delete(`http://127.0.0.1:8000/api/kelas/${id}/`)
//                 .then(() => {
//                     // Update state to remove deleted item
//                     setKelasData((prevData) => prevData.filter((item) => item.id !== id));
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleEdit = (kelas) => {
//         setCurrentKelas(kelas);
//         setOpenEditDialog(true);
//     };

//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//         setCurrentKelas(null);
//     };

//     const handleSaveEdit = () => {
//         if (currentKelas) {
//             client.put(`http://127.0.0.1:8000/api/kelas/${currentKelas.id}/`, currentKelas)
//                 .then(() => {
//                     setKelasData((prevData) => prevData.map((item) => item.id === currentKelas.id ? currentKelas : item));
//                     handleCloseEditDialog();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentKelas({
//             ...currentKelas,
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
//                             <TableCell align="center">Tingkat</TableCell>
//                             <TableCell align="center">Catatan</TableCell>
//                             <TableCell align="center">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {kelasData.map((r) => (
//                             <TableRow key={r.id}>
//                                 <TableCell align="center">{r.SekolahId}</TableCell>
//                                 <TableCell align="center">{r.Nama}</TableCell>
//                                 <TableCell align="center">{r.Tingkat}</TableCell>
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
//                 <DialogTitle>Edit Kelas</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Silakan edit informasi kelas di bawah ini.
//                     </DialogContentText>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         name="SekolahId"
//                         label="Sekolah"
//                         type="text"
//                         fullWidth
//                         value={currentKelas?.SekolahId || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Nama"
//                         label="Nama"
//                         type="text"
//                         fullWidth
//                         value={currentKelas?.Nama || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Tingkat"
//                         label="Tingkat"
//                         type="text"
//                         fullWidth
//                         value={currentKelas?.Tingkat || ''}
//                         onChange={handleChange}
//                     />
//                     <TextField
//                         margin="dense"
//                         name="Catatan"
//                         label="Catatan"
//                         type="text"
//                         fullWidth
//                         value={currentKelas?.Catatan || ''}
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


import React, { useEffect, useState } from 'react'
import { 
    Button, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer, 
    Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions,  Select, MenuItem, 
    FormControl, InputLabel  } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { BrowserRouter as Router, Link} from "react-router-dom";
// import useRequestResource from 'src/hooks/useRequestResource';
import client from 'src/Utils/client';

    export default function Siswa() {
        const [KelasData, setKelasData] = useState([]);
        const [SekolahData, setSekolahData] = useState([]);
        const [openEditDialog, setOpenEditDialog] = useState(false);
        const [openAddDialog, setOpenAddDialog] = useState(false);
        const [currentKelas, setCurrentKelas] = useState(null);
        const [newKelas, setNewKelas] = useState({
            Nama: '',
            Tingkat: '',
            Catatan: '',
            KelasId: ''
          });
        
    
        useEffect(() => {
            client.get('http://127.0.0.1:8000/api/kelas/')
                .then(({ data }) => {
                    setKelasData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
                client.get('http://127.0.0.1:8000/api/sekolah/')
                .then(({ data }) => {
                    setSekolahData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);

        //function hapus
        const handleDelete = (id) => {
            client.delete(`http://127.0.0.1:8000/api/kelas/${id}/`)
                .then(() => {
                    // Update state to remove deleted item
                    setKelasData((prevData) => prevData.filter((item) => item.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        //function edit
        const handleEdit = (kelas) => {
            setCurrentKelas(kelas);
            setOpenEditDialog(true);
        };
    
        const handleCloseEditDialog = () => {
            setOpenEditDialog(false);
            setCurrentKelas(null);
        };

        const handleSaveEdit = () => {
            if (currentKelas) {
                client.put(`http://127.0.0.1:8000/api/kelas/${currentKelas.id}/`, currentKelas)
                    .then(() => {
                        setKelasData((prevData) => prevData.map((item) => item.id === currentKelas.id ? currentKelas : item));
                        handleCloseEditDialog();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        };
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setCurrentKelas({
                ...currentKelas,
                [name]: value
            });
        };

        //function add
        const handleAddChange = (e) => {
            const { name, value } = e.target;
            setNewKelas({
              ...newKelas,
              [name]: value
            });
          };
        
          const handleOpenAddDialog = () => {
            setOpenAddDialog(true);
          };
        
          const handleCloseAddDialog = () => {
            setOpenAddDialog(false);
            setNewKelas({
              Nama: '',
            Tingkat: '',
            Catatan: '',
            KelasId: ''
            });
          };
        
          const handleSaveAdd = () => {
            console.log('Saving new kelas:', newKelas);
            client.post('http://127.0.0.1:8000/api/kelas/', newKelas)
              .then(({ data }) => {
                setKelasData([...KelasData, data]);
                handleCloseAddDialog();
              })
              .catch((err) => {
                if (err.response) {
                    console.error('Error response:', err.response.data);
                } else {
                    console.error('Error message:', err.message);
                }
              });
          };

return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleOpenAddDialog} startIcon={<AddIcon />}>
          Tambah Kelas
        </Button>
      </Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 360 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            Nama
                        </TableCell>
                        <TableCell align="center">
                            Tingkat
                        </TableCell>
                        <TableCell align="center">
                            Catatan
                        </TableCell>
                        <TableCell align="center">
                            Sekolah
                        </TableCell>
                        <TableCell align="center">
                            Actions
                           </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {KelasData.map((r) => {
                        return <TableRow key={r.id}>
                            <TableCell align="center">
                                {r.Nama}
                            </TableCell>
                            <TableCell align="center">
                                {r.Tingkat}
                            </TableCell>
                            <TableCell align="center">
                                {r.Catatan}
                            </TableCell>
                            <TableCell align="center">
                                {r.SekolahId}
                            </TableCell>
                            
                <TableCell align="right">
                    <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
                        {/* <Link to={/kelas/edit/${r.id}} key="kelas-edit"> */}
                        <IconButton size="large" onClick={() => handleEdit(r)}>
                                <EditIcon />
                            </IconButton>
                        {/* </Link> */}

                        <IconButton size="large" onClick={() => handleDelete(r.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </TableCell>
                </TableRow>
                })}
                </TableBody>
            </Table>
        </TableContainer>

                {/* dialog edit */}
                <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Kelas</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan edit informasi kelas di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Nama"
                        label="Nama"
                        type="text"
                        fullWidth
                        value={currentKelas?.Nama || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Tingkat"
                        label="Tingkat"
                        type="text"
                        fullWidth
                        value={currentKelas?.Tingkat || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={currentKelas?.Catatan || ''}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="sekolah-select-label-add">Sekolah</InputLabel>
                      <Select
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah "
                        type="text"
                        fullWidth
                        value={currentKelas?.SekolahId || ''}
                        onChange={handleChange}
                        >
                             {SekolahData.map((sekolah) => (
                            <MenuItem key={sekolah.id} value={sekolah.id}>
                                {sekolah.Nama}
                            </MenuItem>
                        ))}
                        </Select>
                        </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleSaveEdit}>Save</Button>
                </DialogActions>
            </Dialog>

            {/* dialog add */}
            <Dialog open={openAddDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Add Kelas</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Silakan Add informasi kelas di bawah ini.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Nama"
                        label="Nama"
                        type="text"
                        fullWidth
                        value={newKelas.Nama}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Tingkat"
                        label="Tingkat"
                        type="text"
                        fullWidth
                        value={newKelas.Tingkat}
                        onChange={handleAddChange}
                    />
                    <TextField
                        margin="dense"
                        name="Catatan"
                        label="Catatan"
                        type="text"
                        fullWidth
                        value={newKelas.Catatan}
                        onChange={handleAddChange}
                    />
                   <FormControl fullWidth margin="dense">
                        <InputLabel id="sekolah-select-label-add">Sekolah</InputLabel>
                      <Select
                        margin="dense"
                        name="SekolahId"
                        label="Sekolah "
                        type="text"
                        fullWidth
                        value={newKelas.SekolahId}
                        onChange={handleAddChange}
                        >
                             {SekolahData.map((sekolah) => (
                            <MenuItem key={sekolah.id} value={sekolah.id}>
                                {sekolah.Nama}
                            </MenuItem>
                        ))}
                        </Select>
                        </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog}>Cancel</Button>
                    <Button onClick={handleSaveAdd}>Save</Button>
                </DialogActions>
            </Dialog>


        </div>
        );
    }