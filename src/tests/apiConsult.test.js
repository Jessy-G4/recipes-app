import apiConsult from "../service/apiConsult";
import { meals } from "../../cypress/mocks/meals";

test('Testa sa a função retorna corretmente os dados da API', async () =>{
  jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(meals),
  }));
  
  const result = await apiConsult('anyUrl')

  expect(result).toEqual(meals);
})