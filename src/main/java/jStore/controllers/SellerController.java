package jStore.controllers;

import jStore.models.Seller;
import jStore.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/seller")
public class SellerController {
    @Autowired
    private SellerRepository sellerRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }
}