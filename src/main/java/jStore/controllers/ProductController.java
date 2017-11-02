package jStore.controllers;

import jStore.models.Product;
import jStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

//    @GetMapping(path="/all")
//    public @ResponseBody
//    Iterable<Product> getAllProducts() {
//        return productRepository.findAll();
//    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addNewProduct(@RequestBody Product product) {
        try {
            Product newProduct = productRepository.save(product);
            return new ResponseEntity<>(newProduct.getId().toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }


//    @RequestMapping(method = RequestMethod.GET, value = "/{bookmarkId}")
//    Bookmark readBookmark(@PathVariable String userId, @PathVariable Long bookmarkId) {
//        this.validateUser(userId);
//        return this.bookmarkRepository.findOne(bookmarkId);
//    }
}
