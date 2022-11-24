using Microsoft.EntityFrameworkCore;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Service
{
    public class DataBaseContext : DbContext
	{

		public DataBaseContext(DbContextOptions options)  : base(options) 
		{

		}
		public DbSet<ClienteModel> Cliente { get; set; }

		public DbSet<TipoContatoModel> TipoContato { get; set; }
		public DbSet<ContatoClienteModel> ContatoCliente { get; set; }

	}



}
