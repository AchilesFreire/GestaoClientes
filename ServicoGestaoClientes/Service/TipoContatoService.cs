using Microsoft.AspNetCore.Mvc;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Service
{
	public class TipoContatoService
	{
		static public DataBaseContext dbContext;

		static public List<TipoContatoModel> Get()
		{
			var lista = dbContext.TipoContato.ToList();
			return lista;

		}

		static public TipoContatoModel Edit([FromRoute] int Id)
		{
			return  dbContext.TipoContato.SingleOrDefault(m => m.Id == Id);
		}

		static public String Post(TipoContatoModel tipocontato)
		{

			if (tipocontato.Id <= 0)
				dbContext.Add<TipoContatoModel>(tipocontato);
			else
			{
				var cli = dbContext.TipoContato.SingleOrDefault(m => m.Id == tipocontato.Id);
				if (cli == null)
					dbContext.Add<TipoContatoModel>(tipocontato);
				else
				{
					cli.Nome = tipocontato.Nome;
				}
			}
			dbContext.SaveChanges();

			return "";
		}

		static public String Delete([FromRoute] int Id)
		{
			var tipocontato = dbContext.TipoContato.SingleOrDefault(m => m.Id == Id);
			if (tipocontato != null)
			{
				dbContext.Remove(tipocontato);
				dbContext.SaveChanges();
			}
			return "";
		}
	}
}
