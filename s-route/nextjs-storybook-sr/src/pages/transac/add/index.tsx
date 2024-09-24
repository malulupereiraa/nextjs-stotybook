/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import transacoesService from '../../../@core/services/transacoes.service';

const AddTransac = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await transacoesService.add({ description, amount });
    router.push('/transac');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Descrição" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Valor" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required 
      />
      <button type="submit">Adicionar Transação</button>
    </form>
  );
};

export default AddTransac;
