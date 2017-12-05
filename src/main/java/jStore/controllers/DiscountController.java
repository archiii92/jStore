package jStore.controllers;

import jStore.models.Discount;
import jStore.repositories.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping(path = "/api/discounts")
public class DiscountController {
    @Autowired
    private DiscountRepository discountRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Discount> getAllDiscounts() {
        return discountRepository.getAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{discountId}")
    public @ResponseBody
    Discount getDiscountById(@PathVariable UUID discountId) {
        return discountRepository.getById(discountId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addDiscount(@RequestBody Discount discount) {
        try {
            UUID uuid = discountRepository.add(discount);
            return new ResponseEntity<>(uuid.toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updateSeller(@RequestBody Discount discount) {
        try {
            discountRepository.update(discount);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{discountId}")
    public ResponseEntity<?> deleteSeller(@PathVariable UUID discountId) {
        try {
            discountRepository.delete(discountId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }
}
