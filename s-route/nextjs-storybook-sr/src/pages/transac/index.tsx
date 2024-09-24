/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GridColDef } from '@mui/x-data-grid';
import Datatable from '../../@core/components/Datatable';
import transacoesService from '../../@core/services/transacoes.service';
import TransacActions from './transacActions';

const HomePage = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'description', headerName: 'Nome do Produto', width: 130 },
      { field: 'amount', headerName: 'Quantidade', width: 130 },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (params) => (
          <TransacActions {...{ params, rowId, setRowId }} />
        ),
      },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        await transacoesService.getAll().then((res) => {
          const transacoesToTable = res;
          setTransactions(transacoesToTable);
        }).catch((error: any) => {
          console.error(error)
        });
        
      } catch (err: any) {
        console.error(err)
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div className='row'>
      <div className="col-12 mb-3">
        <h1>Gerenciamento de Transações</h1>
      </div>
      <div className="col-12 d-flex justify-content-end mb-3">
        <Link type="button" className="btn btn-primary" href="/transac/add">Adicionar Transação</Link>        
      </div>
      <div className="col-12 mb-3">
        <hr />
        <Datatable columns={columns} rows={transactions} paginationModel={paginationModel} />
      </div>
    </div>
  );
};

export default HomePage;
