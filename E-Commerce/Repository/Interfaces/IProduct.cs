
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IProduct
    {
        Task<IEnumerable<Product>> GetAllProductAsync();
        Task<Product> GetProductAsync(int productId);
    }
}
