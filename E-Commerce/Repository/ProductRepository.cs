using DataAccess;
using Microsoft.EntityFrameworkCore;
using Models;
using Repository.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repository
{
    public class ProductRepository : IProduct
    {

        private readonly StoreDbContext _db;

        public ProductRepository(StoreDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Product>> GetAllProductAsync()
        {
            return await _db.Products.ToListAsync();
        }

        public async Task<Product> GetProductAsync(int productId)
        {
            return await _db.Products.FindAsync(productId);
        }
    }
}
