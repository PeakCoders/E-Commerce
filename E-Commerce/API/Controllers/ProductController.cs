using Microsoft.AspNetCore.Mvc;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProduct _dbProduct;

        public ProductController(IProduct dbProduct)
        {
            _dbProduct = dbProduct;
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _dbProduct.GetAllProductAsync());
        }

        [HttpGet("product")]
        public async Task<IActionResult>GetProduct(int id)
        {
           var product= await _dbProduct.GetProductAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }


        
 /*       public async Task<IActionResult> AddProduct()
        {
            return Ok( new NotImplementedException())
        }*/


    }
}
