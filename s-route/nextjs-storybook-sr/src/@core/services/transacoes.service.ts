/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */

const BASE_URL = 'http://localhost:3000/api'
class TransacoesService {
  constructor() {
   }
  
    
  async getAll() {
    const resp = await fetch(`${BASE_URL}/transacoes`);
    const json = await resp.json();
    return Promise.resolve(json);
  }
  
  async getById(id: any) {
    const resp = await fetch(`${BASE_URL}/transacoes/${id}`);
    const json = await resp.json();
    return Promise.resolve(json);
  }

   async add(transaction: any) {  
     const resp = await fetch(`${BASE_URL}/transacoes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    const json = await resp.json();
    return Promise.resolve(json);
  }

  async update(id: any, updatedTransaction: any) {
    const resp = await fetch(`${BASE_URL}/transacoes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTransaction),
    });
    const json = await resp.json();
    return Promise.resolve(json);
  }
}

export default new TransacoesService()
