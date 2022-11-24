using Microsoft.EntityFrameworkCore;
using ServicoGestaoClientes.InfraStructure.Model;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace ServicoGestaoClientes.Service
{
	public class ContatoClienteService
	{
		static public DataBaseContext dbContext;

		static public List<ContatoClienteModel> Get()
		{
			var lista = dbContext.ContatoCliente.ToList();
			return lista;

		}
		static public List<ContatoClienteModel> ContatosCliente(int Cliente)
		{
			return dbContext.ContatoCliente
				.Include(x => x.RefTipoContato)
				.Where(m => m.Cliente == Cliente).ToList();
		}

		static public ContatoClienteModel Edit(int Id)
		{
			return dbContext.ContatoCliente.SingleOrDefault(m => m.Id == Id);
		}

		static public String Post(ContatoClienteModel contatocliente)
		{

			if (contatocliente.Id <= 0)
				dbContext.Add<ContatoClienteModel>(contatocliente);
			else
			{
				var cli = dbContext.ContatoCliente.SingleOrDefault(m => m.Id == contatocliente.Id);
				if (cli == null)
					dbContext.Add<ContatoClienteModel>(contatocliente);
				else
				{
					cli.Numero = contatocliente.Numero;
					cli.TipoContato = contatocliente.TipoContato;
				}
			}
			dbContext.SaveChanges();

			return "";
		}

		static public String Delete(int Id)
		{
			var contato = dbContext.ContatoCliente.SingleOrDefault(m => m.Id == Id);
			if (contato != null)
			{
				dbContext.Remove(contato);
				dbContext.SaveChanges();
			}
			return "";
		}
	}
}
