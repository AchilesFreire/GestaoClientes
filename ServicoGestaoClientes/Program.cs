using ServicoGestaoClientes.Service;
using Microsoft.EntityFrameworkCore;
using ServicoGestaoClientes.InfraStructure.Model;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddMvcCore();
builder.Services.AddCors();

builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<DataBaseContext>(
	options => options.UseSqlServer(
		builder.Configuration.GetConnectionString("DefaultConnection")
		));


builder.Services.AddTransient<ClienteModel>();

var app = builder.Build();

app.UseCors(policy =>
		{
			policy.AllowAnyOrigin()
			.AllowAnyHeader()
			.AllowAnyMethod();
		});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
