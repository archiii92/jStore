package jStore.controllers;

import jStore.models.Buyer;
import jStore.repositories.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/api/buyer")
public class BuyerController {
    @Autowired
    private BuyerRepository buyerRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Buyer> getAllBuyers() {
        return buyerRepository.findAll();
    }
}
