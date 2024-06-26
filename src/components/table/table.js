import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp, FaArrowDown, FaThumbsUp, FaCopy, FaTrashAlt } from 'react-icons/fa';
import { DataContext } from '../../contexts/DataContext';

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67),
  createData(2, 'Donut', 452, 25.0, 51),
  createData(3, 'Eclair', 262, 16.0, 24),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24),
  createData(5, 'Gingerbread', 356, 16.0, 49),
  createData(6, 'Honeycomb', 408, 3.2, 87),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37),
  createData(8, 'Jelly Bean', 375, 0.0, 94),
  createData(9, 'KitKat', 518, 26.0, 65),
  createData(10, 'Lollipop', 392, 0.2, 98),
  createData(11, 'Marshmallow', 318, 0, 81),
  createData(12, 'Nougat', 360, 19.0, 9),
  createData(13, 'Oreo', 437, 18.0, 63)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'File Name'
  },
  {
    id: 'estimate',
    numeric: true,
    disablePadding: false,
    label: 'Estimate'
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'download',
    numeric: true,
    disablePadding: false,
    label: 'Download'
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => {
                          navigate('/estimate/list');
                        }}
                      >
                        Create New
                      </Button>
                    </TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained">Download</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
    </Box>
  );
}

export function DenseTable({ navigate }) {
  const [sorting, setSorting] = useState({ column: null, direction: null });

  const {estimates} = React.useContext(DataContext)

  const handleSort = (columnName) => {
    setSorting((prevSorting) => ({
      column: columnName,
      direction: prevSorting.column === columnName && prevSorting.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort('name')}>Raf# {sorting.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}</TableCell>
            <TableCell align="right" onClick={() => handleSort('Description')}>
              Description {sorting.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
            </TableCell>
            <TableCell align="right">Building Type</TableCell>
            <TableCell align="left" onClick={() => handleSort('Status')}>
              Status {sorting.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
            </TableCell>
            <TableCell align="right">Job</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Quate Total</TableCell>
            <TableCell align="right">
              <Button variant="contained" onClick={() => navigate('/estimate/create')}>
                Create Estimate
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {estimates
            .sort((a, b) => {
              if (sorting.direction === 'asc') {
                return a[sorting.column]?.localeCompare(b[sorting.column]) || 0;
              } else {
                return b[sorting.column]?.localeCompare(a[sorting.column]) || 0;
              }
            })
            .map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">{row.buildType}</TableCell>
                <TableCell align="right">
                  <span style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: '8px', borderRadius: '40%' }}>{row.status}</span>
                </TableCell>
                <TableCell align="right">{row.job}</TableCell>
                <TableCell align="right">{row.client}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">$ {row.quateTotal}</TableCell>
                <TableCell align="right">
                  <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button style={{ backgroundColor: 'white', color: 'black' }}>
                      <FaThumbsUp />
                    </Button>
                    <Button>
                      <FaCopy />
                    </Button>
                    <Button style={{ backgroundColor: 'red', color: 'white' }}>
                      <FaTrashAlt />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function DynamicTable({ data, title, buttonGroup }) {

  const rowKeys = Object.keys(title);
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {Object.values(title).map((items, index) => (
              <TableCell align="right" key={index}>
                {items}
              </TableCell>
            ))}
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {rowKeys.map((items, index) => (
                <TableCell align="right" key={index} style={{cursor:'pointer'}} onClick={()=>navigate("/estimate/costing")}>
                 <span style={{ width: '100px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{row[items]}</span> 
                </TableCell>
              ))}
              <TableCell align="right">{buttonGroup}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
