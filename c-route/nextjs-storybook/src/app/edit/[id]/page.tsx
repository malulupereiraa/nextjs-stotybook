/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import TransacoesService from "../../@core/services/Transacoes.service";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";
import LoadingSystem from "../../@core/components/loadingsystem/LoadingSystem";

const EditTransaction = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [transaction, setTransaction] = useState<any>({
    description: "",
    amount: "",
  });
  const router = useRouter();
  const paramsTransactions = useParams();

  useEffect(() => {
    const fetchTransaction = async () => {
      const data: any = await TransacoesService.getById(paramsTransactions.id);
      setTransaction(data);
      setLoading(false);
    };
    if (paramsTransactions.id) {
      fetchTransaction();
    }
  }, [paramsTransactions]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await TransacoesService.update(paramsTransactions.id, transaction);
    router.push("/home");
  };

  const handleChange = (e: any) => {
    setTransaction({
      ...transaction,
      [e.target.name]:
        e.target.name === "amount" ? Number(e.target.value) : e.target.value,
    });
  };

  return (
    <>
      {loading ? (
        <>
          <LoadingSystem />
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} mb={3} className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="transactionForm.ControlInput1"
                >
                  <Form.Label>Descrição:</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="description"
                    value={transaction.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="transactionForm.ControlInput2"
                >
                  <Form.Label>Quantidade:</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    placeholder="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} className="mb-3 pe-0">
                <Row className="w-100 justify-content-end">
                  <Col xs={12} sm={12} md={6} lg={2} className="mb-3 pe-0">
                    <Link href={`/home`}>
                      <div className="d-grid gap-2 w-100">
                        <Button variant="secondary" size="sm">
                          Voltar
                        </Button>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={2} className="mb-3 pe-0">
                    <div className="d-grid gap-2 w-100">
                      <Button variant="primary" size="sm" type="submit">
                        Atualizar Transação
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </>
  );
};

export default EditTransaction;
