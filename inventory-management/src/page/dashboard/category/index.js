import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CardMedia } from '@mui/material';
function createData(id, image, name, slug, count) {
    return { id, image, name, slug, count };
}
const rows = [
    createData(1,'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 'Hat', 'hat', 24,),
    createData(2,'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 'Shirts', 'shirts', 37, ),
    createData(3,'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 'Shoe', 'shoe', 24,),
    createData(4,'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 'Jewels', 'jewels', 67, ),
    createData(5,'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', 'Skirt', 'skirt', 49, ),
];

export default function Category(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));
    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Item sx={{ p: 2 }}>
                        <h3>Add category</h3>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            id="outlined-required"
                            label="Category name"
                        />
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="category-parent-label">Category parent</InputLabel>
                            <Select
                                labelId="category-parent-label"
                                id="category-parent"
                                label="Category parent"
                                align="left"
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value={'Cầu Diễn'}>Cầu Diễn</MenuItem>
                                <MenuItem value={'Mỹ Đình 1'}>Mỹ Đình 1</MenuItem>
                                <MenuItem value={'Mỹ Đình 2'}>Mỹ Đình 2</MenuItem>
                                <MenuItem value={'Phú Đô'}>Phú Đô</MenuItem>
                                <MenuItem value={'Mễ Trì'}>Mễ Trì</MenuItem>
                            </Select>
                            <h3>Add category</h3>
                            <TextField
                                sx={{ width: '100%' }}
                                required
                                id="outlined-required"
                                type="file"
                            />
                            <Button sx={{ mt: 2 }} variant="contained">Submit</Button>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Item>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="left" sx={{ width: 160 }}>Image</TableCell>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Slug</TableCell>
                                        <TableCell align="left">Count</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">
                                            <CardMedia
                                                    component="img"
                                                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                                    image={row.image}
                                                    alt={row.name}
                                                />
                                            </TableCell>
                                            <TableCell align="left">{row.name}</TableCell>
                                            <TableCell align="left">{row.slug}</TableCell>
                                            <TableCell align="left">{row.count}</TableCell>
                                            <TableCell align="left">
                                                <Button sx={{mb: 2, width: 80, display: { xs: 'none', sm: 'block' } }} variant="contained">Edit</Button>
                                                <Button sx={{ width: 80, display: { xs: 'none', sm: 'block' } }}  variant="contained" color="error">
                                                Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Stack sx={{ mt: 2 }}>
                            <Pagination textAlign="center" count={10} variant="outlined" color="primary" />
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
}