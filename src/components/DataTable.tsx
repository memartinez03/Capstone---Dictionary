import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import { server_calls } from '../api/server';
import  Button  from './Button'
import Modal from './Modal'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'saved_word', headerName: 'Word', flex: 1},
    { field: 'meaning', headerName: 'Meaning' , flex: 2},
    { field: 'word_type', headerName: 'Word Type', flex: 1},
    { field: 'origin', headerName: 'Origin', flex: 1},
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { wordData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  
    const handleOpen = () => {
      setOpen(true)
    }
  
    const handleClose = () => {
      setOpen(false)
    }
  
    const deleteData = () => {
      server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection model: ${selectionModel}`)
      setTimeout( () => { window.location.reload() }, 500)
    }
  
    return (
      <>
          <Modal 
              id={selectionModel}
              open={open}
              onClose={handleClose}
          />
          <div className='flex flex-row'>
              <div>
                  <button
                      className='p-3 bg-cyan-600 m-3 rounded hover:bg-slate-800 hover:text-white'
                      onClick={() => handleOpen() }
                  >
                      Create New Word
                  </button>
              </div>
              <button onClick={() => handleClose()}></button>
              <Button  onClick={handleOpen} className="p-3 bg-cyan-600 m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
              <Button  onClick={deleteData} className="p-3 bg-cyan-600 m-3 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
          </div>
          <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%' }}
            >
              <h2 className="p-3 bg-cyan-600 my-2 rounded">My Words</h2>
              <DataGrid rows={wordData} columns={columns} rowsPerPageOptions={[6]}
              checkboxSelection={true} 
              onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
              }}
              />
          </div>
      </>
            )
  }
  
  export default DataTable