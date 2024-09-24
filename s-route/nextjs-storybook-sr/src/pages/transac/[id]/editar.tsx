/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import transacoesService from "../../../@core/services/transacoes.service";

const EditTransac = () => {
    const [transaction, setTransaction] = useState<any>({ description: '', amount: '' });
    const router = useRouter();
    const paramsTransactions = useParams()

  useEffect(() => {
    const fetchTransaction = async () => {
      await transacoesService.getById(Number(paramsTransactions.id)).then((res: any) => {
        setTransaction(res);
      });
    };

    if (paramsTransactions.id) {
      fetchTransaction();
    }
  }, [paramsTransactions]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await transacoesService.update(paramsTransactions.id, transaction).then((res: any) => {
console.log(res);
    });
    router.push('/transac');
  };

  const handleChange = (e: any) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  return (
    <form>        
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Descrição:</label>
            <input 
                type="text" 
                name="description" 
                className="form-control"
                value={transaction.description} 
                onChange={handleChange} 
                required 
              />
          </div>          
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Quantidade:</label>
            <input 
              type="number" 
              name="amount" 
              className="form-control"
              value={transaction.amount} 
              onChange={handleChange} 
              required 
            />
          </div>
          </div>
        <div className="col-12">
            <button className="btn btn-secondary" onClick={() => router.push('/transac')}>Voltar</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Atualizar Transação</button>
        </div>
      </div>
    </form>
  );
}

export default EditTransac;
