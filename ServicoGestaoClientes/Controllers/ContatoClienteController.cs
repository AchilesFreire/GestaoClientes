using ServicoGestaoClientes.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class ContatoClienteController : Controller
	{

		private readonly ILogger<ContatoClienteModel> _logger;

		public ContatoClienteController(DataBaseContext dbContext, ILogger<ContatoClienteModel> logger)
		{
			ContatoClienteService.dbContext = dbContext;
			_logger = logger;
		}

		[HttpGet]
		public List<ContatoClienteModel> Get()
		{
			return ContatoClienteService.Get() ;
		}
		[HttpGet]
		[Route("Visualizar/{Id_Cliente}")]
		public List<ContatoClienteModel> ContatosCliente([FromRoute] int Id_Cliente)
		{
			return ContatoClienteService.ContatosCliente(Id_Cliente) ;
		}

		[Route("Edit/{Id}")]
		[HttpGet]
		public ContatoClienteModel Edit([FromRoute] int Id)
		{
			return ContatoClienteService.Edit(Id);
		}

		[HttpPost]
		public String Post(ContatoClienteModel contatocliente)
		{
			contatocliente.RefTipoContato = null;
			return ContatoClienteService.Post(contatocliente);
		}

		[HttpDelete]
		[Route("{Id}")]
		public String Delete([FromRoute] int Id)
		{
			return ContatoClienteService.Delete(Id);
		}

	}
}