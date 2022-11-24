using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServicoGestaoClientes.InfraStructure.Model
{

    [Table("ContatoCliente")]
    public class ContatoClienteModel : GenericModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")] public int Id { get; set; }

        [Column("Cliente")] public int Cliente { get; set; }

        [Column("TipoContato")] public int TipoContato { get; set; }

        [Column("Numero")] public string? Numero { get; set; }

		[ForeignKey("TipoContato")] public TipoContatoModel RefTipoContato { get; set; }

	}

}
