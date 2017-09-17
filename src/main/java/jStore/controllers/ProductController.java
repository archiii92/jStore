package jStore.controllers;

import jStore.models.Product;
import jStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

//    @PostMapping(path="/add")
//    public ResponseEntity<?> addNewUser (@RequestParam Product p) {
//        //Product p = new Product();
//        //p.setName(name);
//        //p.setUnitPrice(unitPrice);
//        //p.setUnitsInStock(unitsInStock);
//        try {
//            productRepository.save(p);
//            return new ResponseEntity<>(null, HttpStatus.OK);
//        } catch(Exception ex) {
//            String errorMessage;
//            errorMessage = ex + " <== error";
//            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
//        }
//    }

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
