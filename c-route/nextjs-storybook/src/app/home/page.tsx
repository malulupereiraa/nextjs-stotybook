/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TransacoesService from "../@core/services/Transacoes.service";
import { GridColDef } from "@mui/x-data-grid";
import Datatable from "../@core/components/datatable/datatable";
import BaseActions from "../@core/components/datatable/BaseActions";
import { Button, Col, Row } from "react-bootstrap";
import ModalCustom from "../@core/components/modal/Modal";

const HomePage = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const itemClickedCurrent = useRef<any>();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleCloseSubmit = async () => {
    await TransacoesService.delete(itemClickedCurrent.current);
    setLoading(true);
    setIsModalOpen(false);
  };

  const handleShow = (itemClicked: any) => {
    setIsModalOpen(true);
    itemClickedCurrent.current = itemClicked;
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "description", headerName: "Nome do Produto", width: 130 },
    { field: "amount", headerName: "Quantidade", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => (
        <BaseActions
          deleteAction={handleShow}
          {...{ params, rowId, setRowId }}
        />
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        await TransacoesService.getAll()
          .then((res) => {
            const transacoesToTable = res;
            setTransactions(transacoesToTable);
            setLoading(false);
          })
          .catch((error: any) => {
            console.error(error);
            setLoading(false);
          });
      } catch (err: any) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [loading]);

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
          <h1>Gerenciamento de Transações</h1>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="d-flex justify-content-end mb-3"
        >
          <Link href="/add">
            <Button variant="primary" size="sm">
              Adicionar Transação
            </Button>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className="mb-3">
          <Datatable
            columns={columns}
            rows={transactions}
            paginationModel={paginationModel}
            loading={loading}
          />
        </Col>
      </Row>
      <ModalCustom
        title="Delete Item"
        isOpen={isModalOpen}
        body={"Remover Item?"}
        hasFooter={true}
        center={true}
        sizeModal="lg"
        onCloseAction={handleClose}
        onSubmitAction={handleCloseSubmit}
      />
    </>
  );
};

export default HomePage;
