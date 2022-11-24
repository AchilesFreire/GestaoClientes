using ServicoGestaoClientes.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ServicoGestaoClientes.InfraStructure.Model;

namespace ServicoGestaoClientes.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class TipoContatoController : Controller
	{
		private readonly ILogger<TipoContatoController> _logger;

		public TipoContatoController(DataBaseContext dbContext, ILogger<TipoContatoController> logger)
		{
			_logger = logger;

			TipoContatoService.dbContext= dbContext;
		}

		[HttpGet]
		public List<TipoContatoModel> Get()
		{
			return TipoContatoService.Get();
			
		}


		[Route("Edit/{Id}")]
		[HttpGet]
		public TipoContatoModel Edit([FromRoute] int Id)
		{
			return TipoContatoService.Edit(Id);

		}

		[HttpPost]
		public String Post(TipoContatoModel tipocontato)
		{

			return TipoContatoService.Post(tipocontato);
		}

		[HttpDelete]
		[Route("{Id}")]
		public String Delete([FromRoute] int Id)
		{
			return TipoContatoService.Delete(Id);
		}

	}
}