/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TransacoesService from "../@core/services/Transacoes.service";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<any>("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await TransacoesService.add({ description, amount });
    router.push("/home");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col Col xs={12} sm={12} md={6} lg={6} mb={3} className="mb-3">
          <Form.Group
            className="mb-3"
            controlId="transactionForm.ControlInput1"
          >
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Informe uma Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              placeholder="Informe a Quantidade"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
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
                  Adicionar Transação
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTransaction;
