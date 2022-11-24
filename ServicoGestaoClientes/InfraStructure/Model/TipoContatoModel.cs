using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServicoGestaoClientes.InfraStructure.Model
{

    [Table("TipoContato")]
    public class TipoContatoModel : GenericModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")] public int Id { get; set; }

        [Column("Nome")] public string? Nome { get; set; }

    }

}
