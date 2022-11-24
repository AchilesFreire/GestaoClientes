using ServicoGestaoClientes.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class ClienteController : Controller
	{
		private readonly ILogger<ClienteController> _logger;

		public ClienteController(DataBaseContext dbContext, ILogger<ClienteController> logger)
		{
			_logger = logger;

			ClienteService.dbContext = dbContext;
		}

		[HttpGet]
		public List<ClienteModel> Get()
		{
			return ClienteService.Get();
			
		}

		[Route("Edit/{Id}")]
		[HttpGet]
		public ClienteModel Edit([FromRoute] int Id)
		{
			return ClienteService.Edit(Id);

		}

		[HttpPost]
		public String Post(ClienteModel cliente)
		{
			return ClienteService.Post(cliente);
		}

		[HttpDelete]
		[Route("{Id}")]
		public String Delete([FromRoute] int Id)
		{
			return ClienteService.Delete(Id);
		}

	}
}