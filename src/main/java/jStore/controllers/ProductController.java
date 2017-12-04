package jStore.controllers;

import jStore.models.Product;
import jStore.models.Seller;
import jStore.repositories.ProductRepository;
import jStore.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{productId}")
    public @ResponseBody
    Product getProductById(@PathVariable UUID productId) {
        return productRepository.getById(productId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        try {
            UUID uuid = productRepository.add(product);
            return new ResponseEntity<>(uuid.toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateProduct(@RequestBody Product product) {
        try {
            productRepository.update(product);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable UUID productId) {
        try {
            productRepository.delete(productId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }
}
