import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Table.module.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { usePagination } from '@mui/lab';
import { HomeServices } from '../../../services/index';
import Loader from '@/components/Shared/Loader';


// creamos un interface de personajes rick and morty
interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;

}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d5edff",
    color: "#01387b",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


//ESTILOS PAGINACIÓN
const pagination = makeStyles({
  root: {
    "& li	.MuiPaginationItem-root":{
      fontWeight:'bold',
      borderColor:'#DFE3E8'
    },
    "& li .Mui-selected": {
      borderColor:'#3C64B1',
      color:'#3C64B1',
      backgroundColor:'#ffffff'
    },
    "& li	.Mui-disabled": {
      backgroundColor:'#B2B2B2',
      opacity:'0.5',
      color:'#ffffff'
    },
  }
});

export const   CustomizedTables=()=> {
  useEffect(() => {
    setLoading(true);
    HomeServices.getCharacter().then((res: any) => {
      console.log("responsesssss" ,res);
      if (res) {
        setLoading(false);
        setRows(res);
      }
    });


  }, []);
  // creamos un state row de Character arreglo
  const [loading, setLoading] = useState(false);

  const [rows, setRows] = useState<Character[]>([]);

  const [ currentPage, setCurrentPage ] = useState(1)

  const     numOrdersToShow = 4,
            indexLast       = currentPage * numOrdersToShow,
            indexFirst      = indexLast - numOrdersToShow,
            currentRecords  = rows.slice(indexFirst, indexLast),
            numOrders       = rows.length,
            numPages        = Math.ceil(numOrders/numOrdersToShow)

  const handleChange = (event: any,current: React.SetStateAction<number>)=> setCurrentPage(current)
  const paginationClass = pagination();

  //FIN LOGICA DE PAGINACIÓN



  return (
    <>
     {/* //validamos el loading */}
     {loading ? (
     <Loader></Loader>
    ) :  <div  style={{width:"100%",padding:"20px"}}>

      <div>
        Resultados de la búsqueda
      </div>

    <TableContainer component={Paper} sx={{marginTop:"64px", marginBottom:"50px", boxShadow:"none", color:"rgba(0, 0, 0, 0.0)" ,width:"100%"}}>
      <Table sx={{ minWidth: 700,overflow:"hidden",
    backgroundColor:"#F5F6FA"

    }} aria-label="customized table">




        <TableHead>
          <TableRow className={styles.thead}>
            <StyledTableCell align="left"> <div style={{display:"flex", justifyContent:"center"}}> ID   <img src="../statics/header/sort.svg" alt="" /></div></StyledTableCell>
            <StyledTableCell align="left"> <div style={{display:"flex", justifyContent:"center"}}>Nombre  <img src="../statics/header/sort.svg" alt="" /></div></StyledTableCell>
            <StyledTableCell align="left"> <div style={{display:"flex", justifyContent:"center"}}>Especie  <img src="../statics/header/sort.svg" alt="" /></div> </StyledTableCell>
            <StyledTableCell align="left"><div style={{display:"flex", justifyContent:"center"}}>Genero  <img src="../statics/header/sort.svg" alt="" /></div> </StyledTableCell>
            <StyledTableCell > <div style={{display:"flex", justifyContent:"center"}}>Imagen  <img src="../statics/header/sort.svg" alt="" /></div> </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody >
            {currentRecords.map((row) => (
              <StyledTableRow   key={row.id} >
                <StyledTableCell  component="th" scope="row"  style={{textAlign:"center"}}>
                  <p >{row.id}</p>
                </StyledTableCell>
                <StyledTableCell className={styles.fecha} align="left" style={{textAlign:"center"}}>{row.name}</StyledTableCell>
                <StyledTableCell  className={styles.fecha} align="left"  style={{textAlign:"center"}}>{row.species}</StyledTableCell>
                <StyledTableCell className={styles.fecha} align="left"  style={{textAlign:"center"}}>{row.gender}</StyledTableCell>
                <StyledTableCell className={styles.fecha} align="center" style={{display:"flex", justifyContent:"center"}}><img src={row.image} alt="" width="100px" /></StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>


              <div className={styles.footerTableHeader}>

                <div className={styles.total}>
                 <p> Resultados</p>

                </div >

                <div className={paginationClass.root}>
                  <Pagination count={numPages} onChange={handleChange} variant="outlined" shape="rounded"/>
                </div>

              </div>

    </div>
}



    </>

  );
}
