package jStore.controllers;

import jStore.models.Seller;
import jStore.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping(path = "/api/sellers")
public class SellerController {
    @Autowired
    private SellerRepository sellerRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Seller> getAllSellers() {
        return sellerRepository.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{sellerId}")
    public @ResponseBody
    Seller getSellerById(@PathVariable UUID sellerId) {
        return sellerRepository.getById(sellerId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addSeller(@RequestBody Seller seller) {
        try {
            UUID uuid = sellerRepository.add(seller);
            return new ResponseEntity<>(uuid.toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateSeller(@RequestBody Seller seller) {
        try {
            sellerRepository.update(seller);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{sellerId}")
    public ResponseEntity<?> deleteSeller(@PathVariable UUID sellerId) {
        try {
            sellerRepository.delete(sellerId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }
}