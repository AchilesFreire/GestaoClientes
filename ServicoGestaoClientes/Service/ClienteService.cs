using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Service
{
	public class ClienteService
	{
		static public DataBaseContext dbContext;


		static public List<ClienteModel> Get()
		{
			var lista = dbContext.Cliente.ToList();
			return lista;
		}

		static public ClienteModel Edit([FromRoute] int Id)
		{
			var cliente = dbContext.Cliente.SingleOrDefault(m => m.Id == Id);
			return cliente;
		}
		static public String Post(ClienteModel cliente)
		{

			if (cliente.Id <= 0)
				dbContext.Add<ClienteModel>(cliente);
			else
			{
				var cli = dbContext.Cliente.SingleOrDefault(m => m.Id == cliente.Id);
				if (cli == null)
					dbContext.Add<ClienteModel>(cliente);
				else
				{
					cli.Nome = cliente.Nome;
					cli.Email = cliente.Email;
					cli.DataNascimento = cliente.DataNascimento;
				}
			}
			dbContext.SaveChanges();
			return "";
		}

		static public String Delete([FromRoute] int Id)
		{
			var cliente = dbContext.Cliente.SingleOrDefault(m => m.Id == Id);
			if (cliente != null)
			{
				dbContext.Remove(cliente);
				dbContext.SaveChanges();
			}
			return "";
		}
	}
}
