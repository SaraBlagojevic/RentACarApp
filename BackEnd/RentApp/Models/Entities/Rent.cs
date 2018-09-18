using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class Rent
    {
        public int Id { get; set; }
        public DateTime? Start { get; set; }
        public DateTime? End { get; set; }

        [ForeignKey("BranchTook")]
        public int BranchTook_Id { get; set; }
        public virtual Branch BranchTook { get; set; }

        public int BranchReturn_Id { get; set; }
        public virtual Branch BranchReturn { get; set; }

        public virtual Vehicle Vehicle { get; set; }

        public bool Approved { get; set; }


    }
}