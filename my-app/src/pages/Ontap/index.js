import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import NestedModal from "../Modal";
import { spacing } from '@mui/system';
import { Form, ListGroup } from "react-bootstrap";

import axios from "axios";
function ListFruit(props) {
  const [urlApi,setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=200&limit=100");
  const [urlApiPrev,setUrlPrev] = useState("");
  const [urlApiNext,setUrlNext] = useState("");
  const [search, setSearch] = useState("");
  const [items, setListItem] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const setPrev = () => {
    setUrl(urlApiPrev);
  }
  const setNext = () => {
    setUrl(urlApiNext);
  }
  React.useEffect(() => {
    if(urlApi){
      fetch(urlApi)
      .then(response => response.json())
      .then(result => {
        if(newArray){
          setListItem(result.results);
          setUrlPrev(result.previous);
          setUrlNext(result.next);
        }
        
    });
    }
  
  }, [urlApi]);
  const newArray = items.filter(item => item.name.includes(search))

  return (

    <Container className="container">
      <Box  sx={{ width: '100%' }}>
        <TextField  align="center" sx={{ width: '100%' }} id="standard-basic" label="Search" onChange={evt => setSearch(evt.target.value)} variant="outlined" />
        
      </Box>
      <ButtonGroup sx={{ paddingTop: 4 ,width: '100%'}}  spacing={3} variant="contained" aria-label="outlined primary button group">
          <Button onClick={setPrev}>Prev</Button>
          <Button  onClick={setNext}>Next</Button>
        </ButtonGroup>
      <Grid sx={{ paddingTop: 4 }} spacing={3} container >
          {
            newArray && newArray.map(item => {
              return <Grid className="list-group-item"  item xs={6} md={4} key={item.name}>
                <Item>
                  <NestedModal name={item.name}/>
                </Item>

              </Grid>
            })
          }
       
      </Grid>
      
      
    </Container>
  );
};


export default ListFruit;