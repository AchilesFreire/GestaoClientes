using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServicoGestaoClientes.InfraStructure.Model
{

    [Table("Cliente")]
    public class ClienteModel : GenericModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id")] public int Id { get; set; }

        [Column("Nome")] public string? Nome { get; set; }

        [Column("Email")] public string? Email { get; set; }

        [Column("DataNascimento")] public DateTime? DataNascimento { get; set; }


    }

}
