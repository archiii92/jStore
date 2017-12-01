package jStore.controllers;

import jStore.models.Buyer;
import jStore.repositories.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping(path = "/api/buyers")
public class BuyerController {
    @Autowired
    private BuyerRepository buyerRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Buyer> getAllBuyers() {
        return buyerRepository.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{buyerId}")
    public @ResponseBody
    Buyer getBuyerById(@PathVariable UUID buyerId) {
        return buyerRepository.getById(buyerId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addBuyer(@RequestBody Buyer buyer) {
        try {
            UUID uuid = buyerRepository.add(buyer);
            return new ResponseEntity<>(uuid.toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateBuyer(@RequestBody Buyer buyer) {
        try {
            buyerRepository.update(buyer);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{buyerId}")
    public ResponseEntity<?> deleteBuyer(@PathVariable UUID buyerId) {
        try {
            buyerRepository.delete(buyerId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }
}
